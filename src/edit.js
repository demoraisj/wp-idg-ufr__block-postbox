import { useBlockProps } from '@wordpress/block-editor';
import { UFRBlockHeader, UFRSelect, UFRCheckbox, UFRInput } from 'wp-idg-ufr__block-components';
import { useState, useEffect } from '@wordpress/element';
import apiFetch from '@wordpress/api-fetch';
import { Fragment } from 'react';
import Render from "./render";
import './editor.scss';
import {v1 as uuid} from "uuid";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function edit({ attributes, setAttributes, isSelected }) {
	/**
	 * Desestruturação dos atributos do bloco registrados em block.json -> "attributes"
	 */
	const {
		postType,
		postCategory,
		postTag,
		useBorder,
		showExcerpt,
		boxID,
		postSelection,
		post,
	} = attributes;

	const [categoryOptions, setCategoryOptions] = useState([]);
	const [tagOptions, setTagOptions] = useState([]);
	const [postOptions, setPostOptions] = useState([]);

	const postTypeOptions = [
		{ label: 'Todos os posts', value: 'all' },
		{ label: 'Mais visitados', value: 'most-seen' },
		{ label: 'Por categoria', value: 'category' },
		{ label: 'Por tag', value: 'tag' },
	];

	const postSelectionOptions = [
		{ label: 'A postagem mais recente deste tipo', value: 'first' },
		{ label: 'A postagem mais antiga deste tipo', value: 'last' },
		{ label: 'Escolher uma postagem manualmente', value: 'pick' },
	];

	const sizeOptions = [
		{ label: 'Pequeno', value: 'first' },
		{ label: 'Médio', value: 'last' },
		{ label: 'Escolher uma postagem manualmente', value: 'pick' },
	];

	if (!boxID) setAttributes({ boxID: `box-${uuid()}` })

	useEffect(() => {
		const optionsToGet = [
			{
                path: '/wp/v2/categories',
                set: setCategoryOptions,
            },
            {
                path: '/wp/v2/tags',
                set: setTagOptions,
            },
        ];

		optionsToGet.forEach(({ path, set }) => {
			apiFetch({ path }).then((res) => {
				const options = res.map((item) => ({
					label: item.name,
					value: item.id,
				}));

				set(options);
			})
		});
	}, []);

	useEffect(() => {
		if (postSelection === 'pick') {
			let path = '/wp/v2/posts?_embed=&_locale=user';

			switch (postType) {
				case 'most-seen':
					path = ufrGlobals.siteUrl + '/wp-json/ufr/most-seen-posts'
					break;

				case 'category':
					path += `&categories=${postCategory}`
					break;

				case 'tag':
					path += `&tags=${postTag}`
					break;
			}

			apiFetch({ path }).then((res) => {
                const options = res.map((item) => ({
                    label: `${item.title.rendered} - ${new Date(item.date).toLocaleDateString()} - ${item.status === 'publish' ? 'Publicado' : 'Não-publicado'}`,
                    value: item,
                }));

                setPostOptions(options);

				setAttributes({ post: options[0].value });
            })
		}
	}, [postSelection]);

	useEffect(() => {
		if (!isSelected) {
			// @see assets/client.esnext.js
			window.ufrSetPostBox({
				postType,
				postCategory,
				postTag,
				useBorder,
				showExcerpt,
				boxID,
				postSelection,
				post,
			});
		}
	}, [isSelected]);

	/**
	 * Renderiza o conteúdo. Esconde as configurações do bloco quando ele não está selecionado.
	 *
	 * @param { boolean } selected
	 * @return {JSX.Element} Elemento principal condicional
	 */
	function ConditionalMainContentRender(selected) {
		return selected ? (
			// Visuzalização quando selecionado
			<div
				{...useBlockProps({
					className: 'edit block-responsive ufr-block-component',
				})}
			>
				<div className="row align-items-center">
					<div className="col config">
						<UFRBlockHeader
							title="Caixa de Postagem"
							description="Configure a aparenência abaixo. Outras configurações podem estar disponíveis no menu á direita."
						/>

						<UFRSelect
							label="Tipo de Postagens"
							options={postTypeOptions}
							value={postType}
							attr="postType"
							setter={setAttributes}
						/>

						{postType === 'category' && <UFRSelect
							label="Selecione a Categoria"
							options={categoryOptions}
							value={postCategory}
							attr="postCategory"
							setter={setAttributes}
						/>}

						{postType === 'tag' && <UFRSelect
							label="Selecione a Tag"
							options={tagOptions}
							value={postTag}
							attr="postTag"
							setter={setAttributes}
						/>}

						<UFRSelect
							label="Seleção de Postagem"
							options={postSelectionOptions}
							value={postSelection}
							attr="postSelection"
							setter={setAttributes}
						/>

						{postSelection === 'pick' && <UFRSelect
							label="Selecione um Post da Lista"
							options={postOptions}
							value={post}
							attr="post"
							setter={setAttributes}
						/>}

						<h3>Configurações Opcionais</h3>

						<UFRCheckbox
							label="Mostrar Resumo da Postagem"
							checked={showExcerpt}
							attr="showExcerpt"
							setter={setAttributes}
						/>

						<UFRCheckbox
							label="Envolver Caixa com uma Borda"
							checked={useBorder}
							attr="useBorder"
							setter={setAttributes}
						/>
					</div>
				</div>
			</div>
		) : (
			// Visuzalização quando não selecionado
			<div
				{...useBlockProps({
					className: 'show block-responsive ufr-block-component',
				})}
			>
				<div className="row">
					<div className="col-12">
						<Render attributes={attributes} />
					</div>
				</div>
			</div>
		);
	}

	return (
		<Fragment>
			{ConditionalMainContentRender(isSelected)}
		</Fragment>
	);
}

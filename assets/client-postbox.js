"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ufrSetPostBox(_x) {
  return _ufrSetPostBox.apply(this, arguments);
}

function _ufrSetPostBox() {
  _ufrSetPostBox = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(params) {
    var _embedded$wpFeatured, _embedded$wpFeatured$, _embedded$wpFeatured2, _embedded$wpFeatured3;

    var postType, postCategory, postTag, showExcerpt, boxID, postSelection, showTitle, post, getPosts, _getPosts, box, boxTitle, boxExcerpt, boxContent, boxShareBtn, boxShareFb, boxShareTt, boxShareWpp, targetPost, link, _embedded, thumbnail, excerpt, title, img, embeddedImg, alt, strip, shareLinks;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            strip = function _strip(string) {
              if (!string) return '';
              string = string.replaceAll(/(<p>|<\/p>)/gm, '');
              string = string.replaceAll(/(&lt;p>|&lt;\/p>)/gm, '');
              string = string.replaceAll(/\n/gm, ' ');
              return string;
            };

            _getPosts = function _getPosts3() {
              _getPosts = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(postType, postCategory, postTag, postSelection) {
                var postsUrl;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        postsUrl = ufrGlobals.siteUrl + "/wp-json/wp/v2/posts?_embed=&_locale=user&per_page=1";
                        _context.t0 = postType;
                        _context.next = _context.t0 === 'all' ? 4 : _context.t0 === 'most-seen' ? 14 : _context.t0 === 'category' ? 24 : _context.t0 === 'tag' ? 34 : 44;
                        break;

                      case 4:
                        _context.t1 = postSelection;
                        _context.next = _context.t1 === 'first' ? 7 : _context.t1 === 'last' ? 10 : 13;
                        break;

                      case 7:
                        _context.next = 9;
                        return fetch(postsUrl);

                      case 9:
                        return _context.abrupt("return", _context.sent.json());

                      case 10:
                        _context.next = 12;
                        return fetch(postsUrl + '&order=asc');

                      case 12:
                        return _context.abrupt("return", _context.sent.json());

                      case 13:
                        return _context.abrupt("break", 44);

                      case 14:
                        _context.t2 = postSelection;
                        _context.next = _context.t2 === 'first' ? 17 : _context.t2 === 'last' ? 20 : 23;
                        break;

                      case 17:
                        _context.next = 19;
                        return fetch(ufrGlobals.siteUrl + "/wp-json/ufr/most-seen-posts?quantity=1");

                      case 19:
                        return _context.abrupt("return", _context.sent.json());

                      case 20:
                        _context.next = 22;
                        return fetch(ufrGlobals.siteUrl + "/wp-json/ufr/most-seen-posts?quantity=1&order=asc");

                      case 22:
                        return _context.abrupt("return", _context.sent.json());

                      case 23:
                        return _context.abrupt("break", 44);

                      case 24:
                        _context.t3 = postSelection;
                        _context.next = _context.t3 === 'first' ? 27 : _context.t3 === 'last' ? 30 : 33;
                        break;

                      case 27:
                        _context.next = 29;
                        return fetch(postsUrl + "&categories=".concat(postCategory, "?quantity=1"));

                      case 29:
                        return _context.abrupt("return", _context.sent.json());

                      case 30:
                        _context.next = 32;
                        return fetch(postsUrl + "&categories=".concat(postCategory, "quantity=1&order=asc"));

                      case 32:
                        return _context.abrupt("return", _context.sent.json());

                      case 33:
                        return _context.abrupt("break", 44);

                      case 34:
                        _context.t4 = postSelection;
                        _context.next = _context.t4 === 'first' ? 37 : _context.t4 === 'last' ? 40 : 43;
                        break;

                      case 37:
                        _context.next = 39;
                        return fetch(postsUrl + "&tags=".concat(postTag, "?quantity=1"));

                      case 39:
                        return _context.abrupt("return", _context.sent.json());

                      case 40:
                        _context.next = 42;
                        return fetch(postsUrl + "&tags=".concat(postTag, "?quantity=1&order=asc"));

                      case 42:
                        return _context.abrupt("return", _context.sent.json());

                      case 43:
                        return _context.abrupt("break", 44);

                      case 44:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee);
              }));
              return _getPosts.apply(this, arguments);
            };

            getPosts = function _getPosts2(_x2, _x3, _x4, _x5) {
              return _getPosts.apply(this, arguments);
            };

            postType = params.postType, postCategory = params.postCategory, postTag = params.postTag, showExcerpt = params.showExcerpt, boxID = params.boxID, postSelection = params.postSelection, showTitle = params.showTitle, post = params.post;
            box = document.getElementById(boxID).querySelector('.box');
            boxTitle = box.querySelector('.title');
            boxExcerpt = box.querySelector('.excerpt');
            boxContent = box.querySelector('.content');
            boxShareBtn = box.querySelector('.btn_wrap');
            boxShareFb = box.querySelector('.fa-facebook-f');
            boxShareTt = box.querySelector('.fa-twitter');
            boxShareWpp = box.querySelector('.fa-whatsapp');

            if (!(post !== null && post !== void 0)) {
              _context2.next = 16;
              break;
            }

            _context2.t0 = post;
            _context2.next = 19;
            break;

          case 16:
            _context2.next = 18;
            return getPosts(postType, postCategory, postTag, postSelection);

          case 18:
            _context2.t0 = _context2.sent[0];

          case 19:
            targetPost = _context2.t0;
            link = targetPost.link, _embedded = targetPost._embedded, thumbnail = targetPost.thumbnail;
            excerpt = targetPost.excerpt, title = targetPost.title;
            img = ufrGlobals.themeUrl + '/assets/img/logo/ufr-bg.png';
            embeddedImg = _embedded ? (_embedded$wpFeatured = _embedded['wp:featuredmedia']) === null || _embedded$wpFeatured === void 0 ? void 0 : (_embedded$wpFeatured$ = _embedded$wpFeatured[0]) === null || _embedded$wpFeatured$ === void 0 ? void 0 : _embedded$wpFeatured$.source_url : undefined;
            alt = _embedded ? (_embedded$wpFeatured2 = _embedded['wp:featuredmedia']) === null || _embedded$wpFeatured2 === void 0 ? void 0 : (_embedded$wpFeatured3 = _embedded$wpFeatured2[0]) === null || _embedded$wpFeatured3 === void 0 ? void 0 : _embedded$wpFeatured3.alt_text : '';
            if (embeddedImg) img = embeddedImg;
            if (thumbnail) img = thumbnail;

            if (!(postType === 'most-seen') && !post) {
              title = title.rendered;
              excerpt = excerpt.rendered;
            }

            shareLinks = {
              facebook: "https://www.facebook.com/sharer/sharer.php?u=".concat(encodeURI(link)),
              twitter: "https://twitter.com/intent/tweet?url=".concat(encodeURI(link), "&text=").concat(encodeURI('Veja este interessante artigo: ' + title)),
              whatsapp: "https://api.whatsapp.com/send?text=".concat(encodeURI(title + '\n' + link))
            };
            box.style.backgroundImage = "url(".concat(img, ")");
            box.style.height = "".concat(box.clientWidth, "px");
            boxTitle.innerHTML = showTitle && title ? title : '';
            boxExcerpt.innerHTML = showExcerpt && excerpt ? strip(excerpt) : '';
            boxContent.style.height = "".concat(box.clientWidth - 57, "px");

            boxShareFb.onclick = function () {
              return window.open(shareLinks.facebook, '_blank');
            };

            boxShareTt.onclick = function () {
              return window.open(shareLinks.twitter, '_blank');
            };

            boxShareWpp.onclick = function () {
              return window.open(shareLinks.whatsapp, '_blank');
            };

            boxShareFb.onauxclick = function () {
              return window.open(shareLinks.facebook, '_blank');
            };

            boxShareTt.onauxclick = function () {
              return window.open(shareLinks.twitter, '_blank');
            };

            boxShareWpp.onauxclick = function () {
              return window.open(shareLinks.whatsapp, '_blank');
            };

          case 40:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _ufrSetPostBox.apply(this, arguments);
}

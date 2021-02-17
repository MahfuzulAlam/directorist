/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/src/js/components/template-scripts/add-listing.js":
/*!******************************************************************!*\
  !*** ./assets/src/js/components/template-scripts/add-listing.js ***!
  \******************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_component_add_listing_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../scss/component/add-listing.scss */ "./assets/src/scss/component/add-listing.scss");
/* harmony import */ var _scss_component_add_listing_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_component_add_listing_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _add_listing_google_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-listing/google-map */ "./assets/src/js/components/template-scripts/add-listing/google-map.js");
/* harmony import */ var _add_listing_google_map__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_add_listing_google_map__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _add_listing_openstreet_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-listing/openstreet-map */ "./assets/src/js/components/template-scripts/add-listing/openstreet-map.js");
/* harmony import */ var _add_listing_openstreet_map__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_add_listing_openstreet_map__WEBPACK_IMPORTED_MODULE_2__);
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }




/* eslint-disable */

var $ = jQuery;
var localized_data = atbdp_public_data.add_listing_data;
/* Show and hide manual coordinate input field */

if (!$('input#manual_coordinate').is(':checked')) {
  $('.directorist-map-coordinates').hide();
}

$('#manual_coordinate').on('click', function (e) {
  if ($('input#manual_coordinate').is(':checked')) {
    $('.directorist-map-coordinates').show();
  } else {
    $('.directorist-map-coordinates').hide();
  }
}); // enable sorting if only the container has any social or skill field

var $s_wrap = $('#social_info_sortable_container'); // cache it

/* if (window.outerWidth > 1700) {
        if ($s_wrap.length) {
                $s_wrap.sortable({
                        axis: 'y',
                        opacity: '0.7',
                });
        }
} */
// SOCIAL SECTION
// Rearrange the IDS and Add new social field

$('#addNewSocial').on('click', function (e) {
  var currentItems = $('.directorist-form-social-fields').length;
  var ID = "id=".concat(currentItems); // eg. 'id=3'

  var iconBindingElement = jQuery('#addNewSocial'); // arrange names ID in order before adding new elements

  $('.directorist-form-social-fields').each(function (index, element) {
    var e = $(element);
    e.attr('id', "socialID-".concat(index));
    e.find('select').attr('name', "social[".concat(index, "][id]"));
    e.find('.atbdp_social_input').attr('name', "social[".concat(index, "][url]"));
    e.find('.directorist-form-social-fields__remove').attr('data-id', index);
  }); // now add the new elements. we could do it here without using ajax but it would require more markup here.

  /* atbdp_do_ajax(iconBindingElement, 'atbdp_social_info_handler', ID, function (data) {
          $s_wrap.after(data);
  }); */
}); // remove the social field and then reset the ids while maintaining position

$(document).on('click', '.directorist-form-social-fields__remove', function (e) {
  var id = $(this).data('id');
  var elementToRemove = $("div#socialID-".concat(id));
  /* Act on the event */

  swal({
    title: localized_data.i18n_text.confirmation_text,
    text: localized_data.i18n_text.ask_conf_sl_lnk_del_txt,
    type: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#DD6B55',
    confirmButtonText: localized_data.i18n_text.confirm_delete,
    closeOnConfirm: false
  }, function (isConfirm) {
    if (isConfirm) {
      // user has confirmed, no remove the item and reset the ids
      elementToRemove.slideUp('fast', function () {
        elementToRemove.remove(); // reorder the index

        $('.directorist-form-social-fields').each(function (index, element) {
          var e = $(element);
          e.attr('id', "socialID-".concat(index));
          e.find('select').attr('name', "social[".concat(index, "][id]"));
          e.find('.atbdp_social_input').attr('name', "social[".concat(index, "][url]"));
          e.find('.directorist-form-social-fields__remove').attr('data-id', index);
        });
      }); // show success message

      swal({
        title: localized_data.i18n_text.deleted,
        // text: "Item has been deleted.",
        type: 'success',
        timer: 200,
        showConfirmButton: false
      });
    }
  });
});
/* This function handles all ajax request */

function atbdp_do_ajax(ElementToShowLoadingIconAfter, ActionName, arg, CallBackHandler) {
  var data;
  if (ActionName) data = "action=".concat(ActionName);
  if (arg) data = "".concat(arg, "&action=").concat(ActionName);
  if (arg && !ActionName) data = arg; // data = data ;

  var n = data.search(localized_data.nonceName);

  if (n < 0) {
    data = "".concat(data, "&").concat(localized_data.nonceName, "=").concat(localized_data.nonce);
  }

  jQuery.ajax({
    type: 'post',
    url: localized_data.ajaxurl,
    data: data,
    beforeSend: function beforeSend() {
      jQuery("<span class='atbdp_ajax_loading'></span>").insertAfter(ElementToShowLoadingIconAfter);
    },
    success: function success(data) {
      jQuery('.atbdp_ajax_loading').remove();
      CallBackHandler(data);
    }
  });
} // Select2 js code
// Location


var createLoc = localized_data.create_new_loc;

if (createLoc) {
  $("#at_bizd_dir-location").select2({
    placeholder: localized_data.i18n_text.location_selection,
    tags: true,
    maximumSelectionLength: localized_data.i18n_text.max_location_creation,
    language: {
      maximumSelected: function maximumSelected() {
        return localized_data.i18n_text.max_location_msg;
      }
    },
    tokenSeparators: [","]
  });
} else {
  $("#at_biz_dir-location").select2({
    placeholder: localized_data.i18n_text.location_selection,
    allowClear: true,
    tags: false,
    maximumSelectionLength: localized_data.i18n_text.max_location_creation,
    tokenSeparators: [","]
  });
} // Tags


var createTag = localized_data.create_new_tag;

if (createTag) {
  $('#at_biz_dir-tags').select2({
    placeholder: localized_data.i18n_text.tag_selection,
    tags: true,
    tokenSeparators: [',']
  });
} else {
  $('#at_biz_dir-tags').select2({
    placeholder: localized_data.i18n_text.tag_selection,
    allowClear: true,
    tokenSeparators: [',']
  });
}

$('#at_biz_dir-categories').select2({
  placeholder: localized_data.i18n_text.cat_placeholder,
  allowClear: true
}); // Custom Image uploader for listing image (multiple)
// price range

$('#price_range').hide();
var is_checked = $('#atbd_listing_pricing').val();

if (is_checked === 'range') {
  $('#price').hide();
  $('#price_range').show();
}

$('.atbd_pricing_options label').on('click', function () {
  var $this = $(this);
  $this.children('input[type=checkbox]').prop('checked') == true ? $("#".concat($this.data('option'))).show() : $("#".concat($this.data('option'))).hide();
  var $sibling = $this.siblings('label');
  $sibling.children('input[type=checkbox]').prop('checked', false);
  $("#".concat($sibling.data('option'))).hide();
});
var has_tagline = $('#has_tagline').val();
var has_excerpt = $('#has_excerpt').val();

if (has_excerpt && has_tagline) {
  $('.atbd_tagline_moto_field').fadeIn();
} else {
  $('.atbd_tagline_moto_field').fadeOut();
}

$('#atbd_optional_field_check').on('change', function () {
  $(this).is(':checked') ? $('.atbd_tagline_moto_field').fadeIn() : $('.atbd_tagline_moto_field').fadeOut();
}); // it shows the hidden term and conditions

$('#listing_t_c').on('click', function (e) {
  e.preventDefault();
  $('#tc_container').toggleClass('active');
});
$(function () {
  $('#color_code2').wpColorPicker().empty();
}); // Load custom fields of the selected category in the custom post type "atbdp_listings"

$('#at_biz_dir-categories').on('change', function () {
  var directory_type = qs.listing_type ? qs.listing_type : $('input[name="directory_type"]').val();
  var length = $('#at_biz_dir-categories option:selected');
  var id = [];
  length.each(function (el, index) {
    id.push($(index).val());
  });
  var data = {
    action: 'atbdp_custom_fields_listings',
    post_id: $('input[name="listing_id"]').val(),
    term_id: id,
    directory_type: directory_type
  };
  $.post(localized_data.ajaxurl, data, function (response) {
    if (response) {
      $('.atbdp_category_custom_fields').empty().append(response);

      function atbdp_tooltip() {
        var atbd_tooltip = document.querySelectorAll('.atbd_tooltip');
        atbd_tooltip.forEach(function (el) {
          if (el.getAttribute('aria-label') !== " ") {
            document.body.addEventListener('mouseover', function (e) {
              for (var target = e.target; target && target != this; target = target.parentNode) {
                if (target.matches('.atbd_tooltip')) {
                  el.classList.add('atbd_tooltip_active');
                }
              }
            }, false);
          }
        });
      }

      atbdp_tooltip();
    } else {
      $('.atbdp_category_custom_fields').empty();
    }
  });
}); // Load custom fields of the selected category in the custom post type "atbdp_listings"

$(document).ready(function () {
  var directory_type = qs.listing_type ? qs.listing_type : $('input[name="directory_type"]').val();
  var length = $('#at_biz_dir-categories option:selected');
  var id = [];
  length.each(function (el, index) {
    id.push($(index).val());
  });
  var data = {
    action: 'atbdp_custom_fields_listings',
    post_id: $('input[name="listing_id"]').val(),
    term_id: id,
    directory_type: directory_type
  };
  $.post(localized_data.ajaxurl, data, function (response) {
    if (response) {
      $('.atbdp_category_custom_fields').empty().append(response);

      function atbdp_tooltip() {
        var atbd_tooltip = document.querySelectorAll('.atbd_tooltip');
        atbd_tooltip.forEach(function (el) {
          if (el.getAttribute('aria-label') !== " ") {
            document.body.addEventListener('mouseover', function (e) {
              for (var target = e.target; target && target != this; target = target.parentNode) {
                if (target.matches('.atbd_tooltip')) {
                  el.classList.add('atbd_tooltip_active');
                }
              }
            }, false);
          }
        });
      }

      atbdp_tooltip();
    }
  });
});

function atbdp_is_checked(name) {
  var is_checked = $("input[name=\"".concat(name, "\"]")).is(':checked');

  if (is_checked) {
    return '1';
  }

  return '';
}

function setup_form_data(form_data, type, field) {
  //normal input
  if (type === 'hidden' || type === 'text' || type === 'number' || type === 'tel' || type === 'email' || type === 'date' || type === 'time' || type === 'url') {
    form_data.append(field.name, field.value);
  } //textarea


  if ('textarea' === type) {
    var value = $('#' + field.name + '_ifr').length ? tinymce.get(field.name).getContent() : atbdp_element_value('textarea[name="' + field.name + '"]');
    form_data.append(field.name, value);
  } //radio


  if ('radio' === type) {
    form_data.append(field.name, atbdp_element_value('input[name="' + field.name + '"]:checked'));
  } // checkbox


  if ('checkbox' === type) {
    var values = [];
    var new_field = $('input[name^="' + field.name + '"]:checked');

    if (new_field.length > 1) {
      new_field.each(function () {
        var value = $(this).val();
        values.push(value);
      });
      form_data.append(field.name, values);
    } else {
      form_data.append(field.name, atbdp_element_value('input[name="' + field.name + '"]:checked'));
    }
  } //select


  if ('select-one' === type) {
    form_data.append(field.name, atbdp_element_value('select[name="' + field.name + '"]'));
  }
}

function atbdp_element_value(element) {
  var field = $(element);

  if (field.length) {
    return field.val();
  }

  return '';
}

var qs = function (a) {
  if (a == '') return {};
  var b = {};

  for (var i = 0; i < a.length; ++i) {
    var p = a[i].split('=', 2);
    if (p.length == 1) b[p[0]] = '';else b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, ' '));
  }

  return b;
}(window.location.search.substr(1).split('&'));

var uploaders = localized_data.media_uploader;
var mediaUploaders = [];

if (uploaders) {
  var i = 0;

  var _iterator = _createForOfIteratorHelper(uploaders),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var uploader = _step.value;

      if ($('#' + uploader['element_id']).length) {
        var media_uploader = new EzMediaUploader({
          containerID: uploader['element_id']
        });
        mediaUploaders.push({
          media_uploader: media_uploader,
          uploaders_data: uploader
        });
        mediaUploaders[i].media_uploader.init();
        i++;
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}

var formID = $('#directorist-add-listing-form');
var on_processing = false;
var has_media = true;
$('body').on('submit', formID, function (e) {
  e.preventDefault();
  var error_count = 0;
  var err_log = {}; // if ($('#atbdp_front_media_wrap:visible').length == 0) {
  //         has_media = false;
  // }

  if (on_processing) {
    $('.directorist-form-submit__btn').attr('disabled', true);
    return;
  }

  var form_data = new FormData();
  var field_list = [];
  var field_list2 = [];
  $('.directorist-form-submit__btn').addClass('atbd_loading');
  form_data.append('action', 'add_listing_action');
  var fieldValuePairs = $('#directorist-add-listing-form').serializeArray();
  $.each(fieldValuePairs, function (index, fieldValuePair) {
    var field = document.getElementsByName(fieldValuePair.name)[0];
    var type = field.type;
    field_list.push({
      name: field.name
    }); //array fields

    if (field.name.indexOf('[') > -1) {
      var field_name = field.name.substr(0, field.name.indexOf("["));
      var ele = $("[name^='" + field_name + "']"); // process tax input

      if ('tax_input' !== field_name) {
        if (ele.length && ele.length > 1) {
          ele.each(function (index, value) {
            var field_type = $(this).attr('type');
            var name = $(this).attr('name');

            if (field_type === 'radio') {
              if ($(this).is(':checked')) {
                form_data.append(name, $(this).val());
              }
            } else if (field_type === 'checkbox') {
              var new_field = $('input[name^="' + name + '"]:checked');

              if (new_field.length > 1) {
                new_field.each(function () {
                  var name = $(this).attr('name');
                  var value = $(this).val();
                  form_data.append(name, value);
                });
              } else {
                var name = new_field.attr('name');
                var value = new_field.val();
                form_data.append(name, value);
              }
            } else {
              var name = $(this).attr('name');
              var value = $(this).val();

              if (!value) {
                value = $(this).attr('data-time');
              }

              form_data.append(name, value);
            }
          });
        } else {
          var name = ele.attr('name');

          var _value = ele.val();

          form_data.append(name, _value);
        }
      }
    } else {
      //  field_list2.push({ nam: name, val: value, field: field, type: type})
      setup_form_data(form_data, type, field);
    }
  }); // console.log( field_list2 );
  // return;
  // images

  if (mediaUploaders.length) {
    var _iterator2 = _createForOfIteratorHelper(mediaUploaders),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var uploader = _step2.value;

        if (uploader.media_uploader && has_media) {
          var hasValidFiles = uploader.media_uploader.hasValidFiles();

          if (hasValidFiles) {
            // files
            var files = uploader.media_uploader.getTheFiles();

            if (files) {
              for (var i = 0; i < files.length; i++) {
                form_data.append(uploader.uploaders_data['meta_name'] + '[]', files[i]);
              }
            }

            var files_meta = uploader.media_uploader.getFilesMeta();

            if (files_meta) {
              for (var i = 0; i < files_meta.length; i++) {
                var elm = files_meta[i];

                for (var key in elm) {
                  form_data.append("".concat(uploader.uploaders_data['files_meta_name'], "[").concat(i, "][").concat(key, "]"), elm[key]);
                }
              }
            }
          } else {
            $('.directorist-form-submit__btn').removeClass('atbd_loading');
            err_log.listing_gallery = {
              msg: uploader.uploaders_data['error_msg']
            };
            error_count++;
            scrollToEl('#' + uploader.uploaders_data['element_id']);
          }
        }
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  } // locations


  var locaitons = $('#at_biz_dir-location').val();

  if (Array.isArray(locaitons) && locaitons.length) {
    for (var key in locaitons) {
      var value = locaitons[key];
      form_data.append('tax_input[at_biz_dir-location][]', value);
    }
  }

  if (typeof locaitons === 'string') {
    form_data.append('tax_input[at_biz_dir-location][]', locaitons);
  } // tags


  var tags = $('#at_biz_dir-tags').val();

  if (tags) {
    for (var key in tags) {
      var value = tags[key];
      form_data.append('tax_input[at_biz_dir-tags][]', value);
    }
  } // categories


  var categories = $('#at_biz_dir-categories').val();

  if (Array.isArray(categories) && categories.length) {
    for (var key in categories) {
      var value = categories[key];
      form_data.append('tax_input[at_biz_dir-category][]', value);
    }
  }

  if (typeof categories === 'string') {
    form_data.append('tax_input[at_biz_dir-category][]', categories);
  }

  var directory_type = qs.directory_type ? qs.directory_type : $('input[name="directory_type"]').val();
  form_data.append('directory_type', directory_type);
  form_data.append('plan_id', qs.plan);

  if (error_count) {
    on_processing = false;
    $('.directorist-form-submit__btn').attr('disabled', false);
    console.log('Form has invalid data');
    console.log(error_count, err_log);
    return;
  } // on_processing = true;
  // $('.directorist-form-submit__btn').attr('disabled', true);


  $.ajax({
    method: 'POST',
    processData: false,
    contentType: false,
    url: localized_data.ajaxurl,
    data: form_data,
    success: function success(response) {
      // console.log( response );
      // return;
      // show the error notice
      $('.directorist-form-submit__btn').attr('disabled', false);
      var is_pending = response.pending ? '&' : '?';

      if (response.error === true) {
        $('#listing_notifier').show().html("<span>".concat(response.error_msg, "</span>"));
        $('.directorist-form-submit__btn').removeClass('atbd_loading');
        on_processing = false;

        if (response.quick_login_required) {
          var email = response.email;
          console.log('Show login form');
          var modal = $('#atbdp-quick-login');
          modal.addClass('show');
          modal.find('.atbdp-email-label').html(email); // Show Alert

          var alert = '<div class="atbdp-alert atbdp-mb-10">' + response.error_msg + '</div>';
          modal.find('.atbdp-modal-alerts-area').html(alert);
        }
      } else {
        // preview on and no need to redirect to payment
        if (response.preview_mode === true && response.need_payment !== true) {
          if (response.edited_listing !== true) {
            $('#listing_notifier').show().html("<span class=\"atbdp_success\">".concat(response.success_msg, "</span>"));
            window.location.href = "".concat(response.preview_url, "?preview=1&redirect=").concat(response.redirect_url);
          } else {
            $('#listing_notifier').show().html("<span class=\"atbdp_success\">".concat(response.success_msg, "</span>"));

            if (qs.redirect) {
              var is_pending = '?';
              window.location.href = "".concat(response.preview_url + is_pending, "post_id=").concat(response.id, "&preview=1&payment=1&edited=1&redirect=").concat(qs.redirect);
            } else {
              window.location.href = "".concat(response.preview_url, "?preview=1&edited=1&redirect=").concat(response.redirect_url);
            }
          } // preview mode active and need payment

        } else if (response.preview_mode === true && response.need_payment === true) {
          window.location.href = "".concat(response.preview_url, "?preview=1&payment=1&redirect=").concat(response.redirect_url);
        } else {
          var is_edited = response.edited_listing ? "".concat(is_pending, "listing_id=").concat(response.id, "&edited=1") : '';

          if (response.need_payment === true) {
            $('#listing_notifier').show().html("<span class=\"atbdp_success\">".concat(response.success_msg, "</span>"));
            window.location.href = response.redirect_url;
          } else {
            $('#listing_notifier').show().html("<span class=\"atbdp_success\">".concat(response.success_msg, "</span>"));
            window.location.href = response.redirect_url + is_edited;
          }
        }
      }
    },
    error: function error(_error) {
      on_processing = false;
      $('.directorist-form-submit__btn').attr('disabled', false);
      $('.directorist-form-submit__btn').removeClass('atbd_loading');
      console.log(_error);
    }
  });
}); // scrollToEl

function scrollToEl(el) {// const element = typeof el === 'string' ? el : '';
  // let scroll_top = $(element).offset().top - 50;
  // scroll_top = scroll_top < 0 ? 0 : scroll_top;
  // $('html, body').animate(
  //         {
  //                 scrollTop: scroll_top,
  //         },
  //         800
  // );
}

/***/ }),

/***/ "./assets/src/js/components/template-scripts/add-listing/google-map.js":
/*!*****************************************************************************!*\
  !*** ./assets/src/js/components/template-scripts/add-listing/google-map.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function ($) {
  $(document).ready(function () {
    // initialize all vars here to avoid hoisting related misunderstanding.
    var placeSearch;
    var map;
    var autocomplete;
    var address_input;
    var markers;
    var info_window;
    var $manual_lat;
    var $manual_lng;
    var saved_lat_lng;
    var info_content; // Localized Data

    var loc_default_latitude = parseFloat(localized_data.default_latitude);
    var loc_default_longitude = parseFloat(localized_data.default_longitude);
    var loc_manual_lat = parseFloat(localized_data.manual_lat);
    var loc_manual_lng = parseFloat(localized_data.manual_lng);
    var loc_map_zoom_level = parseInt(localized_data.map_zoom_level);
    loc_manual_lat = isNaN(loc_manual_lat) ? loc_default_latitude : loc_manual_lat;
    loc_manual_lng = isNaN(loc_manual_lng) ? loc_default_longitude : loc_manual_lng;
    $manual_lat = $('#manual_lat');
    $manual_lng = $('#manual_lng');
    saved_lat_lng = {
      lat: loc_manual_lat,
      lng: loc_manual_lng
    }; // default is London city

    info_content = localized_data.info_content, markers = [], // initialize the array to keep track all the marker
    info_window = new google.maps.InfoWindow({
      content: info_content,
      maxWidth: 400
    });
    address_input = document.getElementById('address');
    address_input.addEventListener('focus', geolocate); // this function will work on sites that uses SSL, it applies to Chrome especially, other browsers may allow location sharing without securing.

    function geolocate() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
          var geolocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
          var circle = new google.maps.Circle({
            center: geolocation,
            radius: position.coords.accuracy
          });
          autocomplete.setBounds(circle.getBounds());
        });
      }
    }

    function initAutocomplete() {
      // Create the autocomplete object, restricting the search to geographical
      // location types.
      autocomplete = new google.maps.places.Autocomplete(address_input, {
        types: []
      }); // When the user selects an address from the dropdown, populate the necessary input fields and draw a marker

      autocomplete.addListener('place_changed', fillInAddress);
    }

    function fillInAddress() {
      // Get the place details from the autocomplete object.
      var place = autocomplete.getPlace(); // set the value of input field to save them to the database

      $manual_lat.val(place.geometry.location.lat());
      $manual_lng.val(place.geometry.location.lng());
      map.setCenter(place.geometry.location);
      var marker = new google.maps.Marker({
        map: map,
        position: place.geometry.location
      }); // marker.addListener('click', function () {
      //     info_window.open(map, marker);
      // });
      // add the marker to the markers array to keep track of it, so that we can show/hide/delete them all later.

      markers.push(marker);
    }

    initAutocomplete(); // start google map place auto complete API call

    function initMap() {
      /* Create new map instance */
      map = new google.maps.Map(document.getElementById('gmap'), {
        zoom: loc_map_zoom_level,
        center: saved_lat_lng
      });
      var marker = new google.maps.Marker({
        map: map,
        position: saved_lat_lng,
        draggable: true,
        title: localized_data.marker_title
      }); // marker.addListener('click', function () {
      //     info_window.open(map, marker);
      // });
      // add the marker to the markers array to keep track of it, so that we can show/hide/delete them all later.

      markers.push(marker); // create a Geocode instance

      var geocoder = new google.maps.Geocoder();
      document.getElementById('generate_admin_map').addEventListener('click', function (e) {
        e.preventDefault();
        geocodeAddress(geocoder, map);
      }); // This event listener calls addMarker() when the map is clicked.

      google.maps.event.addListener(map, 'click', function (event) {
        deleteMarker(); // at first remove previous marker and then set new marker;
        // set the value of input field to save them to the database

        $manual_lat.val(event.latLng.lat());
        $manual_lng.val(event.latLng.lng()); // add the marker to the given map.

        addMarker(event.latLng, map);
      }); // This event listener update the lat long field of the form so that we can add the lat long to the database when the MARKER is drag.

      google.maps.event.addListener(marker, 'dragend', function (event) {
        // set the value of input field to save them to the database
        $manual_lat.val(event.latLng.lat());
        $manual_lng.val(event.latLng.lng());
      });
    }
    /*
     * Geocode and address using google map javascript api and then populate the input fields for storing lat and long
     * */


    function geocodeAddress(geocoder, resultsMap) {
      var address = address_input.value;
      var lat = document.getElementById('manual_lat').value;
      var lng = document.getElementById('manual_lng').value;
      var latLng = new google.maps.LatLng(lat, lng);
      var opt = {
        location: latLng,
        address: address
      };
      geocoder.geocode(opt, function (results, status) {
        if (status === 'OK') {
          // set the value of input field to save them to the database
          $manual_lat.val(results[0].geometry.location.lat());
          $manual_lng.val(results[0].geometry.location.lng());
          resultsMap.setCenter(results[0].geometry.location);
          var marker = new google.maps.Marker({
            map: resultsMap,
            position: results[0].geometry.location
          }); // marker.addListener('click', function () {
          //     info_window.open(map, marker);
          // });

          deleteMarker(); // add the marker to the markers array to keep track of it, so that we can show/hide/delete them all later.

          markers.push(marker);
        } else {
          alert(localized_data.geocode_error_msg + status);
        }
      });
    }

    initMap(); // adding features of creating marker manually on the map on add listing page.

    /* var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var labelIndex = 0; */
    // Adds a marker to the map.

    function addMarker(location, map) {
      // Add the marker at the clicked location, and add the next-available label
      // from the array of alphabetical characters.
      var marker = new google.maps.Marker({
        position: location,

        /* label: labels[labelIndex++ % labels.length], */
        draggable: true,
        title: localized_data.marker_title,
        map: map
      }); // marker.addListener('click', function () {
      //     info_window.open(map, marker);
      // });
      // add the marker to the markers array to keep track of it, so that we can show/hide/delete them all later.

      markers.push(marker);
    } // Delete Marker


    $('#delete_marker').on('click', function (e) {
      e.preventDefault();
      deleteMarker();
    });

    function deleteMarker() {
      for (var i = 0; i < markers.length; i++) {
        markers[i].setMap(null);
      }

      markers = [];
    }
  });
})(jQuery);

/***/ }),

/***/ "./assets/src/js/components/template-scripts/add-listing/openstreet-map.js":
/*!*********************************************************************************!*\
  !*** ./assets/src/js/components/template-scripts/add-listing/openstreet-map.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

;

(function ($) {
  $(document).ready(function () {
    // Localized Data
    var loc_default_latitude = parseFloat(localized_data.default_latitude);
    var loc_default_longitude = parseFloat(localized_data.default_longitude);
    var loc_manual_lat = parseFloat(localized_data.manual_lat);
    var loc_manual_lng = parseFloat(localized_data.manual_lng);
    var loc_map_zoom_level = parseInt(localized_data.map_zoom_level);
    var loc_map_icon = localized_data.map_icon;
    loc_manual_lat = isNaN(loc_manual_lat) ? loc_default_latitude : loc_manual_lat;
    loc_manual_lng = isNaN(loc_manual_lng) ? loc_default_longitude : loc_manual_lng;

    function mapLeaflet(lat, lon) {
      // @todo @kowsar / remove later. fix js error
      if ($("#gmap").length == 0) {
        return;
      }

      var fontAwesomeIcon = L.icon({
        iconUrl: loc_map_icon,
        iconSize: [20, 25]
      });
      var mymap = L.map('gmap').setView([lat, lon], loc_map_zoom_level);
      L.marker([lat, lon], {
        icon: fontAwesomeIcon,
        draggable: true
      }).addTo(mymap).addTo(mymap).on("drag", function (e) {
        var marker = e.target;
        var position = marker.getLatLng();
        $('#manual_lat').val(position.lat);
        $('#manual_lng').val(position.lng);
        $.ajax({
          url: "https://nominatim.openstreetmap.org/reverse?format=json&lon=".concat(position.lng, "&lat=").concat(position.lat),
          type: 'POST',
          data: {},
          success: function success(data) {
            $('#address').val(data.display_name);
          }
        });
      });
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(mymap);
    }

    $('#address').on('keyup', function (event) {
      event.preventDefault();

      if (event.keyCode !== 40 && event.keyCode !== 38) {
        var search = $('#address').val();
        $('#result').css({
          'display': 'block'
        });

        if (search === "") {
          $('#result').css({
            'display': 'none'
          });
        }

        var res = "";
        $.ajax({
          url: "https://nominatim.openstreetmap.org/?q=%27+".concat(search, "+%27&format=json"),
          type: 'POST',
          data: {},
          success: function success(data) {
            //console.log(data);
            for (var i = 0; i < data.length; i++) {
              res += "<li><a href=\"#\" data-lat=".concat(data[i].lat, " data-lon=").concat(data[i].lon, ">").concat(data[i].display_name, "</a></li>");
            }

            $('#result ul').html(res);
          }
        });
      }
    });
    var lat = loc_manual_lat,
        lon = loc_manual_lng;
    mapLeaflet(lat, lon);
    $('body').on('click', '#result ul li a', function (event) {
      document.getElementById('osm').innerHTML = "<div id='gmap'></div>";
      event.preventDefault();
      var text = $(this).text(),
          lat = $(this).data('lat'),
          lon = $(this).data('lon');
      $('#manual_lat').val(lat);
      $('#manual_lng').val(lon);
      $('#address').val(text);
      $('#result').css({
        'display': 'none'
      });
      mapLeaflet(lat, lon);
    });
    $('body').on('click', '#generate_admin_map', function (event) {
      event.preventDefault();
      document.getElementById('osm').innerHTML = "<div id='gmap'></div>";
      mapLeaflet($('#manual_lat').val(), $('#manual_lng').val());
    }); // Popup controller by keyboard

    var index = 0;
    $('#address').on('keyup', function (event) {
      event.preventDefault();
      var length = $('#directorist.atbd_wrapper #result ul li a').length;

      if (event.keyCode === 40) {
        index++;

        if (index > length) {
          index = 0;
        }
      } else if (event.keyCode === 38) {
        index--;

        if (index < 0) {
          index = length;
        }

        ;
      }

      if ($('#directorist.atbd_wrapper #result ul li a').length > 0) {
        $('#directorist.atbd_wrapper #result ul li a').removeClass('active');
        $($('#directorist.atbd_wrapper #result ul li a')[index]).addClass('active');

        if (event.keyCode === 13) {
          $($('#directorist.atbd_wrapper #result ul li a')[index]).click();
          event.preventDefault();
          index = 0;
          return false;
        }
      }

      ;
    });
    $('#post').on('submit', function (event) {
      event.preventDefault();
      return false;
    });
  });
})(jQuery);

/***/ }),

/***/ "./assets/src/scss/component/add-listing.scss":
/*!****************************************************!*\
  !*** ./assets/src/scss/component/add-listing.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 4:
/*!************************************************************************!*\
  !*** multi ./assets/src/js/components/template-scripts/add-listing.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./assets/src/js/components/template-scripts/add-listing.js */"./assets/src/js/components/template-scripts/add-listing.js");


/***/ })

/******/ });
//# sourceMappingURL=add-listing.js.map
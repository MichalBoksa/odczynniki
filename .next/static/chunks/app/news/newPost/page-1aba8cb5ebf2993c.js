(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[522],{

/***/ 48141:
/***/ (function() {

/* (ignored) */

/***/ }),

/***/ 65781:
/***/ (function() {

/* (ignored) */

/***/ }),

/***/ 24096:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(50229);


/***/ }),

/***/ 13716:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

const utils = __webpack_require__(97895);
const {call_analysis_api} = __webpack_require__(32824);

function analyze_uri(uri, analysis_type, options = {}, callback) {
  const params = {
    uri,
    analysis_type
  }

  if (analysis_type === 'custom') {
    if (!('model_name' in options) || !('model_version' in options)) {
      throw new Error('Setting analysis_type to "custom" requires additional params: "model_name" and "model_version"');
    }
    params.parameters = {
      custom: {
        model_name: options.model_name,
        model_version: options.model_version
      }
    }
  }

  let api_uri = ['analysis', 'analyze', 'uri'];
  return call_analysis_api('POST', api_uri, params, callback, options);
}

module.exports = {
  analyze_uri
};


/***/ }),

/***/ 24671:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

const utils = __webpack_require__(97895);
const call_api = __webpack_require__(66834);

const {
  extend,
  pickOnlyExistingValues
} = utils;

const TRANSFORMATIONS_URI = "transformations";

function deleteResourcesParams(options, params = {}) {
  return extend(params, pickOnlyExistingValues(options, "keep_original", "invalidate", "next_cursor", "transformations"));
}

function getResourceParams(options) {
  return pickOnlyExistingValues(options, "exif", "cinemagraph_analysis", "colors", "derived_next_cursor", "faces", "image_metadata", "media_metadata", "pages", "phash", "coordinates", "max_results", "versions", "accessibility_analysis", 'related', 'related_next_cursor');
}

exports.ping = function ping(callback, options = {}) {
  return call_api("get", ["ping"], {}, callback, options);
};

exports.usage = function usage(callback, options = {}) {
  const uri = ["usage"];

  if (options.date) {
    uri.push(options.date);
  }

  return call_api("get", uri, {}, callback, options);
};

exports.resource_types = function resource_types(callback, options = {}) {
  return call_api("get", ["resources"], {}, callback, options);
};

exports.resources = function resources(callback, options = {}) {
  let resource_type, type, uri;
  resource_type = options.resource_type || "image";
  type = options.type;
  uri = ["resources", resource_type];
  if (type != null) {
    uri.push(type);
  }
  if ((options.start_at != null) && Object.prototype.toString.call(options.start_at) === '[object Date]') {
    options.start_at = options.start_at.toUTCString();
  }
  return call_api("get", uri, pickOnlyExistingValues(options, "next_cursor", "max_results", "prefix", "tags", "context", "direction", "moderations", "start_at", "metadata", "fields"), callback, options);
};

exports.resources_by_tag = function resources_by_tag(tag, callback, options = {}) {
  let resource_type, uri;
  resource_type = options.resource_type || "image";
  uri = ["resources", resource_type, "tags", tag];
  return call_api("get", uri, pickOnlyExistingValues(options, "next_cursor", "max_results", "tags", "context", "direction", "moderations", "metadata", "fields"), callback, options);
};

exports.resources_by_context = function resources_by_context(key, value, callback, options = {}) {
  let params, resource_type, uri;
  resource_type = options.resource_type || "image";
  uri = ["resources", resource_type, "context"];
  params = pickOnlyExistingValues(options, "next_cursor", "max_results", "tags", "context", "direction", "moderations", "metadata", "fields");
  params.key = key;
  if (value != null) {
    params.value = value;
  }
  return call_api("get", uri, params, callback, options);
};

exports.resources_by_moderation = function resources_by_moderation(kind, status, callback, options = {}) {
  let resource_type, uri;
  resource_type = options.resource_type || "image";
  uri = ["resources", resource_type, "moderations", kind, status];
  return call_api("get", uri, pickOnlyExistingValues(options, "next_cursor", "max_results", "tags", "context", "direction", "moderations", "metadata", "fields"), callback, options);
};

exports.resource_by_asset_id = function resource_by_asset_id(asset_id, callback, options = {}) {
  const uri = ["resources", asset_id];
  return call_api("get", uri, getResourceParams(options), callback, options);
}

exports.resources_by_asset_folder = function resources_by_asset_folder(asset_folder, callback, options = {}) {
  let params, uri;
  uri = ["resources", 'by_asset_folder'];
  params = pickOnlyExistingValues(options, "next_cursor", "max_results", "tags", "context", "moderations", "fields");
  params.asset_folder = asset_folder;
  return call_api("get", uri, params, callback, options);
};

exports.resources_by_asset_ids = function resources_by_asset_ids(asset_ids, callback, options = {}) {
  let params, uri;
  uri = ["resources", "by_asset_ids"];
  params = pickOnlyExistingValues(options, "tags", "context", "moderations", "fields");
  params["asset_ids[]"] = asset_ids;
  return call_api("get", uri, params, callback, options);
}

exports.resources_by_ids = function resources_by_ids(public_ids, callback, options = {}) {
  let params, resource_type, type, uri;
  resource_type = options.resource_type || "image";
  type = options.type || "upload";
  uri = ["resources", resource_type, type];
  params = pickOnlyExistingValues(options, "tags", "context", "moderations", "fields");
  params["public_ids[]"] = public_ids;
  return call_api("get", uri, params, callback, options);
};

exports.resource = function resource(public_id, callback, options = {}) {
  let resource_type, type, uri;
  resource_type = options.resource_type || "image";
  type = options.type || "upload";
  uri = ["resources", resource_type, type, public_id];
  return call_api("get", uri, getResourceParams(options), callback, options);
};

exports.restore = function restore(public_ids, callback, options = {}) {
  options.content_type = 'json';
  let resource_type, type, uri;
  resource_type = options.resource_type || "image";
  type = options.type || "upload";
  uri = ["resources", resource_type, type, "restore"];
  return call_api("post", uri, {
    public_ids: public_ids,
    versions: options.versions
  }, callback, options);
};

exports.update = function update(public_id, callback, options = {}) {
  let params, resource_type, type, uri;
  resource_type = options.resource_type || "image";
  type = options.type || "upload";
  uri = ["resources", resource_type, type, public_id];
  params = utils.updateable_resource_params(options);
  if (options.moderation_status != null) {
    params.moderation_status = options.moderation_status;
  }
  if (options.clear_invalid != null) {
    params.clear_invalid = options.clear_invalid;
  }
  return call_api("post", uri, params, callback, options);
};

exports.delete_resources = function delete_resources(public_ids, callback, options = {}) {
  let resource_type, type, uri;
  resource_type = options.resource_type || "image";
  type = options.type || "upload";
  uri = ["resources", resource_type, type];
  return call_api("delete", uri, deleteResourcesParams(options, {
    "public_ids[]": public_ids
  }), callback, options);
};

exports.delete_resources_by_prefix = function delete_resources_by_prefix(prefix, callback, options = {}) {
  let resource_type, type, uri;
  resource_type = options.resource_type || "image";
  type = options.type || "upload";
  uri = ["resources", resource_type, type];
  return call_api("delete", uri, deleteResourcesParams(options, {
    prefix: prefix
  }), callback, options);
};

exports.delete_resources_by_tag = function delete_resources_by_tag(tag, callback, options = {}) {
  let resource_type, uri;
  resource_type = options.resource_type || "image";
  uri = ["resources", resource_type, "tags", tag];
  return call_api("delete", uri, deleteResourcesParams(options), callback, options);
};

exports.delete_all_resources = function delete_all_resources(callback, options = {}) {
  let resource_type, type, uri;

  resource_type = options.resource_type || "image";
  type = options.type || "upload";
  uri = ["resources", resource_type, type];
  return call_api("delete", uri, deleteResourcesParams(options, {
    all: true
  }), callback, options);
};

const createRelationParams = (publicIds = []) => {
  return {
    assets_to_relate: Array.isArray(publicIds) ? publicIds : [publicIds]
  };
};

const deleteRelationParams = (publicIds = []) => {
  return {
    assets_to_unrelate: Array.isArray(publicIds) ? publicIds : [publicIds]
  };
};

exports.add_related_assets = (publicId, assetsToRelate, callback, options = {}) => {
  const params = createRelationParams(assetsToRelate);
  return call_api('post', ['resources', 'related_assets', options.resource_type, options.type, publicId], params, callback, options);
};

exports.add_related_assets_by_asset_id = (assetId, assetsToRelate, callback, options = {}) => {
  const params = createRelationParams(assetsToRelate);
  return call_api('post', ['resources', 'related_assets', assetId], params, callback, options);
};

exports.delete_related_assets = (publicId, assetsToUnrelate, callback, options = {}) => {
  const params = deleteRelationParams(assetsToUnrelate);
  return call_api('delete', ['resources', 'related_assets', options.resource_type, options.type, publicId], params, callback, options);
};

exports.delete_related_assets_by_asset_id = (assetId, assetsToUnrelate, callback, options = {}) => {
  const params = deleteRelationParams(assetsToUnrelate);
  return call_api('delete', ['resources', 'related_assets', assetId], params, callback, options);
};

exports.delete_derived_resources = function delete_derived_resources(derived_resource_ids, callback, options = {}) {
  let uri;
  uri = ["derived_resources"];
  return call_api("delete", uri, {
    "derived_resource_ids[]": derived_resource_ids
  }, callback, options);
};

exports.delete_derived_by_transformation = function delete_derived_by_transformation(
  public_ids,
  transformations,
  callback,
  options = {}
) {
  let params, resource_type, type, uri;
  resource_type = options.resource_type || "image";
  type = options.type || "upload";
  uri = "resources/" + resource_type + "/" + type;
  params = extend({
    "public_ids[]": public_ids
  }, pickOnlyExistingValues(options, "invalidate"));
  params.keep_original = true;
  params.transformations = utils.build_eager(transformations);
  return call_api("delete", uri, params, callback, options);
};

exports.tags = function tags(callback, options = {}) {
  let resource_type, uri;
  resource_type = options.resource_type || "image";
  uri = ["tags", resource_type];
  return call_api("get", uri, pickOnlyExistingValues(options, "next_cursor", "max_results", "prefix"), callback, options);
};

exports.transformations = function transformations(callback, options = {}) {
  const params = pickOnlyExistingValues(options, "next_cursor", "max_results", "named");
  return call_api("get", TRANSFORMATIONS_URI, params, callback, options);
};

exports.transformation = function transformation(transformationName, callback, options = {}) {
  const params = pickOnlyExistingValues(options, "next_cursor", "max_results");
  params.transformation = utils.build_eager(transformationName);
  return call_api("get", TRANSFORMATIONS_URI, params, callback, options);
};

exports.delete_transformation = function delete_transformation(transformationName, callback, options = {}) {
  const params = {};
  params.transformation = utils.build_eager(transformationName);
  return call_api("delete", TRANSFORMATIONS_URI, params, callback, options);
};

exports.update_transformation = function update_transformation(transformationName, updates, callback, options = {}) {
  const params = pickOnlyExistingValues(updates, "allowed_for_strict");
  params.transformation = utils.build_eager(transformationName);
  if (updates.unsafe_update != null) {
    params.unsafe_update = utils.build_eager(updates.unsafe_update);
  }
  return call_api("put", TRANSFORMATIONS_URI, params, callback, options);
};

exports.create_transformation = function create_transformation(name, definition, callback, options = {}) {
  const params = {name};
  params.transformation = utils.build_eager(definition);
  return call_api("post", TRANSFORMATIONS_URI, params, callback, options);
};

exports.upload_presets = function upload_presets(callback, options = {}) {
  return call_api("get", ["upload_presets"], pickOnlyExistingValues(options, "next_cursor", "max_results"), callback, options);
};

exports.upload_preset = function upload_preset(name, callback, options = {}) {
  let uri;
  uri = ["upload_presets", name];
  return call_api("get", uri, {}, callback, options);
};

exports.delete_upload_preset = function delete_upload_preset(name, callback, options = {}) {
  let uri;
  uri = ["upload_presets", name];
  return call_api("delete", uri, {}, callback, options);
};

exports.update_upload_preset = function update_upload_preset(name, callback, options = {}) {
  let params, uri;
  uri = ["upload_presets", name];
  params = utils.merge(utils.clear_blank(utils.build_upload_params(options)), pickOnlyExistingValues(options, "unsigned", "disallow_public_id", "live"));
  return call_api("put", uri, params, callback, options);
};

exports.create_upload_preset = function create_upload_preset(callback, options = {}) {
  let params, uri;
  uri = ["upload_presets"];
  params = utils.merge(utils.clear_blank(utils.build_upload_params(options)), pickOnlyExistingValues(options, "name", "unsigned", "disallow_public_id", "live"));
  return call_api("post", uri, params, callback, options);
};

exports.root_folders = function root_folders(callback, options = {}) {
  let uri, params;
  uri = ["folders"];
  params = pickOnlyExistingValues(options, "next_cursor", "max_results");
  return call_api("get", uri, params, callback, options);
};

exports.sub_folders = function sub_folders(path, callback, options = {}) {
  let uri, params;
  uri = ["folders", path];
  params = pickOnlyExistingValues(options, "next_cursor", "max_results");
  return call_api("get", uri, params, callback, options);
};

/**
 * Creates an empty folder
 *
 * @param {string}    path      The folder path to create
 * @param {function}  callback  Callback function
 * @param {object}    options   Configuration options
 * @returns {*}
 */
exports.create_folder = function create_folder(path, callback, options = {}) {
  let uri;
  uri = ["folders", path];
  return call_api("post", uri, {}, callback, options);
};

exports.delete_folder = function delete_folder(path, callback, options = {}) {
  let uri;
  uri = ["folders", path];
  return call_api("delete", uri, {}, callback, options);
};

exports.upload_mappings = function upload_mappings(callback, options = {}) {
  let params;
  params = pickOnlyExistingValues(options, "next_cursor", "max_results");
  return call_api("get", "upload_mappings", params, callback, options);
};

exports.upload_mapping = function upload_mapping(name, callback, options = {}) {
  if (name == null) {
    name = null;
  }
  return call_api("get", 'upload_mappings', {
    folder: name
  }, callback, options);
};

exports.delete_upload_mapping = function delete_upload_mapping(name, callback, options = {}) {
  return call_api("delete", 'upload_mappings', {
    folder: name
  }, callback, options);
};

exports.update_upload_mapping = function update_upload_mapping(name, callback, options = {}) {
  let params;
  params = pickOnlyExistingValues(options, "template");
  params.folder = name;
  return call_api("put", 'upload_mappings', params, callback, options);
};

exports.create_upload_mapping = function create_upload_mapping(name, callback, options = {}) {
  let params;
  params = pickOnlyExistingValues(options, "template");
  params.folder = name;
  return call_api("post", 'upload_mappings', params, callback, options);
};

function publishResource(byKey, value, callback, options = {}) {
  let params, resource_type, uri;
  params = pickOnlyExistingValues(options, "type", "invalidate", "overwrite");
  params[byKey] = value;
  resource_type = options.resource_type || "image";
  uri = ["resources", resource_type, "publish_resources"];
  options = extend({
    resource_type: resource_type
  }, options);
  return call_api("post", uri, params, callback, options);
}

exports.publish_by_prefix = function publish_by_prefix(prefix, callback, options = {}) {
  return publishResource("prefix", prefix, callback, options);
};

exports.publish_by_tag = function publish_by_tag(tag, callback, options = {}) {
  return publishResource("tag", tag, callback, options);
};

exports.publish_by_ids = function publish_by_ids(public_ids, callback, options = {}) {
  return publishResource("public_ids", public_ids, callback, options);
};

exports.list_streaming_profiles = function list_streaming_profiles(callback, options = {}) {
  return call_api("get", "streaming_profiles", {}, callback, options);
};

exports.get_streaming_profile = function get_streaming_profile(name, callback, options = {}) {
  return call_api("get", "streaming_profiles/" + name, {}, callback, options);
};

exports.delete_streaming_profile = function delete_streaming_profile(name, callback, options = {}) {
  return call_api("delete", "streaming_profiles/" + name, {}, callback, options);
};

exports.update_streaming_profile = function update_streaming_profile(name, callback, options = {}) {
  let params;
  params = utils.build_streaming_profiles_param(options);
  return call_api("put", "streaming_profiles/" + name, params, callback, options);
};

exports.create_streaming_profile = function create_streaming_profile(name, callback, options = {}) {
  let params;
  params = utils.build_streaming_profiles_param(options);
  params.name = name;
  return call_api("post", 'streaming_profiles', params, callback, options);
};

function updateResourcesAccessMode(access_mode, by_key, value, callback, options = {}) {
  let params, resource_type, type;
  resource_type = options.resource_type || "image";
  type = options.type || "upload";
  params = {
    access_mode: access_mode
  };
  params[by_key] = value;
  return call_api("post", "resources/" + resource_type + "/" + type + "/update_access_mode", params, callback, options);
}

exports.search = function search(params, callback, options = {}) {
  options.content_type = 'json';
  return call_api("post", "resources/search", params, callback, options);
};

exports.visual_search = function visual_search(params, callback, options = {}) {
  const allowedParams = pickOnlyExistingValues(params, 'image_url', 'image_asset_id', 'text');
  return call_api('get', ['resources', 'visual_search'], allowedParams, callback, options);
};

exports.search_folders = function search_folders(params, callback, options = {}) {
  options.content_type = 'json';
  return call_api("post", "folders/search", params, callback, options);
};

exports.update_resources_access_mode_by_prefix = function update_resources_access_mode_by_prefix(
  access_mode,
  prefix,
  callback,
  options = {}
) {
  return updateResourcesAccessMode(access_mode, "prefix", prefix, callback, options);
};

exports.update_resources_access_mode_by_tag = function update_resources_access_mode_by_tag(
  access_mode,
  tag,
  callback,
  options = {}
) {
  return updateResourcesAccessMode(access_mode, "tag", tag, callback, options);
};

exports.update_resources_access_mode_by_ids = function update_resources_access_mode_by_ids(
  access_mode,
  ids,
  callback,
  options = {}
) {
  return updateResourcesAccessMode(access_mode, "public_ids[]", ids, callback, options);
};

/**
 * Creates a new metadata field definition
 *
 * @see https://cloudinary.com/documentation/admin_api#create_a_metadata_field
 *
 * @param {Object}   field    The field to add
 * @param {Function} callback Callback function
 * @param {Object}   options  Configuration options
 *
 * @return {Object}
 */
exports.add_metadata_field = function add_metadata_field(field, callback, options = {}) {
  const params = pickOnlyExistingValues(field, "external_id", "type", "label", "mandatory", "default_value", "validation", "datasource", "restrictions");
  options.content_type = "json";
  return call_api("post", ["metadata_fields"], params, callback, options);
};

/**
 * Returns a list of all metadata field definitions
 *
 * @see https://cloudinary.com/documentation/admin_api#get_metadata_fields
 *
 * @param {Function} callback Callback function
 * @param {Object}   options  Configuration options
 *
 * @return {Object}
 */
exports.list_metadata_fields = function list_metadata_fields(callback, options = {}) {
  return call_api("get", ["metadata_fields"], {}, callback, options);
};

/**
 * Deletes a metadata field definition.
 *
 * The field should no longer be considered a valid candidate for all other endpoints
 *
 * @see https://cloudinary.com/documentation/admin_api#delete_a_metadata_field_by_external_id
 *
 * @param {String}   field_external_id  The external id of the field to delete
 * @param {Function} callback           Callback function
 * @param {Object}   options            Configuration options
 *
 * @return {Object}
 */
exports.delete_metadata_field = function delete_metadata_field(field_external_id, callback, options = {}) {
  return call_api("delete", ["metadata_fields", field_external_id], {}, callback, options);
};

/**
 * Get a metadata field by external id
 *
 * @see https://cloudinary.com/documentation/admin_api#get_a_metadata_field_by_external_id
 *
 * @param {String}   external_id  The ID of the metadata field to retrieve
 * @param {Function} callback     Callback function
 * @param {Object}   options      Configuration options
 *
 * @return {Object}
 */
exports.metadata_field_by_field_id = function metadata_field_by_field_id(external_id, callback, options = {}) {
  return call_api("get", ["metadata_fields", external_id], {}, callback, options);
};

/**
 * Updates a metadata field by external id
 *
 * Updates a metadata field definition (partially, no need to pass the entire object) passed as JSON data.
 * See {@link https://cloudinary.com/documentation/admin_api#generic_structure_of_a_metadata_field Generic structure of a metadata field} for details.
 *
 * @see https://cloudinary.com/documentation/admin_api#update_a_metadata_field_by_external_id
 *
 * @param {String}   external_id  The ID of the metadata field to update
 * @param {Object}   field        Updated values of metadata field
 * @param {Function} callback     Callback function
 * @param {Object}   options      Configuration options
 *
 * @return {Object}
 */
exports.update_metadata_field = function update_metadata_field(external_id, field, callback, options = {}) {
  const params = pickOnlyExistingValues(field, "external_id", "type", "label", "mandatory", "default_value", "validation", "datasource", "restrictions");
  options.content_type = "json";
  return call_api("put", ["metadata_fields", external_id], params, callback, options);
};

/**
 * Updates a metadata field datasource
 *
 * Updates the datasource of a supported field type (currently only enum and set), passed as JSON data. The
 * update is partial: datasource entries with an existing external_id will be updated and entries with new
 * external_id’s (or without external_id’s) will be appended.
 *
 * @see https://cloudinary.com/documentation/admin_api#update_a_metadata_field_datasource
 *
 * @param {String}   field_external_id    The ID of the field to update
 * @param {Object}   entries_external_id  Updated values for datasource
 * @param {Function} callback             Callback function
 * @param {Object}   options              Configuration options
 *
 * @return {Object}
 */
exports.update_metadata_field_datasource = function update_metadata_field_datasource(field_external_id, entries_external_id, callback, options = {}) {
  const params = pickOnlyExistingValues(entries_external_id, "values");
  options.content_type = "json";
  return call_api("put", ["metadata_fields", field_external_id, "datasource"], params, callback, options);
};

/**
 * Deletes entries in a metadata field datasource
 *
 * Deletes (blocks) the datasource entries for a specified metadata field definition. Sets the state of the
 * entries to inactive. This is a soft delete, the entries still exist under the hood and can be activated again
 * with the restore datasource entries method.
 *
 * @see https://cloudinary.com/documentation/admin_api#delete_entries_in_a_metadata_field_datasource
 *
 * @param {String}   field_external_id    The ID of the metadata field
 * @param {Array}    entries_external_id  An array of IDs of datasource entries to delete
 * @param {Function} callback             Callback function
 * @param {Object}   options              Configuration options
 *
 * @return {Object}
 */
exports.delete_datasource_entries = function delete_datasource_entries(field_external_id, entries_external_id, callback, options = {}) {
  options.content_type = "json";
  const params = {external_ids: entries_external_id};
  return call_api("delete", ["metadata_fields", field_external_id, "datasource"], params, callback, options);
};

/**
 * Restores entries in a metadata field datasource
 *
 * Restores (unblocks) any previously deleted datasource entries for a specified metadata field definition.
 * Sets the state of the entries to active.
 *
 * @see https://cloudinary.com/documentation/admin_api#restore_entries_in_a_metadata_field_datasource
 *
 * @param {String}   field_external_id    The ID of the metadata field
 * @param {Array}    entries_external_id  An array of IDs of datasource entries to delete
 * @param {Function} callback             Callback function
 * @param {Object}   options              Configuration options
 *
 * @return {Object}
 */
exports.restore_metadata_field_datasource = function restore_metadata_field_datasource(field_external_id, entries_external_id, callback, options = {}) {
  options.content_type = "json";
  const params = {external_ids: entries_external_id};
  return call_api("post", ["metadata_fields", field_external_id, "datasource_restore"], params, callback, options);
};

/**
 * Sorts metadata field datasource. Currently supports only value
 * @param {String}   field_external_id    The ID of the metadata field
 * @param {String}   sort_by              Criteria for the sort. Currently supports only value
 * @param {String}   direction            Optional (gets either asc or desc)
 * @param {Function} callback             Callback function
 * @param {Object}   options              Configuration options
 *
 * @return {Object}
 */
exports.order_metadata_field_datasource = function order_metadata_field_datasource(field_external_id, sort_by, direction, callback, options = {}) {
  options.content_type = "json";
  const params = {
    order_by: sort_by,
    direction: direction
  };
  return call_api("post", ["metadata_fields", field_external_id, "datasource", "order"], params, callback, options);
};

/**
 * Reorders metadata fields.
 *
 * @param {String}   order_by  Criteria for the order (one of the fields 'label', 'external_id', 'created_at').
 * @param {String}   direction Optional (gets either asc or desc).
 * @param {Function} callback  Callback function.
 * @param {Object}   options   Configuration options.
 *
 * @return {Object}
 */
exports.reorder_metadata_fields = function reorder_metadata_fields(order_by, direction, callback, options = {}) {
  options.content_type = "json";
  const params = {
    order_by,
    direction
  };
  return call_api("put", ["metadata_fields", "order"], params, callback, options);
};

exports.list_metadata_rules = function list_metadata_rules(callback, options = {}) {
  return call_api('get', ['metadata_rules'], {}, callback, options);
};

exports.add_metadata_rule = function add_metadata_rule(metadata_rule, callback, options = {}) {
  options.content_type = 'json';
  const params = pickOnlyExistingValues(metadata_rule, 'metadata_field_id', 'condition', 'result', 'name');
  return call_api('post', ['metadata_rules'], params, callback, options);
};

exports.update_metadata_rule = function update_metadata_rule(field_external_id, updated_metadata_rule, callback, options = {}) {
  options.content_type = 'json';
  const params = pickOnlyExistingValues(updated_metadata_rule, 'metadata_field_id', 'condition', 'result', 'name', 'state');
  return call_api('put', ['metadata_rules', field_external_id], params, callback, options);
};

exports.delete_metadata_rule = function delete_metadata_rule(field_external_id, callback, options = {}) {
  return call_api('delete', ['metadata_rules', field_external_id], {}, callback, options);
};


/***/ }),

/***/ 84045:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// eslint-disable-next-line import/order
const config = __webpack_require__(89235);
const utils = __webpack_require__(97895);
const ensureOption = (__webpack_require__(14227).defaults)(config());
const execute_request = __webpack_require__(39062);

const { ensurePresenceOf } = utils;

function call_account_api(method, uri, params, callback, options) {
  ensurePresenceOf({ method, uri });
  const cloudinary = ensureOption(options, "upload_prefix", "https://api.cloudinary.com");
  const account_id = ensureOption(options, "account_id");
  const api_url = [cloudinary, "v1_1", "provisioning", "accounts", account_id].concat(uri).join("/");
  const auth = {
    key: ensureOption(options, "provisioning_api_key"),
    secret: ensureOption(options, "provisioning_api_secret")
  };

  return execute_request(method, params, auth, api_url, callback, options);
}

module.exports = call_account_api;


/***/ }),

/***/ 32824:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

const utils = __webpack_require__(97895);
const config = __webpack_require__(89235);
const ensureOption = (__webpack_require__(14227).defaults)(config());
const execute_request = __webpack_require__(39062);

const {ensurePresenceOf} = utils;

function call_analysis_api(method, uri, params, callback, options) {
  ensurePresenceOf({
    method,
    uri
  });
  const api_url = utils.base_api_url_v2()(uri, options);
  let auth = {};
  if (options.oauth_token || config().oauth_token) {
    auth = {
      oauth_token: ensureOption(options, "oauth_token")
    };
  } else {
    auth = {
      key: ensureOption(options, "api_key"),
      secret: ensureOption(options, "api_secret")
    };
  }
  options.content_type = 'json';

  return execute_request(method, params, auth, api_url, callback, options);
}

module.exports = {
  call_analysis_api
};


/***/ }),

/***/ 66834:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// eslint-disable-next-line import/order
const config = __webpack_require__(89235);
const utils = __webpack_require__(97895);
const ensureOption = (__webpack_require__(14227).defaults)(config());
const execute_request = __webpack_require__(39062);

const { ensurePresenceOf } = utils;

function call_api(method, uri, params, callback, options) {
  ensurePresenceOf({ method, uri });
  const api_url = utils.base_api_url_v1()(uri, options);
  let auth = {};
  if (options.oauth_token || config().oauth_token){
    auth = {
      oauth_token: ensureOption(options, "oauth_token")
    };
  } else {
    auth = {
      key: ensureOption(options, "api_key"),
      secret: ensureOption(options, "api_secret")
    };
  }
  return execute_request(method, params, auth, api_url, callback, options);
}

module.exports = call_api;


/***/ }),

/***/ 39062:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* provided dependency */ var Buffer = __webpack_require__(40263)["Buffer"];
// eslint-disable-next-line import/order
const config = __webpack_require__(89235);
const https = /^http:/.test(config().upload_prefix) ? __webpack_require__(72909) : __webpack_require__(83104);
const querystring = __webpack_require__(9875);
const Q = __webpack_require__(82052);
const url = __webpack_require__(40692);
const utils = __webpack_require__(97895);
const ensureOption = (__webpack_require__(14227).defaults)(config());

const { extend, includes, isEmpty } = utils;

const agent = config.api_proxy ? new https.Agent(config.api_proxy) : null;

function execute_request(method, params, auth, api_url, callback, options = {}) {
  method = method.toUpperCase();
  const deferred = Q.defer();

  let query_params, handle_response; // declare to user later
  let key = auth.key;
  let secret = auth.secret;
  let oauth_token = auth.oauth_token;
  let content_type = 'application/x-www-form-urlencoded';

  if (options.content_type === 'json') {
    query_params = JSON.stringify(params);
    content_type = 'application/json';
  } else {
    query_params = querystring.stringify(params);
  }

  if (method === "GET") {
    api_url += "?" + query_params;
  }

  let request_options = url.parse(api_url);

  request_options = extend(request_options, {
    method: method,
    headers: {
      'Content-Type': content_type,
      'User-Agent': utils.getUserAgent()
    }
  });

  if (oauth_token) {
    request_options.headers.Authorization = `Bearer ${oauth_token}`;
  } else {
    request_options.auth = key + ":" + secret
  }

  if (options.agent != null) {
    request_options.agent = options.agent;
  }

  let proxy = options.api_proxy || config().api_proxy;
  if (!isEmpty(proxy)) {
    if (!request_options.agent && agent) {
      request_options.agent = agent;
    } else if (!request_options.agent) {
      request_options.agent = new https.Agent(proxy);
    } else {
      console.warn("Proxy is set, but request uses a custom agent, proxy is ignored.");
    }
  }
  if (method !== "GET") {
    request_options.headers['Content-Length'] = Buffer.byteLength(query_params);
  }
  handle_response = function (res) {
    const {hide_sensitive = false} = config();
    const sanitizedOptions = {...request_options};

    if (hide_sensitive === true){
      if ("auth" in sanitizedOptions) { delete sanitizedOptions.auth; }
      if ("Authorization" in sanitizedOptions.headers) { delete sanitizedOptions.headers.Authorization; }
    }

    if (includes([200, 400, 401, 403, 404, 409, 420, 500], res.statusCode)) {
      let buffer = "";
      let error = false;
      res.on("data", function (d) {
        buffer += d;
        return buffer;
      });
      res.on("end", function () {
        let result;
        if (error) {
          return;
        }
        try {
          result = JSON.parse(buffer);
        } catch (e) {
          result = {
            error: {
              message: "Server return invalid JSON response. Status Code " + res.statusCode
            }
          };
        }

        if (result.error) {
          result.error.http_code = res.statusCode;
        } else {
          if (res.headers["x-featureratelimit-limit"]) {
            result.rate_limit_allowed = parseInt(res.headers["x-featureratelimit-limit"]);
          }
          if (res.headers["x-featureratelimit-reset"]) {
            result.rate_limit_reset_at = new Date(res.headers["x-featureratelimit-reset"]);
          }
          if (res.headers["x-featureratelimit-remaining"]) {
            result.rate_limit_remaining = parseInt(res.headers["x-featureratelimit-remaining"]);
          }
        }

        if (result.error) {
          deferred.reject(Object.assign({
            request_options: sanitizedOptions,
            query_params
          }, result));
        } else {
          deferred.resolve(result);
        }
        if (typeof callback === "function") {
          callback(result);
        }
      });
      res.on("error", function (e) {
        error = true;
        let err_obj = {
          error: {
            message: e,
            http_code: res.statusCode,
            request_options: sanitizedOptions,
            query_params
          }
        };
        deferred.reject(err_obj.error);
        if (typeof callback === "function") {
          callback(err_obj);
        }
      });
    } else {
      let err_obj = {
        error: {
          message: "Server returned unexpected status code - " + res.statusCode,
          http_code: res.statusCode,
          request_options: sanitizedOptions,
          query_params
        }
      };
      deferred.reject(err_obj.error);
      if (typeof callback === "function") {
        callback(err_obj);
      }
    }
  };

  const request = https.request(request_options, handle_response);
  request.on("error", function (e) {
    deferred.reject(e);
    return typeof callback === "function" ? callback({ error: e }) : void 0;
  });
  request.setTimeout(ensureOption(options, "timeout", 60000));
  if (method !== "GET") {
    request.write(query_params);
  }
  request.end();
  return deferred.promise;
}

module.exports = execute_request;


/***/ }),

/***/ 39017:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* provided dependency */ var Buffer = __webpack_require__(40263)["Buffer"];
/**
 * Authorization Token
 * @module auth_token
 */

const crypto = __webpack_require__(54131);
const smart_escape = __webpack_require__(8321);

const unsafe = /([ "#%&'/:;<=>?@[\]^`{|}~]+)/g;

function digest(message, key) {
  return crypto.createHmac("sha256", Buffer.from(key, "hex")).update(message).digest('hex');
}

/**
 * Escape url using lowercase hex code
 * @param {string} url a url string
 * @return {string} escaped url
 */
function escapeToLower(url) {
  const safeUrl = smart_escape(url, unsafe);
  return safeUrl.replace(/%../g, function (match) {
    return match.toLowerCase();
  });
}

/**
 * Auth token options
 * @typedef {object} authTokenOptions
 * @property {string} [token_name="__cld_token__"] The name of the token.
 * @property {string} key The secret key required to sign the token.
 * @property {string} ip The IP address of the client.
 * @property {number} start_time=now The start time of the token in seconds from epoch.
 * @property {string} expiration The expiration time of the token in seconds from epoch.
 * @property {string} duration The duration of the token (from start_time).
 * @property {string|Array<string>} acl The ACL(s) for the token.
 * @property {string} url The URL to authentication in case of a URL token.
 *
 */

/**
 * Generate an authorization token
 * @param {authTokenOptions} options
 * @returns {string} the authorization token
 */
module.exports = function (options) {
  const tokenName = options.token_name ? options.token_name : "__cld_token__";
  const tokenSeparator = "~";
  if (options.expiration == null) {
    if (options.duration != null) {
      let start = options.start_time != null ? options.start_time : Math.round(Date.now() / 1000);
      options.expiration = start + options.duration;
    } else {
      throw new Error("Must provide either expiration or duration");
    }
  }
  let tokenParts = [];
  if (options.ip != null) {
    tokenParts.push(`ip=${options.ip}`);
  }
  if (options.start_time != null) {
    tokenParts.push(`st=${options.start_time}`);
  }
  tokenParts.push(`exp=${options.expiration}`);
  if (options.acl != null) {
    if (Array.isArray(options.acl) === true) {
      options.acl = options.acl.join("!");
    }
    tokenParts.push(`acl=${escapeToLower(options.acl)}`);
  }
  let toSign = [...tokenParts];
  if (options.url != null && options.acl == null) {
    let url = escapeToLower(options.url);
    toSign.push(`url=${url}`);
  }
  let auth = digest(toSign.join(tokenSeparator), options.key);
  tokenParts.push(`hmac=${auth}`);

  if (!options.url && !options.acl) {
    throw 'authToken must contain either an acl or a url property'
  }

  return `${tokenName}=${tokenParts.join(tokenSeparator)}`;
};


/***/ }),

/***/ 86930:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* eslint-disable class-methods-use-this */

const CACHE = Symbol.for("com.cloudinary.cache");
const CACHE_ADAPTER = Symbol.for("com.cloudinary.cacheAdapter");
const { ensurePresenceOf, generate_transformation_string } = __webpack_require__(97895);

/**
 * The adapter used to communicate with the underlying cache storage
 */
class CacheAdapter {
  /**
   * Get a value from the cache
   * @param {string} publicId
   * @param {string} type
   * @param {string} resourceType
   * @param {string} transformation
   * @param {string} format
   * @return {*} the value associated with the provided arguments
   */
  get(publicId, type, resourceType, transformation, format) {}

  /**
   * Set a new value in the cache
   * @param {string} publicId
   * @param {string} type
   * @param {string} resourceType
   * @param {string} transformation
   * @param {string} format
   * @param {*} value
   */
  set(publicId, type, resourceType, transformation, format, value) {}

  /**
   * Delete all values in the cache
   */
  flushAll() {}
}
/**
 * @class Cache
 * Stores and retrieves values identified by publicId / options pairs
 */
const Cache = {
  /**
   * The adapter interface. Extend this class to implement a specific adapter.
   * @type CacheAdapter
   */
  CacheAdapter,
  /**
   * Set the cache adapter
   * @param {CacheAdapter} adapter The cache adapter
   */
  setAdapter(adapter) {
    if (this.adapter) {
      console.warn("Overriding existing cache adapter");
    }
    this.adapter = adapter;
  },
  /**
   * Get the adapter the Cache is using
   * @return {CacheAdapter} the current cache adapter
   */
  getAdapter() {
    return this.adapter;
  },
  /**
   * Get an item from the cache
   * @param {string} publicId
   * @param {object} options
   * @return {*}
   */
  get(publicId, options) {
    if (!this.adapter) { return undefined; }
    ensurePresenceOf({ publicId });
    let transformation = generate_transformation_string({ ...options });
    return this.adapter.get(
      publicId, options.type || 'upload',
      options.resource_type || 'image',
      transformation,
      options.format
    );
  },
  /**
   * Set a new value in the cache
   * @param {string} publicId
   * @param {object} options
   * @param {*} value
   * @return {*}
   */
  set(publicId, options, value) {
    if (!this.adapter) { return undefined; }
    ensurePresenceOf({ publicId, value });
    let transformation = generate_transformation_string({ ...options });
    return this.adapter.set(
      publicId,
      options.type || 'upload',
      options.resource_type || 'image',
      transformation,
      options.format,
      value
    );
  },
  /**
   * Clear all items in the cache
   * @return {*} Returns the value from the adapter's flushAll() method
   */
  flushAll() {
    if (!this.adapter) { return undefined; }
    return this.adapter.flushAll();
  }

};

// Define singleton property
Object.defineProperty(Cache, "instance", {
  get() {
    return __webpack_require__.g[CACHE];
  }
});
Object.defineProperty(Cache, "adapter", {
  /**
   *
   * @return {CacheAdapter} The current cache adapter
   */
  get() {
    return __webpack_require__.g[CACHE_ADAPTER];
  },
  /**
   * Set the cache adapter to be used by Cache
   * @param {CacheAdapter} adapter Cache adapter
   */
  set(adapter) {
    __webpack_require__.g[CACHE_ADAPTER] = adapter;
  }
});
Object.freeze(Cache);

// Instantiate the singleton
let symbols = Object.getOwnPropertySymbols(__webpack_require__.g);
if (symbols.indexOf(CACHE) < 0) {
  __webpack_require__.g[CACHE] = Cache;
}

/**
 * Store key value pairs

 */
module.exports = Cache;


/***/ }),

/***/ 50229:
/***/ (function(module, exports, __webpack_require__) {

const _ = __webpack_require__(2890);
exports.config = __webpack_require__(89235);
exports.utils = __webpack_require__(97895);
exports.uploader = __webpack_require__(29973);
exports.api = __webpack_require__(24671);
exports.analysis = __webpack_require__(13716);

const account = __webpack_require__(19747);

exports.provisioning = {
  account: account
};
exports.PreloadedFile = __webpack_require__(48355);
exports.Cache = __webpack_require__(86930);

const cloudinary = module.exports;

const optionConsume = cloudinary.utils.option_consume;

exports.url = function url(public_id, options) {
  options = _.extend({}, options);
  return cloudinary.utils.url(public_id, options);
};

const { generateImageResponsiveAttributes, generateMediaAttr } = __webpack_require__(34027);

/**
 * Helper function, allows chaining transformation to the end of transformation list
 *
 * @private
 * @param {object} options Original options
 * @param {object|object[]} transformation Transformations to chain at the end
 *
 * @return {object} Resulting options
 */
function chainTransformations(options, transformation = []) {
  // preserve url options
  let urlOptions = cloudinary.utils.extractUrlParams(options);
  let currentTransformation = cloudinary.utils.extractTransformationParams(options);
  transformation = cloudinary.utils.build_array(transformation);
  urlOptions.transformation = [currentTransformation, ...transformation];
  return urlOptions;
}

/**
 * Generate an HTML img tag with a Cloudinary URL
 * @param {string} source A Public ID or a URL
 * @param {object} options Configuration options
 * @param {srcset} options.srcset srcset options
 * @param {object} options.attributes HTML attributes
 * @param {number} options.html_width (deprecated) The HTML tag width
 * @param {number} options.html_height (deprecated) The HTML tag height
 * @param {boolean} options.client_hints Don't implement the client side responsive function.
 *                  This argument can override the the same option in the global configuration.
 * @param {boolean} options.responsive Setup the tag for the client side responsive function.
 * @param {boolean} options.hidpi Setup the tag for the client side auto dpr function.
 * @param {boolean} options.responsive_placeholder A place holder image URL to use with.
 *                  the client side responsive function
 * @return {string} An HTML img tag
 */
exports.image = function image(source, options) {
  let localOptions = _.extend({}, options);
  let srcsetParam = optionConsume(localOptions, 'srcset');
  let attributes = optionConsume(localOptions, 'attributes', {});
  let src = cloudinary.utils.url(source, localOptions);
  if ("html_width" in localOptions) localOptions.width = optionConsume(localOptions, "html_width");
  if ("html_height" in localOptions) localOptions.height = optionConsume(localOptions, "html_height");

  let client_hints = optionConsume(localOptions, "client_hints", cloudinary.config().client_hints);
  let responsive = optionConsume(localOptions, "responsive");
  let hidpi = optionConsume(localOptions, "hidpi");

  if ((responsive || hidpi) && !client_hints) {
    localOptions["data-src"] = src;
    let classes = [responsive ? "cld-responsive" : "cld-hidpi"];
    let current_class = optionConsume(localOptions, "class");
    if (current_class) classes.push(current_class);
    localOptions.class = classes.join(" ");
    src = optionConsume(localOptions, "responsive_placeholder", cloudinary.config().responsive_placeholder);
    if (src === "blank") {
      src = cloudinary.BLANK;
    }
  }
  let html = "<img ";
  if (src) html += "src='" + src + "' ";
  let responsiveAttributes = {};
  if (cloudinary.utils.isString(srcsetParam)) {
    responsiveAttributes.srcset = srcsetParam;
  } else {
    responsiveAttributes = generateImageResponsiveAttributes(source, attributes, srcsetParam, options);
  }
  if (!cloudinary.utils.isEmpty(responsiveAttributes)) {
    delete localOptions.width;
    delete localOptions.height;
  }
  html += cloudinary.utils.html_attrs(_.extend(localOptions, responsiveAttributes, attributes)) + "/>";
  return html;
};

/**
 * Creates an HTML video tag for the provided public_id
 * @param {String} public_id the resource public ID
 * @param {Object} [options] options for the resource and HTML tag
 * @param {(String|Array<String>)} [options.source_types] Specify which
 *        source type the tag should include. defaults to webm, mp4 and ogv.
 * @param {String} [options.source_transformation] specific transformations
 *        to use for a specific source type.
 * @param {(String|Object)} [options.poster] image URL or
 *        poster options that may include a <tt>public_id</tt> key and
 *        poster-specific transformations
 * @example <caption>Example of generating a video tag:</caption>
 * cloudinary.video("mymovie.mp4");
 * cloudinary.video("mymovie.mp4", {source_types: 'webm'});
 * cloudinary.video("mymovie.ogv", {poster: "myspecialplaceholder.jpg"});
 * cloudinary.video("mymovie.webm", {source_types: ['webm', 'mp4'], poster: {effect: 'sepia'}});
 * @return {string} HTML video tag
 */
exports.video = function video(public_id, options) {
  options = _.extend({}, options);
  public_id = public_id.replace(/\.(mp4|ogv|webm)$/, '');
  let source_types = optionConsume(options, 'source_types', []);
  let source_transformation = optionConsume(options, 'source_transformation', {});
  let sources = optionConsume(options, 'sources', []);
  let fallback = optionConsume(options, 'fallback_content', '');

  if (source_types.length === 0) source_types = cloudinary.utils.DEFAULT_VIDEO_SOURCE_TYPES;
  let video_options = _.cloneDeep(options);

  if (video_options.hasOwnProperty('poster')) {
    if (_.isPlainObject(video_options.poster)) {
      if (video_options.poster.hasOwnProperty('public_id')) {
        video_options.poster = cloudinary.utils.url(video_options.poster.public_id, video_options.poster);
      } else {
        video_options.poster = cloudinary.utils.url(public_id, _.extend({}, cloudinary.utils.DEFAULT_POSTER_OPTIONS, video_options.poster));
      }
    }
  } else {
    video_options.poster = cloudinary.utils.url(public_id, _.extend({}, cloudinary.utils.DEFAULT_POSTER_OPTIONS, options));
  }

  if (!video_options.poster) delete video_options.poster;

  let html = '<video ';

  if (!video_options.hasOwnProperty('resource_type')) video_options.resource_type = 'video';
  let multi_source_types = _.isArray(source_types) && source_types.length > 1;
  let has_sources = _.isArray(sources) && sources.length > 0;
  let source = public_id;
  if (!multi_source_types && !has_sources) {
    source = source + '.' + cloudinary.utils.build_array(source_types)[0];
  }
  let src = cloudinary.utils.url(source, video_options);
  if (!multi_source_types && !has_sources) video_options.src = src;
  if (video_options.hasOwnProperty("html_width")) video_options.width = optionConsume(video_options, 'html_width');
  if (video_options.hasOwnProperty("html_height")) video_options.height = optionConsume(video_options, 'html_height');
  html = html + cloudinary.utils.html_attrs(video_options) + '>';
  if (multi_source_types && !has_sources) {
    sources = source_types.map(source_type => ({
      type: source_type,
      transformations: source_transformation[source_type] || {}
    }));
  }
  if (_.isArray(sources) && sources.length > 0) {
    html += sources.map((source_data) => {
      let source_type = source_data.type;
      let codecs = source_data.codecs;
      let transformation = source_data.transformations || {};
      src = cloudinary.utils.url(source + "." + source_type, _.extend({ resource_type: 'video' }, _.cloneDeep(options), _.cloneDeep(transformation)));
      return cloudinary.utils.create_source_tag(src, source_type, codecs);
    }).join('');
  }
  return `${html}${fallback}</video>`;
};


/**
 * Generate a <code>source</code> tag.
 * @param {string} public_id
 * @param {object} options
 * @param {srcset} options.srcset arguments required to generate the srcset attribute.
 * @param {object} options.attributes HTML tag attributes
 * @return {string}
 */
exports.source = function source(public_id, options = {}) {
  let srcsetParam = cloudinary.utils.extend({}, options.srcset, cloudinary.config().srcset);
  let attributes = options.attributes || {};

  cloudinary.utils.extend(attributes, generateImageResponsiveAttributes(public_id, attributes, srcsetParam, options));
  if (!attributes.srcset) {
    attributes.srcset = cloudinary.url(public_id, options);
  }
  if (!attributes.media && options.media) {
    attributes.media = generateMediaAttr(options.media);
  }
  return `<source ${cloudinary.utils.html_attrs(attributes)}>`;
};

/**
 * Generate a <code>picture</code> HTML tag.<br>
 *   The sources argument defines different transformations to apply for each
 *   media query.
 * @param {string}public_id
 * @param {object} options
 * @param {object[]} options.sources a list of source arguments. A source tag will be rendered for each item
 * @param {number} options.sources.min_width a minimum width query
 * @param {number} options.sources.max_width a maximum width query
 * @param {number} options.sources.transformation the transformation to apply to the source tag.
 * @return {string} A picture HTML tag
 * @example
 *
 * cloudinary.picture("sample", {
 *   sources: [
 *     {min_width: 1600, transformation: {crop: 'fill', width: 800, aspect_ratio: 2}},
 *     {min_width: 500, transformation: {crop: 'fill', width: 600, aspect_ratio: 2.3}},
 *     {transformation: {crop: 'crop', width: 400, gravity: 'auto'}},
 *     ]}
 * );
 */
exports.picture = function picture(public_id, options = {}) {
  let sources = options.sources || [];
  options = cloudinary.utils.clone(options);
  delete options.sources;
  cloudinary.utils.patchFetchFormat(options);
  return "<picture>"
    + sources.map((source) => {
      let sourceOptions = chainTransformations(options, source.transformation);
      sourceOptions.media = source;
      return cloudinary.source(public_id, sourceOptions);
    }).join('')
    + cloudinary.image(public_id, options)
    + "</picture>";
};

exports.cloudinary_js_config = cloudinary.utils.cloudinary_js_config;
exports.CF_SHARED_CDN = cloudinary.utils.CF_SHARED_CDN;
exports.AKAMAI_SHARED_CDN = cloudinary.utils.AKAMAI_SHARED_CDN;
exports.SHARED_CDN = cloudinary.utils.SHARED_CDN;
exports.BLANK = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
exports.v2 = __webpack_require__(41792);


/***/ }),

/***/ 89235:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* provided dependency */ var process = __webpack_require__(62601);
/**
 * Assign a value to a nested object
 * @function putNestedValue
 * @param params the parent object - this argument will be modified!
 * @param key key in the form nested[innerkey]
 * @param value the value to assign
 * @return the modified params object
 */
const url = __webpack_require__(40692);
const extend = __webpack_require__(67453);
const isObject = __webpack_require__(36905);
const isString = __webpack_require__(33874);
const isUndefined = __webpack_require__(99231);
const isEmpty = __webpack_require__(96778);
const entries = __webpack_require__(55542);

let cloudinary_config = void 0;

/**
 * Sets a value in an object using a nested key
 * @param {object} params The object to assign the value in.
 * @param {string} key The key of the value. A period is used to denote inner keys.
 * @param {*} value The value to set.
 * @returns {object} The params argument.
 * @example
 *     let o = {foo: {bar: 1}};
 *     putNestedValue(o, 'foo.bar', 2); // {foo: {bar: 2}}
 *     putNestedValue(o, 'foo.inner.key', 'this creates an inner object');
 *     // {{foo: {bar: 2}, inner: {key: 'this creates an inner object'}}}
 */
function putNestedValue(params, key, value) {
  let chain = key.split(/[\[\]]+/).filter(i => i.length);
  let outer = params;
  let lastKey = chain.pop();
  for (let j = 0; j < chain.length; j++) {
    let innerKey = chain[j];
    let inner = outer[innerKey];
    if (inner == null) {
      inner = {};
      outer[innerKey] = inner;
    }
    outer = inner;
  }
  outer[lastKey] = value;
  return params;
}

function parseCloudinaryConfigFromEnvURL(ENV_STR) {
  let conf = {};

  let uri = url.parse(ENV_STR, true);

  if (uri.protocol === 'cloudinary:') {
    conf = Object.assign({}, conf, {
      cloud_name: uri.host,
      api_key: uri.auth && uri.auth.split(":")[0],
      api_secret: uri.auth && uri.auth.split(":")[1],
      private_cdn: uri.pathname != null,
      secure_distribution: uri.pathname && uri.pathname.substring(1)
    });
  } else if (uri.protocol === 'account:') {
    conf = Object.assign({}, conf, {
      account_id: uri.host,
      provisioning_api_key: uri.auth && uri.auth.split(":")[0],
      provisioning_api_secret: uri.auth && uri.auth.split(":")[1]
    });
  }

  return conf;
}

function extendCloudinaryConfigFromQuery(ENV_URL, confToExtend = {}) {
  let uri = url.parse(ENV_URL, true);
  if (uri.query != null) {
    entries(uri.query).forEach(([key, value]) => putNestedValue(confToExtend, key, value));
  }
}

function extendCloudinaryConfig(parsedConfig, confToExtend = {}) {
  entries(parsedConfig).forEach(([key, value]) => {
    if (value !== undefined) {
      confToExtend[key] = value;
    }
  });

  return confToExtend;
}

module.exports = function (new_config, new_value) {
  if ((cloudinary_config == null) || new_config === true) {
    if (cloudinary_config == null) {
      cloudinary_config = {};
    } else {
      Object.keys(cloudinary_config).forEach(key => delete cloudinary_config[key]);
    }

    let CLOUDINARY_ENV_URL = process.env.CLOUDINARY_URL;
    let CLOUDINARY_ENV_ACCOUNT_URL = process.env.CLOUDINARY_ACCOUNT_URL;
    let CLOUDINARY_API_PROXY = process.env.CLOUDINARY_API_PROXY;

    if (CLOUDINARY_ENV_URL && !CLOUDINARY_ENV_URL.toLowerCase().startsWith('cloudinary://')) {
      throw new Error("Invalid CLOUDINARY_URL protocol. URL should begin with 'cloudinary://'");
    }
    if (CLOUDINARY_ENV_ACCOUNT_URL && !CLOUDINARY_ENV_ACCOUNT_URL.toLowerCase().startsWith('account://')) {
      throw new Error("Invalid CLOUDINARY_ACCOUNT_URL protocol. URL should begin with 'account://'");
    }
    if (!isEmpty(CLOUDINARY_API_PROXY)) {
      extendCloudinaryConfig({ api_proxy: CLOUDINARY_API_PROXY }, cloudinary_config);
    }

    [CLOUDINARY_ENV_URL, CLOUDINARY_ENV_ACCOUNT_URL].forEach((ENV_URL) => {
      if (ENV_URL) {
        let parsedConfig = parseCloudinaryConfigFromEnvURL(ENV_URL);
        extendCloudinaryConfig(parsedConfig, cloudinary_config);
        // Provide Query support in ENV url cloudinary://key:secret@test123?foo[bar]=value
        // expect(cloudinary_config.foo.bar).to.eql('value')
        extendCloudinaryConfigFromQuery(ENV_URL, cloudinary_config);
      }
    });
  }
  if (!isUndefined(new_value)) {
    cloudinary_config[new_config] = new_value;
  } else if (isString(new_config)) {
    return cloudinary_config[new_config];
  } else if (isObject(new_config)) {
    extend(cloudinary_config, new_config);
  }
  return cloudinary_config;
};


/***/ }),

/***/ 48355:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

let PRELOADED_CLOUDINARY_PATH, config, utils;

utils = __webpack_require__(97895);

config = __webpack_require__(89235);

PRELOADED_CLOUDINARY_PATH = /^([^\/]+)\/([^\/]+)\/v(\d+)\/([^#]+)#([^\/]+)$/;

class PreloadedFile {
  constructor(file_info) {
    let matches, public_id_and_format;
    matches = file_info.match(PRELOADED_CLOUDINARY_PATH);
    if (!matches) {
      throw "Invalid preloaded file info";
    }
    this.resource_type = matches[1];
    this.type = matches[2];
    this.version = matches[3];
    this.filename = matches[4];
    this.signature = matches[5];
    public_id_and_format = PreloadedFile.split_format(this.filename);
    this.public_id = public_id_and_format[0];
    this.format = public_id_and_format[1];
  }

  is_valid() {
    let expected_signature;
    expected_signature = utils.api_sign_request({
      public_id: this.public_id,
      version: this.version
    }, config().api_secret);
    return this.signature === expected_signature;
  }

  static split_format(identifier) {
    let format, last_dot, public_id;
    last_dot = identifier.lastIndexOf(".");
    if (last_dot === -1) {
      return [identifier, null];
    }
    public_id = identifier.substr(0, last_dot);
    format = identifier.substr(last_dot + 1);
    return [public_id, format];
  }

  identifier() {
    return `v${this.version}/${this.filename}`;
  }

  toString() {
    return `${this.resource_type}/${this.type}/v${this.version}/${this.filename}#${this.signature}`;
  }

  toJSON() {
    let result = {};
    Object.getOwnPropertyNames(this).forEach((key) => {
      let val = this[key];
      if (typeof val !== 'function') {
        result[key] = val;
      }
    });
    return result;
  }
}

module.exports = PreloadedFile;


/***/ }),

/***/ 19747:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

const utils = __webpack_require__(97895);
const call_account_api = __webpack_require__(84045);

const { pickOnlyExistingValues } = utils;

/**
 * @desc Lists sub-accounts.
 * @param [enabled] {boolean} - Whether to only return enabled sub-accounts (true) or disabled accounts (false).
 *                              Default: all accounts are returned (both enabled and disabled).
 * @param [ids] {number[]} - A list of up to 100 sub-account IDs. When provided, other parameters are ignored.
 * @param [prefix] {string} - Returns accounts where the name begins with the specified case-insensitive string.
 * @param [options] {object} - See {@link https://cloudinary.com/documentation/cloudinary_sdks#configuration_parameters|Configuration parameters} in the SDK documentation.
 * @param [callback] {function}
 */
function sub_accounts(enabled, ids = [], prefix, options = {}, callback) {
  let params = {
    enabled,
    ids,
    prefix
  };

  let uri = ['sub_accounts'];
  return call_account_api('GET', uri, params, callback, options);
}


/**
 * @desc Retrieves the details of the specified sub-account.
 * @param sub_account_id {string} - The ID of the sub-account.
 * @param [options] {object} - See {@link https://cloudinary.com/documentation/cloudinary_sdks#configuration_parameters|Configuration parameters} in the SDK documentation.
 * @param [callback] {function}
 */
function sub_account(sub_account_id, options = {}, callback) {
  let uri = ['sub_accounts', sub_account_id];
  return call_account_api('GET', uri, {}, callback, options);
}


/**
 * @desc Creates a new sub-account. Any users that have access to all sub-accounts will also automatically have access
 *       to the new sub-account.
 * @param name {string} The display name as shown in the management console.
 * @param cloud_name {string} A case-insensitive cloud name comprised of alphanumeric and underscore characters.
 *                            Generates an error if the specified cloud name is not unique across all Cloudinary
 *                            accounts. Note: Once created, the name can only be changed for accounts with fewer than
 *                            1000 assets.
 * @param custom_attributes {object} Any custom attributes you want to associate with the sub-account, as a map/hash of
 *                                   key/value pairs.
 * @param enabled {boolean} Whether the sub-account is enabled. Default: true
 * @param base_account {string} The ID of another sub-account, from which to copy all of the following settings:
 *                              Size limits, Timed limits, and Flags.
 * @param [options] {object} - See {@link https://cloudinary.com/documentation/cloudinary_sdks#configuration_parameters|Configuration parameters} in the SDK documentation.
 * @param callback
 */
function create_sub_account(name, cloud_name, custom_attributes, enabled, base_account, options = {}, callback) {
  let params = {
    cloud_name: cloud_name,
    name,
    custom_attributes: custom_attributes,
    enabled,
    base_sub_account_id: base_account
  };

  options.content_type = "json";
  let uri = ['sub_accounts'];
  return call_account_api('POST', uri, params, callback, options);
}

/**
 * @desc Deletes the specified sub-account. Supported only for accounts with fewer than 1000 assets.
 * @param sub_account_id {string} - The ID of the sub-account to delete.
 * @param [options] {object} - See {@link https://cloudinary.com/documentation/cloudinary_sdks#configuration_parameters|Configuration parameters} in the SDK documentation.
 * @param [callback] {function}
 */
function delete_sub_account(sub_account_id, options = {}, callback) {
  let uri = ['sub_accounts', sub_account_id];
  return call_account_api('DELETE', uri, {}, callback, options);
}

/**
 * @desc Updates the specified details of the sub-account.
 * @param sub_account_id {string} - The ID of the sub-account.
 * @param [name] {string} - The display name as shown in the management console.
 * @param [cloud_name] {string} - A new cloud name for the account.
 *                                Notes:
 *                                  - Can only be changed for accounts with fewer than 1000 assets.
 *                                  - generates an error if the cloud name is not unique across all Cloudinary accounts.
 * @param [custom_attributes] {object} - Any custom attributes you want to associate with the sub-account, as a map/hash
 *                                       of key/value pairs.
 * @param [enabled] {boolean} - Whether the sub-account is enabled.
 * @param [options] {object} - See {@link https://cloudinary.com/documentation/cloudinary_sdks#configuration_parameters|Configuration parameters} in the SDK documentation.
 * @param [callback] {function}
 */
function update_sub_account(sub_account_id, name, cloud_name, custom_attributes, enabled, options = {}, callback) {
  let params = {
    cloud_name: cloud_name,
    name,
    custom_attributes: custom_attributes,
    enabled
  };

  options.content_type = "json";
  let uri = ['sub_accounts', sub_account_id];
  return call_account_api('PUT', uri, params, callback, options);
}

/**
 * @desc Returns the user with the specified ID.
 * @param user_id {string} - The ID of the user.
 * @param [options] {object} - See {@link https://cloudinary.com/documentation/cloudinary_sdks#configuration_parameters|Configuration parameters} in the SDK documentation.
 * @param [callback] {function}
 */
function user(user_id, options = {}, callback) {
  let uri = ['users', user_id];
  return call_account_api('GET', uri, {}, callback, options);
}

/**
 * @desc Lists users in the account.
 * @param [pending] {boolean} - Limit results to pending users (true), users that are not pending (false), or all users (undefined, the default)
 * @param [user_ids] {string[]} - A list of up to 100 user IDs. When provided, other parameters are ignored.
 * @param [prefix] {string} - Returns users where the name or email address begins with the specified case-insensitive
 *                            string.
 * @param [sub_account_id[ {string} - Only returns users who have access to the specified account.
 * @param [options] {object} - See {@link https://cloudinary.com/documentation/cloudinary_sdks#configuration_parameters|Configuration parameters} in the SDK documentation.
 * @param [callback] {function}
 */
function users(pending, user_ids, prefix, sub_account_id, options = {}, callback) {
  let uri = ['users'];
  let params = {
    ids: user_ids,
    pending,
    prefix,
    sub_account_id
  };
  return call_account_api('GET', uri, pickOnlyExistingValues(params, "ids", "pending", "prefix", "sub_account_id"), callback, options);
}

/**
 * @desc Creates a new user in the account.
 * @param name {string} - The name of the user.
 * @param email {string} - A unique email address, which serves as the login name and notification address.
 * @param role {string} - The role to assign. Possible values: master_admin, admin, billing, technical_admin, reports,
 *                                                             media_library_admin, media_library_user
 * @param [sub_account_ids] {string[]} - The list of sub-account IDs that this user can access.
 *                                       Note: This parameter is ignored if the role is specified as master_admin.
 * @param [options] {object} - See {@link https://cloudinary.com/documentation/cloudinary_sdks#configuration_parameters|Configuration parameters} in the SDK documentation.
 * @param [callback] {function}
 */
function create_user(name, email, role, sub_account_ids, options = {}, callback) {
  let uri = ['users'];
  let params = {
    name,
    email,
    role,
    sub_account_ids: sub_account_ids
  };
  options.content_type = 'json';
  return call_account_api('POST', uri, params, callback, options);
}

/**
 * @desc Updates the details of the specified user.
 * @param user_id {string} - The ID of the user to update.
 * @param [name] {string} - The name of the user.
 * @param [email] {string} - A unique email address, which serves as the login name and notification address.
 * @param [role] {string} - The role to assign. Possible values: master_admin, admin, billing, technical_admin, reports,
 *                                              media_library_admin, media_library_user
 * @param [sub_account_ids] {string[]} - The list of sub-account IDs that this user can access.
 *                                       Note: This parameter is ignored if the role is specified as master_admin.
 * @param [options] {object} - See {@link https://cloudinary.com/documentation/cloudinary_sdks#configuration_parameters|Configuration parameters} in the SDK documentation.
 * @param [callback] {function}
 */
function update_user(user_id, name, email, role, sub_account_ids, options = {}, callback) {
  let uri = ['users', user_id];
  let params = {
    name,
    email,
    role,
    sub_account_ids: sub_account_ids
  };
  options.content_type = 'json';
  return call_account_api('PUT', uri, params, callback, options);
}

/**
 * @desc Deletes an existing user.
 * @param user_id {string} - The ID of the user to delete.
 * @param [options] {object} - See {@link https://cloudinary.com/documentation/cloudinary_sdks#configuration_parameters|Configuration parameters} in the SDK documentation.
 * @param [callback] {function}
 */
function delete_user(user_id, options = {}, callback) {
  let uri = ['users', user_id];
  return call_account_api('DELETE', uri, {}, callback, options);
}

/**
 * @desc Creates a new user group.
 * @param name {string} - The name for the user group.
 * @param [options] {object} - See {@link https://cloudinary.com/documentation/cloudinary_sdks#configuration_parameters|Configuration parameters} in the SDK documentation.
 * @param [callback] {function}
 */
function create_user_group(name, options = {}, callback) {
  let uri = ['user_groups'];
  options.content_type = 'json';
  let params = {
    name
  };
  return call_account_api('POST', uri, params, callback, options);
}

/**
 * @desc Updates the specified user group.
 * @param group_id {string} The ID of the user group to update.
 * @param name {string} - The name for the user group.
 * @param [options] {object} - See {@link https://cloudinary.com/documentation/cloudinary_sdks#configuration_parameters|Configuration parameters} in the SDK documentation.
 * @param [callback] {function}
 */
function update_user_group(group_id, name, options = {}, callback) {
  let uri = ['user_groups', group_id];
  let params = {
    name
  };
  return call_account_api('PUT', uri, params, callback, options);
}

/**
 * @desc Deletes the user group with the specified ID.
 * @param group_id {string} The ID of the user group to delete.
 * @param [options] {object} - See {@link https://cloudinary.com/documentation/cloudinary_sdks#configuration_parameters|Configuration parameters} in the SDK documentation.
 * @param [callback] {function}
 */
function delete_user_group(group_id, options = {}, callback) {
  let uri = ['user_groups', group_id];
  return call_account_api('DELETE', uri, {}, callback, options);
}

/**
 * @desc Adds a user to a group with the specified ID.
 * @param group_id {string} - The ID of the user group.
 * @param user_id {string} - The ID of the user.
 * @param [options] {object} - See {@link https://cloudinary.com/documentation/cloudinary_sdks#configuration_parameters|Configuration parameters} in the SDK documentation.
 * @param [callback] {function}
 */
function add_user_to_group(group_id, user_id, options = {}, callback) {
  let uri = ['user_groups', group_id, 'users', user_id];
  return call_account_api('POST', uri, {}, callback, options);
}

/**
 * @desc Removes a user from a group with the specified ID.
 * @param group_id {string} - The ID of the user group.
 * @param user_id {string} - The ID of the user.
 * @param [options] {object} - See {@link https://cloudinary.com/documentation/cloudinary_sdks#configuration_parameters|Configuration parameters} in the SDK documentation.
 * @param [callback] {function}
 */
function remove_user_from_group(group_id, user_id, options = {}, callback) {
  let uri = ['user_groups', group_id, 'users', user_id];
  return call_account_api('DELETE', uri, {}, callback, options);
}

/**
 * @desc Retrieves the details of the specified user group.
 * @param group_id {string} - The ID of the user group to retrieve.
 * @param [options] {object} - See {@link https://cloudinary.com/documentation/cloudinary_sdks#configuration_parameters|Configuration parameters} in the SDK documentation.
 * @param [callback] {function}
 */
function user_group(group_id, options = {}, callback) {
  let uri = ['user_groups', group_id];
  return call_account_api('GET', uri, {}, callback, options);
}

/**
 * @desc Lists user groups in the account.
 * @param [options] {object} - See {@link https://cloudinary.com/documentation/cloudinary_sdks#configuration_parameters|Configuration parameters} in the SDK documentation.
 * @param [callback] {function}
 */
function user_groups(options = {}, callback) {
  let uri = ['user_groups'];
  return call_account_api('GET', uri, {}, callback, options);
}

/**
 * @desc Lists users in the specified user group.
 * @param group_id {string} - The ID of the user group.
 * @param [options] {object} - See {@link https://cloudinary.com/documentation/cloudinary_sdks#configuration_parameters|Configuration parameters} in the SDK documentation.
 * @param [callback] {function}
 */
function user_group_users(group_id, options = {}, callback) {
  let uri = ['user_groups', group_id, 'users'];
  return call_account_api('GET', uri, {}, callback, options);
}


module.exports = {
  sub_accounts,
  create_sub_account,
  delete_sub_account,
  sub_account,
  update_sub_account,
  user,
  users,
  user_group,
  user_groups,
  user_group_users,
  remove_user_from_group,
  delete_user,
  update_user_group,
  update_user,
  create_user,
  create_user_group,
  add_user_to_group,
  delete_user_group
};


/***/ }),

/***/ 72000:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* provided dependency */ var Buffer = __webpack_require__(40263)["Buffer"];

const Transform = (__webpack_require__(48290).Transform);

class UploadStream extends Transform {
  constructor(options) {
    super();
    this.boundary = options.boundary;
  }

  _transform(data, encoding, next) {
    let buffer = ((Buffer.isBuffer(data)) ? data : Buffer.from(data, encoding));
    this.push(buffer);
    next();
  }

  _flush(next) {
    this.push(Buffer.from("\r\n", 'ascii'));
    this.push(Buffer.from("--" + this.boundary + "--", 'ascii'));
    return next();
  }
}

module.exports = UploadStream;


/***/ }),

/***/ 29973:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

/* provided dependency */ var Buffer = __webpack_require__(40263)["Buffer"];
const fs = __webpack_require__(65781);
const { extname, basename } = __webpack_require__(29743);
const Q = __webpack_require__(82052);
const Writable = (__webpack_require__(48290).Writable);
const urlLib = __webpack_require__(40692);

// eslint-disable-next-line import/order
const { upload_prefix } = __webpack_require__(89235)();

const isSecure = !(upload_prefix && upload_prefix.slice(0, 5) === 'http:');
const https = isSecure ? __webpack_require__(83104) : __webpack_require__(72909);

const Cache = __webpack_require__(86930);
const utils = __webpack_require__(97895);
const UploadStream = __webpack_require__(72000);
const config = __webpack_require__(89235);
const ensureOption = (__webpack_require__(14227).defaults)(config());

const agent = config.api_proxy ? new https.Agent(config.api_proxy) : null;

const {
  build_upload_params,
  extend,
  includes,
  isEmpty,
  isObject,
  isRemoteUrl,
  merge,
  pickOnlyExistingValues
} = utils;

exports.unsigned_upload_stream = function unsigned_upload_stream(upload_preset, callback, options = {}) {
  return exports.upload_stream(callback, merge(options, {
    unsigned: true,
    upload_preset: upload_preset
  }));
};

exports.upload_stream = function upload_stream(callback, options = {}) {
  return exports.upload(null, callback, extend({
    stream: true
  }, options));
};

exports.unsigned_upload = function unsigned_upload(file, upload_preset, callback, options = {}) {
  return exports.upload(file, callback, merge(options, {
    unsigned: true,
    upload_preset: upload_preset
  }));
};

exports.upload = function upload(file, callback, options = {}) {
  return call_api("upload", callback, options, function () {
    let params = build_upload_params(options);
    return isRemoteUrl(file) ? [params, { file: file }] : [params, {}, file];
  });
};

exports.upload_large = function upload_large(path, callback, options = {}) {
  if ((path != null) && isRemoteUrl(path)) {
    // upload a remote file
    return exports.upload(path, callback, options);
  }
  if (path != null && !options.filename) {
    options.filename = path.split(/(\\|\/)/g).pop().replace(/\.[^/.]+$/, "");
  }
  return exports.upload_chunked(path, callback, extend({
    resource_type: 'raw'
  }, options));
};

exports.upload_chunked = function upload_chunked(path, callback, options) {
  let file_reader = fs.createReadStream(path);
  let out_stream = exports.upload_chunked_stream(callback, options);
  return file_reader.pipe(out_stream);
};

class Chunkable extends Writable {
  constructor(options) {
    super(options);
    this.chunk_size = options.chunk_size != null ? options.chunk_size : 20000000;
    this.buffer = Buffer.alloc(0);
    this.active = true;
    this.on('finish', () => {
      if (this.active) {
        this.emit('ready', this.buffer, true, function () {
        });
      }
    });
  }

  _write(data, encoding, done) {
    if (!this.active) {
      done();
    }
    if (this.buffer.length + data.length <= this.chunk_size) {
      this.buffer = Buffer.concat([this.buffer, data], this.buffer.length + data.length);
      done();
    } else {
      const grab = this.chunk_size - this.buffer.length;
      this.buffer = Buffer.concat([this.buffer, data.slice(0, grab)], this.buffer.length + grab);
      this.emit('ready', this.buffer, false, (active) => {
        this.active = active;
        if (this.active) {
          this.buffer = data.slice(grab);
          done();
        }
      });
    }
  }
}

exports.upload_large_stream = function upload_large_stream(_unused_, callback, options = {}) {
  return exports.upload_chunked_stream(callback, extend({
    resource_type: 'raw'
  }, options));
};

exports.upload_chunked_stream = function upload_chunked_stream(callback, options = {}) {
  options = extend({}, options, {
    stream: true
  });
  options.x_unique_upload_id = utils.random_public_id();
  let params = build_upload_params(options);
  let chunk_size = options.chunk_size != null ? options.chunk_size : options.part_size;
  let chunker = new Chunkable({
    chunk_size: chunk_size
  });
  let sent = 0;
  chunker.on('ready', function (buffer, is_last, done) {
    let chunk_start = sent;
    sent += buffer.length;
    options.content_range = `bytes ${chunk_start}-${sent - 1}/${(is_last ? sent : -1)}`;
    params.timestamp = utils.timestamp();
    let finished_part = function (result) {
      const errorOrLast = (result.error != null) || is_last;
      if (errorOrLast && typeof callback === "function") {
        callback(result);
      }
      return done(!errorOrLast);
    };
    let stream = call_api("upload", finished_part, options, function () {
      return [params, {}, buffer];
    });
    return stream.write(buffer, 'buffer', function () {
      return stream.end();
    });
  });
  return chunker;
};

exports.explicit = function explicit(public_id, callback, options = {}) {
  return call_api("explicit", callback, options, function () {
    return utils.build_explicit_api_params(public_id, options);
  });
};

// Creates a new archive in the server and returns information in JSON format
exports.create_archive = function create_archive(callback, options = {}, target_format = null) {
  return call_api("generate_archive", callback, options, function () {
    let opt = utils.archive_params(options);
    if (target_format) {
      opt.target_format = target_format;
    }
    return [opt];
  });
};

// Creates a new zip archive in the server and returns information in JSON format
exports.create_zip = function create_zip(callback, options = {}) {
  return exports.create_archive(callback, options, "zip");
};


exports.create_slideshow = function create_slideshow(options, callback) {
  options.resource_type = ensureOption(options, "resource_type", "video");
  return call_api("create_slideshow", callback, options, function () {
    // Generate a transformation from the manifest_transformation key, which should be a valid transformation
    const manifest_transformation = utils.generate_transformation_string(extend({}, options.manifest_transformation));

    // Try to use {options.transformation} to generate a transformation (Example: options.transformation.width, options.transformation.height)
    const transformation = utils.generate_transformation_string(extend({}, ensureOption(options, 'transformation', {})));

    return [
      {
        timestamp: utils.timestamp(),
        manifest_transformation: manifest_transformation,
        upload_preset: options.upload_preset,
        overwrite: options.overwrite,
        public_id: options.public_id,
        notification_url: options.notification_url,
        manifest_json: options.manifest_json,
        tags: options.tags,
        transformation: transformation
      }
    ];
  });
};


exports.destroy = function destroy(public_id, callback, options = {}) {
  return call_api("destroy", callback, options, function () {
    return [
      {
        timestamp: utils.timestamp(),
        type: options.type,
        invalidate: options.invalidate,
        public_id: public_id,
        notification_url: options.notification_url
      }
    ];
  });
};

exports.rename = function rename(from_public_id, to_public_id, callback, options = {}) {
  return call_api("rename", callback, options, function () {
    return [
      {
        timestamp: utils.timestamp(),
        type: options.type,
        from_public_id: from_public_id,
        to_public_id: to_public_id,
        overwrite: options.overwrite,
        invalidate: options.invalidate,
        to_type: options.to_type,
        context: options.context,
        metadata: options.metadata,
        notification_url: options.notification_url
      }
    ];
  });
};

const TEXT_PARAMS = ["public_id", "font_family", "font_size", "font_color", "text_align", "font_weight", "font_style", "background", "opacity", "text_decoration", "font_hinting", "font_antialiasing"];

exports.text = function text(content, callback, options = {}) {
  return call_api("text", callback, options, function () {
    let textParams = pickOnlyExistingValues(options, ...TEXT_PARAMS);
    let params = {
      timestamp: utils.timestamp(),
      text: content,
      ...textParams
    };

    return [params];
  });
};

/**
 * Generate a sprite by merging multiple images into a single large image for reducing network overhead and bypassing
 * download limitations.
 *
 * The process produces 2 files as follows:
 * - A single image file containing all the images with the specified tag (PNG by default).
 * - A CSS file that includes the style class names and the location of the individual images in the sprite.
 *
 * @param {String|Object} tag     A string specifying a tag that indicates which images to include or an object
 *                                which includes options and image URLs.
 * @param {Function}     callback   Callback function
 * @param {Object}       options  Configuration options. If options are passed as the first parameter, this parameter
 *                                should be empty
 *
 * @return {Object}
 */
exports.generate_sprite = function generate_sprite(tag, callback, options = {}) {
  return call_api("sprite", callback, options, function () {
    return [utils.build_multi_and_sprite_params(tag, options)];
  });
};


/**
 * Returns a signed url to download a sprite
 *
 * @param {String|Object} tag     A string specifying a tag that indicates which images to include or an object
 *                                which includes options and image URLs.
 * @param {Object}       options  Configuration options. If options are passed as the first parameter, this parameter
 *                                should be empty
 *
 * @returns {string}
 */
exports.download_generated_sprite = function download_generated_sprite(tag, options = {}) {
  return utils.api_download_url("sprite", utils.build_multi_and_sprite_params(tag, options), options);
}

/**
 * Returns a signed url to download a single animated image (GIF, PNG or WebP), video (MP4 or WebM) or a single PDF from
 * multiple image assets.
 *
 * @param {String|Object} tag     A string specifying a tag that indicates which images to include or an object
 *                                which includes options and image URLs.
 * @param {Object}       options  Configuration options. If options are passed as the first parameter, this parameter
 *                                should be empty
 *
 * @returns {string}
 */
exports.download_multi = function download_multi(tag, options = {}) {
  return utils.api_download_url("multi", utils.build_multi_and_sprite_params(tag, options), options);
}

/**
 * Creates either a single animated image (GIF, PNG or WebP), video (MP4 or WebM) or a single PDF from multiple image
 * assets.
 *
 * Each asset is included as a single frame of the resulting animated image/video, or a page of the PDF (sorted
 * alphabetically by their Public ID).
 *
 * @param {String|Object} tag     A string specifying a tag that indicates which images to include or an object
 *                                which includes options and image URLs.
 * @param {Function}     callback   Callback function
 * @param {Object}       options  Configuration options. If options are passed as the first parameter, this parameter
 *                                should be empty
 *
 * @return {Object}
 */
exports.multi = function multi(tag, callback, options = {}) {
  return call_api("multi", callback, options, function () {
    return [utils.build_multi_and_sprite_params(tag, options)];
  });
};

exports.explode = function explode(public_id, callback, options = {}) {
  return call_api("explode", callback, options, function () {
    const transformation = utils.generate_transformation_string(extend({}, options));
    return [
      {
        timestamp: utils.timestamp(),
        public_id: public_id,
        transformation: transformation,
        format: options.format,
        type: options.type,
        notification_url: options.notification_url
      }
    ];
  });
};

/**
 *
 * @param {String}          tag                  The tag or tags to assign. Can specify multiple
 *                                               tags in a single string, separated by commas - "t1,t2,t3,t4,t5,t6,t7,t8,t9,t10,t11".
 *
 * @param {Array}          public_ids           A list of public IDs (up to 1000) of assets uploaded to Cloudinary.
 *
 * @param {Function}        callback             Callback function
 *
 * @param {Object}          options              Configuration options may include 'exclusive' (boolean) which causes
 *                                               clearing this tag from all other resources
 * @return {Object}
 */
exports.add_tag = function add_tag(tag, public_ids = [], callback, options = {}) {
  const exclusive = utils.option_consume("exclusive", options);
  const command = exclusive ? "set_exclusive" : "add";
  return call_tags_api(tag, command, public_ids, callback, options);
};


/**
 * @param {String}          tag                  The tag or tags to remove. Can specify multiple
 *                                               tags in a single string, separated by commas - "t1,t2,t3,t4,t5,t6,t7,t8,t9,t10,t11".
 *
 * @param {Array}          public_ids            A list of public IDs (up to 1000) of assets uploaded to Cloudinary.
 *
 * @param {Function}        callback             Callback function
 *
 * @param {Object}          options              Configuration options may include 'exclusive' (boolean) which causes
 *                                               clearing this tag from all other resources
 * @return {Object}
 */
exports.remove_tag = function remove_tag(tag, public_ids = [], callback, options = {}) {
  return call_tags_api(tag, "remove", public_ids, callback, options);
};

exports.remove_all_tags = function remove_all_tags(public_ids = [], callback, options = {}) {
  return call_tags_api(null, "remove_all", public_ids, callback, options);
};

exports.replace_tag = function replace_tag(tag, public_ids = [], callback, options = {}) {
  return call_tags_api(tag, "replace", public_ids, callback, options);
};

function call_tags_api(tag, command, public_ids = [], callback, options = {}) {
  return call_api("tags", callback, options, function () {
    let params = {
      timestamp: utils.timestamp(),
      public_ids: utils.build_array(public_ids),
      command: command,
      type: options.type
    };
    if (tag != null) {
      params.tag = tag;
    }
    return [params];
  });
}

exports.add_context = function add_context(context, public_ids = [], callback, options = {}) {
  return call_context_api(context, 'add', public_ids, callback, options);
};

exports.remove_all_context = function remove_all_context(public_ids = [], callback, options = {}) {
  return call_context_api(null, 'remove_all', public_ids, callback, options);
};

function call_context_api(context, command, public_ids = [], callback, options = {}) {
  return call_api('context', callback, options, function () {
    let params = {
      timestamp: utils.timestamp(),
      public_ids: utils.build_array(public_ids),
      command: command,
      type: options.type
    };
    if (context != null) {
      params.context = utils.encode_context(context);
    }
    return [params];
  });
}

/**
 * Cache (part of) the upload results.
 * @param result
 * @param {object} options
 * @param {string} options.type
 * @param {string} options.resource_type
 */
function cacheResults(result, { type, resource_type }) {
  if (result.responsive_breakpoints) {
    result.responsive_breakpoints.forEach(
      ({ transformation,
        url,
        breakpoints }) => Cache.set(
        result.public_id,
        { type, resource_type, raw_transformation: transformation, format: extname(breakpoints[0].url).slice(1) },
        breakpoints.map(i => i.width)
      )
    );
  }
}


function parseResult(buffer, res) {
  let result = '';
  try {
    result = JSON.parse(buffer);
    if (result.error && !result.error.name) {
      result.error.name = "Error";
    }
  } catch (jsonError) {
    result = {
      error: {
        message: `Server return invalid JSON response. Status Code ${res.statusCode}. ${jsonError}`,
        name: "Error"
      }
    };
  }
  return result;
}

function call_api(action, callback, options, get_params) {
  if (typeof callback !== "function") {
    callback = function () {};
  }

  const USE_PROMISES = !options.disable_promises;

  let deferred = Q.defer();
  if (options == null) {
    options = {};
  }
  let [params, unsigned_params, file] = get_params.call();
  params = utils.process_request_params(params, options);
  params = extend(params, unsigned_params);
  let api_url = utils.api_url(action, options);
  let boundary = utils.random_public_id();
  let errorRaised = false;
  let handle_response = function (res) {
    // let buffer;
    if (errorRaised) {

      // Already reported
    } else if (res.error) {
      errorRaised = true;

      if (USE_PROMISES) {
        deferred.reject(res);
      }
      callback(res);
    } else if (includes([200, 400, 401, 404, 420, 500], res.statusCode)) {
      let buffer = "";
      res.on("data", (d) => {
        buffer += d;
        return buffer;
      });
      res.on("end", () => {
        let result;
        if (errorRaised) {
          return;
        }
        result = parseResult(buffer, res);
        if (result.error) {
          result.error.http_code = res.statusCode;
          if (USE_PROMISES) {
            deferred.reject(result.error);
          }
        } else {
          cacheResults(result, options);
          if (USE_PROMISES) {
            deferred.resolve(result);
          }
        }
        callback(result);
      });
      res.on("error", (error) => {
        errorRaised = true;
        if (USE_PROMISES) {
          deferred.reject(error);
        }
        callback({ error });
      });
    } else {
      let error = {
        message: `Server returned unexpected status code - ${res.statusCode}`,
        http_code: res.statusCode,
        name: "UnexpectedResponse"
      };
      if (USE_PROMISES) {
        deferred.reject(error);
      }
      callback({ error });
    }
  };
  let post_data = utils.hashToParameters(params)
    .filter(([key, value]) => value != null)
    .map(
      ([key, value]) => Buffer.from(encodeFieldPart(boundary, key, value), 'utf8')
    );
  let result = post(api_url, post_data, boundary, file, handle_response, options);
  if (isObject(result)) {
    return result;
  }

  if (USE_PROMISES) {
    return deferred.promise;
  }
}

function post(url, post_data, boundary, file, callback, options) {
  let file_header;
  let finish_buffer = Buffer.from("--" + boundary + "--", 'ascii');
  let oauth_token = options.oauth_token || config().oauth_token;
  if ((file != null) || options.stream) {
    // eslint-disable-next-line no-nested-ternary
    let filename = options.stream ? options.filename ? options.filename : "file" : basename(file);
    file_header = Buffer.from(encodeFilePart(boundary, 'application/octet-stream', 'file', filename), 'binary');
  }
  let post_options = urlLib.parse(url);
  let headers = {
    'Content-Type': `multipart/form-data; boundary=${boundary}`,
    'User-Agent': utils.getUserAgent()
  };
  if (options.content_range != null) {
    headers['Content-Range'] = options.content_range;
  }
  if (options.x_unique_upload_id != null) {
    headers['X-Unique-Upload-Id'] = options.x_unique_upload_id;
  }
  if (options.extra_headers !== null) {
    headers = merge(headers, options.extra_headers);
  }
  if (oauth_token != null) {
    headers.Authorization = `Bearer ${oauth_token}`;
  }

  post_options = extend(post_options, {
    method: 'POST',
    headers: headers
  });
  if (options.agent != null) {
    post_options.agent = options.agent;
  }
  let proxy = options.api_proxy || config().api_proxy;
  if (!isEmpty(proxy)) {
    if (!post_options.agent && agent) {
      post_options.agent = agent;
    } else if (!post_options.agent) {
      post_options.agent = new https.Agent(proxy);
    } else {
      console.warn("Proxy is set, but request uses a custom agent, proxy is ignored.");
    }
  }

  let post_request = https.request(post_options, callback);
  let upload_stream = new UploadStream({ boundary });
  upload_stream.pipe(post_request);
  let timeout = false;
  post_request.on("error", function (error) {
    if (timeout) {
      error = {
        message: "Request Timeout",
        http_code: 499,
        name: "TimeoutError"
      };
    }
    return callback({ error });
  });
  post_request.setTimeout(options.timeout != null ? options.timeout : 60000, function () {
    timeout = true;
    return post_request.abort();
  });
  post_data.forEach(postDatum => post_request.write(postDatum));
  if (options.stream) {
    post_request.write(file_header);
    return upload_stream;
  }
  if (file != null) {
    post_request.write(file_header);
    fs.createReadStream(file).on('error', function (error) {
      callback({
        error: error
      });
      return post_request.abort();
    }).pipe(upload_stream);
  } else {
    post_request.write(finish_buffer);
    post_request.end();
  }
  return true;
}

function encodeFieldPart(boundary, name, value) {
  return [
    `--${boundary}\r\n`,
    `Content-Disposition: form-data; name="${name}"\r\n`,
    '\r\n',
    `${value}\r\n`,
    ''
  ].join('');
}

function encodeFilePart(boundary, type, name, filename) {
  return [
    `--${boundary}\r\n`,
    `Content-Disposition: form-data; name="${name}"; filename="${filename}"\r\n`,
    `Content-Type: ${type}\r\n`,
    '\r\n',
    ''
  ].join('');
}

exports.direct_upload = function direct_upload(callback_url, options = {}) {
  let params = build_upload_params(extend({
    callback: callback_url
  }, options));
  params = utils.process_request_params(params, options);
  let api_url = utils.api_url("upload", options);
  return {
    hidden_fields: params,
    form_attrs: {
      action: api_url,
      method: "POST",
      enctype: "multipart/form-data"
    }
  };
};

exports.upload_tag_params = function upload_tag_params(options = {}) {
  let params = build_upload_params(options);
  params = utils.process_request_params(params, options);
  return JSON.stringify(params);
};

exports.upload_url = function upload_url(options = {}) {
  if (options.resource_type == null) {
    options.resource_type = "auto";
  }
  return utils.api_url("upload", options);
};

exports.image_upload_tag = function image_upload_tag(field, options = {}) {
  let html_options = options.html || {};
  let tag_options = extend({
    type: "file",
    name: "file",
    "data-url": exports.upload_url(options),
    "data-form-data": exports.upload_tag_params(options),
    "data-cloudinary-field": field,
    "data-max-chunk-size": options.chunk_size,
    "class": [html_options.class, "cloudinary-fileupload"].join(" ")
  }, html_options);
  return `<input ${utils.html_attrs(tag_options)}/>`;
};

exports.unsigned_image_upload_tag = function unsigned_image_upload_tag(field, upload_preset, options = {}) {
  return exports.image_upload_tag(field, merge(options, {
    unsigned: true,
    upload_preset: upload_preset
  }));
};


/**
 * Populates metadata fields with the given values. Existing values will be overwritten.
 *
 * @param {Object}   metadata   A list of custom metadata fields (by external_id) and the values to assign to each
 * @param {Array}    public_ids The public IDs of the resources to update
 * @param {Function} callback   Callback function
 * @param {Object}   options    Configuration options
 *
 * @return {Object}
 */
exports.update_metadata = function update_metadata(metadata, public_ids, callback, options = {}) {
  return call_api("metadata", callback, options, function () {
    let params = {
      metadata: utils.encode_context(metadata),
      public_ids: utils.build_array(public_ids),
      timestamp: utils.timestamp(),
      type: options.type,
      clear_invalid: options.clear_invalid
    };
    return [params];
  });
};


/***/ }),

/***/ 37050:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

const reverseVersion = __webpack_require__(41751);
const stringPad = __webpack_require__(97822);
const base64Map = __webpack_require__(35490);

/**
 * @private
 * @description Encodes a semVer-like version string
 * @param {string} semVer Input can be either x.y.z or x.y
 * @return {string} A string built from 3 characters of the base64 table that encode the semVer
 */
module.exports = (semVer) => {
  let strResult = '';

  // support x.y or x.y.z by using 'parts' as a variable
  let parts = semVer.split('.').length;
  let paddedStringLength = parts * 6; // we pad to either 12 or 18 characters

  // reverse (but don't mirror) the version. 1.5.15 -> 15.5.1
  // Pad to two spaces, 15.5.1 -> 15.05.01
  let paddedReversedSemver = reverseVersion(semVer);

  // turn 15.05.01 to a string '150501' then to a number 150501
  let num = parseInt(paddedReversedSemver.split('.').join(''));

  // Represent as binary, add left padding to 12 or 18 characters.
  // 150,501 -> 100100101111100101

  let paddedBinary = num.toString(2);
  paddedBinary = stringPad(paddedBinary, paddedStringLength, '0');

  // Stop in case an invalid version number was provided
  // paddedBinary must be built from sections of 6 bits
  if (paddedBinary.length % 6 !== 0) {
    throw 'Version must be smaller than 43.21.26)';
  }

  // turn every 6 bits into a character using the base64Map
  paddedBinary.match(/.{1,6}/g).forEach((bitString) => {
    // console.log(bitString);
    strResult += base64Map[bitString];
  });

  return strResult;
};


/***/ }),

/***/ 1592:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var __dirname = "/";
/* provided dependency */ var process = __webpack_require__(62601);
const fs = __webpack_require__(48141);
const path = __webpack_require__(29743);
const sdkCode = 'M'; // Constant per SDK

/**
 * @description Gets the relevant versions of the SDK(package version, node version and sdkCode)
 * @param {'default' | 'x.y.z' | 'x.y' | string} useSDKVersion Default uses package.json version
 * @param {'default' | 'x.y.z' | 'x.y' | string} useNodeVersion Default uses process.versions.node
 * @return {{sdkSemver:string, techVersion:string, sdkCode:string}} A map of relevant versions and codes
 */
function getSDKVersions(useSDKVersion = 'default', useNodeVersion = 'default') {
  const pkgJSONFile = fs.readFileSync(path.join(__dirname, '../../../package.json'), 'utf-8');

  // allow to pass a custom SDKVersion
  const sdkSemver = useSDKVersion === 'default' ? JSON.parse(pkgJSONFile).version : useSDKVersion;

  // allow to pass a custom techVersion (Node version)
  const techVersion = useNodeVersion === 'default' ? process.versions.node : useNodeVersion;

  const product = 'A';

  return {
    sdkSemver,
    techVersion,
    sdkCode,
    product
  };
}

module.exports = getSDKVersions;


/***/ }),

/***/ 65756:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

const removePatchFromSemver = __webpack_require__(41494);
const encodeVersion = __webpack_require__(37050);

/**
 * @description Gets the SDK signature by encoding the SDK version and tech version
 * @param {{
 *    [techVersion]:string,
 *    [sdkSemver]: string,
 *    [sdkCode]: string,
 *    [product]: string,
 *    [feature]: string
 * }} analyticsOptions
 * @return {string} sdkAnalyticsSignature
 */
function getSDKAnalyticsSignature(analyticsOptions = {}) {
  try {
    const twoPartVersion = removePatchFromSemver(analyticsOptions.techVersion);
    const encodedSDKVersion = encodeVersion(analyticsOptions.sdkSemver);
    const encodedTechVersion = encodeVersion(twoPartVersion);
    const featureCode = analyticsOptions.feature;
    const SDKCode = analyticsOptions.sdkCode;
    const product = analyticsOptions.product;
    const algoVersion = 'B'; // The algo version is determined here, it should not be an argument

    return `${algoVersion}${product}${SDKCode}${encodedSDKVersion}${encodedTechVersion}${featureCode}`;
  } catch (e) {
    // Either SDK or Node versions were unparsable
    return 'E';
  }
}

/**
 * @description Gets the analyticsOptions from options - should include sdkSemver, techVersion, sdkCode, and feature
 * @param options
 * @returns {{sdkSemver: (string), sdkCode, product, feature: string, techVersion: (string)} || {}}
 */
function getAnalyticsOptions(options) {
  let analyticsOptions = {
    sdkSemver: options.sdkSemver,
    techVersion: options.techVersion,
    sdkCode: options.sdkCode,
    product: options.product,
    feature: '0'
  };
  if (options.urlAnalytics) {
    if (options.accessibility) {
      analyticsOptions.feature = 'D';
    }
    if (options.loading === 'lazy') {
      analyticsOptions.feature = 'C';
    }
    if (options.responsive) {
      analyticsOptions.feature = 'A';
    }
    if (options.placeholder) {
      analyticsOptions.feature = 'B';
    }
    return analyticsOptions;
  } else {
    return {};
  }
}

module.exports = {
  getSDKAnalyticsSignature,
  getAnalyticsOptions
};


/***/ }),

/***/ 41494:
/***/ (function(module) {

/**
 * @description Removes patch version from the semver if it exists
 *              Turns x.y.z OR x.y into x.y
 * @param {'x.y.z' || 'x.y' || string} semVerStr
 */
module.exports = (semVerStr) => {
  let parts = semVerStr.split('.');
  return `${parts[0]}.${parts[1]}`;
}


/***/ }),

/***/ 41751:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

const stringPad = __webpack_require__(97822);

/**
 * @description A semVer like string, x.y.z or x.y is allowed
 *              Reverses the version positions, x.y.z turns to z.y.x
 *              Pads each segment with '0' so they have length of 2
 *              Example: 1.2.3 -> 03.02.01
 * @param {string} semVer Input can be either x.y.z or x.y
 * @return {string} in the form of zz.yy.xx (
 */
module.exports = (semVer) => {
  if (semVer.split('.').length < 2) {
    throw new Error('invalid semVer, must have at least two segments');
  }

  // Split by '.', reverse, create new array with padded values and concat it together
  return semVer.split('.').reverse().map((segment) => {
    return stringPad(segment, 2, '0');
  }).join('.');
};


/***/ }),

/***/ 97822:
/***/ (function(module) {

function repeatStringNumTimes(string, times) {
  let repeatedString = "";
  while (times > 0) {
    repeatedString += string;
    times--;
  }
  return repeatedString;
}

module.exports = (value, targetLength, padString) => {
  targetLength = targetLength >> 0; // truncate if number or convert non-number to 0;
  padString = String((typeof padString !== 'undefined' ? padString : ' '));
  if (value.length > targetLength) {
    return String(value);
  } else {
    targetLength = targetLength - value.length;
    if (targetLength > padString.length) {
      padString += repeatStringNumTimes(padString, targetLength / padString.length);
    }
    return padString.slice(0, targetLength) + String(value);
  }
}


/***/ }),

/***/ 48886:
/***/ (function(module) {

const DEFAULT_RESPONSIVE_WIDTH_TRANSFORMATION = {
  width: "auto",
  crop: "limit"
};

const DEFAULT_POSTER_OPTIONS = {
  format: 'jpg',
  resource_type: 'video'
};

const DEFAULT_VIDEO_SOURCE_TYPES = ['webm', 'mp4', 'ogv'];

const CONDITIONAL_OPERATORS = {
  "=": 'eq',
  "!=": 'ne',
  "<": 'lt',
  ">": 'gt',
  "<=": 'lte',
  ">=": 'gte',
  "&&": 'and',
  "||": 'or',
  "*": "mul",
  "/": "div",
  "+": "add",
  "-": "sub",
  "^": "pow"
};

let SIMPLE_PARAMS = [
  ["audio_codec", "ac"],
  ["audio_frequency", "af"],
  ["bit_rate", 'br'],
  ["color_space", "cs"],
  ["default_image", "d"],
  ["delay", "dl"],
  ["density", "dn"],
  ["duration", "du"],
  ["end_offset", "eo"],
  ["fetch_format", "f"],
  ["gravity", "g"],
  ["page", "pg"],
  ["prefix", "p"],
  ["start_offset", "so"],
  ["streaming_profile", "sp"],
  ["video_codec", "vc"],
  ["video_sampling", "vs"]
];

const PREDEFINED_VARS = {
  "aspect_ratio": "ar",
  "aspectRatio": "ar",
  "current_page": "cp",
  "currentPage": "cp",
  "duration": "du",
  "face_count": "fc",
  "faceCount": "fc",
  "height": "h",
  "initial_aspect_ratio": "iar",
  "initial_height": "ih",
  "initial_width": "iw",
  "initialAspectRatio": "iar",
  "initialHeight": "ih",
  "initialWidth": "iw",
  "initial_duration": "idu",
  "initialDuration": "idu",
  "page_count": "pc",
  "page_x": "px",
  "page_y": "py",
  "pageCount": "pc",
  "pageX": "px",
  "pageY": "py",
  "tags": "tags",
  "width": "w"
};

const TRANSFORMATION_PARAMS = [
  'angle',
  'aspect_ratio',
  'audio_codec',
  'audio_frequency',
  'background',
  'bit_rate',
  'border',
  'color',
  'color_space',
  'crop',
  'default_image',
  'delay',
  'density',
  'dpr',
  'duration',
  'effect',
  'end_offset',
  'fetch_format',
  'flags',
  'fps',
  'gravity',
  'height',
  'if',
  'keyframe_interval',
  'offset',
  'opacity',
  'overlay',
  'page',
  'prefix',
  'quality',
  'radius',
  'raw_transformation',
  'responsive_width',
  'size',
  'start_offset',
  'streaming_profile',
  'transformation',
  'underlay',
  'variables',
  'video_codec',
  'video_sampling',
  'width',
  'x',
  'y',
  'zoom' // + any key that starts with '$'
];

const LAYER_KEYWORD_PARAMS = {
  font_weight: "normal",
  font_style: "normal",
  text_decoration: "none",
  text_align: null,
  stroke: "none"
};

const UPLOAD_PREFIX = "https://api.cloudinary.com";

const SUPPORTED_SIGNATURE_ALGORITHMS = ["sha1", "sha256"];
const DEFAULT_SIGNATURE_ALGORITHM = "sha1";

module.exports = {
  DEFAULT_RESPONSIVE_WIDTH_TRANSFORMATION,
  DEFAULT_POSTER_OPTIONS,
  DEFAULT_VIDEO_SOURCE_TYPES,
  CONDITIONAL_OPERATORS,
  PREDEFINED_VARS,
  LAYER_KEYWORD_PARAMS,
  TRANSFORMATION_PARAMS,
  SIMPLE_PARAMS,
  UPLOAD_PREFIX,
  SUPPORTED_SIGNATURE_ALGORITHMS,
  DEFAULT_SIGNATURE_ALGORITHM
};


/***/ }),

/***/ 14834:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* eslint-disable no-bitwise */
// http://kevin.vanzonneveld.net
// +   original by: Webtoolkit.info (http://www.webtoolkit.info/)
// +   improved by: T0bsn
// +   improved by: http://stackoverflow.com/questions/2647935/javascript-crc32-function-and-php-crc32-not-matching
// -    depends on: utf8_encode
// *     example 1: crc32('Kevin van Zonneveld')
// *     returns 1: 1249991249

const utf8_encode = __webpack_require__(23129);

/**
 * Compute the crc32 checksum if the given string
 * @private
 * @param {string} str
 * @return {number|*}
 */
function crc32(str) {
  let crc, i, iTop, table, x, y;
  str = utf8_encode(str);
  table = "00000000 77073096 EE0E612C 990951BA 076DC419 706AF48F E963A535 9E6495A3 0EDB8832 79DCB8A4 E0D5E91E 97D2D988 09B64C2B 7EB17CBD E7B82D07 90BF1D91 1DB71064 6AB020F2 F3B97148 84BE41DE 1ADAD47D 6DDDE4EB F4D4B551 83D385C7 136C9856 646BA8C0 FD62F97A 8A65C9EC 14015C4F 63066CD9 FA0F3D63 8D080DF5 3B6E20C8 4C69105E D56041E4 A2677172 3C03E4D1 4B04D447 D20D85FD A50AB56B 35B5A8FA 42B2986C DBBBC9D6 ACBCF940 32D86CE3 45DF5C75 DCD60DCF ABD13D59 26D930AC 51DE003A C8D75180 BFD06116 21B4F4B5 56B3C423 CFBA9599 B8BDA50F 2802B89E 5F058808 C60CD9B2 B10BE924 2F6F7C87 58684C11 C1611DAB B6662D3D 76DC4190 01DB7106 98D220BC EFD5102A 71B18589 06B6B51F 9FBFE4A5 E8B8D433 7807C9A2 0F00F934 9609A88E E10E9818 7F6A0DBB 086D3D2D 91646C97 E6635C01 6B6B51F4 1C6C6162 856530D8 F262004E 6C0695ED 1B01A57B 8208F4C1 F50FC457 65B0D9C6 12B7E950 8BBEB8EA FCB9887C 62DD1DDF 15DA2D49 8CD37CF3 FBD44C65 4DB26158 3AB551CE A3BC0074 D4BB30E2 4ADFA541 3DD895D7 A4D1C46D D3D6F4FB 4369E96A 346ED9FC AD678846 DA60B8D0 44042D73 33031DE5 AA0A4C5F DD0D7CC9 5005713C 270241AA BE0B1010 C90C2086 5768B525 206F85B3 B966D409 CE61E49F 5EDEF90E 29D9C998 B0D09822 C7D7A8B4 59B33D17 2EB40D81 B7BD5C3B C0BA6CAD EDB88320 9ABFB3B6 03B6E20C 74B1D29A EAD54739 9DD277AF 04DB2615 73DC1683 E3630B12 94643B84 0D6D6A3E 7A6A5AA8 E40ECF0B 9309FF9D 0A00AE27 7D079EB1 F00F9344 8708A3D2 1E01F268 6906C2FE F762575D 806567CB 196C3671 6E6B06E7 FED41B76 89D32BE0 10DA7A5A 67DD4ACC F9B9DF6F 8EBEEFF9 17B7BE43 60B08ED5 D6D6A3E8 A1D1937E 38D8C2C4 4FDFF252 D1BB67F1 A6BC5767 3FB506DD 48B2364B D80D2BDA AF0A1B4C 36034AF6 41047A60 DF60EFC3 A867DF55 316E8EEF 4669BE79 CB61B38C BC66831A 256FD2A0 5268E236 CC0C7795 BB0B4703 220216B9 5505262F C5BA3BBE B2BD0B28 2BB45A92 5CB36A04 C2D7FFA7 B5D0CF31 2CD99E8B 5BDEAE1D 9B64C2B0 EC63F226 756AA39C 026D930A 9C0906A9 EB0E363F 72076785 05005713 95BF4A82 E2B87A14 7BB12BAE 0CB61B38 92D28E9B E5D5BE0D 7CDCEFB7 0BDBDF21 86D3D2D4 F1D4E242 68DDB3F8 1FDA836E 81BE16CD F6B9265B 6FB077E1 18B74777 88085AE6 FF0F6A70 66063BCA 11010B5C 8F659EFF F862AE69 616BFFD3 166CCF45 A00AE278 D70DD2EE 4E048354 3903B3C2 A7672661 D06016F7 4969474D 3E6E77DB AED16A4A D9D65ADC 40DF0B66 37D83BF0 A9BCAE53 DEBB9EC5 47B2CF7F 30B5FFE9 BDBDF21C CABAC28A 53B39330 24B4A3A6 BAD03605 CDD70693 54DE5729 23D967BF B3667A2E C4614AB8 5D681B02 2A6F2B94 B40BBE37 C30C8EA1 5A05DF1B 2D02EF8D";
  crc = 0;
  x = 0;
  y = 0;
  crc = crc ^ (-1);
  i = 0;
  iTop = str.length;
  while (i < iTop) {
    y = (crc ^ str.charCodeAt(i)) & 0xFF;
    x = "0x" + table.substr(y * 9, 8);
    crc = (crc >>> 8) ^ x;
    i++;
  }
  crc = crc ^ (-1);
  if (crc < 0) {
    crc += 4294967296;
  }
  return crc;
}

module.exports = crc32;


/***/ }),

/***/ 31841:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* provided dependency */ var Buffer = __webpack_require__(40263)["Buffer"];
function base64Encode(input) {
  if (!(input instanceof Buffer)) {
    input = Buffer.from(String(input), 'binary');
  }
  return input.toString('base64');
}

module.exports.base64Encode = base64Encode;


/***/ }),

/***/ 57695:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

const { base64Encode } = __webpack_require__(31841)

function base64EncodeURL(sourceUrl) {
  try {
    sourceUrl = decodeURI(sourceUrl);
  } catch (error) {
    // ignore errors
  }
  sourceUrl = encodeURI(sourceUrl);
  return base64Encode(sourceUrl)
    .replace(/\+/g, '-') // Convert '+' to '-'
    .replace(/\//g, '_') // Convert '/' to '_'
    .replace(/=+$/, ''); // Remove ending '=';
}


module.exports.base64EncodeURL = base64EncodeURL;


/***/ }),

/***/ 35490:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

const stringPad = __webpack_require__(97822);

const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
let num = 0;

/**
 * Map of six-bit binary codes to Base64 characters
 */
let base64Map = {};

[...chars].forEach((char) => {
  let key = num.toString(2);
  key = stringPad(key, 6, '0');
  base64Map[key] = char;
  num++;
});

module.exports = base64Map;


/***/ }),

/***/ 53777:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

const isArray = __webpack_require__(12068);
const toArray = __webpack_require__(57333);

/**
 * Serialize an array of arrays into a string
 * @param {string[] | Array.<Array.<string>>} array - An array of arrays.
 *                          If the first element is not an array the argument is wrapped in an array.
 * @returns {string} A string representation of the arrays.
 */
function encodeDoubleArray(array) {
  array = toArray(array);
  if (!isArray(array[0])) {
    array = [array];
  }
  return array.map(e => toArray(e).join(",")).join("|");
}

module.exports = encodeDoubleArray;


/***/ }),

/***/ 8321:
/***/ (function(module) {

// Based on CGI::unescape. In addition does not escape / :
// smart_escape = (string) => encodeURIComponent(string).replace(/%3A/g, ":").replace(/%2F/g, "/")
function smart_escape(string, unsafe = /([^a-zA-Z0-9_.\-\/:]+)/g) {
  return string.replace(unsafe, function (match) {
    return match.split("").map(function (c) {
      return "%" + c.charCodeAt(0).toString(16).toUpperCase();
    }).join("");
  });
}

module.exports = smart_escape;


/***/ }),

/***/ 14227:
/***/ (function(module) {

/**
 * Returns an ensureOption function that relies on the provided `defaultOptions` argument
 * for default values.
 * @private
 * @param {object} defaultOptions
 * @return {function(*, *, *=): *}
 */
function defaults(defaultOptions) {
  return function ensureOption(options, name, defaultValue) {
    let value;

    if (typeof options[name] !== 'undefined') {
      value = options[name];
    } else if (typeof defaultOptions[name] !== 'undefined') {
      value = defaultOptions[name];
    } else if (typeof defaultValue !== 'undefined') {
      value = defaultValue;
    } else {
      throw new Error(`Must supply ${name}`);
    }

    return value;
  };
}

/**
 * Get the option `name` from options, the global config, or the default value.
 * If the value is not defined and no default value was provided,
 * the method will throw an error.
 * @private
 * @param {object} options
 * @param {string} name
 * @param {*} [defaultValue]
 * @return {*} the value associated with the provided `name` or the default.
 *
 */
module.exports = defaults({});

module.exports.defaults = defaults;


/***/ }),

/***/ 90983:
/***/ (function(module) {

/**
 * Validate that the given values are defined
 * @private
 * @param {object} parameters where each key value pair is the name and value of the argument to validate.
 *
 * @example
 *
 *    function foo(bar){
 *      ensurePresenceOf({bar});
 *      // ...
 *    }
 */
function ensurePresenceOf(parameters) {
  let missing = Object.keys(parameters).filter(key => parameters[key] === undefined);
  if (missing.length) {
    console.error(missing.join(',') + " cannot be undefined");
  }
}

module.exports = ensurePresenceOf;


/***/ }),

/***/ 55542:
/***/ (function(module) {

module.exports = Object.entries ? Object.entries : function (obj) {
  let ownProps = Object.keys(obj),
    i = ownProps.length,
    resArray = new Array(i); // preallocate the Array
  while (i--) {
    resArray[i] = [ownProps[i], obj[ownProps[i]]];
  }

  return resArray;
};


/***/ }),

/***/ 73610:
/***/ (function(module) {


/**
 * Helper function. Gets or populates srcset breakpoints using provided parameters
 * Either the breakpoints or min_width, max_width, max_images must be provided.
 *
 * @module utils
 * @private
 * @param {srcset} srcset Options with either `breakpoints` or `min_width`, `max_width`, and `max_images`
 *
 * @return {number[]} Array of breakpoints
 *
 */
function generateBreakpoints(srcset) {
  let breakpoints = srcset.breakpoints || [];
  if (breakpoints.length) {
    return breakpoints;
  }
  let [min_width, max_width, max_images] = [srcset.min_width, srcset.max_width, srcset.max_images].map(Number);
  if ([min_width, max_width, max_images].some(Number.isNaN)) {
    throw 'Either (min_width, max_width, max_images) '
    + 'or breakpoints must be provided to the image srcset attribute';
  }

  if (min_width > max_width) {
    throw 'min_width must be less than max_width';
  }

  if (max_images <= 0) {
    throw 'max_images must be a positive integer';
  } else if (max_images === 1) {
    min_width = max_width;
  }

  let stepSize = Math.ceil((max_width - min_width) / Math.max(max_images - 1, 1));
  for (let current = min_width; current < max_width; current += stepSize) {
    breakpoints.push(current);
  }
  breakpoints.push(max_width);
  return breakpoints;
}
module.exports = generateBreakpoints;


/***/ }),

/***/ 97895:
/***/ (function(module, exports, __webpack_require__) {

/* provided dependency */ var process = __webpack_require__(62601);
/* provided dependency */ var Buffer = __webpack_require__(40263)["Buffer"];
/**
 * Utilities
 * @module utils
 * @borrows module:auth_token as generate_auth_token
 */

const crypto = __webpack_require__(54131);
const querystring = __webpack_require__(9875);
const urlParse = (__webpack_require__(40692).parse);

// Functions used internally
const compact = __webpack_require__(54677);
const first = __webpack_require__(14158);
const isFunction = __webpack_require__(28293);
const isPlainObject = __webpack_require__(84412);
const last = __webpack_require__(44388);
const map = __webpack_require__(44853);
const take = __webpack_require__(54137);
const at = __webpack_require__(78871);

// Exposed by the module
const clone = __webpack_require__(97314);
const extend = __webpack_require__(67453);
const filter = __webpack_require__(77434);
const includes = __webpack_require__(21641);
const isArray = __webpack_require__(12068);
const isEmpty = __webpack_require__(96778);
const isNumber = __webpack_require__(71881);
const isObject = __webpack_require__(36905);
const isString = __webpack_require__(33874);
const isUndefined = __webpack_require__(99231);

const smart_escape = __webpack_require__(8321);
const consumeOption = __webpack_require__(70922);
const toArray = __webpack_require__(57333);
let {base64EncodeURL} = __webpack_require__(57695);
const encodeDoubleArray = __webpack_require__(53777);

const config = __webpack_require__(89235);
const generate_token = __webpack_require__(39017);
const crc32 = __webpack_require__(14834);
const ensurePresenceOf = __webpack_require__(90983);
const ensureOption = (__webpack_require__(14227).defaults)(config());
const entries = __webpack_require__(55542);
const isRemoteUrl = __webpack_require__(2839);

const getSDKVersions = __webpack_require__(1592);
const {
  getAnalyticsOptions,
  getSDKAnalyticsSignature
} = __webpack_require__(65756);

exports = module.exports;
const utils = module.exports;

try {
  // eslint-disable-next-line global-require
  utils.VERSION = (__webpack_require__(92722)/* .version */ .i8);
} catch (error) {
  utils.VERSION = '';
}

function generate_auth_token(options) {
  let token_options = Object.assign({}, config().auth_token, options);
  return generate_token(token_options);
}

exports.CF_SHARED_CDN = "d3jpl91pxevbkh.cloudfront.net";
exports.OLD_AKAMAI_SHARED_CDN = "cloudinary-a.akamaihd.net";
exports.AKAMAI_SHARED_CDN = "res.cloudinary.com";
exports.SHARED_CDN = exports.AKAMAI_SHARED_CDN;
exports.USER_AGENT = `CloudinaryNodeJS/${exports.VERSION} (Node ${process.versions.node})`;

// Add platform information to the USER_AGENT header
// This is intended for platform information and not individual applications!
exports.userPlatform = "";

function getUserAgent() {
  return isEmpty(utils.userPlatform) ? `${utils.USER_AGENT}` : `${utils.userPlatform} ${utils.USER_AGENT}`;
}

const {
  DEFAULT_RESPONSIVE_WIDTH_TRANSFORMATION,
  DEFAULT_POSTER_OPTIONS,
  DEFAULT_VIDEO_SOURCE_TYPES,
  CONDITIONAL_OPERATORS,
  PREDEFINED_VARS,
  LAYER_KEYWORD_PARAMS,
  TRANSFORMATION_PARAMS,
  SIMPLE_PARAMS,
  UPLOAD_PREFIX,
  SUPPORTED_SIGNATURE_ALGORITHMS,
  DEFAULT_SIGNATURE_ALGORITHM
} = __webpack_require__(48886);

function textStyle(layer) {
  let keywords = [];
  let style = "";

  if (!isEmpty(layer.text_style)) {
    return layer.text_style;
  }
  Object.keys(LAYER_KEYWORD_PARAMS).forEach((attr) => {
    let default_value = LAYER_KEYWORD_PARAMS[attr];
    let attr_value = layer[attr] || default_value;
    if (attr_value !== default_value) {
      keywords.push(attr_value);
    }
  });

  Object.keys(layer).forEach((attr) => {
    if (attr === "letter_spacing" || attr === "line_spacing") {
      keywords.push(`${attr}_${layer[attr]}`);
    }
    if (attr === "font_hinting") {
      keywords.push(`${attr.split("_").pop()}_${layer[attr]}`);
    }
    if (attr === "font_antialiasing") {
      keywords.push(`antialias_${layer[attr]}`);
    }
  });

  if (layer.hasOwnProperty("font_size" || 0) || !isEmpty(keywords)) {
    if (!layer.font_size) throw new Error('Must supply font_size for text in overlay/underlay');
    if (!layer.font_family) throw new Error('Must supply font_family for text in overlay/underlay');
    keywords.unshift(layer.font_size);
    keywords.unshift(layer.font_family);
    style = compact(keywords).join("_");
  }
  return style;
}

/**
 * Normalize an expression string, replace "nice names" with their coded values and spaces with "_"
 * e.g. `width > 0` => `w_lt_0`
 *
 * @param {String} expression An expression to be normalized
 * @return {Object|String} A normalized String of the input value if possible otherwise the value itself
 */
function normalize_expression(expression) {
  if (!isString(expression) || expression.length === 0 || expression.match(/^!.+!$/)) {
    return expression;
  }

  const operators = "\\|\\||>=|<=|&&|!=|>|=|<|/|-|\\^|\\+|\\*";
  const operatorsPattern = "((" + operators + ")(?=[ _]))";
  const operatorsReplaceRE = new RegExp(operatorsPattern, "g");
  expression = expression.replace(operatorsReplaceRE, match => CONDITIONAL_OPERATORS[match]);

  // Duplicate PREDEFINED_VARS to also include :{var_name} as well as {var_name}
  // Example:
  // -- PREDEFINED_VARS = ['foo']
  // -- predefinedVarsPattern = ':foo|foo'
  // It is done like this because node 6 does not support regex lookbehind
  const predefinedVarsPattern = "(" + Object.keys(PREDEFINED_VARS).map(v => `:${v}|${v}`).join("|") + ")";
  const userVariablePattern = '(\\$_*[^_ ]+)';
  const variablesReplaceRE = new RegExp(`${userVariablePattern}|${predefinedVarsPattern}`, "g");
  expression = expression.replace(variablesReplaceRE, (match) => (PREDEFINED_VARS[match] || match));

  return expression.replace(/[ _]+/g, '_');
}

/**
 * Parse custom_function options
 * @private
 * @param {object|*} customFunction a custom function object containing function_type and source values
 * @return {string|*} custom_function transformation string
 */
function process_custom_function(customFunction) {
  if (!isObject(customFunction)) {
    return customFunction;
  }
  if (customFunction.function_type === "remote") {
    const encodedSource = base64EncodeURL(customFunction.source);

    return [customFunction.function_type, encodedSource].join(":");
  }
  return [customFunction.function_type, customFunction.source].join(":");
}

/**
 * Parse custom_pre_function options
 * @private
 * @param {object|*} customPreFunction a custom function object containing function_type and source values
 * @return {string|*} custom_pre_function transformation string
 */
function process_custom_pre_function(customPreFunction) {
  let result = process_custom_function(customPreFunction);
  return utils.isString(result) ? `pre:${result}` : null;
}

/**
 * Parse "if" parameter
 * Translates the condition if provided.
 * @private
 * @return {string} "if_" + ifValue
 */
function process_if(ifValue) {
  return ifValue ? "if_" + normalize_expression(ifValue) : ifValue;
}

/**
 * Parse layer options
 * @private
 * @param {object|*} layer The layer to parse.
 * @return {string} layer transformation string
 */
function process_layer(layer) {
  if (isString(layer)) {
    let resourceType = null;
    let layerUrl = '';

    let fetchLayerBegin = 'fetch:';
    if (layer.startsWith(fetchLayerBegin)) {
      layerUrl = layer.substring(fetchLayerBegin.length);
    } else if (layer.indexOf(':fetch:', 0) !== -1) {
      const parts = layer.split(':', 3);
      resourceType = parts[0];
      layerUrl = parts[2];
    } else {
      return layer;
    }

    layer = {
      url: layerUrl,
      type: 'fetch'
    };

    if (resourceType) {
      layer.resource_type = resourceType;
    }
  }

  if (typeof layer !== 'object') {
    return layer;
  }

  let {
    resource_type,
    text,
    type,
    public_id,
    format,
    url: fetchUrl
  } = layer;
  const components = [];

  if (!isEmpty(text) && isEmpty(resource_type)) {
    resource_type = 'text';
  }

  if (!isEmpty(fetchUrl) && isEmpty(type)) {
    type = 'fetch';
  }

  if (!isEmpty(public_id) && !isEmpty(format)) {
    public_id = `${public_id}.${format}`;
  }

  if (isEmpty(public_id) && resource_type !== 'text' && type !== 'fetch') {
    throw new Error('Must supply public_id for non-text overlay');
  }

  if (!isEmpty(resource_type) && resource_type !== 'image') {
    components.push(resource_type);
  }

  if (!isEmpty(type) && type !== 'upload') {
    components.push(type);
  }

  if (resource_type === 'text' || resource_type === 'subtitles') {
    if (isEmpty(public_id) && isEmpty(text)) {
      throw new Error('Must supply either text or public_in in overlay');
    }

    const textOptions = textStyle(layer);

    if (!isEmpty(textOptions)) {
      components.push(textOptions);
    }

    if (!isEmpty(public_id)) {
      public_id = public_id.replace('/', ':');
      components.push(public_id);
    }

    if (!isEmpty(text)) {
      const variablesRegex = new RegExp(/(\$\([a-zA-Z]\w+\))/g);
      const textDividedByVariables = text.split(variablesRegex).filter(x => x);
      const encodedParts = textDividedByVariables.map(subText => {
        const matches = variablesRegex[Symbol.match](subText);
        const isVariable = matches ? matches.length > 0 : false;
        if (isVariable) {
          return subText;
        }
        return encodeCurlyBraces(encodeURIComponent(smart_escape(subText, new RegExp(/([,\/])/g))));
      });
      components.push(encodedParts.join(''));
    }
  } else if (type === 'fetch') {
    const encodedUrl = base64EncodeURL(fetchUrl);
    components.push(encodedUrl);
  } else {
    public_id = public_id.replace('/', ':');
    components.push(public_id);
  }

  return components.join(':');
}

function replaceAllSubstrings(string, search, replacement = '') {
  return string.split(search).join(replacement);
}

function encodeCurlyBraces(input) {
  return replaceAllSubstrings(replaceAllSubstrings(input, '(', '%28'), ')', '%29');
}

/**
 * Parse radius options
 * @private
 * @param {Array<string|number>|string|number} radius The radius to parse
 * @return {string} radius transformation string
 */
function process_radius(radius) {
  if (!radius) {
    return radius;
  }
  if (!isArray(radius)) {
    radius = [radius];
  }
  if (radius.length === 0 || radius.length > 4) {
    throw new Error("Radius array should contain between 1 and 4 values");
  }
  if (radius.findIndex(x => x === null) >= 0) {
    throw new Error("Corner: Cannot be null");
  }
  return radius.map(normalize_expression).join(':');
}

function build_multi_and_sprite_params(tagOrOptions, options) {
  let tag = null;
  if (typeof tagOrOptions === 'string') {
    tag = tagOrOptions;
  } else {
    if (isEmpty(options)) {
      options = tagOrOptions;
    } else {
      throw new Error('First argument must be a tag when additional options are passed');
    }
    tag = null;
  }
  if (!options && !tag) {
    throw new Error('Either tag or urls are required')
  }
  if (!options) {
    options = {}
  }
  const urls = options.urls
  const transformation = generate_transformation_string(extend({}, options, {
    fetch_format: options.format
  }));
  return {
    tag,
    transformation,
    urls,
    timestamp: utils.timestamp(),
    async: options.async,
    notification_url: options.notification_url
  };
}

function build_upload_params(options) {
  let params = {
    access_mode: options.access_mode,
    allowed_formats: options.allowed_formats && toArray(options.allowed_formats).join(","),
    asset_folder: options.asset_folder,
    async: utils.as_safe_bool(options.async),
    backup: utils.as_safe_bool(options.backup),
    callback: options.callback,
    cinemagraph_analysis: utils.as_safe_bool(options.cinemagraph_analysis),
    colors: utils.as_safe_bool(options.colors),
    display_name: options.display_name,
    discard_original_filename: utils.as_safe_bool(options.discard_original_filename),
    eager: utils.build_eager(options.eager),
    eager_async: utils.as_safe_bool(options.eager_async),
    eager_notification_url: options.eager_notification_url,
    eval: options.eval,
    exif: utils.as_safe_bool(options.exif),
    faces: utils.as_safe_bool(options.faces),
    folder: options.folder,
    format: options.format,
    filename_override: options.filename_override,
    image_metadata: utils.as_safe_bool(options.image_metadata),
    media_metadata: utils.as_safe_bool(options.media_metadata),
    invalidate: utils.as_safe_bool(options.invalidate),
    moderation: options.moderation,
    notification_url: options.notification_url,
    overwrite: utils.as_safe_bool(options.overwrite),
    phash: utils.as_safe_bool(options.phash),
    proxy: options.proxy,
    public_id: options.public_id,
    public_id_prefix: options.public_id_prefix,
    quality_analysis: utils.as_safe_bool(options.quality_analysis),
    responsive_breakpoints: utils.generate_responsive_breakpoints_string(options.responsive_breakpoints),
    return_delete_token: utils.as_safe_bool(options.return_delete_token),
    timestamp: options.timestamp || exports.timestamp(),
    transformation: utils.generate_transformation_string(clone(options)),
    type: options.type,
    unique_filename: utils.as_safe_bool(options.unique_filename),
    upload_preset: options.upload_preset,
    use_filename: utils.as_safe_bool(options.use_filename),
    use_filename_as_display_name: utils.as_safe_bool(options.use_filename_as_display_name),
    quality_override: options.quality_override,
    accessibility_analysis: utils.as_safe_bool(options.accessibility_analysis),
    use_asset_folder_as_public_id_prefix: utils.as_safe_bool(options.use_asset_folder_as_public_id_prefix),
    visual_search: utils.as_safe_bool(options.visual_search),
    on_success: options.on_success
  };
  return utils.updateable_resource_params(options, params);
}

function encode_key_value(arg) {
  if (!isObject(arg)) {
    return arg;
  }
  return entries(arg).map(([k, v]) => `${k}=${v}`).join('|');
}


/**
 * @description Escape = and | with two backslashes \\
 * @param {string|number} value
 * @return {string}
 */
function escapeMetadataValue(value) {
  return value.toString().replace(/([=|])/g, '\\$&');
}


/**
 *
 * @description Encode metadata fields based on incoming value.
 *              If array, escape as color_id=[\"green\",\"red\"]
 *              If string/number, escape as in_stock_id=50
 *
 *              Joins resulting values with a pipe:
 *              in_stock_id=50|color_id=[\"green\",\"red\"]
 *
 *              = and | and escaped by default (this can't be turned off)
 *
 * @param metadataObj
 * @return {string}
 */
function encode_context(metadataObj) {
  if (!isObject(metadataObj)) {
    return metadataObj;
  }

  return entries(metadataObj).map(([key, value]) => {
    // if string, simply parse the value and move on
    if (isString(value)) {
      return `${key}=${escapeMetadataValue(value)}`;

      // If array, parse each item individually
    } else if (isArray(value)) {
      let values = value.map((innerVal) => {
        return `\"${escapeMetadataValue(innerVal)}\"`
      }).join(',');
      return `${key}=[${values}]`
      // if number, convert to string
    } else if (Number.isInteger(value)) {
      return `${key}=${escapeMetadataValue(String(value))}`;
      // if unknown, return the value as string
    } else {
      return value.toString();
    }
  }).join('|');
}

function build_eager(transformations) {
  return toArray(transformations)
    .map((transformation) => {
      const transformationString = utils.generate_transformation_string(clone(transformation));
      const format = transformation.format;
      return format == null ? transformationString : `${transformationString}/${format}`;
    }).join('|');
}

/**
 * Build the custom headers for the request
 * @private
 * @param headers
 * @return {Array<string>|object|string} An object of name and value,
 *         an array of header strings, or a string of headers
 */
function build_custom_headers(headers) {
  switch (true) {
  case headers == null:
    return void 0;
  case isArray(headers):
    return headers.join("\n");
  case isObject(headers):
    return entries(headers).map(([k, v]) => `${k}:${v}`).join("\n");
  default:
    return headers;
  }
}

function generate_transformation_string(options) {
  if (utils.isString(options)) {
    return options;
  }
  if (isArray(options)) {
    return options.map(t => utils.generate_transformation_string(clone(t))).filter(utils.present).join('/');
  }

  let responsive_width = consumeOption(options, "responsive_width", config().responsive_width);
  let width = options.width;
  let height = options.height;
  let size = consumeOption(options, "size");
  if (size) {
    [width, height] = size.split("x");
    [options.width, options.height] = [width, height];
  }
  let has_layer = options.overlay || options.underlay;
  let crop = consumeOption(options, "crop");
  let angle = toArray(consumeOption(options, "angle")).join(".");
  let no_html_sizes = has_layer || utils.present(angle) || crop === "fit" || crop === "limit" || responsive_width;
  if (width && (width.toString().indexOf("auto") === 0 || no_html_sizes || parseFloat(width) < 1)) {
    delete options.width;
  }
  if (height && (no_html_sizes || parseFloat(height) < 1)) {
    delete options.height;
  }
  let background = consumeOption(options, "background");
  background = background && background.replace(/^#/, "rgb:");
  let color = consumeOption(options, "color");
  color = color && color.replace(/^#/, "rgb:");
  let base_transformations = toArray(consumeOption(options, "transformation", []));
  let named_transformation = [];
  if (base_transformations.some(isObject)) {
    base_transformations = base_transformations.map(tr => utils.generate_transformation_string(
      isObject(tr) ? clone(tr) : {transformation: tr}
    ));
  } else {
    named_transformation = base_transformations.join(".");
    base_transformations = [];
  }
  let effect = consumeOption(options, "effect");
  if (isArray(effect)) {
    effect = effect.join(":");
  } else if (isObject(effect)) {
    effect = entries(effect).map(
      ([key, value]) => `${key}:${value}`
    );
  }
  let border = consumeOption(options, "border");
  if (isObject(border)) {
    border = `${border.width != null ? border.width : 2}px_solid_${(border.color != null ? border.color : "black").replace(/^#/, 'rgb:')}`;
  } else if (/^\d+$/.exec(border)) { // fallback to html border attributes
    options.border = border;
    border = void 0;
  }
  let flags = toArray(consumeOption(options, "flags")).join(".");
  let dpr = consumeOption(options, "dpr", config().dpr);
  if (options.offset != null) {
    [options.start_offset, options.end_offset] = split_range(consumeOption(options, "offset"));
  }
  if (options.start_offset) {
    options.start_offset = normalize_expression(options.start_offset);
  }
  if (options.end_offset) {
    options.end_offset = normalize_expression(options.end_offset);
  }
  let overlay = process_layer(consumeOption(options, "overlay"));
  let radius = process_radius(consumeOption(options, "radius"));
  let underlay = process_layer(consumeOption(options, "underlay"));
  let ifValue = process_if(consumeOption(options, "if"));
  let custom_function = process_custom_function(consumeOption(options, "custom_function"));
  let custom_pre_function = process_custom_pre_function(consumeOption(options, "custom_pre_function"));
  let fps = consumeOption(options, 'fps');
  if (isArray(fps)) {
    fps = fps.join('-');
  }
  let params = {
    a: normalize_expression(angle),
    ar: normalize_expression(consumeOption(options, "aspect_ratio")),
    b: background,
    bo: border,
    c: crop,
    co: color,
    dpr: normalize_expression(dpr),
    e: normalize_expression(effect),
    fl: flags,
    fn: custom_function || custom_pre_function,
    fps: fps,
    h: normalize_expression(height),
    ki: normalize_expression(consumeOption(options, "keyframe_interval")),
    l: overlay,
    o: normalize_expression(consumeOption(options, "opacity")),
    q: normalize_expression(consumeOption(options, "quality")),
    r: radius,
    t: named_transformation,
    u: underlay,
    w: normalize_expression(width),
    x: normalize_expression(consumeOption(options, "x")),
    y: normalize_expression(consumeOption(options, "y")),
    z: normalize_expression(consumeOption(options, "zoom"))
  };

  SIMPLE_PARAMS.forEach(([name, short]) => {
    let value = consumeOption(options, name);
    if (value !== undefined) {
      params[short] = value;
    }
  });
  if (params.vc != null) {
    params.vc = process_video_params(params.vc);
  }
  ["so", "eo", "du"].forEach((short) => {
    if (params[short] !== undefined) {
      params[short] = norm_range_value(params[short]);
    }
  });

  let variablesParam = consumeOption(options, "variables", []);
  let variables = entries(options)
    .filter(([key, value]) => key.startsWith('$'))
    .map(([key, value]) => {
      delete options[key];
      return `${key}_${normalize_expression(value)}`;
    }).sort().concat(
      variablesParam.map(([name, value]) => `${name}_${normalize_expression(value)}`)
    ).join(',');

  let transformations = entries(params)
    .filter(([key, value]) => utils.present(value))
    .map(([key, value]) => key + '_' + value)
    .sort()
    .join(',');

  let raw_transformation = consumeOption(options, 'raw_transformation');
  transformations = compact([ifValue, variables, transformations, raw_transformation]).join(",");
  base_transformations.push(transformations);
  transformations = base_transformations;
  if (responsive_width) {
    let responsive_width_transformation = config().responsive_width_transformation
      || DEFAULT_RESPONSIVE_WIDTH_TRANSFORMATION;

    transformations.push(utils.generate_transformation_string(clone(responsive_width_transformation)));
  }
  if (String(width).startsWith("auto") || responsive_width) {
    options.responsive = true;
  }
  if (dpr === "auto") {
    options.hidpi = true;
  }
  return filter(transformations, utils.present).join("/");
}

function updateable_resource_params(options, params = {}) {
  if (options.access_control != null) {
    params.access_control = utils.jsonArrayParam(options.access_control);
  }
  if (options.auto_tagging != null) {
    params.auto_tagging = options.auto_tagging;
  }
  if (options.background_removal != null) {
    params.background_removal = options.background_removal;
  }
  if (options.categorization != null) {
    params.categorization = options.categorization;
  }
  if (options.context != null) {
    params.context = utils.encode_context(options.context);
  }
  if (options.metadata != null) {
    params.metadata = utils.encode_context(options.metadata);
  }
  if (options.custom_coordinates != null) {
    params.custom_coordinates = encodeDoubleArray(options.custom_coordinates);
  }
  if (options.detection != null) {
    params.detection = options.detection;
  }
  if (options.face_coordinates != null) {
    params.face_coordinates = encodeDoubleArray(options.face_coordinates);
  }
  if (options.headers != null) {
    params.headers = utils.build_custom_headers(options.headers);
  }
  if (options.notification_url != null) {
    params.notification_url = options.notification_url;
  }
  if (options.ocr != null) {
    params.ocr = options.ocr;
  }
  if (options.raw_convert != null) {
    params.raw_convert = options.raw_convert;
  }
  if (options.similarity_search != null) {
    params.similarity_search = options.similarity_search;
  }
  if (options.tags != null) {
    params.tags = toArray(options.tags).join(",");
  }
  if (options.quality_override != null) {
    params.quality_override = options.quality_override;
  }
  if (options.asset_folder != null) {
    params.asset_folder = options.asset_folder;
  }
  if (options.display_name != null) {
    params.display_name = options.display_name;
  }
  if (options.unique_display_name != null) {
    params.unique_display_name = options.unique_display_name;
  }
  if (options.visual_search != null) {
    params.visual_search = options.visual_search;
  }
  if (options.regions != null) {
    params.regions = JSON.stringify(options.regions);
  }
  return params;
}

/**
 * A list of keys used by the url() function.
 * @private
 */
const URL_KEYS = [
  'api_secret',
  'auth_token',
  'cdn_subdomain',
  'cloud_name',
  'cname',
  'format',
  'long_url_signature',
  'private_cdn',
  'resource_type',
  'secure',
  'secure_cdn_subdomain',
  'secure_distribution',
  'shorten',
  'sign_url',
  'ssl_detected',
  'type',
  'url_suffix',
  'use_root_path',
  'version'
];

/**
 * Create a new object with only URL parameters
 * @param {object} options The source object
 * @return {Object} An object containing only URL parameters
 */

function extractUrlParams(options) {
  return pickOnlyExistingValues(options, ...URL_KEYS);
}

/**
 * Create a new object with only transformation parameters
 * @param {object} options The source object
 * @return {Object} An object containing only transformation parameters
 */

function extractTransformationParams(options) {
  return pickOnlyExistingValues(options, ...TRANSFORMATION_PARAMS);
}

/**
 * Handle the format parameter for fetch urls
 * @private
 * @param options url and transformation options. This argument may be changed by the function!
 */

function patchFetchFormat(options = {}) {
  if (options.type === "fetch") {
    if (options.fetch_format == null) {
      options.fetch_format = consumeOption(options, "format");
    }
  }
}

function build_distribution_domain(source, options) {
  const cloud_name = consumeOption(options, 'cloud_name', config().cloud_name);
  if (!cloud_name) {
    throw new Error('Must supply cloud_name in tag or in configuration');
  }

  let secure = consumeOption(options, 'secure', true);
  const ssl_detected = consumeOption(options, 'ssl_detected', config().ssl_detected);
  if (secure === null) {
    secure = ssl_detected || config().secure;
  }

  const private_cdn = consumeOption(options, 'private_cdn', config().private_cdn);
  const cname = consumeOption(options, 'cname', config().cname);
  const secure_distribution = consumeOption(options, 'secure_distribution', config().secure_distribution);
  const cdn_subdomain = consumeOption(options, 'cdn_subdomain', config().cdn_subdomain);
  const secure_cdn_subdomain = consumeOption(options, 'secure_cdn_subdomain', config().secure_cdn_subdomain);

  return unsigned_url_prefix(source, cloud_name, private_cdn, cdn_subdomain, secure_cdn_subdomain, cname, secure, secure_distribution);
}

function url(public_id, options = {}) {
  let signature, source_to_sign;
  utils.patchFetchFormat(options);
  let type = consumeOption(options, "type", null);
  let transformation = utils.generate_transformation_string(options);

  let resource_type = consumeOption(options, "resource_type", "image");
  let version = consumeOption(options, "version");
  let force_version = consumeOption(options, "force_version", config().force_version);
  if (force_version == null) {
    force_version = true;
  }
  let long_url_signature = !!consumeOption(options, "long_url_signature", config().long_url_signature);
  let format = consumeOption(options, "format");
  let shorten = consumeOption(options, "shorten", config().shorten);
  let sign_url = consumeOption(options, "sign_url", config().sign_url);
  let api_secret = consumeOption(options, "api_secret", config().api_secret);
  let url_suffix = consumeOption(options, "url_suffix");
  let use_root_path = consumeOption(options, "use_root_path", config().use_root_path);
  let signature_algorithm = consumeOption(options, "signature_algorithm", config().signature_algorithm || DEFAULT_SIGNATURE_ALGORITHM);
  if (long_url_signature) {
    signature_algorithm = 'sha256';
  }
  let auth_token = consumeOption(options, "auth_token");
  if (auth_token !== false) {
    auth_token = exports.merge(config().auth_token, auth_token);
  }
  let preloaded = /^(image|raw)\/([a-z0-9_]+)\/v(\d+)\/([^#]+)$/.exec(public_id);
  if (preloaded) {
    resource_type = preloaded[1];
    type = preloaded[2];
    version = preloaded[3];
    public_id = preloaded[4];
  }
  let original_source = public_id;
  if (public_id == null) {
    return original_source;
  }
  public_id = public_id.toString();
  if (type === null && public_id.match(/^https?:\//i)) {
    return original_source;
  }
  [resource_type, type] = finalize_resource_type(resource_type, type, url_suffix, use_root_path, shorten);
  [public_id, source_to_sign] = finalize_source(public_id, format, url_suffix);

  if (version == null && force_version && source_to_sign.indexOf("/") >= 0 && !source_to_sign.match(/^v[0-9]+/) && !source_to_sign.match(/^https?:\//)) {
    version = 1;
  }
  if (version != null) {
    version = `v${version}`;
  } else {
    version = null;
  }

  transformation = transformation.replace(/([^:])\/\//g, '$1/');
  if (sign_url && isEmpty(auth_token)) {
    let to_sign = [transformation, source_to_sign].filter(function (part) {
      return (part != null) && part !== '';
    }).join('/');

    const signatureConfig = {};
    if (long_url_signature) {
      signatureConfig.algorithm = 'sha256';
      signatureConfig.signatureLength = 32;
    } else {
      signatureConfig.algorithm = signature_algorithm;
      signatureConfig.signatureLength = 8;
    }

    const truncated = compute_hash(to_sign + api_secret, signatureConfig.algorithm, 'base64')
      .slice(0, signatureConfig.signatureLength)
      .replace(/\//g, '_')
      .replace(/\+/g, '-');
    signature = `s--${truncated}--`;
  }

  let prefix = build_distribution_domain(public_id, options);
  let resultUrl = [prefix, resource_type, type, signature, transformation, version, public_id].filter(function (part) {
    return (part != null) && part !== '';
  }).join('/').replace(/ /g, '%20');
  if (sign_url && !isEmpty(auth_token)) {
    auth_token.url = urlParse(resultUrl).path;
    let token = generate_token(auth_token);
    resultUrl += `?${token}`;
  }

  let urlAnalytics = ensureOption(options, 'urlAnalytics', true);

  if (urlAnalytics === true) {
    let {
      sdkCode,
      sdkSemver,
      techVersion,
      product
    } = getSDKVersions();
    let sdkVersions = {
      sdkCode: ensureOption(options, 'sdkCode', sdkCode),
      sdkSemver: ensureOption(options, 'sdkSemver', sdkSemver),
      techVersion: ensureOption(options, 'techVersion', techVersion),
      product: ensureOption(options, 'product', product),
      urlAnalytics
    };

    let analyticsOptions = getAnalyticsOptions(
      Object.assign({}, options, sdkVersions)
    );

    let sdkAnalyticsSignature = getSDKAnalyticsSignature(analyticsOptions);

    // url might already have a '?' query param
    let appender = '?';
    if (resultUrl.indexOf('?') >= 0) {
      appender = '&';
    }
    resultUrl = `${resultUrl}${appender}_a=${sdkAnalyticsSignature}`;
  }

  return resultUrl;
}

function video_url(public_id, options) {
  options = extend({
    resource_type: 'video'
  }, options);
  return utils.url(public_id, options);
}

function finalize_source(source, format, url_suffix) {
  let source_to_sign;
  source = source.replace(/([^:])\/\//g, '$1/');
  if (source.match(/^https?:\//i)) {
    source = smart_escape(source);
    source_to_sign = source;
  } else {
    source = encodeURIComponent(decodeURIComponent(source)).replace(/%3A/g, ":").replace(/%2F/g, "/");
    source_to_sign = source;
    if (url_suffix) {
      if (url_suffix.match(/[\.\/]/)) {
        throw new Error('url_suffix should not include . or /');
      }
      source = source + '/' + url_suffix;
    }
    if (format != null) {
      source = source + '.' + format;
      source_to_sign = source_to_sign + '.' + format;
    }
  }
  return [source, source_to_sign];
}

function video_thumbnail_url(public_id, options) {
  options = extend({}, DEFAULT_POSTER_OPTIONS, options);
  return utils.url(public_id, options);
}

function finalize_resource_type(resource_type, type, url_suffix, use_root_path, shorten) {
  if (type == null) {
    type = 'upload';
  }
  if (url_suffix != null) {
    if (resource_type === 'image' && type === 'upload') {
      resource_type = "images";
      type = null;
    } else if (resource_type === 'image' && type === 'private') {
      resource_type = 'private_images';
      type = null;
    } else if (resource_type === 'image' && type === 'authenticated') {
      resource_type = 'authenticated_images';
      type = null;
    } else if (resource_type === 'raw' && type === 'upload') {
      resource_type = 'files';
      type = null;
    } else if (resource_type === 'video' && type === 'upload') {
      resource_type = 'videos';
      type = null;
    } else {
      throw new Error("URL Suffix only supported for image/upload, image/private, image/authenticated, video/upload and raw/upload");
    }
  }
  if (use_root_path) {
    if ((resource_type === 'image' && type === 'upload') || (resource_type === 'images' && (type == null))) {
      resource_type = null;
      type = null;
    } else {
      throw new Error("Root path only supported for image/upload");
    }
  }
  if (shorten && resource_type === 'image' && type === 'upload') {
    resource_type = 'iu';
    type = null;
  }
  return [resource_type, type];
}

// cdn_subdomain and secure_cdn_subdomain
// 1) Customers in shared distribution (e.g. res.cloudinary.com)
//    if cdn_domain is true uses res-[1-5].cloudinary.com for both http and https.
//    Setting secure_cdn_subdomain to false disables this for https.
// 2) Customers with private cdn
//    if cdn_domain is true uses cloudname-res-[1-5].cloudinary.com for http
//    if secure_cdn_domain is true uses cloudname-res-[1-5].cloudinary.com for https
//      (please contact support if you require this)
// 3) Customers with cname
//    if cdn_domain is true uses a[1-5].cname for http.
//    For https, uses the same naming scheme as 1 for shared distribution and as 2 for private distribution.

function unsigned_url_prefix(
  source,
  cloud_name,
  private_cdn,
  cdn_subdomain,
  secure_cdn_subdomain,
  cname,
  secure,
  secure_distribution
) {
  let prefix;
  if (cloud_name.indexOf("/") === 0) {
    return '/res' + cloud_name;
  }
  let shared_domain = !private_cdn;
  if (secure) {
    if ((secure_distribution == null) || secure_distribution === exports.OLD_AKAMAI_SHARED_CDN) {
      secure_distribution = private_cdn ? cloud_name + "-res.cloudinary.com" : exports.SHARED_CDN;
    }
    if (shared_domain == null) {
      shared_domain = secure_distribution === exports.SHARED_CDN;
    }
    if ((secure_cdn_subdomain == null) && shared_domain) {
      secure_cdn_subdomain = cdn_subdomain;
    }
    if (secure_cdn_subdomain) {
      secure_distribution = secure_distribution.replace('res.cloudinary.com', 'res-' + ((crc32(source) % 5) + 1 + '.cloudinary.com'));
    }
    prefix = 'https://' + secure_distribution;
  } else if (cname) {
    let subdomain = cdn_subdomain ? 'a' + ((crc32(source) % 5) + 1) + '.' : '';
    prefix = 'http://' + subdomain + cname;
  } else {
    let cdn_part = private_cdn ? cloud_name + '-' : '';
    let subdomain_part = cdn_subdomain ? '-' + ((crc32(source) % 5) + 1) : '';
    let host = [cdn_part, 'res', subdomain_part, '.cloudinary.com'].join('');
    prefix = 'http://' + host;
  }
  if (shared_domain) {
    prefix += '/' + cloud_name;
  }
  return prefix;
}

function base_api_url_v1_1() {
  return base_api_url('v1_1');
}

function base_api_url_v2() {
  return base_api_url('v2');
}

function base_api_url(api_version) {
  if (!api_version || api_version.length === 0) {
    throw new Error('api_version needs to be a non-empty string');
  }

  return (path = [], options = []) => {
    let cloudinary = ensureOption(options, "upload_prefix", UPLOAD_PREFIX);
    let cloud_name = ensureOption(options, "cloud_name");
    let encode_path = unencoded_path => encodeURIComponent(unencoded_path).replace("'", '%27');
    let encoded_path = Array.isArray(path) ? path.map(encode_path) : encode_path(path);
    return [cloudinary, api_version, cloud_name].concat(encoded_path).join("/");
  };
}

function api_url(action = 'upload', options = {}) {
  let resource_type = options.resource_type || "image";
  return base_api_url_v1_1()([resource_type, action], options);
}

function random_public_id() {
  return crypto.randomBytes(12).toString('base64').replace(/[^a-z0-9]/g, "");
}

function signed_preloaded_image(result) {
  return `${result.resource_type}/upload/v${result.version}/${filter([result.public_id, result.format], utils.present).join(".")}#${result.signature}`;
}

function api_sign_request(params_to_sign, api_secret) {
  let to_sign = entries(params_to_sign).filter(
    ([k, v]) => utils.present(v)
  ).map(
    ([k, v]) => `${k}=${toArray(v).join(",")}`
  ).sort().join("&");
  return compute_hash(to_sign + api_secret, config().signature_algorithm || DEFAULT_SIGNATURE_ALGORITHM, 'hex');
}

/**
 * Computes hash from input string using specified algorithm.
 * @private
 * @param {string} input string which to compute hash from
 * @param {string} signature_algorithm algorithm to use for computing hash
 * @param {string} encoding type of encoding
 * @return {string} computed hash value
 */
function compute_hash(input, signature_algorithm, encoding) {
  if (!SUPPORTED_SIGNATURE_ALGORITHMS.includes(signature_algorithm)) {
    throw new Error(`Signature algorithm ${signature_algorithm} is not supported. Supported algorithms: ${SUPPORTED_SIGNATURE_ALGORITHMS.join(', ')}`);
  }
  const hash = crypto.createHash(signature_algorithm).update(input).digest();
  return Buffer.from(hash).toString(encoding);
}

function clear_blank(hash) {
  let filtered_hash = {};
  entries(hash).filter(
    ([k, v]) => utils.present(v)
  ).forEach(
    ([k, v]) => {
      filtered_hash[k] = v.filter ? v.filter(x => x) : v;
    }
  );
  return filtered_hash;
}

function sort_object_by_key(object) {
  return Object.keys(object).sort().reduce((obj, key) => {
    obj[key] = object[key];
    return obj;
  }, {});
}

function merge(hash1, hash2) {
  return {...hash1, ...hash2};
}

function sign_request(params, options = {}) {
  let apiKey = ensureOption(options, 'api_key');
  let apiSecret = ensureOption(options, 'api_secret');
  params = exports.clear_blank(params);
  params.signature = exports.api_sign_request(params, apiSecret);
  params.api_key = apiKey;
  return params;
}

function webhook_signature(data, timestamp, options = {}) {
  ensurePresenceOf({
    data,
    timestamp
  });

  let api_secret = ensureOption(options, 'api_secret');
  let signature_algorithm = ensureOption(options, 'signature_algorithm', DEFAULT_SIGNATURE_ALGORITHM);
  return compute_hash(data + timestamp + api_secret, signature_algorithm, 'hex');
}

/**
 * Verifies the authenticity of a notification signature
 *
 * @param {string} body JSON of the request's body
 * @param {number} timestamp Unix timestamp in seconds. Can be retrieved from the X-Cld-Timestamp header
 * @param {string} signature Actual signature. Can be retrieved from the X-Cld-Signature header
 * @param {number} [valid_for=7200] The desired time in seconds for considering the request valid
 *
 * @return {boolean}
 */
function verifyNotificationSignature(body, timestamp, signature, valid_for = 7200) {
  // verify that signature is valid for the given timestamp
  if (timestamp < Math.round(Date.now() / 1000) - valid_for) {
    return false;
  }
  const payload_hash = utils.webhook_signature(body, timestamp, {
    api_secret: config().api_secret,
    signature_algorithm: config().signature_algorithm
  });
  return signature === payload_hash;
}

function process_request_params(params, options) {
  if ((options.unsigned != null) && options.unsigned) {
    params = exports.clear_blank(params);
    delete params.timestamp;
  } else if (options.oauth_token || config().oauth_token) {
    params = exports.clear_blank(params);
  } else if (options.signature) {
    params = exports.clear_blank(options);
  } else {
    params = exports.sign_request(params, options);
  }

  return params;
}

function private_download_url(public_id, format, options = {}) {
  let params = exports.sign_request({
    timestamp: options.timestamp || exports.timestamp(),
    public_id: public_id,
    format: format,
    type: options.type,
    attachment: options.attachment,
    expires_at: options.expires_at
  }, options);
  return exports.api_url("download", options) + "?" + querystring.stringify(params);
}

/**
 * Utility method that uses the deprecated ZIP download API.
 * @deprecated Replaced by {download_zip_url} that uses the more advanced and robust archive generation and download API
 */

function zip_download_url(tag, options = {}) {
  let params = exports.sign_request({
    timestamp: options.timestamp || exports.timestamp(),
    tag: tag,
    transformation: utils.generate_transformation_string(options)
  }, options);
  return exports.api_url("download_tag.zip", options) + "?" + hashToQuery(params);
}

/**
 * The returned url should allow downloading the backedup asset based on the
 * version and asset id
 * asset and version id are returned with resource(<PUBLIC_ID1>, { versions: true })
 * @param asset_id
 * @param version_id
 * @param options
 * @returns {string }
 */
function download_backedup_asset(asset_id, version_id, options = {}) {
  let params = exports.sign_request({
    timestamp: options.timestamp || exports.timestamp(),
    asset_id: asset_id,
    version_id: version_id
  }, options);
  return exports.base_api_url_v1()(['download_backup'], options) + "?" + hashToQuery(params);
}

/**
 * Utility method to create a signed URL for specified resources.
 * @param action
 * @param params
 * @param options
 */
function api_download_url(action, params, options) {
  const download_params = {
    ...params,
    mode: "download"
  }
  let cloudinary_params = exports.sign_request(download_params, options);
  return exports.api_url(action, options) + "?" + hashToQuery(cloudinary_params);
}

/**
 * Returns a URL that when invokes creates an archive and returns it.
 * @param {object} options
 * @param {string} [options.resource_type="image"] The resource type of files to include in the archive.
 *   Must be one of :image | :video | :raw
 * @param {string} [options.type="upload"] The specific file type of resources: :upload|:private|:authenticated
 * @param {string|Array} [options.tags] list of tags to include in the archive
 * @param {string|Array<string>} [options.public_ids] list of public_ids to include in the archive
 * @param {string|Array<string>} [options.prefixes]  list of prefixes of public IDs (e.g., folders).
 * @param {string|Array<string>} [options.fully_qualified_public_ids] list of fully qualified public_ids to include
 *   in the archive.
 * @param {string|Array<string>} [options.transformations]  list of transformations.
 *   The derived images of the given transformations are included in the archive. Using the string representation of
 *   multiple chained transformations as we use for the 'eager' upload parameter.
 * @param {string} [options.mode="create"] return the generated archive file or to store it as a raw resource and
 *   return a JSON with URLs for accessing the archive. Possible values: :download, :create
 * @param {string} [options.target_format="zip"]
 * @param {string} [options.target_public_id]  public ID of the generated raw resource.
 *   Relevant only for the create mode. If not specified, random public ID is generated.
 * @param {boolean} [options.flatten_folders=false] If true, flatten public IDs with folders to be in the root
 *   of the archive. Add numeric counter to the file name in case of a name conflict.
 * @param {boolean} [options.flatten_transformations=false] If true, and multiple transformations are given,
 *   flatten the folder structure of derived images and store the transformation details on the file name instead.
 * @param {boolean} [options.use_original_filename] Use the original file name of included images
 *   (if available) instead of the public ID.
 * @param {boolean} [options.async=false] If true, return immediately and perform archive creation in the background.
 *   Relevant only for the create mode.
 * @param {string} [options.notification_url] URL to send an HTTP post request (webhook) to when the
 *   archive creation is completed.
 * @param {string|Array<string>} [options.target_tags=] Allows assigning one or more tags to the generated archive file
 *   (for later housekeeping via the admin API).
 * @param {string} [options.keep_derived=false] keep the derived images used for generating the archive
 * @return {String} archive url
 */
function download_archive_url(options = {}) {
  const params = exports.archive_params(merge(options, {
    mode: "download"
  }))
  return api_download_url("generate_archive", params, options)
}

/**
 * Returns a URL that when invokes creates an zip archive and returns it.
 * @see download_archive_url
 */

function download_zip_url(options = {}) {
  return exports.download_archive_url(merge(options, {
    target_format: "zip"
  }));
}

/**
 * Creates and returns a URL that when invoked creates an archive of a folder
 * @param {string} folder_path Full path (from the root) of the folder to download
 * @param {object} options Additional options
 * @returns {string} Url for downloading an archive of a folder
 */
function download_folder(folder_path, options = {}) {
  options.resource_type = options.resource_type || "all";
  options.prefixes = folder_path;
  let cloudinary_params = exports.sign_request(exports.archive_params(merge(options, {
    mode: "download"
  })), options);
  return exports.api_url("generate_archive", options) + "?" + hashToQuery(cloudinary_params);
}

/**
 * Render the key/value pair as an HTML tag attribute
 * @private
 * @param {string} key
 * @param {string|boolean|number} [value]
 * @return {string} A string representing the HTML attribute
 */
function join_pair(key, value) {
  if (!value) {
    return void 0;
  }
  return value === true ? key : key + "='" + value + "'";
}

/**
 * If the given value is a string, replaces single or double quotes with character entities
 * @private
 * @param {*} value The string to encode quotes in
 * @return {*} Encoded string or original value if not a string
 */
function escapeQuotes(value) {
  return isString(value) ? value.replace(/\"/g, '&#34;').replace(/\'/g, '&#39;') : value;
}

/**
 *
 * @param attrs
 * @return {*}
 */
exports.html_attrs = function html_attrs(attrs) {
  return filter(map(attrs, function (value, key) {
    return join_pair(key, escapeQuotes(value));
  })).sort().join(" ");
};

const CLOUDINARY_JS_CONFIG_PARAMS = ['api_key', 'cloud_name', 'private_cdn', 'secure_distribution', 'cdn_subdomain'];

function cloudinary_js_config() {
  let params = pickOnlyExistingValues(config(), ...CLOUDINARY_JS_CONFIG_PARAMS);
  return `<script type='text/javascript'>\n$.cloudinary.config(${JSON.stringify(params)});\n</script>`;
}

function v1_result_adapter(callback) {
  if (callback == null) {
    return undefined;
  }
  return function (result) {
    if (result.error != null) {
      return callback(result.error);
    }
    return callback(void 0, result);
  };
}

function v1_adapter(name, num_pass_args, v1) {
  return function (...args) {
    let pass_args = take(args, num_pass_args);
    let options = args[num_pass_args];
    let callback = args[num_pass_args + 1];
    if ((callback == null) && isFunction(options)) {
      callback = options;
      options = {};
    }
    callback = v1_result_adapter(callback);
    args = pass_args.concat([callback, options]);
    return v1[name].apply(this, args);
  };
}

function v1_adapters(exports, v1, mapping) {
  return Object.keys(mapping).map((name) => {
    let num_pass_args = mapping[name];
    exports[name] = v1_adapter(name, num_pass_args, v1);
    return exports[name];
  });
}

function as_safe_bool(value) {
  if (value == null) {
    return void 0;
  }
  if (value === true || value === 'true' || value === '1') {
    value = 1;
  }
  if (value === false || value === 'false' || value === '0') {
    value = 0;
  }
  return value;
}

const NUMBER_PATTERN = "([0-9]*)\\.([0-9]+)|([0-9]+)";

const OFFSET_ANY_PATTERN = `(${NUMBER_PATTERN})([%pP])?`;
const RANGE_VALUE_RE = RegExp(`^${OFFSET_ANY_PATTERN}$`);
const OFFSET_ANY_PATTERN_RE = RegExp(`(${OFFSET_ANY_PATTERN})\\.\\.(${OFFSET_ANY_PATTERN})`);

// Split a range into the start and end values
function split_range(range) { // :nodoc:
  switch (range.constructor) {
  case String:
    if (!OFFSET_ANY_PATTERN_RE.test(range)) {
      return range;
    }
    return range.split("..");
  case Array:
    return [first(range), last(range)];
  default:
    return [null, null];
  }
}

function norm_range_value(value) { // :nodoc:
  let offset = String(value).match(RANGE_VALUE_RE);
  if (offset) {
    let modifier = offset[5] ? 'p' : '';
    value = `${offset[1] || offset[4]}${modifier}`;
  }
  return value;
}

/**
 * A video codec parameter can be either a String or a Hash.
 * @param {Object} param <code>vc_<codec>[ : <profile> : [<level>]]</code>
 *                       or <code>{ codec: 'h264', profile: 'basic', level: '3.1' }</code>
 * @return {String} <code><codec> : <profile> : [<level>]]</code> if a Hash was provided
 *                   or the param if a String was provided.
 *                   Returns null if param is not a Hash or String
 */
function process_video_params(param) {
  switch (param.constructor) {
  case Object: {
    let video = "";
    if ('codec' in param) {
      video = param.codec;
      if ('profile' in param) {
        video += ":" + param.profile;
        if ('level' in param) {
          video += ":" + param.level;
        }
      }
    }
    return video;
  }
  case String:
    return param;
  default:
    return null;
  }
}

/**
 * Returns a Hash of parameters used to create an archive
 * @private
 * @param {object} options
 * @return {object} Archive API parameters
 */

function archive_params(options = {}) {
  return {
    allow_missing: exports.as_safe_bool(options.allow_missing),
    async: exports.as_safe_bool(options.async),
    expires_at: options.expires_at,
    flatten_folders: exports.as_safe_bool(options.flatten_folders),
    flatten_transformations: exports.as_safe_bool(options.flatten_transformations),
    keep_derived: exports.as_safe_bool(options.keep_derived),
    mode: options.mode,
    notification_url: options.notification_url,
    prefixes: options.prefixes && toArray(options.prefixes),
    fully_qualified_public_ids: options.fully_qualified_public_ids && toArray(options.fully_qualified_public_ids),
    public_ids: options.public_ids && toArray(options.public_ids),
    skip_transformation_name: exports.as_safe_bool(options.skip_transformation_name),
    tags: options.tags && toArray(options.tags),
    target_format: options.target_format,
    target_public_id: options.target_public_id,
    target_tags: options.target_tags && toArray(options.target_tags),
    timestamp: options.timestamp || exports.timestamp(),
    transformations: utils.build_eager(options.transformations),
    type: options.type,
    use_original_filename: exports.as_safe_bool(options.use_original_filename)
  };
}

exports.process_layer = process_layer;

exports.create_source_tag = function create_source_tag(src, source_type, codecs = null) {
  let video_type = source_type === 'ogv' ? 'ogg' : source_type;
  let mime_type = `video/${video_type}`;
  if (!isEmpty(codecs)) {
    let codecs_str = isArray(codecs) ? codecs.join(', ') : codecs;
    mime_type += `; codecs=${codecs_str}`;
  }
  return `<source ${utils.html_attrs({
    src,
    type: mime_type
  })}>`;
};

function build_explicit_api_params(public_id, options = {}) {
  return [exports.build_upload_params(extend({}, {public_id}, options))];
}

function generate_responsive_breakpoints_string(breakpoints) {
  if (breakpoints == null) {
    return null;
  }
  breakpoints = clone(breakpoints);
  if (!isArray(breakpoints)) {
    breakpoints = [breakpoints];
  }
  for (let j = 0; j < breakpoints.length; j++) {
    let breakpoint_settings = breakpoints[j];
    if (breakpoint_settings != null) {
      if (breakpoint_settings.transformation) {
        breakpoint_settings.transformation = utils.generate_transformation_string(
          clone(breakpoint_settings.transformation)
        );
      }
    }
  }
  return JSON.stringify(breakpoints);
}

function build_streaming_profiles_param(options = {}) {
  let params = pickOnlyExistingValues(options, "display_name", "representations");
  if (isArray(params.representations)) {
    params.representations = JSON.stringify(params.representations.map(
      r => ({
        transformation: utils.generate_transformation_string(r.transformation)
      })
    ));
  }
  return params;
}

function hashToParameters(hash) {
  return entries(hash).reduce((parameters, [key, value]) => {
    if (isArray(value)) {
      key = key.endsWith('[]') ? key : key + '[]';
      const items = value.map(v => [key, v]);
      parameters = parameters.concat(items);
    } else {
      parameters.push([key, value]);
    }
    return parameters;
  }, []);
}

/**
 * Convert a hash of values to a URI query string.
 * Array values are spread as individual parameters.
 * @param {object} hash Key-value parameters
 * @return {string} A URI query string.
 */
function hashToQuery(hash) {
  return hashToParameters(hash).map(
    ([key, value]) => `${querystring.escape(key)}=${querystring.escape(value)}`
  ).join('&');
}

/**
 * Verify that the parameter `value` is defined and it's string value is not zero.
 * <br>This function should not be confused with `isEmpty()`.
 * @private
 * @param {string|number} value The value to check.
 * @return {boolean} True if the value is defined and not empty.
 */

function present(value) {
  return value != null && ("" + value).length > 0;
}

/**
 * Returns a new object with key values from source based on the keys.
 * `null` or `undefined` values are not copied.
 * @private
 * @param {object} source The object to pick values from.
 * @param {...string} keys One or more keys to copy from source.
 * @return {object} A new object with the required keys and values.
 */

function pickOnlyExistingValues(source, ...keys) {
  let result = {};
  if (source) {
    keys.forEach((key) => {
      if (source[key] != null) {
        result[key] = source[key];
      }
    });
  }
  return result;
}

/**
 * Returns a JSON array as String.
 * Yields the array before it is converted to JSON format
 * @private
 * @param {object|String|Array<object>} data
 * @param {function(*):*} [modifier] called with the array before the array is stringified
 * @return {String|null} a JSON array string or `null` if data is `null`
 */

function jsonArrayParam(data, modifier) {
  if (!data) {
    return null;
  }
  if (isString(data)) {
    data = JSON.parse(data);
  }
  if (!isArray(data)) {
    data = [data];
  }
  if (isFunction(modifier)) {
    data = modifier(data);
  }
  return JSON.stringify(data);
}

/**
 * Empty function - do nothing
 *
 */
exports.NOP = function () {
};
exports.generate_auth_token = generate_auth_token;
exports.getUserAgent = getUserAgent;
exports.build_upload_params = build_upload_params;
exports.build_multi_and_sprite_params = build_multi_and_sprite_params;
exports.api_download_url = api_download_url;
exports.timestamp = () => Math.floor(new Date().getTime() / 1000);
exports.option_consume = consumeOption; // for backwards compatibility
exports.build_array = toArray; // for backwards compatibility
exports.encode_double_array = encodeDoubleArray;
exports.encode_key_value = encode_key_value;
exports.encode_context = encode_context;
exports.build_eager = build_eager;
exports.build_custom_headers = build_custom_headers;
exports.generate_transformation_string = generate_transformation_string;
exports.updateable_resource_params = updateable_resource_params;
exports.extractUrlParams = extractUrlParams;
exports.extractTransformationParams = extractTransformationParams;
exports.patchFetchFormat = patchFetchFormat;
exports.url = url;
exports.video_url = video_url;
exports.video_thumbnail_url = video_thumbnail_url;
exports.api_url = api_url;
exports.random_public_id = random_public_id;
exports.signed_preloaded_image = signed_preloaded_image;
exports.api_sign_request = api_sign_request;
exports.clear_blank = clear_blank;
exports.merge = merge;
exports.sign_request = sign_request;
exports.webhook_signature = webhook_signature;
exports.verifyNotificationSignature = verifyNotificationSignature;
exports.process_request_params = process_request_params;
exports.private_download_url = private_download_url;
exports.zip_download_url = zip_download_url;
exports.download_archive_url = download_archive_url;
exports.download_zip_url = download_zip_url;
exports.cloudinary_js_config = cloudinary_js_config;
exports.v1_adapters = v1_adapters;
exports.as_safe_bool = as_safe_bool;
exports.archive_params = archive_params;
exports.build_explicit_api_params = build_explicit_api_params;
exports.generate_responsive_breakpoints_string = generate_responsive_breakpoints_string;
exports.build_streaming_profiles_param = build_streaming_profiles_param;
exports.hashToParameters = hashToParameters;
exports.present = present;
exports.only = pickOnlyExistingValues; // for backwards compatibility
exports.pickOnlyExistingValues = pickOnlyExistingValues;
exports.jsonArrayParam = jsonArrayParam;
exports.download_folder = download_folder;
exports.base_api_url_v1 = base_api_url_v1_1;
exports.base_api_url_v2 = base_api_url_v2;
exports.download_backedup_asset = download_backedup_asset;
exports.compute_hash = compute_hash;
exports.build_distribution_domain = build_distribution_domain;
exports.sort_object_by_key = sort_object_by_key;

// was exported before, so kept for backwards compatibility
exports.DEFAULT_POSTER_OPTIONS = DEFAULT_POSTER_OPTIONS;
exports.DEFAULT_VIDEO_SOURCE_TYPES = DEFAULT_VIDEO_SOURCE_TYPES;

Object.assign(module.exports, {
  normalize_expression,
  at,
  clone,
  extend,
  filter,
  includes,
  isArray,
  isEmpty,
  isNumber,
  isObject,
  isRemoteUrl,
  isString,
  isUndefined,
  keys: source => Object.keys(source),
  ensurePresenceOf
});


/***/ }),

/***/ 2839:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

const isString = __webpack_require__(33874);

/**
 * Checks whether a given url or path is a local file
 * @param {string} url the url or path to the file
 * @returns {boolean} true if the given url is a remote location or data
 */
function isRemoteUrl(url) {
  const SUBSTRING_LENGTH = 120;
  const urlSubstring = isString(url) && url.substring(0, SUBSTRING_LENGTH);
  return isString(url) && /^ftp:|^https?:|^gs:|^s3:|^data:([\w-.]+\/[\w-.]+(\+[\w-.]+)?)?(;[\w-.]+=[\w-.]+)*;base64,([a-zA-Z0-9\/+\n=]+)$/.test(urlSubstring);
}

module.exports = isRemoteUrl;


/***/ }),

/***/ 70922:
/***/ (function(module) {

/**
 * Deletes `option_name` from `options` and return the value if present.
 * If `options` doesn't contain `option_name` the default value is returned.
 * @param {Object} options a collection
 * @param {String} option_name the name (key) of the desired value
 * @param {*} [default_value] the value to return is option_name is missing
 */

function consumeOption(options, option_name, default_value) {
  let result = options[option_name];
  delete options[option_name];
  return result != null ? result : default_value;
}

module.exports = consumeOption;


/***/ }),

/***/ 57333:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

const isArray = __webpack_require__(12068);

/**
 * @desc Turns arguments that aren't arrays into arrays
 * @param arg
 * @returns { any | any[] }
 */
function toArray(arg) {
  switch (true) {
  case arg == null:
    return [];
  case isArray(arg):
    return arg;
  default:
    return [arg];
  }
}

module.exports = toArray;


/***/ }),

/***/ 34027:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


const utils = __webpack_require__(97895);
const generateBreakpoints = __webpack_require__(73610);
const Cache = __webpack_require__(86930);

const isEmpty = utils.isEmpty;

/**
 * Options used to generate the srcset attribute.
 * @typedef {object} srcset
 * @property {(number[]|string[])}   [breakpoints] An array of breakpoints.
 * @property {number}                [min_width]   Minimal width of the srcset images.
 * @property {number}                [max_width]   Maximal width of the srcset images.
 * @property {number}                [max_images]  Number of srcset images to generate.
 * @property {object|string}         [transformation] The transformation to use in the srcset urls.
 * @property {boolean}               [sizes] Whether to calculate and add the sizes attribute.
 */

/**
 * Helper function. Generates a single srcset item url
 *
 * @private
 * @param {string} public_id  Public ID of the resource.
 * @param {number} width      Width in pixels of the srcset item.
 * @param {object|string} transformation
 * @param {object} options    Additional options.
 *
 * @return {string} Resulting URL of the item
 */
function scaledUrl(public_id, width, transformation, options = {}) {
  let configParams = utils.extractUrlParams(options);
  transformation = transformation || options;
  configParams.raw_transformation = utils.generate_transformation_string([utils.extend({}, transformation), { crop: 'scale', width: width }]);

  return utils.url(public_id, configParams);
}

/**
 * If cache is enabled, get the breakpoints from the cache. If the values were not found in the cache,
 * or cache is not enabled, generate the values.
 * @param {srcset} srcset The srcset configuration parameters
 * @param {string} public_id
 * @param {object} options
 * @return {*|Array}
 */
function getOrGenerateBreakpoints(public_id, srcset = {}, options = {}) {
  let breakpoints = [];
  if (srcset.useCache) {
    breakpoints = Cache.get(public_id, options);
    if (!breakpoints) {
      breakpoints = [];
    }
  } else {
    breakpoints = generateBreakpoints(srcset);
  }
  return breakpoints;
}

/**
 * Helper function. Generates srcset attribute value of the HTML img tag
 * @private
 *
 * @param {string} public_id  Public ID of the resource
 * @param {number[]} breakpoints An array of breakpoints (in pixels)
 * @param {object} transformation The transformation
 * @param {object} options Includes html tag options, transformation options
 * @return {string} Resulting srcset attribute value
 */
function generateSrcsetAttribute(public_id, breakpoints, transformation, options) {
  options = utils.clone(options);
  utils.patchFetchFormat(options);
  return breakpoints.map(width => `${scaledUrl(public_id, width, transformation, options)} ${width}w`).join(', ');
}

/**
 * Helper function. Generates sizes attribute value of the HTML img tag
 * @private
 * @param {number[]} breakpoints An array of breakpoints.
 * @return {string} Resulting sizes attribute value
 */
function generateSizesAttribute(breakpoints = []) {
  return breakpoints.map(width => `(max-width: ${width}px) ${width}px`).join(', ');
}

/**
 * Helper function. Generates srcset and sizes attributes of the image tag
 *
 * Generated attributes are added to attributes argument
 *
 * @private
 * @param {string}    publicId  The public ID of the resource
 * @param {object}    attributes Existing HTML attributes.
 * @param {srcset}    srcsetData
 * @param {object}    options    Additional options.
 *
 * @return array The responsive attributes
 */
function generateImageResponsiveAttributes(publicId, attributes = {}, srcsetData = {}, options = {}) {
  // Create both srcset and sizes here to avoid fetching breakpoints twice

  let responsiveAttributes = {};
  if (isEmpty(srcsetData)) {
    return responsiveAttributes;
  }

  const generateSizes = (!attributes.sizes && srcsetData.sizes === true);

  const generateSrcset = !attributes.srcset;
  if (generateSrcset || generateSizes) {
    let breakpoints = getOrGenerateBreakpoints(publicId, srcsetData, options);

    if (generateSrcset) {
      let transformation = srcsetData.transformation;
      let srcsetAttr = generateSrcsetAttribute(publicId, breakpoints, transformation, options);
      if (!isEmpty(srcsetAttr)) {
        responsiveAttributes.srcset = srcsetAttr;
      }
    }

    if (generateSizes) {
      let sizesAttr = generateSizesAttribute(breakpoints);
      if (!isEmpty(sizesAttr)) {
        responsiveAttributes.sizes = sizesAttr;
      }
    }
  }
  return responsiveAttributes;
}

/**
 * Generate a media query
 *
 * @private
 * @param {object} options configuration options
 * @param {number|string} options.min_width
 * @param {number|string} options.max_width
 * @return {string} a media query string
 */
function generateMediaAttr(options = {}) {
  let mediaQuery = [];
  if (options.min_width != null) {
    mediaQuery.push(`(min-width: ${options.min_width}px)`);
  }
  if (options.max_width != null) {
    mediaQuery.push(`(max-width: ${options.max_width}px)`);
  }
  return mediaQuery.join(' and ');
}

module.exports = {
  srcsetUrl: scaledUrl,
  generateSrcsetAttribute,
  generateSizesAttribute,
  generateMediaAttr,
  generateImageResponsiveAttributes
};


/***/ }),

/***/ 23129:
/***/ (function(module) {

/* eslint-disable no-bitwise */
// http://kevin.vanzonneveld.net
// +   original by: Webtoolkit.info (http://www.webtoolkit.info/)
// +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
// +   improved by: sowberry
// +    tweaked by: Jack
// +   bugfixed by: Onno Marsman
// +   improved by: Yves Sucaet
// +   bugfixed by: Onno Marsman
// +   bugfixed by: Ulrich
// +   bugfixed by: Rafal Kukawski
// +   improved by: kirilloid
// *     example 1: utf8_encode('Kevin van Zonneveld')
// *     returns 1: 'Kevin van Zonneveld'

/**
 * Encode the given string
 * @private
 * @param {string} argString the string to encode
 * @return {string}
 */
module.exports = function utf8_encode(argString) {
  let c1, enc, n;
  if (argString == null) {
    return "";
  }
  let string = argString + "";
  let utftext = "";
  let start = 0;
  let end = 0;
  let stringl = string.length;
  n = 0;
  while (n < stringl) {
    c1 = string.charCodeAt(n);
    enc = null;
    if (c1 < 128) {
      end++;
    } else if (c1 > 127 && c1 < 2048) {
      enc = String.fromCharCode((c1 >> 6) | 192, (c1 & 63) | 128);
    } else {
      enc = String.fromCharCode((c1 >> 12) | 224, ((c1 >> 6) & 63) | 128, (c1 & 63) | 128);
    }
    if (enc !== null) {
      if (end > start) {
        utftext += string.slice(start, end);
      }
      utftext += enc;
      start = n + 1;
      end = start;
    }
    n++;
  }
  if (end > start) {
    utftext += string.slice(start, stringl);
  }
  return utftext;
};


/***/ }),

/***/ 15905:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

const api = __webpack_require__(24671);
const v1_adapters = (__webpack_require__(97895).v1_adapters);

v1_adapters(exports, api, {
  ping: 0,
  usage: 0,
  resource_types: 0,
  resources: 0,
  resources_by_tag: 1,
  resources_by_context: 2,
  resources_by_moderation: 2,
  resource_by_asset_id: 1,
  resources_by_asset_ids: 1,
  resources_by_ids: 1,
  resources_by_asset_folder: 1,
  resource: 1,
  restore: 1,
  update: 1,
  delete_resources: 1,
  delete_resources_by_prefix: 1,
  delete_resources_by_tag: 1,
  delete_all_resources: 0,
  delete_derived_resources: 1,
  tags: 0,
  transformations: 0,
  transformation: 1,
  delete_transformation: 1,
  update_transformation: 2,
  create_transformation: 2,
  upload_presets: 0,
  upload_preset: 1,
  delete_upload_preset: 1,
  update_upload_preset: 1,
  create_upload_preset: 0,
  root_folders: 0,
  sub_folders: 1,
  delete_folder: 1,
  create_folder: 1,
  upload_mappings: 0,
  upload_mapping: 1,
  delete_upload_mapping: 1,
  update_upload_mapping: 1,
  create_upload_mapping: 1,
  list_streaming_profiles: 0,
  get_streaming_profile: 1,
  delete_streaming_profile: 1,
  update_streaming_profile: 1,
  create_streaming_profile: 1,
  publish_by_ids: 1,
  publish_by_tag: 1,
  publish_by_prefix: 1,
  update_resources_access_mode_by_prefix: 2,
  update_resources_access_mode_by_tag: 2,
  update_resources_access_mode_by_ids: 2,
  search: 1,
  search_folders: 1,
  visual_search: 1,
  delete_derived_by_transformation: 2,
  add_metadata_field: 1,
  list_metadata_fields: 1,
  delete_metadata_field: 1,
  metadata_field_by_field_id: 1,
  update_metadata_field: 2,
  update_metadata_field_datasource: 2,
  delete_datasource_entries: 2,
  restore_metadata_field_datasource: 2,
  order_metadata_field_datasource: 3,
  reorder_metadata_fields: 2,
  list_metadata_rules: 1,
  add_metadata_rule: 1,
  delete_metadata_rule: 1,
  update_metadata_rule: 2,
  add_related_assets: 2,
  add_related_assets_by_asset_id: 2,
  delete_related_assets: 2,
  delete_related_assets_by_asset_id: 2
});


/***/ }),

/***/ 41792:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

const v1 = __webpack_require__(50229);
const api = __webpack_require__(15905);
const uploader = __webpack_require__(2479);
const search = __webpack_require__(2113);
const search_folders = __webpack_require__(31411);

const v2 = {
  ...v1,
  api,
  uploader,
  search,
  search_folders
};
module.exports = v2;


/***/ }),

/***/ 2113:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

const api = __webpack_require__(15905);
const config = __webpack_require__(89235);
const {
  isEmpty,
  isNumber,
  compute_hash,
  build_distribution_domain,
  clear_blank,
  sort_object_by_key
} = __webpack_require__(97895);
const {base64Encode} = __webpack_require__(31841);

const Search = class Search {
  constructor() {
    this.query_hash = {
      sort_by: [],
      aggregate: [],
      with_field: [],
      fields: []
    };
    this._ttl = 300;
  }

  static instance() {
    return new Search();
  }

  static expression(value) {
    return this.instance().expression(value);
  }

  static max_results(value) {
    return this.instance().max_results(value);
  }

  static next_cursor(value) {
    return this.instance().next_cursor(value);
  }

  static aggregate(value) {
    return this.instance().aggregate(value);
  }

  static with_field(value) {
    return this.instance().with_field(value);
  }

  static fields(value) {
    return this.instance().fields(value);
  }

  static sort_by(field_name, dir = 'asc') {
    return this.instance().sort_by(field_name, dir);
  }

  static ttl(newTtl) {
    return this.instance().ttl(newTtl);
  }

  static execute(options, callback) {
    return this.instance().execute(options, callback);
  }

  expression(value) {
    this.query_hash.expression = value;
    return this;
  }

  max_results(value) {
    this.query_hash.max_results = value;
    return this;
  }

  next_cursor(value) {
    this.query_hash.next_cursor = value;
    return this;
  }

  aggregate(value) {
    const found = this.query_hash.aggregate.find(v => v === value);

    if (!found) {
      this.query_hash.aggregate.push(value);
    }

    return this;
  }

  with_field(value) {
    if (Array.isArray(value)) {
      this.query_hash.with_field = this.query_hash.with_field.concat(value);
    } else {
      this.query_hash.with_field.push(value);
    }

    this.query_hash.with_field = Array.from(new Set(this.query_hash.with_field));
    return this;
  }

  fields(value) {
    if (Array.isArray(value)) {
      this.query_hash.fields = this.query_hash.fields.concat(value);
    } else {
      this.query_hash.fields.push(value);
    }

    this.query_hash.fields = Array.from(new Set(this.query_hash.fields));
    return this;
  }

  sort_by(field_name, dir = "desc") {
    let sort_bucket;
    sort_bucket = {};
    sort_bucket[field_name] = dir;

    // Check if this field name is already stored in the hash
    const previously_sorted_obj = this.query_hash.sort_by.find((sort_by) => sort_by[field_name]);

    // Since objects are references in Javascript, we can update the reference we found
    // For example,
    if (previously_sorted_obj) {
      previously_sorted_obj[field_name] = dir;
    } else {
      this.query_hash.sort_by.push(sort_bucket);
    }

    return this;
  }

  ttl(newTtl) {
    if (isNumber(newTtl)) {
      this._ttl = newTtl;
      return this;
    }

    throw new Error('New TTL value has to be a Number.');
  }

  to_query() {
    Object.keys(this.query_hash).forEach((k) => {
      let v = this.query_hash[k];
      if (!isNumber(v) && isEmpty(v)) {
        delete this.query_hash[k];
      }
    });
    return this.query_hash;
  }

  execute(options, callback) {
    if (callback === null) {
      callback = options;
    }
    options = options || {};
    return api.search(this.to_query(), options, callback);
  }

  to_url(ttl, next_cursor, options = {}) {
    const apiSecret = 'api_secret' in options ? options.api_secret : config().api_secret;
    if (!apiSecret) {
      throw new Error('Must supply api_secret');
    }

    const urlTtl = ttl || this._ttl;

    const query = this.to_query();

    let urlCursor = next_cursor;
    if (query.next_cursor && !next_cursor) {
      urlCursor = query.next_cursor;
    }
    delete query.next_cursor;

    const dataOrderedByKey = sort_object_by_key(clear_blank(query));
    const encodedQuery = base64Encode(JSON.stringify(dataOrderedByKey));

    const urlPrefix = build_distribution_domain(options.source, options);

    const signature = compute_hash(`${urlTtl}${encodedQuery}${apiSecret}`, 'sha256', 'hex');

    const urlWithoutCursor = `${urlPrefix}/search/${signature}/${urlTtl}/${encodedQuery}`;
    return urlCursor ? `${urlWithoutCursor}/${urlCursor}` : urlWithoutCursor;
  }
};

module.exports = Search;


/***/ }),

/***/ 31411:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

const Search = __webpack_require__(2113);
const api = __webpack_require__(15905);

const SearchFolders = class SearchFolders extends Search {
  constructor() {
    super();
  }

  static instance() {
    return new SearchFolders();
  }

  execute(options, callback) {
    if (callback === null) {
      callback = options;
    }
    options = options || {};
    return api.search_folders(this.to_query(), options, callback);
  }
};

module.exports = SearchFolders;


/***/ }),

/***/ 2479:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

const uploader = __webpack_require__(29973);
const v1_adapters = (__webpack_require__(97895).v1_adapters);

v1_adapters(exports, uploader, {
  unsigned_upload_stream: 1,
  upload_stream: 0,
  unsigned_upload: 2,
  upload: 1,
  upload_large_part: 0,
  upload_large: 1,
  upload_chunked: 1,
  upload_chunked_stream: 0,
  explicit: 1,
  destroy: 1,
  rename: 2,
  text: 1,
  generate_sprite: 1,
  multi: 1,
  explode: 1,
  add_tag: 2,
  remove_tag: 2,
  remove_all_tags: 1,
  add_context: 2,
  remove_all_context: 1,
  replace_tag: 2,
  create_archive: 0,
  create_zip: 0,
  update_metadata: 2
});

exports.direct_upload = uploader.direct_upload;
exports.upload_tag_params = uploader.upload_tag_params;
exports.upload_url = uploader.upload_url;
exports.image_upload_tag = uploader.image_upload_tag;
exports.unsigned_image_upload_tag = uploader.unsigned_image_upload_tag;
exports.create_slideshow = uploader.create_slideshow;
exports.download_generated_sprite = uploader.download_generated_sprite;
exports.download_multi = uploader.download_multi;


/***/ }),

/***/ 12666:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getNative = __webpack_require__(2603),
    root = __webpack_require__(42242);

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView');

module.exports = DataView;


/***/ }),

/***/ 45464:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var hashClear = __webpack_require__(52644),
    hashDelete = __webpack_require__(69334),
    hashGet = __webpack_require__(31696),
    hashHas = __webpack_require__(51553),
    hashSet = __webpack_require__(59789);

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

module.exports = Hash;


/***/ }),

/***/ 62096:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var listCacheClear = __webpack_require__(57767),
    listCacheDelete = __webpack_require__(34805),
    listCacheGet = __webpack_require__(70861),
    listCacheHas = __webpack_require__(95153),
    listCacheSet = __webpack_require__(74441);

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;


/***/ }),

/***/ 35956:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getNative = __webpack_require__(2603),
    root = __webpack_require__(42242);

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;


/***/ }),

/***/ 19612:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var mapCacheClear = __webpack_require__(3310),
    mapCacheDelete = __webpack_require__(29530),
    mapCacheGet = __webpack_require__(14465),
    mapCacheHas = __webpack_require__(70338),
    mapCacheSet = __webpack_require__(19610);

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

module.exports = MapCache;


/***/ }),

/***/ 75710:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getNative = __webpack_require__(2603),
    root = __webpack_require__(42242);

/* Built-in method references that are verified to be native. */
var Promise = getNative(root, 'Promise');

module.exports = Promise;


/***/ }),

/***/ 88921:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getNative = __webpack_require__(2603),
    root = __webpack_require__(42242);

/* Built-in method references that are verified to be native. */
var Set = getNative(root, 'Set');

module.exports = Set;


/***/ }),

/***/ 46427:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var MapCache = __webpack_require__(19612),
    setCacheAdd = __webpack_require__(566),
    setCacheHas = __webpack_require__(42884);

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

module.exports = SetCache;


/***/ }),

/***/ 98624:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var ListCache = __webpack_require__(62096),
    stackClear = __webpack_require__(40464),
    stackDelete = __webpack_require__(67473),
    stackGet = __webpack_require__(95563),
    stackHas = __webpack_require__(55518),
    stackSet = __webpack_require__(5319);

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

module.exports = Stack;


/***/ }),

/***/ 79029:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var root = __webpack_require__(42242);

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),

/***/ 48709:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var root = __webpack_require__(42242);

/** Built-in value references. */
var Uint8Array = root.Uint8Array;

module.exports = Uint8Array;


/***/ }),

/***/ 3449:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getNative = __webpack_require__(2603),
    root = __webpack_require__(42242);

/* Built-in method references that are verified to be native. */
var WeakMap = getNative(root, 'WeakMap');

module.exports = WeakMap;


/***/ }),

/***/ 2412:
/***/ (function(module) {

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

module.exports = apply;


/***/ }),

/***/ 76728:
/***/ (function(module) {

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

module.exports = arrayEach;


/***/ }),

/***/ 14822:
/***/ (function(module) {

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

module.exports = arrayFilter;


/***/ }),

/***/ 66515:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseTimes = __webpack_require__(99843),
    isArguments = __webpack_require__(80514),
    isArray = __webpack_require__(12068),
    isBuffer = __webpack_require__(5067),
    isIndex = __webpack_require__(61197),
    isTypedArray = __webpack_require__(8160);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = arrayLikeKeys;


/***/ }),

/***/ 9121:
/***/ (function(module) {

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;


/***/ }),

/***/ 7238:
/***/ (function(module) {

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

module.exports = arrayPush;


/***/ }),

/***/ 68795:
/***/ (function(module) {

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

module.exports = arraySome;


/***/ }),

/***/ 95593:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseAssignValue = __webpack_require__(60173),
    eq = __webpack_require__(600);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignValue;


/***/ }),

/***/ 99345:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var eq = __webpack_require__(600);

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

module.exports = assocIndexOf;


/***/ }),

/***/ 56395:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var copyObject = __webpack_require__(96128),
    keys = __webpack_require__(85346);

/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssign(object, source) {
  return object && copyObject(source, keys(source), object);
}

module.exports = baseAssign;


/***/ }),

/***/ 42018:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var copyObject = __webpack_require__(96128),
    keysIn = __webpack_require__(11465);

/**
 * The base implementation of `_.assignIn` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssignIn(object, source) {
  return object && copyObject(source, keysIn(source), object);
}

module.exports = baseAssignIn;


/***/ }),

/***/ 60173:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var defineProperty = __webpack_require__(51674);

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

module.exports = baseAssignValue;


/***/ }),

/***/ 17890:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var get = __webpack_require__(98614);

/**
 * The base implementation of `_.at` without support for individual paths.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {string[]} paths The property paths to pick.
 * @returns {Array} Returns the picked elements.
 */
function baseAt(object, paths) {
  var index = -1,
      length = paths.length,
      result = Array(length),
      skip = object == null;

  while (++index < length) {
    result[index] = skip ? undefined : get(object, paths[index]);
  }
  return result;
}

module.exports = baseAt;


/***/ }),

/***/ 70267:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var Stack = __webpack_require__(98624),
    arrayEach = __webpack_require__(76728),
    assignValue = __webpack_require__(95593),
    baseAssign = __webpack_require__(56395),
    baseAssignIn = __webpack_require__(42018),
    cloneBuffer = __webpack_require__(27719),
    copyArray = __webpack_require__(5949),
    copySymbols = __webpack_require__(33048),
    copySymbolsIn = __webpack_require__(35981),
    getAllKeys = __webpack_require__(40989),
    getAllKeysIn = __webpack_require__(85715),
    getTag = __webpack_require__(9000),
    initCloneArray = __webpack_require__(88106),
    initCloneByTag = __webpack_require__(85239),
    initCloneObject = __webpack_require__(60015),
    isArray = __webpack_require__(12068),
    isBuffer = __webpack_require__(5067),
    isMap = __webpack_require__(22116),
    isObject = __webpack_require__(36905),
    isSet = __webpack_require__(1058),
    keys = __webpack_require__(85346),
    keysIn = __webpack_require__(11465);

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_FLAT_FLAG = 2,
    CLONE_SYMBOLS_FLAG = 4;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values supported by `_.clone`. */
var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] =
cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
cloneableTags[boolTag] = cloneableTags[dateTag] =
cloneableTags[float32Tag] = cloneableTags[float64Tag] =
cloneableTags[int8Tag] = cloneableTags[int16Tag] =
cloneableTags[int32Tag] = cloneableTags[mapTag] =
cloneableTags[numberTag] = cloneableTags[objectTag] =
cloneableTags[regexpTag] = cloneableTags[setTag] =
cloneableTags[stringTag] = cloneableTags[symbolTag] =
cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] =
cloneableTags[weakMapTag] = false;

/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Deep clone
 *  2 - Flatten inherited properties
 *  4 - Clone symbols
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */
function baseClone(value, bitmask, customizer, key, object, stack) {
  var result,
      isDeep = bitmask & CLONE_DEEP_FLAG,
      isFlat = bitmask & CLONE_FLAT_FLAG,
      isFull = bitmask & CLONE_SYMBOLS_FLAG;

  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== undefined) {
    return result;
  }
  if (!isObject(value)) {
    return value;
  }
  var isArr = isArray(value);
  if (isArr) {
    result = initCloneArray(value);
    if (!isDeep) {
      return copyArray(value, result);
    }
  } else {
    var tag = getTag(value),
        isFunc = tag == funcTag || tag == genTag;

    if (isBuffer(value)) {
      return cloneBuffer(value, isDeep);
    }
    if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
      result = (isFlat || isFunc) ? {} : initCloneObject(value);
      if (!isDeep) {
        return isFlat
          ? copySymbolsIn(value, baseAssignIn(result, value))
          : copySymbols(value, baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = initCloneByTag(value, tag, isDeep);
    }
  }
  // Check for circular references and return its corresponding clone.
  stack || (stack = new Stack);
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);

  if (isSet(value)) {
    value.forEach(function(subValue) {
      result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
    });
  } else if (isMap(value)) {
    value.forEach(function(subValue, key) {
      result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack));
    });
  }

  var keysFunc = isFull
    ? (isFlat ? getAllKeysIn : getAllKeys)
    : (isFlat ? keysIn : keys);

  var props = isArr ? undefined : keysFunc(value);
  arrayEach(props || value, function(subValue, key) {
    if (props) {
      key = subValue;
      subValue = value[key];
    }
    // Recursively populate clone (susceptible to call stack limits).
    assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
  });
  return result;
}

module.exports = baseClone;


/***/ }),

/***/ 67428:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isObject = __webpack_require__(36905);

/** Built-in value references. */
var objectCreate = Object.create;

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */
var baseCreate = (function() {
  function object() {}
  return function(proto) {
    if (!isObject(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object;
    object.prototype = undefined;
    return result;
  };
}());

module.exports = baseCreate;


/***/ }),

/***/ 33074:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseForOwn = __webpack_require__(73629),
    createBaseEach = __webpack_require__(33835);

/**
 * The base implementation of `_.forEach` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 */
var baseEach = createBaseEach(baseForOwn);

module.exports = baseEach;


/***/ }),

/***/ 81922:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseEach = __webpack_require__(33074);

/**
 * The base implementation of `_.filter` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function baseFilter(collection, predicate) {
  var result = [];
  baseEach(collection, function(value, index, collection) {
    if (predicate(value, index, collection)) {
      result.push(value);
    }
  });
  return result;
}

module.exports = baseFilter;


/***/ }),

/***/ 71787:
/***/ (function(module) {

/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight ? 1 : -1);

  while ((fromRight ? index-- : ++index < length)) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

module.exports = baseFindIndex;


/***/ }),

/***/ 81101:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var arrayPush = __webpack_require__(7238),
    isFlattenable = __webpack_require__(64936);

/**
 * The base implementation of `_.flatten` with support for restricting flattening.
 *
 * @private
 * @param {Array} array The array to flatten.
 * @param {number} depth The maximum recursion depth.
 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
 * @param {Array} [result=[]] The initial result value.
 * @returns {Array} Returns the new flattened array.
 */
function baseFlatten(array, depth, predicate, isStrict, result) {
  var index = -1,
      length = array.length;

  predicate || (predicate = isFlattenable);
  result || (result = []);

  while (++index < length) {
    var value = array[index];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        // Recursively flatten arrays (susceptible to call stack limits).
        baseFlatten(value, depth - 1, predicate, isStrict, result);
      } else {
        arrayPush(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}

module.exports = baseFlatten;


/***/ }),

/***/ 84228:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var createBaseFor = __webpack_require__(61244);

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = createBaseFor();

module.exports = baseFor;


/***/ }),

/***/ 73629:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseFor = __webpack_require__(84228),
    keys = __webpack_require__(85346);

/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForOwn(object, iteratee) {
  return object && baseFor(object, iteratee, keys);
}

module.exports = baseForOwn;


/***/ }),

/***/ 81456:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var castPath = __webpack_require__(49649),
    toKey = __webpack_require__(97990);

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = castPath(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

module.exports = baseGet;


/***/ }),

/***/ 10766:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var arrayPush = __webpack_require__(7238),
    isArray = __webpack_require__(12068);

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

module.exports = baseGetAllKeys;


/***/ }),

/***/ 86714:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var Symbol = __webpack_require__(79029),
    getRawTag = __webpack_require__(35078),
    objectToString = __webpack_require__(76276);

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),

/***/ 16457:
/***/ (function(module) {

/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHasIn(object, key) {
  return object != null && key in Object(object);
}

module.exports = baseHasIn;


/***/ }),

/***/ 31706:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseFindIndex = __webpack_require__(71787),
    baseIsNaN = __webpack_require__(49093),
    strictIndexOf = __webpack_require__(58665);

/**
 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseIndexOf(array, value, fromIndex) {
  return value === value
    ? strictIndexOf(array, value, fromIndex)
    : baseFindIndex(array, baseIsNaN, fromIndex);
}

module.exports = baseIndexOf;


/***/ }),

/***/ 62298:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseGetTag = __webpack_require__(86714),
    isObjectLike = __webpack_require__(12387);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;


/***/ }),

/***/ 66425:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseIsEqualDeep = __webpack_require__(66634),
    isObjectLike = __webpack_require__(12387);

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

module.exports = baseIsEqual;


/***/ }),

/***/ 66634:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var Stack = __webpack_require__(98624),
    equalArrays = __webpack_require__(49507),
    equalByTag = __webpack_require__(10091),
    equalObjects = __webpack_require__(62080),
    getTag = __webpack_require__(9000),
    isArray = __webpack_require__(12068),
    isBuffer = __webpack_require__(5067),
    isTypedArray = __webpack_require__(8160);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    objectTag = '[object Object]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = objIsArr ? arrayTag : getTag(object),
      othTag = othIsArr ? arrayTag : getTag(other);

  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;

  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack);
    return (objIsArr || isTypedArray(object))
      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack);
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack);
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

module.exports = baseIsEqualDeep;


/***/ }),

/***/ 14256:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getTag = __webpack_require__(9000),
    isObjectLike = __webpack_require__(12387);

/** `Object#toString` result references. */
var mapTag = '[object Map]';

/**
 * The base implementation of `_.isMap` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 */
function baseIsMap(value) {
  return isObjectLike(value) && getTag(value) == mapTag;
}

module.exports = baseIsMap;


/***/ }),

/***/ 2757:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var Stack = __webpack_require__(98624),
    baseIsEqual = __webpack_require__(66425);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.isMatch` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Array} matchData The property names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */
function baseIsMatch(object, source, matchData, customizer) {
  var index = matchData.length,
      length = index,
      noCustomizer = !customizer;

  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index--) {
    var data = matchData[index];
    if ((noCustomizer && data[2])
          ? data[1] !== object[data[0]]
          : !(data[0] in object)
        ) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0],
        objValue = object[key],
        srcValue = data[1];

    if (noCustomizer && data[2]) {
      if (objValue === undefined && !(key in object)) {
        return false;
      }
    } else {
      var stack = new Stack;
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === undefined
            ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack)
            : result
          )) {
        return false;
      }
    }
  }
  return true;
}

module.exports = baseIsMatch;


/***/ }),

/***/ 49093:
/***/ (function(module) {

/**
 * The base implementation of `_.isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */
function baseIsNaN(value) {
  return value !== value;
}

module.exports = baseIsNaN;


/***/ }),

/***/ 6431:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isFunction = __webpack_require__(28293),
    isMasked = __webpack_require__(52981),
    isObject = __webpack_require__(36905),
    toSource = __webpack_require__(68825);

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;


/***/ }),

/***/ 4636:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getTag = __webpack_require__(9000),
    isObjectLike = __webpack_require__(12387);

/** `Object#toString` result references. */
var setTag = '[object Set]';

/**
 * The base implementation of `_.isSet` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 */
function baseIsSet(value) {
  return isObjectLike(value) && getTag(value) == setTag;
}

module.exports = baseIsSet;


/***/ }),

/***/ 61571:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseGetTag = __webpack_require__(86714),
    isLength = __webpack_require__(34594),
    isObjectLike = __webpack_require__(12387);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;


/***/ }),

/***/ 57322:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseMatches = __webpack_require__(78127),
    baseMatchesProperty = __webpack_require__(84643),
    identity = __webpack_require__(34646),
    isArray = __webpack_require__(12068),
    property = __webpack_require__(8919);

/**
 * The base implementation of `_.iteratee`.
 *
 * @private
 * @param {*} [value=_.identity] The value to convert to an iteratee.
 * @returns {Function} Returns the iteratee.
 */
function baseIteratee(value) {
  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
  if (typeof value == 'function') {
    return value;
  }
  if (value == null) {
    return identity;
  }
  if (typeof value == 'object') {
    return isArray(value)
      ? baseMatchesProperty(value[0], value[1])
      : baseMatches(value);
  }
  return property(value);
}

module.exports = baseIteratee;


/***/ }),

/***/ 99605:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isPrototype = __webpack_require__(44097),
    nativeKeys = __webpack_require__(19024);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeys;


/***/ }),

/***/ 6199:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isObject = __webpack_require__(36905),
    isPrototype = __webpack_require__(44097),
    nativeKeysIn = __webpack_require__(93064);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeysIn;


/***/ }),

/***/ 98829:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseEach = __webpack_require__(33074),
    isArrayLike = __webpack_require__(85635);

/**
 * The base implementation of `_.map` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function baseMap(collection, iteratee) {
  var index = -1,
      result = isArrayLike(collection) ? Array(collection.length) : [];

  baseEach(collection, function(value, key, collection) {
    result[++index] = iteratee(value, key, collection);
  });
  return result;
}

module.exports = baseMap;


/***/ }),

/***/ 78127:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseIsMatch = __webpack_require__(2757),
    getMatchData = __webpack_require__(22055),
    matchesStrictComparable = __webpack_require__(88069);

/**
 * The base implementation of `_.matches` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatches(source) {
  var matchData = getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
  }
  return function(object) {
    return object === source || baseIsMatch(object, source, matchData);
  };
}

module.exports = baseMatches;


/***/ }),

/***/ 84643:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseIsEqual = __webpack_require__(66425),
    get = __webpack_require__(98614),
    hasIn = __webpack_require__(92556),
    isKey = __webpack_require__(41846),
    isStrictComparable = __webpack_require__(88460),
    matchesStrictComparable = __webpack_require__(88069),
    toKey = __webpack_require__(97990);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatchesProperty(path, srcValue) {
  if (isKey(path) && isStrictComparable(srcValue)) {
    return matchesStrictComparable(toKey(path), srcValue);
  }
  return function(object) {
    var objValue = get(object, path);
    return (objValue === undefined && objValue === srcValue)
      ? hasIn(object, path)
      : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
  };
}

module.exports = baseMatchesProperty;


/***/ }),

/***/ 51357:
/***/ (function(module) {

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function baseProperty(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

module.exports = baseProperty;


/***/ }),

/***/ 9266:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseGet = __webpack_require__(81456);

/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyDeep(path) {
  return function(object) {
    return baseGet(object, path);
  };
}

module.exports = basePropertyDeep;


/***/ }),

/***/ 97485:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var identity = __webpack_require__(34646),
    overRest = __webpack_require__(15046),
    setToString = __webpack_require__(34017);

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  return setToString(overRest(func, start, identity), func + '');
}

module.exports = baseRest;


/***/ }),

/***/ 32811:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var constant = __webpack_require__(63709),
    defineProperty = __webpack_require__(51674),
    identity = __webpack_require__(34646);

/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString = !defineProperty ? identity : function(func, string) {
  return defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant(string),
    'writable': true
  });
};

module.exports = baseSetToString;


/***/ }),

/***/ 74932:
/***/ (function(module) {

/**
 * The base implementation of `_.slice` without an iteratee call guard.
 *
 * @private
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the slice of `array`.
 */
function baseSlice(array, start, end) {
  var index = -1,
      length = array.length;

  if (start < 0) {
    start = -start > length ? 0 : (length + start);
  }
  end = end > length ? length : end;
  if (end < 0) {
    end += length;
  }
  length = start > end ? 0 : ((end - start) >>> 0);
  start >>>= 0;

  var result = Array(length);
  while (++index < length) {
    result[index] = array[index + start];
  }
  return result;
}

module.exports = baseSlice;


/***/ }),

/***/ 99843:
/***/ (function(module) {

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

module.exports = baseTimes;


/***/ }),

/***/ 13511:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var Symbol = __webpack_require__(79029),
    arrayMap = __webpack_require__(9121),
    isArray = __webpack_require__(12068),
    isSymbol = __webpack_require__(71087);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = baseToString;


/***/ }),

/***/ 13225:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var trimmedEndIndex = __webpack_require__(20121);

/** Used to match leading whitespace. */
var reTrimStart = /^\s+/;

/**
 * The base implementation of `_.trim`.
 *
 * @private
 * @param {string} string The string to trim.
 * @returns {string} Returns the trimmed string.
 */
function baseTrim(string) {
  return string
    ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, '')
    : string;
}

module.exports = baseTrim;


/***/ }),

/***/ 70287:
/***/ (function(module) {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

module.exports = baseUnary;


/***/ }),

/***/ 23156:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var arrayMap = __webpack_require__(9121);

/**
 * The base implementation of `_.values` and `_.valuesIn` which creates an
 * array of `object` property values corresponding to the property names
 * of `props`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array} props The property names to get values for.
 * @returns {Object} Returns the array of property values.
 */
function baseValues(object, props) {
  return arrayMap(props, function(key) {
    return object[key];
  });
}

module.exports = baseValues;


/***/ }),

/***/ 65225:
/***/ (function(module) {

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

module.exports = cacheHas;


/***/ }),

/***/ 49649:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isArray = __webpack_require__(12068),
    isKey = __webpack_require__(41846),
    stringToPath = __webpack_require__(9450),
    toString = __webpack_require__(60665);

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if (isArray(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath(toString(value));
}

module.exports = castPath;


/***/ }),

/***/ 67859:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var Uint8Array = __webpack_require__(48709);

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

module.exports = cloneArrayBuffer;


/***/ }),

/***/ 27719:
/***/ (function(module, exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);
var root = __webpack_require__(42242);

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && "object" == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length,
      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

  buffer.copy(result);
  return result;
}

module.exports = cloneBuffer;


/***/ }),

/***/ 45378:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__(67859);

/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}

module.exports = cloneDataView;


/***/ }),

/***/ 42658:
/***/ (function(module) {

/** Used to match `RegExp` flags from their coerced string values. */
var reFlags = /\w*$/;

/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */
function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}

module.exports = cloneRegExp;


/***/ }),

/***/ 13527:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var Symbol = __webpack_require__(79029);

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */
function cloneSymbol(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}

module.exports = cloneSymbol;


/***/ }),

/***/ 91719:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__(67859);

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

module.exports = cloneTypedArray;


/***/ }),

/***/ 5949:
/***/ (function(module) {

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

module.exports = copyArray;


/***/ }),

/***/ 96128:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var assignValue = __webpack_require__(95593),
    baseAssignValue = __webpack_require__(60173);

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }
  return object;
}

module.exports = copyObject;


/***/ }),

/***/ 33048:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var copyObject = __webpack_require__(96128),
    getSymbols = __webpack_require__(91500);

/**
 * Copies own symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbols(source, object) {
  return copyObject(source, getSymbols(source), object);
}

module.exports = copySymbols;


/***/ }),

/***/ 35981:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var copyObject = __webpack_require__(96128),
    getSymbolsIn = __webpack_require__(46097);

/**
 * Copies own and inherited symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbolsIn(source, object) {
  return copyObject(source, getSymbolsIn(source), object);
}

module.exports = copySymbolsIn;


/***/ }),

/***/ 51186:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var root = __webpack_require__(42242);

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;


/***/ }),

/***/ 86675:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseRest = __webpack_require__(97485),
    isIterateeCall = __webpack_require__(82664);

/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */
function createAssigner(assigner) {
  return baseRest(function(object, sources) {
    var index = -1,
        length = sources.length,
        customizer = length > 1 ? sources[length - 1] : undefined,
        guard = length > 2 ? sources[2] : undefined;

    customizer = (assigner.length > 3 && typeof customizer == 'function')
      ? (length--, customizer)
      : undefined;

    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}

module.exports = createAssigner;


/***/ }),

/***/ 33835:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isArrayLike = __webpack_require__(85635);

/**
 * Creates a `baseEach` or `baseEachRight` function.
 *
 * @private
 * @param {Function} eachFunc The function to iterate over a collection.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseEach(eachFunc, fromRight) {
  return function(collection, iteratee) {
    if (collection == null) {
      return collection;
    }
    if (!isArrayLike(collection)) {
      return eachFunc(collection, iteratee);
    }
    var length = collection.length,
        index = fromRight ? length : -1,
        iterable = Object(collection);

    while ((fromRight ? index-- : ++index < length)) {
      if (iteratee(iterable[index], index, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}

module.exports = createBaseEach;


/***/ }),

/***/ 61244:
/***/ (function(module) {

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

module.exports = createBaseFor;


/***/ }),

/***/ 51674:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getNative = __webpack_require__(2603);

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

module.exports = defineProperty;


/***/ }),

/***/ 49507:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var SetCache = __webpack_require__(46427),
    arraySome = __webpack_require__(68795),
    cacheHas = __webpack_require__(65225);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Check that cyclic values are equal.
  var arrStacked = stack.get(array);
  var othStacked = stack.get(other);
  if (arrStacked && othStacked) {
    return arrStacked == other && othStacked == array;
  }
  var index = -1,
      result = true,
      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, function(othValue, othIndex) {
            if (!cacheHas(seen, othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, bitmask, customizer, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

module.exports = equalArrays;


/***/ }),

/***/ 10091:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var Symbol = __webpack_require__(79029),
    Uint8Array = __webpack_require__(48709),
    eq = __webpack_require__(600),
    equalArrays = __webpack_require__(49507),
    mapToArray = __webpack_require__(39883),
    setToArray = __webpack_require__(97782);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]';

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag:
      var convert = mapToArray;

    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

module.exports = equalByTag;


/***/ }),

/***/ 62080:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getAllKeys = __webpack_require__(40989);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      objProps = getAllKeys(object),
      objLength = objProps.length,
      othProps = getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  // Check that cyclic values are equal.
  var objStacked = stack.get(object);
  var othStacked = stack.get(other);
  if (objStacked && othStacked) {
    return objStacked == other && othStacked == object;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

module.exports = equalObjects;


/***/ }),

/***/ 55818:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var flatten = __webpack_require__(67066),
    overRest = __webpack_require__(15046),
    setToString = __webpack_require__(34017);

/**
 * A specialized version of `baseRest` which flattens the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @returns {Function} Returns the new function.
 */
function flatRest(func) {
  return setToString(overRest(func, undefined, flatten), func + '');
}

module.exports = flatRest;


/***/ }),

/***/ 66503:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof __webpack_require__.g == 'object' && __webpack_require__.g && __webpack_require__.g.Object === Object && __webpack_require__.g;

module.exports = freeGlobal;


/***/ }),

/***/ 40989:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseGetAllKeys = __webpack_require__(10766),
    getSymbols = __webpack_require__(91500),
    keys = __webpack_require__(85346);

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

module.exports = getAllKeys;


/***/ }),

/***/ 85715:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseGetAllKeys = __webpack_require__(10766),
    getSymbolsIn = __webpack_require__(46097),
    keysIn = __webpack_require__(11465);

/**
 * Creates an array of own and inherited enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeysIn(object) {
  return baseGetAllKeys(object, keysIn, getSymbolsIn);
}

module.exports = getAllKeysIn;


/***/ }),

/***/ 32367:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isKeyable = __webpack_require__(23946);

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

module.exports = getMapData;


/***/ }),

/***/ 22055:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isStrictComparable = __webpack_require__(88460),
    keys = __webpack_require__(85346);

/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */
function getMatchData(object) {
  var result = keys(object),
      length = result.length;

  while (length--) {
    var key = result[length],
        value = object[key];

    result[length] = [key, value, isStrictComparable(value)];
  }
  return result;
}

module.exports = getMatchData;


/***/ }),

/***/ 2603:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseIsNative = __webpack_require__(6431),
    getValue = __webpack_require__(87747);

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;


/***/ }),

/***/ 73362:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var overArg = __webpack_require__(72184);

/** Built-in value references. */
var getPrototype = overArg(Object.getPrototypeOf, Object);

module.exports = getPrototype;


/***/ }),

/***/ 35078:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var Symbol = __webpack_require__(79029);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),

/***/ 91500:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var arrayFilter = __webpack_require__(14822),
    stubArray = __webpack_require__(12501);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

module.exports = getSymbols;


/***/ }),

/***/ 46097:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var arrayPush = __webpack_require__(7238),
    getPrototype = __webpack_require__(73362),
    getSymbols = __webpack_require__(91500),
    stubArray = __webpack_require__(12501);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own and inherited enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
  var result = [];
  while (object) {
    arrayPush(result, getSymbols(object));
    object = getPrototype(object);
  }
  return result;
};

module.exports = getSymbolsIn;


/***/ }),

/***/ 9000:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var DataView = __webpack_require__(12666),
    Map = __webpack_require__(35956),
    Promise = __webpack_require__(75710),
    Set = __webpack_require__(88921),
    WeakMap = __webpack_require__(3449),
    baseGetTag = __webpack_require__(86714),
    toSource = __webpack_require__(68825);

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';

var dataViewTag = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

module.exports = getTag;


/***/ }),

/***/ 87747:
/***/ (function(module) {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;


/***/ }),

/***/ 35355:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var castPath = __webpack_require__(49649),
    isArguments = __webpack_require__(80514),
    isArray = __webpack_require__(12068),
    isIndex = __webpack_require__(61197),
    isLength = __webpack_require__(34594),
    toKey = __webpack_require__(97990);

/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */
function hasPath(object, path, hasFunc) {
  path = castPath(path, object);

  var index = -1,
      length = path.length,
      result = false;

  while (++index < length) {
    var key = toKey(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && isLength(length) && isIndex(key, length) &&
    (isArray(object) || isArguments(object));
}

module.exports = hasPath;


/***/ }),

/***/ 52644:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var nativeCreate = __webpack_require__(28749);

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;


/***/ }),

/***/ 69334:
/***/ (function(module) {

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;


/***/ }),

/***/ 31696:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var nativeCreate = __webpack_require__(28749);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;


/***/ }),

/***/ 51553:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var nativeCreate = __webpack_require__(28749);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

module.exports = hashHas;


/***/ }),

/***/ 59789:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var nativeCreate = __webpack_require__(28749);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;


/***/ }),

/***/ 88106:
/***/ (function(module) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */
function initCloneArray(array) {
  var length = array.length,
      result = new array.constructor(length);

  // Add properties assigned by `RegExp#exec`.
  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}

module.exports = initCloneArray;


/***/ }),

/***/ 85239:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__(67859),
    cloneDataView = __webpack_require__(45378),
    cloneRegExp = __webpack_require__(42658),
    cloneSymbol = __webpack_require__(13527),
    cloneTypedArray = __webpack_require__(91719);

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneByTag(object, tag, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag:
      return cloneArrayBuffer(object);

    case boolTag:
    case dateTag:
      return new Ctor(+object);

    case dataViewTag:
      return cloneDataView(object, isDeep);

    case float32Tag: case float64Tag:
    case int8Tag: case int16Tag: case int32Tag:
    case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
      return cloneTypedArray(object, isDeep);

    case mapTag:
      return new Ctor;

    case numberTag:
    case stringTag:
      return new Ctor(object);

    case regexpTag:
      return cloneRegExp(object);

    case setTag:
      return new Ctor;

    case symbolTag:
      return cloneSymbol(object);
  }
}

module.exports = initCloneByTag;


/***/ }),

/***/ 60015:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseCreate = __webpack_require__(67428),
    getPrototype = __webpack_require__(73362),
    isPrototype = __webpack_require__(44097);

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !isPrototype(object))
    ? baseCreate(getPrototype(object))
    : {};
}

module.exports = initCloneObject;


/***/ }),

/***/ 64936:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var Symbol = __webpack_require__(79029),
    isArguments = __webpack_require__(80514),
    isArray = __webpack_require__(12068);

/** Built-in value references. */
var spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined;

/**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */
function isFlattenable(value) {
  return isArray(value) || isArguments(value) ||
    !!(spreadableSymbol && value && value[spreadableSymbol]);
}

module.exports = isFlattenable;


/***/ }),

/***/ 61197:
/***/ (function(module) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

module.exports = isIndex;


/***/ }),

/***/ 82664:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var eq = __webpack_require__(600),
    isArrayLike = __webpack_require__(85635),
    isIndex = __webpack_require__(61197),
    isObject = __webpack_require__(36905);

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (isArrayLike(object) && isIndex(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return eq(object[index], value);
  }
  return false;
}

module.exports = isIterateeCall;


/***/ }),

/***/ 41846:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isArray = __webpack_require__(12068),
    isSymbol = __webpack_require__(71087);

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

module.exports = isKey;


/***/ }),

/***/ 23946:
/***/ (function(module) {

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

module.exports = isKeyable;


/***/ }),

/***/ 52981:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var coreJsData = __webpack_require__(51186);

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

module.exports = isMasked;


/***/ }),

/***/ 44097:
/***/ (function(module) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

module.exports = isPrototype;


/***/ }),

/***/ 88460:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isObject = __webpack_require__(36905);

/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */
function isStrictComparable(value) {
  return value === value && !isObject(value);
}

module.exports = isStrictComparable;


/***/ }),

/***/ 57767:
/***/ (function(module) {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;


/***/ }),

/***/ 34805:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(99345);

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

module.exports = listCacheDelete;


/***/ }),

/***/ 70861:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(99345);

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;


/***/ }),

/***/ 95153:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(99345);

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;


/***/ }),

/***/ 74441:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(99345);

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

module.exports = listCacheSet;


/***/ }),

/***/ 3310:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var Hash = __webpack_require__(45464),
    ListCache = __webpack_require__(62096),
    Map = __webpack_require__(35956);

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

module.exports = mapCacheClear;


/***/ }),

/***/ 29530:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getMapData = __webpack_require__(32367);

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;


/***/ }),

/***/ 14465:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getMapData = __webpack_require__(32367);

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;


/***/ }),

/***/ 70338:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getMapData = __webpack_require__(32367);

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;


/***/ }),

/***/ 19610:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getMapData = __webpack_require__(32367);

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;


/***/ }),

/***/ 39883:
/***/ (function(module) {

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

module.exports = mapToArray;


/***/ }),

/***/ 88069:
/***/ (function(module) {

/**
 * A specialized version of `matchesProperty` for source values suitable
 * for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function matchesStrictComparable(key, srcValue) {
  return function(object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue &&
      (srcValue !== undefined || (key in Object(object)));
  };
}

module.exports = matchesStrictComparable;


/***/ }),

/***/ 64670:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var memoize = __webpack_require__(93023);

/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped(func) {
  var result = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

module.exports = memoizeCapped;


/***/ }),

/***/ 28749:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getNative = __webpack_require__(2603);

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;


/***/ }),

/***/ 19024:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var overArg = __webpack_require__(72184);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ }),

/***/ 93064:
/***/ (function(module) {

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

module.exports = nativeKeysIn;


/***/ }),

/***/ 23524:
/***/ (function(module, exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);
var freeGlobal = __webpack_require__(66503);

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && "object" == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;


/***/ }),

/***/ 76276:
/***/ (function(module) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),

/***/ 72184:
/***/ (function(module) {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;


/***/ }),

/***/ 15046:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var apply = __webpack_require__(2412);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}

module.exports = overRest;


/***/ }),

/***/ 42242:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var freeGlobal = __webpack_require__(66503);

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),

/***/ 566:
/***/ (function(module) {

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

module.exports = setCacheAdd;


/***/ }),

/***/ 42884:
/***/ (function(module) {

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

module.exports = setCacheHas;


/***/ }),

/***/ 97782:
/***/ (function(module) {

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

module.exports = setToArray;


/***/ }),

/***/ 34017:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseSetToString = __webpack_require__(32811),
    shortOut = __webpack_require__(58546);

/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString = shortOut(baseSetToString);

module.exports = setToString;


/***/ }),

/***/ 58546:
/***/ (function(module) {

/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
    HOT_SPAN = 16;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeNow = Date.now;

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut(func) {
  var count = 0,
      lastCalled = 0;

  return function() {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}

module.exports = shortOut;


/***/ }),

/***/ 40464:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var ListCache = __webpack_require__(62096);

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

module.exports = stackClear;


/***/ }),

/***/ 67473:
/***/ (function(module) {

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

module.exports = stackDelete;


/***/ }),

/***/ 95563:
/***/ (function(module) {

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

module.exports = stackGet;


/***/ }),

/***/ 55518:
/***/ (function(module) {

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

module.exports = stackHas;


/***/ }),

/***/ 5319:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var ListCache = __webpack_require__(62096),
    Map = __webpack_require__(35956),
    MapCache = __webpack_require__(19612);

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

module.exports = stackSet;


/***/ }),

/***/ 58665:
/***/ (function(module) {

/**
 * A specialized version of `_.indexOf` which performs strict equality
 * comparisons of values, i.e. `===`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function strictIndexOf(array, value, fromIndex) {
  var index = fromIndex - 1,
      length = array.length;

  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}

module.exports = strictIndexOf;


/***/ }),

/***/ 9450:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var memoizeCapped = __webpack_require__(64670);

/** Used to match property names within property paths. */
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46 /* . */) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

module.exports = stringToPath;


/***/ }),

/***/ 97990:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isSymbol = __webpack_require__(71087);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = toKey;


/***/ }),

/***/ 68825:
/***/ (function(module) {

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;


/***/ }),

/***/ 20121:
/***/ (function(module) {

/** Used to match a single whitespace character. */
var reWhitespace = /\s/;

/**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
 * character of `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the index of the last non-whitespace character.
 */
function trimmedEndIndex(string) {
  var index = string.length;

  while (index-- && reWhitespace.test(string.charAt(index))) {}
  return index;
}

module.exports = trimmedEndIndex;


/***/ }),

/***/ 17346:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var copyObject = __webpack_require__(96128),
    createAssigner = __webpack_require__(86675),
    keysIn = __webpack_require__(11465);

/**
 * This method is like `_.assign` except that it iterates over own and
 * inherited source properties.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @alias extend
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @see _.assign
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * function Bar() {
 *   this.c = 3;
 * }
 *
 * Foo.prototype.b = 2;
 * Bar.prototype.d = 4;
 *
 * _.assignIn({ 'a': 0 }, new Foo, new Bar);
 * // => { 'a': 1, 'b': 2, 'c': 3, 'd': 4 }
 */
var assignIn = createAssigner(function(object, source) {
  copyObject(source, keysIn(source), object);
});

module.exports = assignIn;


/***/ }),

/***/ 78871:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseAt = __webpack_require__(17890),
    flatRest = __webpack_require__(55818);

/**
 * Creates an array of values corresponding to `paths` of `object`.
 *
 * @static
 * @memberOf _
 * @since 1.0.0
 * @category Object
 * @param {Object} object The object to iterate over.
 * @param {...(string|string[])} [paths] The property paths to pick.
 * @returns {Array} Returns the picked values.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
 *
 * _.at(object, ['a[0].b.c', 'a[1]']);
 * // => [3, 4]
 */
var at = flatRest(baseAt);

module.exports = at;


/***/ }),

/***/ 97314:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseClone = __webpack_require__(70267);

/** Used to compose bitmasks for cloning. */
var CLONE_SYMBOLS_FLAG = 4;

/**
 * Creates a shallow clone of `value`.
 *
 * **Note:** This method is loosely based on the
 * [structured clone algorithm](https://mdn.io/Structured_clone_algorithm)
 * and supports cloning arrays, array buffers, booleans, date objects, maps,
 * numbers, `Object` objects, regexes, sets, strings, symbols, and typed
 * arrays. The own enumerable properties of `arguments` objects are cloned
 * as plain objects. An empty object is returned for uncloneable values such
 * as error objects, functions, DOM nodes, and WeakMaps.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to clone.
 * @returns {*} Returns the cloned value.
 * @see _.cloneDeep
 * @example
 *
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 *
 * var shallow = _.clone(objects);
 * console.log(shallow[0] === objects[0]);
 * // => true
 */
function clone(value) {
  return baseClone(value, CLONE_SYMBOLS_FLAG);
}

module.exports = clone;


/***/ }),

/***/ 54677:
/***/ (function(module) {

/**
 * Creates an array with all falsey values removed. The values `false`, `null`,
 * `0`, `""`, `undefined`, and `NaN` are falsey.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to compact.
 * @returns {Array} Returns the new array of filtered values.
 * @example
 *
 * _.compact([0, 1, false, 2, '', 3]);
 * // => [1, 2, 3]
 */
function compact(array) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (value) {
      result[resIndex++] = value;
    }
  }
  return result;
}

module.exports = compact;


/***/ }),

/***/ 63709:
/***/ (function(module) {

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function() {
    return value;
  };
}

module.exports = constant;


/***/ }),

/***/ 600:
/***/ (function(module) {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;


/***/ }),

/***/ 67453:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(17346);


/***/ }),

/***/ 77434:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var arrayFilter = __webpack_require__(14822),
    baseFilter = __webpack_require__(81922),
    baseIteratee = __webpack_require__(57322),
    isArray = __webpack_require__(12068);

/**
 * Iterates over elements of `collection`, returning an array of all elements
 * `predicate` returns truthy for. The predicate is invoked with three
 * arguments: (value, index|key, collection).
 *
 * **Note:** Unlike `_.remove`, this method returns a new array.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 * @see _.reject
 * @example
 *
 * var users = [
 *   { 'user': 'barney', 'age': 36, 'active': true },
 *   { 'user': 'fred',   'age': 40, 'active': false }
 * ];
 *
 * _.filter(users, function(o) { return !o.active; });
 * // => objects for ['fred']
 *
 * // The `_.matches` iteratee shorthand.
 * _.filter(users, { 'age': 36, 'active': true });
 * // => objects for ['barney']
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.filter(users, ['active', false]);
 * // => objects for ['fred']
 *
 * // The `_.property` iteratee shorthand.
 * _.filter(users, 'active');
 * // => objects for ['barney']
 *
 * // Combining several predicates using `_.overEvery` or `_.overSome`.
 * _.filter(users, _.overSome([{ 'age': 36 }, ['age', 40]]));
 * // => objects for ['fred', 'barney']
 */
function filter(collection, predicate) {
  var func = isArray(collection) ? arrayFilter : baseFilter;
  return func(collection, baseIteratee(predicate, 3));
}

module.exports = filter;


/***/ }),

/***/ 14158:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(1492);


/***/ }),

/***/ 67066:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseFlatten = __webpack_require__(81101);

/**
 * Flattens `array` a single level deep.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to flatten.
 * @returns {Array} Returns the new flattened array.
 * @example
 *
 * _.flatten([1, [2, [3, [4]], 5]]);
 * // => [1, 2, [3, [4]], 5]
 */
function flatten(array) {
  var length = array == null ? 0 : array.length;
  return length ? baseFlatten(array, 1) : [];
}

module.exports = flatten;


/***/ }),

/***/ 98614:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseGet = __webpack_require__(81456);

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

module.exports = get;


/***/ }),

/***/ 92556:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseHasIn = __webpack_require__(16457),
    hasPath = __webpack_require__(35355);

/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */
function hasIn(object, path) {
  return object != null && hasPath(object, path, baseHasIn);
}

module.exports = hasIn;


/***/ }),

/***/ 1492:
/***/ (function(module) {

/**
 * Gets the first element of `array`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @alias first
 * @category Array
 * @param {Array} array The array to query.
 * @returns {*} Returns the first element of `array`.
 * @example
 *
 * _.head([1, 2, 3]);
 * // => 1
 *
 * _.head([]);
 * // => undefined
 */
function head(array) {
  return (array && array.length) ? array[0] : undefined;
}

module.exports = head;


/***/ }),

/***/ 34646:
/***/ (function(module) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),

/***/ 21641:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseIndexOf = __webpack_require__(31706),
    isArrayLike = __webpack_require__(85635),
    isString = __webpack_require__(33874),
    toInteger = __webpack_require__(12919),
    values = __webpack_require__(94630);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * Checks if `value` is in `collection`. If `collection` is a string, it's
 * checked for a substring of `value`, otherwise
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * is used for equality comparisons. If `fromIndex` is negative, it's used as
 * the offset from the end of `collection`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object|string} collection The collection to inspect.
 * @param {*} value The value to search for.
 * @param {number} [fromIndex=0] The index to search from.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
 * @returns {boolean} Returns `true` if `value` is found, else `false`.
 * @example
 *
 * _.includes([1, 2, 3], 1);
 * // => true
 *
 * _.includes([1, 2, 3], 1, 2);
 * // => false
 *
 * _.includes({ 'a': 1, 'b': 2 }, 1);
 * // => true
 *
 * _.includes('abcd', 'bc');
 * // => true
 */
function includes(collection, value, fromIndex, guard) {
  collection = isArrayLike(collection) ? collection : values(collection);
  fromIndex = (fromIndex && !guard) ? toInteger(fromIndex) : 0;

  var length = collection.length;
  if (fromIndex < 0) {
    fromIndex = nativeMax(length + fromIndex, 0);
  }
  return isString(collection)
    ? (fromIndex <= length && collection.indexOf(value, fromIndex) > -1)
    : (!!length && baseIndexOf(collection, value, fromIndex) > -1);
}

module.exports = includes;


/***/ }),

/***/ 80514:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseIsArguments = __webpack_require__(62298),
    isObjectLike = __webpack_require__(12387);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

module.exports = isArguments;


/***/ }),

/***/ 12068:
/***/ (function(module) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),

/***/ 85635:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isFunction = __webpack_require__(28293),
    isLength = __webpack_require__(34594);

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;


/***/ }),

/***/ 5067:
/***/ (function(module, exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);
var root = __webpack_require__(42242),
    stubFalse = __webpack_require__(7644);

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && "object" == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

module.exports = isBuffer;


/***/ }),

/***/ 96778:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseKeys = __webpack_require__(99605),
    getTag = __webpack_require__(9000),
    isArguments = __webpack_require__(80514),
    isArray = __webpack_require__(12068),
    isArrayLike = __webpack_require__(85635),
    isBuffer = __webpack_require__(5067),
    isPrototype = __webpack_require__(44097),
    isTypedArray = __webpack_require__(8160);

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    setTag = '[object Set]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if `value` is an empty object, collection, map, or set.
 *
 * Objects are considered empty if they have no own enumerable string keyed
 * properties.
 *
 * Array-like values such as `arguments` objects, arrays, buffers, strings, or
 * jQuery-like collections are considered empty if they have a `length` of `0`.
 * Similarly, maps and sets are considered empty if they have a `size` of `0`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is empty, else `false`.
 * @example
 *
 * _.isEmpty(null);
 * // => true
 *
 * _.isEmpty(true);
 * // => true
 *
 * _.isEmpty(1);
 * // => true
 *
 * _.isEmpty([1, 2, 3]);
 * // => false
 *
 * _.isEmpty({ 'a': 1 });
 * // => false
 */
function isEmpty(value) {
  if (value == null) {
    return true;
  }
  if (isArrayLike(value) &&
      (isArray(value) || typeof value == 'string' || typeof value.splice == 'function' ||
        isBuffer(value) || isTypedArray(value) || isArguments(value))) {
    return !value.length;
  }
  var tag = getTag(value);
  if (tag == mapTag || tag == setTag) {
    return !value.size;
  }
  if (isPrototype(value)) {
    return !baseKeys(value).length;
  }
  for (var key in value) {
    if (hasOwnProperty.call(value, key)) {
      return false;
    }
  }
  return true;
}

module.exports = isEmpty;


/***/ }),

/***/ 28293:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseGetTag = __webpack_require__(86714),
    isObject = __webpack_require__(36905);

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),

/***/ 34594:
/***/ (function(module) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;


/***/ }),

/***/ 22116:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseIsMap = __webpack_require__(14256),
    baseUnary = __webpack_require__(70287),
    nodeUtil = __webpack_require__(23524);

/* Node.js helper references. */
var nodeIsMap = nodeUtil && nodeUtil.isMap;

/**
 * Checks if `value` is classified as a `Map` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 * @example
 *
 * _.isMap(new Map);
 * // => true
 *
 * _.isMap(new WeakMap);
 * // => false
 */
var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;

module.exports = isMap;


/***/ }),

/***/ 71881:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseGetTag = __webpack_require__(86714),
    isObjectLike = __webpack_require__(12387);

/** `Object#toString` result references. */
var numberTag = '[object Number]';

/**
 * Checks if `value` is classified as a `Number` primitive or object.
 *
 * **Note:** To exclude `Infinity`, `-Infinity`, and `NaN`, which are
 * classified as numbers, use the `_.isFinite` method.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a number, else `false`.
 * @example
 *
 * _.isNumber(3);
 * // => true
 *
 * _.isNumber(Number.MIN_VALUE);
 * // => true
 *
 * _.isNumber(Infinity);
 * // => true
 *
 * _.isNumber('3');
 * // => false
 */
function isNumber(value) {
  return typeof value == 'number' ||
    (isObjectLike(value) && baseGetTag(value) == numberTag);
}

module.exports = isNumber;


/***/ }),

/***/ 36905:
/***/ (function(module) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),

/***/ 12387:
/***/ (function(module) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),

/***/ 84412:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseGetTag = __webpack_require__(86714),
    getPrototype = __webpack_require__(73362),
    isObjectLike = __webpack_require__(12387);

/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

module.exports = isPlainObject;


/***/ }),

/***/ 1058:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseIsSet = __webpack_require__(4636),
    baseUnary = __webpack_require__(70287),
    nodeUtil = __webpack_require__(23524);

/* Node.js helper references. */
var nodeIsSet = nodeUtil && nodeUtil.isSet;

/**
 * Checks if `value` is classified as a `Set` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 * @example
 *
 * _.isSet(new Set);
 * // => true
 *
 * _.isSet(new WeakSet);
 * // => false
 */
var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;

module.exports = isSet;


/***/ }),

/***/ 33874:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseGetTag = __webpack_require__(86714),
    isArray = __webpack_require__(12068),
    isObjectLike = __webpack_require__(12387);

/** `Object#toString` result references. */
var stringTag = '[object String]';

/**
 * Checks if `value` is classified as a `String` primitive or object.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a string, else `false`.
 * @example
 *
 * _.isString('abc');
 * // => true
 *
 * _.isString(1);
 * // => false
 */
function isString(value) {
  return typeof value == 'string' ||
    (!isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag);
}

module.exports = isString;


/***/ }),

/***/ 71087:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseGetTag = __webpack_require__(86714),
    isObjectLike = __webpack_require__(12387);

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),

/***/ 8160:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseIsTypedArray = __webpack_require__(61571),
    baseUnary = __webpack_require__(70287),
    nodeUtil = __webpack_require__(23524);

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

module.exports = isTypedArray;


/***/ }),

/***/ 99231:
/***/ (function(module) {

/**
 * Checks if `value` is `undefined`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `undefined`, else `false`.
 * @example
 *
 * _.isUndefined(void 0);
 * // => true
 *
 * _.isUndefined(null);
 * // => false
 */
function isUndefined(value) {
  return value === undefined;
}

module.exports = isUndefined;


/***/ }),

/***/ 85346:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(66515),
    baseKeys = __webpack_require__(99605),
    isArrayLike = __webpack_require__(85635);

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

module.exports = keys;


/***/ }),

/***/ 11465:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(66515),
    baseKeysIn = __webpack_require__(6199),
    isArrayLike = __webpack_require__(85635);

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}

module.exports = keysIn;


/***/ }),

/***/ 44388:
/***/ (function(module) {

/**
 * Gets the last element of `array`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to query.
 * @returns {*} Returns the last element of `array`.
 * @example
 *
 * _.last([1, 2, 3]);
 * // => 3
 */
function last(array) {
  var length = array == null ? 0 : array.length;
  return length ? array[length - 1] : undefined;
}

module.exports = last;


/***/ }),

/***/ 44853:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var arrayMap = __webpack_require__(9121),
    baseIteratee = __webpack_require__(57322),
    baseMap = __webpack_require__(98829),
    isArray = __webpack_require__(12068);

/**
 * Creates an array of values by running each element in `collection` thru
 * `iteratee`. The iteratee is invoked with three arguments:
 * (value, index|key, collection).
 *
 * Many lodash methods are guarded to work as iteratees for methods like
 * `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.
 *
 * The guarded methods are:
 * `ary`, `chunk`, `curry`, `curryRight`, `drop`, `dropRight`, `every`,
 * `fill`, `invert`, `parseInt`, `random`, `range`, `rangeRight`, `repeat`,
 * `sampleSize`, `slice`, `some`, `sortBy`, `split`, `take`, `takeRight`,
 * `template`, `trim`, `trimEnd`, `trimStart`, and `words`
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 * @example
 *
 * function square(n) {
 *   return n * n;
 * }
 *
 * _.map([4, 8], square);
 * // => [16, 64]
 *
 * _.map({ 'a': 4, 'b': 8 }, square);
 * // => [16, 64] (iteration order is not guaranteed)
 *
 * var users = [
 *   { 'user': 'barney' },
 *   { 'user': 'fred' }
 * ];
 *
 * // The `_.property` iteratee shorthand.
 * _.map(users, 'user');
 * // => ['barney', 'fred']
 */
function map(collection, iteratee) {
  var func = isArray(collection) ? arrayMap : baseMap;
  return func(collection, baseIteratee(iteratee, 3));
}

module.exports = map;


/***/ }),

/***/ 93023:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var MapCache = __webpack_require__(19612);

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = MapCache;

module.exports = memoize;


/***/ }),

/***/ 8919:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseProperty = __webpack_require__(51357),
    basePropertyDeep = __webpack_require__(9266),
    isKey = __webpack_require__(41846),
    toKey = __webpack_require__(97990);

/**
 * Creates a function that returns the value at `path` of a given object.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 * @example
 *
 * var objects = [
 *   { 'a': { 'b': 2 } },
 *   { 'a': { 'b': 1 } }
 * ];
 *
 * _.map(objects, _.property('a.b'));
 * // => [2, 1]
 *
 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
 * // => [1, 2]
 */
function property(path) {
  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
}

module.exports = property;


/***/ }),

/***/ 12501:
/***/ (function(module) {

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

module.exports = stubArray;


/***/ }),

/***/ 7644:
/***/ (function(module) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),

/***/ 54137:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseSlice = __webpack_require__(74932),
    toInteger = __webpack_require__(12919);

/**
 * Creates a slice of `array` with `n` elements taken from the beginning.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to query.
 * @param {number} [n=1] The number of elements to take.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {Array} Returns the slice of `array`.
 * @example
 *
 * _.take([1, 2, 3]);
 * // => [1]
 *
 * _.take([1, 2, 3], 2);
 * // => [1, 2]
 *
 * _.take([1, 2, 3], 5);
 * // => [1, 2, 3]
 *
 * _.take([1, 2, 3], 0);
 * // => []
 */
function take(array, n, guard) {
  if (!(array && array.length)) {
    return [];
  }
  n = (guard || n === undefined) ? 1 : toInteger(n);
  return baseSlice(array, 0, n < 0 ? 0 : n);
}

module.exports = take;


/***/ }),

/***/ 28206:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var toNumber = __webpack_require__(71573);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_INTEGER = 1.7976931348623157e+308;

/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */
function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber(value);
  if (value === INFINITY || value === -INFINITY) {
    var sign = (value < 0 ? -1 : 1);
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}

module.exports = toFinite;


/***/ }),

/***/ 12919:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var toFinite = __webpack_require__(28206);

/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */
function toInteger(value) {
  var result = toFinite(value),
      remainder = result % 1;

  return result === result ? (remainder ? result - remainder : result) : 0;
}

module.exports = toInteger;


/***/ }),

/***/ 71573:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseTrim = __webpack_require__(13225),
    isObject = __webpack_require__(36905),
    isSymbol = __webpack_require__(71087);

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = baseTrim(value);
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = toNumber;


/***/ }),

/***/ 60665:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseToString = __webpack_require__(13511);

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

module.exports = toString;


/***/ }),

/***/ 94630:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseValues = __webpack_require__(23156),
    keys = __webpack_require__(85346);

/**
 * Creates an array of the own enumerable string keyed property values of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property values.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.values(new Foo);
 * // => [1, 2] (iteration order is not guaranteed)
 *
 * _.values('hi');
 * // => ['h', 'i']
 */
function values(object) {
  return object == null ? [] : baseValues(object, keys(object));
}

module.exports = values;


/***/ }),

/***/ 28332:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 30838))

/***/ }),

/***/ 30838:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57437);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(98864);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2265);
/* harmony import */ var react_quill_dist_quill_bubble_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(64659);
/* harmony import */ var react_quill_dist_quill_bubble_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_quill_dist_quill_bubble_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_cloudinary__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(74915);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(82749);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(24033);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_6__);
/* __next_internal_client_entry_do_not_use__ default auto */ 






const NewPostEditor = ()=>{
    const cloudinary = (__webpack_require__(24096).v2);
    cloudinary.config({
        secure: true
    });
    const { data: session, status } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_5__.useSession)();
    const [resource, setResource] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(undefined);
    const [openOptions, setOpenOptions] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const [value, setValue] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const ReactQuill = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(()=>Promise.all(/* import() */[__webpack_require__.e(70), __webpack_require__.e(233)]).then(__webpack_require__.t.bind(__webpack_require__, 6233, 23)), {
            loadableGenerated: {
                webpack: ()=>[
                        /*require.resolve*/(6233)
                    ]
            },
            ssr: false
        }), []);
    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
    const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (status === "unauthenticated") {
            router.push("/login");
        }
    }, [
        status,
        router
    ]);
    if (status === "loading") {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
            children: "Loading..."
        });
    }
    if (!session) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
            children: "Redirecting..."
        });
    }
    const slugify = (str)=>{
        return str.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
    };
    const handleOnSubmit = async ()=>{
        // const imgUrl = JSON.parse(resource).secure_url;
        //console.log(imgUrl);
        const res = await fetch("/api/news", {
            method: "POST",
            body: JSON.stringify({
                title: title,
                desc: value,
                img: resource,
                slug: slugify(title)
            })
        });
        console.log(res);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        className: "max-container padding-container ",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", {
                type: "text",
                className: "input text-6xl mb-4 rounded p-12 b-none outline-none bg-transparent",
                placeholder: "Tytuł",
                onChange: (e)=>setTitle(e.target.value)
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-col gap-5 h-[700px]",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
                        className: "flex w-[36px] h-[36px] rounded-[50%] border-2 items-center justify-center",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(next_cloudinary__WEBPACK_IMPORTED_MODULE_4__/* .CldImage */ .bz, {
                            src: "https://res.cloudinary.com/dozgr1muo/image/upload/v1234/midas/abn4erxzjn2wexvjxo2g.png",
                            alt: "",
                            width: 16,
                            height: 16,
                            onClick: ()=>setOpenOptions(!openOptions)
                        })
                    }),
                    openOptions && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-row gap-4 ",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(next_cloudinary__WEBPACK_IMPORTED_MODULE_4__/* .CldUploadWidget */ .ZF, {
                                signatureEndpoint: "/api/sign-cloudinary-params",
                                onSuccess: (result)=>{
                                    if (result.info) {
                                        setResource(result.info.secure_url);
                                    }
                                },
                                children: (param)=>{
                                    let { open } = param;
                                    return(// <input type='file' id='image' onChange={(e)=> setFile(e.target.files ? e.target.files[0] : null)}/>
                                    // <label htmlFor='image'>
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
                                        className: "flex w-[36px] h-[36px] rounded-[50%] border-2 items-center justify-center",
                                        onClick: ()=>open(),
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(next_cloudinary__WEBPACK_IMPORTED_MODULE_4__/* .CldImage */ .bz, {
                                            src: "https://res.cloudinary.com/dozgr1muo/image/upload/v1234/midas/qu3vhl7vzffip78jzhmw.png",
                                            alt: "",
                                            width: 16,
                                            height: 16
                                        })
                                    }));
                                }
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
                                className: "flex w-[36px] h-[36px] rounded-[50%] border-2 items-center justify-center",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(next_cloudinary__WEBPACK_IMPORTED_MODULE_4__/* .CldImage */ .bz, {
                                    src: "https://res.cloudinary.com/dozgr1muo/image/upload/v1234/midas/q9vbyngedv2mpm4mwdfw.png",
                                    alt: "",
                                    width: 16,
                                    height: 16
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
                                className: "flex w-[36px] h-[36px] rounded-[50%] border-2 items-center justify-center",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(next_cloudinary__WEBPACK_IMPORTED_MODULE_4__/* .CldImage */ .bz, {
                                    src: "https://res.cloudinary.com/dozgr1muo/image/upload/v1234/midas/jfmjl6vzmyrchqt0u6cp.png",
                                    alt: "",
                                    width: 16,
                                    height: 16
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ReactQuill, {
                        theme: "bubble",
                        placeholder: "Treść posta...",
                        value: value,
                        onChange: setValue
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
                        className: "flex btn-active btn-primary btn-sm rounded-lg text-cream items-center ml-auto mr-[25%]",
                        onClick: handleOnSubmit,
                        children: "Dodaj wpis"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ __webpack_exports__["default"] = (NewPostEditor);


/***/ }),

/***/ 98864:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "default", ({
    enumerable: true,
    get: function() {
        return dynamic;
    }
}));
const _interop_require_default = __webpack_require__(21024);
const _react = /*#__PURE__*/ _interop_require_default._(__webpack_require__(2265));
const _loadable = /*#__PURE__*/ _interop_require_default._(__webpack_require__(90533));
// Normalize loader to return the module as form { default: Component } for `React.lazy`.
// Also for backward compatible since next/dynamic allows to resolve a component directly with loader
// Client component reference proxy need to be converted to a module.
function convertModule(mod) {
    return {
        default: (mod == null ? void 0 : mod.default) || mod
    };
}
function dynamic(dynamicOptions, options) {
    const loadableFn = _loadable.default;
    const loadableOptions = {
        // A loading component is not required, so we default it
        loading: (param)=>{
            let { error, isLoading, pastDelay } = param;
            if (!pastDelay) return null;
            if (false) {}
            return null;
        }
    };
    if (typeof dynamicOptions === "function") {
        loadableOptions.loader = dynamicOptions;
    }
    Object.assign(loadableOptions, options);
    const loaderFn = loadableOptions.loader;
    const loader = ()=>loaderFn != null ? loaderFn().then(convertModule) : Promise.resolve(convertModule(()=>null));
    return loadableFn({
        ...loadableOptions,
        loader: loader
    });
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=app-dynamic.js.map


/***/ }),

/***/ 33699:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
/* __next_internal_client_entry_do_not_use__  cjs */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    suspense: function() {
        return suspense;
    },
    NoSSR: function() {
        return NoSSR;
    }
});
const _interop_require_default = __webpack_require__(21024);
const _react = /*#__PURE__*/ _interop_require_default._(__webpack_require__(2265));
const _nossrerror = __webpack_require__(37669);
function suspense() {
    const error = new Error(_nossrerror.NEXT_DYNAMIC_NO_SSR_CODE);
    error.digest = _nossrerror.NEXT_DYNAMIC_NO_SSR_CODE;
    throw error;
}
function NoSSR(param) {
    let { children } = param;
    if (false) {}
    return children;
} //# sourceMappingURL=dynamic-no-ssr.js.map


/***/ }),

/***/ 90533:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "default", ({
    enumerable: true,
    get: function() {
        return _default;
    }
}));
const _interop_require_default = __webpack_require__(21024);
const _react = /*#__PURE__*/ _interop_require_default._(__webpack_require__(2265));
const _dynamicnossr = __webpack_require__(33699);
function Loadable(options) {
    const opts = Object.assign({
        loader: null,
        loading: null,
        ssr: true
    }, options);
    opts.lazy = /*#__PURE__*/ _react.default.lazy(opts.loader);
    function LoadableComponent(props) {
        const Loading = opts.loading;
        const fallbackElement = /*#__PURE__*/ _react.default.createElement(Loading, {
            isLoading: true,
            pastDelay: true,
            error: null
        });
        const Wrap = opts.ssr ? _react.default.Fragment : _dynamicnossr.NoSSR;
        const Lazy = opts.lazy;
        return /*#__PURE__*/ _react.default.createElement(_react.default.Suspense, {
            fallback: fallbackElement
        }, /*#__PURE__*/ _react.default.createElement(Wrap, null, /*#__PURE__*/ _react.default.createElement(Lazy, props)));
    }
    LoadableComponent.displayName = "LoadableComponent";
    return LoadableComponent;
}
const _default = Loadable; //# sourceMappingURL=loadable.js.map


/***/ }),

/***/ 64659:
/***/ (function() {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 17795:
/***/ (function(module) {

var __dirname = "/";
(function(){"use strict";var e={864:function(e){var t=typeof Reflect==="object"?Reflect:null;var n=t&&typeof t.apply==="function"?t.apply:function ReflectApply(e,t,n){return Function.prototype.apply.call(e,t,n)};var r;if(t&&typeof t.ownKeys==="function"){r=t.ownKeys}else if(Object.getOwnPropertySymbols){r=function ReflectOwnKeys(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}}else{r=function ReflectOwnKeys(e){return Object.getOwnPropertyNames(e)}}function ProcessEmitWarning(e){if(console&&console.warn)console.warn(e)}var i=Number.isNaN||function NumberIsNaN(e){return e!==e};function EventEmitter(){EventEmitter.init.call(this)}e.exports=EventEmitter;e.exports.once=once;EventEmitter.EventEmitter=EventEmitter;EventEmitter.prototype._events=undefined;EventEmitter.prototype._eventsCount=0;EventEmitter.prototype._maxListeners=undefined;var s=10;function checkListener(e){if(typeof e!=="function"){throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof e)}}Object.defineProperty(EventEmitter,"defaultMaxListeners",{enumerable:true,get:function(){return s},set:function(e){if(typeof e!=="number"||e<0||i(e)){throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+e+".")}s=e}});EventEmitter.init=function(){if(this._events===undefined||this._events===Object.getPrototypeOf(this)._events){this._events=Object.create(null);this._eventsCount=0}this._maxListeners=this._maxListeners||undefined};EventEmitter.prototype.setMaxListeners=function setMaxListeners(e){if(typeof e!=="number"||e<0||i(e)){throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".")}this._maxListeners=e;return this};function _getMaxListeners(e){if(e._maxListeners===undefined)return EventEmitter.defaultMaxListeners;return e._maxListeners}EventEmitter.prototype.getMaxListeners=function getMaxListeners(){return _getMaxListeners(this)};EventEmitter.prototype.emit=function emit(e){var t=[];for(var r=1;r<arguments.length;r++)t.push(arguments[r]);var i=e==="error";var s=this._events;if(s!==undefined)i=i&&s.error===undefined;else if(!i)return false;if(i){var o;if(t.length>0)o=t[0];if(o instanceof Error){throw o}var f=new Error("Unhandled error."+(o?" ("+o.message+")":""));f.context=o;throw f}var u=s[e];if(u===undefined)return false;if(typeof u==="function"){n(u,this,t)}else{var a=u.length;var c=arrayClone(u,a);for(var r=0;r<a;++r)n(c[r],this,t)}return true};function _addListener(e,t,n,r){var i;var s;var o;checkListener(n);s=e._events;if(s===undefined){s=e._events=Object.create(null);e._eventsCount=0}else{if(s.newListener!==undefined){e.emit("newListener",t,n.listener?n.listener:n);s=e._events}o=s[t]}if(o===undefined){o=s[t]=n;++e._eventsCount}else{if(typeof o==="function"){o=s[t]=r?[n,o]:[o,n]}else if(r){o.unshift(n)}else{o.push(n)}i=_getMaxListeners(e);if(i>0&&o.length>i&&!o.warned){o.warned=true;var f=new Error("Possible EventEmitter memory leak detected. "+o.length+" "+String(t)+" listeners "+"added. Use emitter.setMaxListeners() to "+"increase limit");f.name="MaxListenersExceededWarning";f.emitter=e;f.type=t;f.count=o.length;ProcessEmitWarning(f)}}return e}EventEmitter.prototype.addListener=function addListener(e,t){return _addListener(this,e,t,false)};EventEmitter.prototype.on=EventEmitter.prototype.addListener;EventEmitter.prototype.prependListener=function prependListener(e,t){return _addListener(this,e,t,true)};function onceWrapper(){if(!this.fired){this.target.removeListener(this.type,this.wrapFn);this.fired=true;if(arguments.length===0)return this.listener.call(this.target);return this.listener.apply(this.target,arguments)}}function _onceWrap(e,t,n){var r={fired:false,wrapFn:undefined,target:e,type:t,listener:n};var i=onceWrapper.bind(r);i.listener=n;r.wrapFn=i;return i}EventEmitter.prototype.once=function once(e,t){checkListener(t);this.on(e,_onceWrap(this,e,t));return this};EventEmitter.prototype.prependOnceListener=function prependOnceListener(e,t){checkListener(t);this.prependListener(e,_onceWrap(this,e,t));return this};EventEmitter.prototype.removeListener=function removeListener(e,t){var n,r,i,s,o;checkListener(t);r=this._events;if(r===undefined)return this;n=r[e];if(n===undefined)return this;if(n===t||n.listener===t){if(--this._eventsCount===0)this._events=Object.create(null);else{delete r[e];if(r.removeListener)this.emit("removeListener",e,n.listener||t)}}else if(typeof n!=="function"){i=-1;for(s=n.length-1;s>=0;s--){if(n[s]===t||n[s].listener===t){o=n[s].listener;i=s;break}}if(i<0)return this;if(i===0)n.shift();else{spliceOne(n,i)}if(n.length===1)r[e]=n[0];if(r.removeListener!==undefined)this.emit("removeListener",e,o||t)}return this};EventEmitter.prototype.off=EventEmitter.prototype.removeListener;EventEmitter.prototype.removeAllListeners=function removeAllListeners(e){var t,n,r;n=this._events;if(n===undefined)return this;if(n.removeListener===undefined){if(arguments.length===0){this._events=Object.create(null);this._eventsCount=0}else if(n[e]!==undefined){if(--this._eventsCount===0)this._events=Object.create(null);else delete n[e]}return this}if(arguments.length===0){var i=Object.keys(n);var s;for(r=0;r<i.length;++r){s=i[r];if(s==="removeListener")continue;this.removeAllListeners(s)}this.removeAllListeners("removeListener");this._events=Object.create(null);this._eventsCount=0;return this}t=n[e];if(typeof t==="function"){this.removeListener(e,t)}else if(t!==undefined){for(r=t.length-1;r>=0;r--){this.removeListener(e,t[r])}}return this};function _listeners(e,t,n){var r=e._events;if(r===undefined)return[];var i=r[t];if(i===undefined)return[];if(typeof i==="function")return n?[i.listener||i]:[i];return n?unwrapListeners(i):arrayClone(i,i.length)}EventEmitter.prototype.listeners=function listeners(e){return _listeners(this,e,true)};EventEmitter.prototype.rawListeners=function rawListeners(e){return _listeners(this,e,false)};EventEmitter.listenerCount=function(e,t){if(typeof e.listenerCount==="function"){return e.listenerCount(t)}else{return listenerCount.call(e,t)}};EventEmitter.prototype.listenerCount=listenerCount;function listenerCount(e){var t=this._events;if(t!==undefined){var n=t[e];if(typeof n==="function"){return 1}else if(n!==undefined){return n.length}}return 0}EventEmitter.prototype.eventNames=function eventNames(){return this._eventsCount>0?r(this._events):[]};function arrayClone(e,t){var n=new Array(t);for(var r=0;r<t;++r)n[r]=e[r];return n}function spliceOne(e,t){for(;t+1<e.length;t++)e[t]=e[t+1];e.pop()}function unwrapListeners(e){var t=new Array(e.length);for(var n=0;n<t.length;++n){t[n]=e[n].listener||e[n]}return t}function once(e,t){return new Promise((function(n,r){function errorListener(n){e.removeListener(t,resolver);r(n)}function resolver(){if(typeof e.removeListener==="function"){e.removeListener("error",errorListener)}n([].slice.call(arguments))}eventTargetAgnosticAddListener(e,t,resolver,{once:true});if(t!=="error"){addErrorHandlerIfEventEmitter(e,errorListener,{once:true})}}))}function addErrorHandlerIfEventEmitter(e,t,n){if(typeof e.on==="function"){eventTargetAgnosticAddListener(e,"error",t,n)}}function eventTargetAgnosticAddListener(e,t,n,r){if(typeof e.on==="function"){if(r.once){e.once(t,n)}else{e.on(t,n)}}else if(typeof e.addEventListener==="function"){e.addEventListener(t,(function wrapListener(i){if(r.once){e.removeEventListener(t,wrapListener)}n(i)}))}else{throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof e)}}}};var t={};function __nccwpck_require__(n){var r=t[n];if(r!==undefined){return r.exports}var i=t[n]={exports:{}};var s=true;try{e[n](i,i.exports,__nccwpck_require__);s=false}finally{if(s)delete t[n]}return i.exports}if(typeof __nccwpck_require__!=="undefined")__nccwpck_require__.ab=__dirname+"/";var n=__nccwpck_require__(864);module.exports=n})();

/***/ }),

/***/ 83104:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var __dirname = "/";
(function(){var r={528:function(r,e,t){var o=t(685);var a=t(310);var i=r.exports;for(var n in o){if(o.hasOwnProperty(n))i[n]=o[n]}i.request=function(r,e){r=validateParams(r);return o.request.call(this,r,e)};i.get=function(r,e){r=validateParams(r);return o.get.call(this,r,e)};function validateParams(r){if(typeof r==="string"){r=a.parse(r)}if(!r.protocol){r.protocol="https:"}if(r.protocol!=="https:"){throw new Error('Protocol "'+r.protocol+'" not supported. Expected "https:"')}return r}},685:function(r){"use strict";r.exports=__webpack_require__(72909)},310:function(r){"use strict";r.exports=__webpack_require__(40692)}};var e={};function __nccwpck_require__(t){var o=e[t];if(o!==undefined){return o.exports}var a=e[t]={exports:{}};var i=true;try{r[t](a,a.exports,__nccwpck_require__);i=false}finally{if(i)delete e[t]}return a.exports}if(typeof __nccwpck_require__!=="undefined")__nccwpck_require__.ab=__dirname+"/";var t=__nccwpck_require__(528);module.exports=t})();

/***/ }),

/***/ 40692:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var __dirname = "/";
(function(){var e={452:function(e){"use strict";e.exports=__webpack_require__(9875)}};var t={};function __nccwpck_require__(o){var a=t[o];if(a!==undefined){return a.exports}var s=t[o]={exports:{}};var n=true;try{e[o](s,s.exports,__nccwpck_require__);n=false}finally{if(n)delete t[o]}return s.exports}if(typeof __nccwpck_require__!=="undefined")__nccwpck_require__.ab=__dirname+"/";var o={};!function(){var e=o;var t,a=(t=__nccwpck_require__(452))&&"object"==typeof t&&"default"in t?t.default:t,s=/https?|ftp|gopher|file/;function r(e){"string"==typeof e&&(e=d(e));var t=function(e,t,o){var a=e.auth,s=e.hostname,n=e.protocol||"",p=e.pathname||"",c=e.hash||"",i=e.query||"",u=!1;a=a?encodeURIComponent(a).replace(/%3A/i,":")+"@":"",e.host?u=a+e.host:s&&(u=a+(~s.indexOf(":")?"["+s+"]":s),e.port&&(u+=":"+e.port)),i&&"object"==typeof i&&(i=t.encode(i));var f=e.search||i&&"?"+i||"";return n&&":"!==n.substr(-1)&&(n+=":"),e.slashes||(!n||o.test(n))&&!1!==u?(u="//"+(u||""),p&&"/"!==p[0]&&(p="/"+p)):u||(u=""),c&&"#"!==c[0]&&(c="#"+c),f&&"?"!==f[0]&&(f="?"+f),{protocol:n,host:u,pathname:p=p.replace(/[?#]/g,encodeURIComponent),search:f=f.replace("#","%23"),hash:c}}(e,a,s);return""+t.protocol+t.host+t.pathname+t.search+t.hash}var n="http://",p="w.w",c=n+p,i=/^([a-z0-9.+-]*:\/\/\/)([a-z0-9.+-]:\/*)?/i,u=/https?|ftp|gopher|file/;function h(e,t){var o="string"==typeof e?d(e):e;e="object"==typeof e?r(e):e;var a=d(t),s="";o.protocol&&!o.slashes&&(s=o.protocol,e=e.replace(o.protocol,""),s+="/"===t[0]||"/"===e[0]?"/":""),s&&a.protocol&&(s="",a.slashes||(s=a.protocol,t=t.replace(a.protocol,"")));var p=e.match(i);p&&!a.protocol&&(e=e.substr((s=p[1]+(p[2]||"")).length),/^\/\/[^/]/.test(t)&&(s=s.slice(0,-1)));var f=new URL(e,c+"/"),m=new URL(t,f).toString().replace(c,""),v=a.protocol||o.protocol;return v+=o.slashes||a.slashes?"//":"",!s&&v?m=m.replace(n,v):s&&(m=m.replace(n,"")),u.test(m)||~t.indexOf(".")||"/"===e.slice(-1)||"/"===t.slice(-1)||"/"!==m.slice(-1)||(m=m.slice(0,-1)),s&&(m=s+("/"===m[0]?m.substr(1):m)),m}function l(){}l.prototype.parse=d,l.prototype.format=r,l.prototype.resolve=h,l.prototype.resolveObject=h;var f=/^https?|ftp|gopher|file/,m=/^(.*?)([#?].*)/,v=/^([a-z0-9.+-]*:)(\/{0,3})(.*)/i,_=/^([a-z0-9.+-]*:)?\/\/\/*/i,b=/^([a-z0-9.+-]*:)(\/{0,2})\[(.*)\]$/i;function d(e,t,o){if(void 0===t&&(t=!1),void 0===o&&(o=!1),e&&"object"==typeof e&&e instanceof l)return e;var s=(e=e.trim()).match(m);e=s?s[1].replace(/\\/g,"/")+s[2]:e.replace(/\\/g,"/"),b.test(e)&&"/"!==e.slice(-1)&&(e+="/");var n=!/(^javascript)/.test(e)&&e.match(v),i=_.test(e),u="";n&&(f.test(n[1])||(u=n[1].toLowerCase(),e=""+n[2]+n[3]),n[2]||(i=!1,f.test(n[1])?(u=n[1],e=""+n[3]):e="//"+n[3]),3!==n[2].length&&1!==n[2].length||(u=n[1],e="/"+n[3]));var g,y=(s?s[1]:e).match(/^https?:\/\/[^/]+(:[0-9]+)(?=\/|$)/),w=y&&y[1],x=new l,C="",U="";try{g=new URL(e)}catch(t){C=t,u||o||!/^\/\//.test(e)||/^\/\/.+[@.]/.test(e)||(U="/",e=e.substr(1));try{g=new URL(e,c)}catch(e){return x.protocol=u,x.href=u,x}}x.slashes=i&&!U,x.host=g.host===p?"":g.host,x.hostname=g.hostname===p?"":g.hostname.replace(/(\[|\])/g,""),x.protocol=C?u||null:g.protocol,x.search=g.search.replace(/\\/g,"%5C"),x.hash=g.hash.replace(/\\/g,"%5C");var j=e.split("#");!x.search&&~j[0].indexOf("?")&&(x.search="?"),x.hash||""!==j[1]||(x.hash="#"),x.query=t?a.decode(g.search.substr(1)):x.search.substr(1),x.pathname=U+(n?function(e){return e.replace(/['^|`]/g,(function(e){return"%"+e.charCodeAt().toString(16).toUpperCase()})).replace(/((?:%[0-9A-F]{2})+)/g,(function(e,t){try{return decodeURIComponent(t).split("").map((function(e){var t=e.charCodeAt();return t>256||/^[a-z0-9]$/i.test(e)?e:"%"+t.toString(16).toUpperCase()})).join("")}catch(e){return t}}))}(g.pathname):g.pathname),"about:"===x.protocol&&"blank"===x.pathname&&(x.protocol="",x.pathname=""),C&&"/"!==e[0]&&(x.pathname=x.pathname.substr(1)),u&&!f.test(u)&&"/"!==e.slice(-1)&&"/"===x.pathname&&(x.pathname=""),x.path=x.pathname+x.search,x.auth=[g.username,g.password].map(decodeURIComponent).filter(Boolean).join(":"),x.port=g.port,w&&!x.host.endsWith(w)&&(x.host+=w,x.port=w.slice(1)),x.href=U?""+x.pathname+x.search+x.hash:r(x);var q=/^(file)/.test(x.href)?["host","hostname"]:[];return Object.keys(x).forEach((function(e){~q.indexOf(e)||(x[e]=x[e]||null)})),x}e.parse=d,e.format=r,e.resolve=h,e.resolveObject=function(e,t){return d(h(e,t))},e.Url=l}();module.exports=o})();

/***/ }),

/***/ 29743:
/***/ (function(module) {

var __dirname = "/";
(function(){"use strict";var e={114:function(e){function assertPath(e){if(typeof e!=="string"){throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}}function normalizeStringPosix(e,r){var t="";var i=0;var n=-1;var a=0;var f;for(var l=0;l<=e.length;++l){if(l<e.length)f=e.charCodeAt(l);else if(f===47)break;else f=47;if(f===47){if(n===l-1||a===1){}else if(n!==l-1&&a===2){if(t.length<2||i!==2||t.charCodeAt(t.length-1)!==46||t.charCodeAt(t.length-2)!==46){if(t.length>2){var s=t.lastIndexOf("/");if(s!==t.length-1){if(s===-1){t="";i=0}else{t=t.slice(0,s);i=t.length-1-t.lastIndexOf("/")}n=l;a=0;continue}}else if(t.length===2||t.length===1){t="";i=0;n=l;a=0;continue}}if(r){if(t.length>0)t+="/..";else t="..";i=2}}else{if(t.length>0)t+="/"+e.slice(n+1,l);else t=e.slice(n+1,l);i=l-n-1}n=l;a=0}else if(f===46&&a!==-1){++a}else{a=-1}}return t}function _format(e,r){var t=r.dir||r.root;var i=r.base||(r.name||"")+(r.ext||"");if(!t){return i}if(t===r.root){return t+i}return t+e+i}var r={resolve:function resolve(){var e="";var r=false;var t;for(var i=arguments.length-1;i>=-1&&!r;i--){var n;if(i>=0)n=arguments[i];else{if(t===undefined)t="";n=t}assertPath(n);if(n.length===0){continue}e=n+"/"+e;r=n.charCodeAt(0)===47}e=normalizeStringPosix(e,!r);if(r){if(e.length>0)return"/"+e;else return"/"}else if(e.length>0){return e}else{return"."}},normalize:function normalize(e){assertPath(e);if(e.length===0)return".";var r=e.charCodeAt(0)===47;var t=e.charCodeAt(e.length-1)===47;e=normalizeStringPosix(e,!r);if(e.length===0&&!r)e=".";if(e.length>0&&t)e+="/";if(r)return"/"+e;return e},isAbsolute:function isAbsolute(e){assertPath(e);return e.length>0&&e.charCodeAt(0)===47},join:function join(){if(arguments.length===0)return".";var e;for(var t=0;t<arguments.length;++t){var i=arguments[t];assertPath(i);if(i.length>0){if(e===undefined)e=i;else e+="/"+i}}if(e===undefined)return".";return r.normalize(e)},relative:function relative(e,t){assertPath(e);assertPath(t);if(e===t)return"";e=r.resolve(e);t=r.resolve(t);if(e===t)return"";var i=1;for(;i<e.length;++i){if(e.charCodeAt(i)!==47)break}var n=e.length;var a=n-i;var f=1;for(;f<t.length;++f){if(t.charCodeAt(f)!==47)break}var l=t.length;var s=l-f;var o=a<s?a:s;var u=-1;var h=0;for(;h<=o;++h){if(h===o){if(s>o){if(t.charCodeAt(f+h)===47){return t.slice(f+h+1)}else if(h===0){return t.slice(f+h)}}else if(a>o){if(e.charCodeAt(i+h)===47){u=h}else if(h===0){u=0}}break}var c=e.charCodeAt(i+h);var v=t.charCodeAt(f+h);if(c!==v)break;else if(c===47)u=h}var g="";for(h=i+u+1;h<=n;++h){if(h===n||e.charCodeAt(h)===47){if(g.length===0)g+="..";else g+="/.."}}if(g.length>0)return g+t.slice(f+u);else{f+=u;if(t.charCodeAt(f)===47)++f;return t.slice(f)}},_makeLong:function _makeLong(e){return e},dirname:function dirname(e){assertPath(e);if(e.length===0)return".";var r=e.charCodeAt(0);var t=r===47;var i=-1;var n=true;for(var a=e.length-1;a>=1;--a){r=e.charCodeAt(a);if(r===47){if(!n){i=a;break}}else{n=false}}if(i===-1)return t?"/":".";if(t&&i===1)return"//";return e.slice(0,i)},basename:function basename(e,r){if(r!==undefined&&typeof r!=="string")throw new TypeError('"ext" argument must be a string');assertPath(e);var t=0;var i=-1;var n=true;var a;if(r!==undefined&&r.length>0&&r.length<=e.length){if(r.length===e.length&&r===e)return"";var f=r.length-1;var l=-1;for(a=e.length-1;a>=0;--a){var s=e.charCodeAt(a);if(s===47){if(!n){t=a+1;break}}else{if(l===-1){n=false;l=a+1}if(f>=0){if(s===r.charCodeAt(f)){if(--f===-1){i=a}}else{f=-1;i=l}}}}if(t===i)i=l;else if(i===-1)i=e.length;return e.slice(t,i)}else{for(a=e.length-1;a>=0;--a){if(e.charCodeAt(a)===47){if(!n){t=a+1;break}}else if(i===-1){n=false;i=a+1}}if(i===-1)return"";return e.slice(t,i)}},extname:function extname(e){assertPath(e);var r=-1;var t=0;var i=-1;var n=true;var a=0;for(var f=e.length-1;f>=0;--f){var l=e.charCodeAt(f);if(l===47){if(!n){t=f+1;break}continue}if(i===-1){n=false;i=f+1}if(l===46){if(r===-1)r=f;else if(a!==1)a=1}else if(r!==-1){a=-1}}if(r===-1||i===-1||a===0||a===1&&r===i-1&&r===t+1){return""}return e.slice(r,i)},format:function format(e){if(e===null||typeof e!=="object"){throw new TypeError('The "pathObject" argument must be of type Object. Received type '+typeof e)}return _format("/",e)},parse:function parse(e){assertPath(e);var r={root:"",dir:"",base:"",ext:"",name:""};if(e.length===0)return r;var t=e.charCodeAt(0);var i=t===47;var n;if(i){r.root="/";n=1}else{n=0}var a=-1;var f=0;var l=-1;var s=true;var o=e.length-1;var u=0;for(;o>=n;--o){t=e.charCodeAt(o);if(t===47){if(!s){f=o+1;break}continue}if(l===-1){s=false;l=o+1}if(t===46){if(a===-1)a=o;else if(u!==1)u=1}else if(a!==-1){u=-1}}if(a===-1||l===-1||u===0||u===1&&a===l-1&&a===f+1){if(l!==-1){if(f===0&&i)r.base=r.name=e.slice(1,l);else r.base=r.name=e.slice(f,l)}}else{if(f===0&&i){r.name=e.slice(1,a);r.base=e.slice(1,l)}else{r.name=e.slice(f,a);r.base=e.slice(f,l)}r.ext=e.slice(a,l)}if(f>0)r.dir=e.slice(0,f-1);else if(i)r.dir="/";return r},sep:"/",delimiter:":",win32:null,posix:null};r.posix=r;e.exports=r}};var r={};function __nccwpck_require__(t){var i=r[t];if(i!==undefined){return i.exports}var n=r[t]={exports:{}};var a=true;try{e[t](n,n.exports,__nccwpck_require__);a=false}finally{if(a)delete r[t]}return n.exports}if(typeof __nccwpck_require__!=="undefined")__nccwpck_require__.ab=__dirname+"/";var t=__nccwpck_require__(114);module.exports=t})();

/***/ }),

/***/ 9875:
/***/ (function(module) {

var __dirname = "/";
(function(){"use strict";var e={815:function(e){function hasOwnProperty(e,r){return Object.prototype.hasOwnProperty.call(e,r)}e.exports=function(e,n,t,o){n=n||"&";t=t||"=";var a={};if(typeof e!=="string"||e.length===0){return a}var i=/\+/g;e=e.split(n);var u=1e3;if(o&&typeof o.maxKeys==="number"){u=o.maxKeys}var c=e.length;if(u>0&&c>u){c=u}for(var p=0;p<c;++p){var f=e[p].replace(i,"%20"),s=f.indexOf(t),_,l,y,d;if(s>=0){_=f.substr(0,s);l=f.substr(s+1)}else{_=f;l=""}y=decodeURIComponent(_);d=decodeURIComponent(l);if(!hasOwnProperty(a,y)){a[y]=d}else if(r(a[y])){a[y].push(d)}else{a[y]=[a[y],d]}}return a};var r=Array.isArray||function(e){return Object.prototype.toString.call(e)==="[object Array]"}},577:function(e){var stringifyPrimitive=function(e){switch(typeof e){case"string":return e;case"boolean":return e?"true":"false";case"number":return isFinite(e)?e:"";default:return""}};e.exports=function(e,t,o,a){t=t||"&";o=o||"=";if(e===null){e=undefined}if(typeof e==="object"){return map(n(e),(function(n){var a=encodeURIComponent(stringifyPrimitive(n))+o;if(r(e[n])){return map(e[n],(function(e){return a+encodeURIComponent(stringifyPrimitive(e))})).join(t)}else{return a+encodeURIComponent(stringifyPrimitive(e[n]))}})).join(t)}if(!a)return"";return encodeURIComponent(stringifyPrimitive(a))+o+encodeURIComponent(stringifyPrimitive(e))};var r=Array.isArray||function(e){return Object.prototype.toString.call(e)==="[object Array]"};function map(e,r){if(e.map)return e.map(r);var n=[];for(var t=0;t<e.length;t++){n.push(r(e[t],t))}return n}var n=Object.keys||function(e){var r=[];for(var n in e){if(Object.prototype.hasOwnProperty.call(e,n))r.push(n)}return r}}};var r={};function __nccwpck_require__(n){var t=r[n];if(t!==undefined){return t.exports}var o=r[n]={exports:{}};var a=true;try{e[n](o,o.exports,__nccwpck_require__);a=false}finally{if(a)delete r[n]}return o.exports}if(typeof __nccwpck_require__!=="undefined")__nccwpck_require__.ab=__dirname+"/";var n={};!function(){var e=n;e.decode=e.parse=__nccwpck_require__(815);e.encode=e.stringify=__nccwpck_require__(577)}();module.exports=n})();

/***/ }),

/***/ 48290:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var __dirname = "/";
/* provided dependency */ var process = __webpack_require__(62601);
(function(){var e={782:function(e){if(typeof Object.create==="function"){e.exports=function inherits(e,t){if(t){e.super_=t;e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}})}}}else{e.exports=function inherits(e,t){if(t){e.super_=t;var TempCtor=function(){};TempCtor.prototype=t.prototype;e.prototype=new TempCtor;e.prototype.constructor=e}}}},646:function(e){"use strict";const t={};function createErrorType(e,r,n){if(!n){n=Error}function getMessage(e,t,n){if(typeof r==="string"){return r}else{return r(e,t,n)}}class NodeError extends n{constructor(e,t,r){super(getMessage(e,t,r))}}NodeError.prototype.name=n.name;NodeError.prototype.code=e;t[e]=NodeError}function oneOf(e,t){if(Array.isArray(e)){const r=e.length;e=e.map((e=>String(e)));if(r>2){return`one of ${t} ${e.slice(0,r-1).join(", ")}, or `+e[r-1]}else if(r===2){return`one of ${t} ${e[0]} or ${e[1]}`}else{return`of ${t} ${e[0]}`}}else{return`of ${t} ${String(e)}`}}function startsWith(e,t,r){return e.substr(!r||r<0?0:+r,t.length)===t}function endsWith(e,t,r){if(r===undefined||r>e.length){r=e.length}return e.substring(r-t.length,r)===t}function includes(e,t,r){if(typeof r!=="number"){r=0}if(r+t.length>e.length){return false}else{return e.indexOf(t,r)!==-1}}createErrorType("ERR_INVALID_OPT_VALUE",(function(e,t){return'The value "'+t+'" is invalid for option "'+e+'"'}),TypeError);createErrorType("ERR_INVALID_ARG_TYPE",(function(e,t,r){let n;if(typeof t==="string"&&startsWith(t,"not ")){n="must not be";t=t.replace(/^not /,"")}else{n="must be"}let i;if(endsWith(e," argument")){i=`The ${e} ${n} ${oneOf(t,"type")}`}else{const r=includes(e,".")?"property":"argument";i=`The "${e}" ${r} ${n} ${oneOf(t,"type")}`}i+=`. Received type ${typeof r}`;return i}),TypeError);createErrorType("ERR_STREAM_PUSH_AFTER_EOF","stream.push() after EOF");createErrorType("ERR_METHOD_NOT_IMPLEMENTED",(function(e){return"The "+e+" method is not implemented"}));createErrorType("ERR_STREAM_PREMATURE_CLOSE","Premature close");createErrorType("ERR_STREAM_DESTROYED",(function(e){return"Cannot call "+e+" after a stream was destroyed"}));createErrorType("ERR_MULTIPLE_CALLBACK","Callback called multiple times");createErrorType("ERR_STREAM_CANNOT_PIPE","Cannot pipe, not readable");createErrorType("ERR_STREAM_WRITE_AFTER_END","write after end");createErrorType("ERR_STREAM_NULL_VALUES","May not write null values to stream",TypeError);createErrorType("ERR_UNKNOWN_ENCODING",(function(e){return"Unknown encoding: "+e}),TypeError);createErrorType("ERR_STREAM_UNSHIFT_AFTER_END_EVENT","stream.unshift() after end event");e.exports.q=t},403:function(e,t,r){"use strict";var n=Object.keys||function(e){var t=[];for(var r in e){t.push(r)}return t};e.exports=Duplex;var i=r(709);var a=r(337);r(782)(Duplex,i);{var o=n(a.prototype);for(var s=0;s<o.length;s++){var f=o[s];if(!Duplex.prototype[f])Duplex.prototype[f]=a.prototype[f]}}function Duplex(e){if(!(this instanceof Duplex))return new Duplex(e);i.call(this,e);a.call(this,e);this.allowHalfOpen=true;if(e){if(e.readable===false)this.readable=false;if(e.writable===false)this.writable=false;if(e.allowHalfOpen===false){this.allowHalfOpen=false;this.once("end",onend)}}}Object.defineProperty(Duplex.prototype,"writableHighWaterMark",{enumerable:false,get:function get(){return this._writableState.highWaterMark}});Object.defineProperty(Duplex.prototype,"writableBuffer",{enumerable:false,get:function get(){return this._writableState&&this._writableState.getBuffer()}});Object.defineProperty(Duplex.prototype,"writableLength",{enumerable:false,get:function get(){return this._writableState.length}});function onend(){if(this._writableState.ended)return;process.nextTick(onEndNT,this)}function onEndNT(e){e.end()}Object.defineProperty(Duplex.prototype,"destroyed",{enumerable:false,get:function get(){if(this._readableState===undefined||this._writableState===undefined){return false}return this._readableState.destroyed&&this._writableState.destroyed},set:function set(e){if(this._readableState===undefined||this._writableState===undefined){return}this._readableState.destroyed=e;this._writableState.destroyed=e}})},889:function(e,t,r){"use strict";e.exports=PassThrough;var n=r(170);r(782)(PassThrough,n);function PassThrough(e){if(!(this instanceof PassThrough))return new PassThrough(e);n.call(this,e)}PassThrough.prototype._transform=function(e,t,r){r(null,e)}},709:function(e,t,r){"use strict";e.exports=Readable;var n;Readable.ReadableState=ReadableState;var i=r(361).EventEmitter;var a=function EElistenerCount(e,t){return e.listeners(t).length};var o=r(678);var s=r(300).Buffer;var f=__webpack_require__.g.Uint8Array||function(){};function _uint8ArrayToBuffer(e){return s.from(e)}function _isUint8Array(e){return s.isBuffer(e)||e instanceof f}var l=r(837);var u;if(l&&l.debuglog){u=l.debuglog("stream")}else{u=function debug(){}}var d=r(379);var c=r(25);var h=r(776),p=h.getHighWaterMark;var b=r(646).q,g=b.ERR_INVALID_ARG_TYPE,y=b.ERR_STREAM_PUSH_AFTER_EOF,_=b.ERR_METHOD_NOT_IMPLEMENTED,v=b.ERR_STREAM_UNSHIFT_AFTER_END_EVENT;var w;var m;var S;r(782)(Readable,o);var R=c.errorOrDestroy;var E=["error","close","destroy","pause","resume"];function prependListener(e,t,r){if(typeof e.prependListener==="function")return e.prependListener(t,r);if(!e._events||!e._events[t])e.on(t,r);else if(Array.isArray(e._events[t]))e._events[t].unshift(r);else e._events[t]=[r,e._events[t]]}function ReadableState(e,t,i){n=n||r(403);e=e||{};if(typeof i!=="boolean")i=t instanceof n;this.objectMode=!!e.objectMode;if(i)this.objectMode=this.objectMode||!!e.readableObjectMode;this.highWaterMark=p(this,e,"readableHighWaterMark",i);this.buffer=new d;this.length=0;this.pipes=null;this.pipesCount=0;this.flowing=null;this.ended=false;this.endEmitted=false;this.reading=false;this.sync=true;this.needReadable=false;this.emittedReadable=false;this.readableListening=false;this.resumeScheduled=false;this.paused=true;this.emitClose=e.emitClose!==false;this.autoDestroy=!!e.autoDestroy;this.destroyed=false;this.defaultEncoding=e.defaultEncoding||"utf8";this.awaitDrain=0;this.readingMore=false;this.decoder=null;this.encoding=null;if(e.encoding){if(!w)w=r(704).s;this.decoder=new w(e.encoding);this.encoding=e.encoding}}function Readable(e){n=n||r(403);if(!(this instanceof Readable))return new Readable(e);var t=this instanceof n;this._readableState=new ReadableState(e,this,t);this.readable=true;if(e){if(typeof e.read==="function")this._read=e.read;if(typeof e.destroy==="function")this._destroy=e.destroy}o.call(this)}Object.defineProperty(Readable.prototype,"destroyed",{enumerable:false,get:function get(){if(this._readableState===undefined){return false}return this._readableState.destroyed},set:function set(e){if(!this._readableState){return}this._readableState.destroyed=e}});Readable.prototype.destroy=c.destroy;Readable.prototype._undestroy=c.undestroy;Readable.prototype._destroy=function(e,t){t(e)};Readable.prototype.push=function(e,t){var r=this._readableState;var n;if(!r.objectMode){if(typeof e==="string"){t=t||r.defaultEncoding;if(t!==r.encoding){e=s.from(e,t);t=""}n=true}}else{n=true}return readableAddChunk(this,e,t,false,n)};Readable.prototype.unshift=function(e){return readableAddChunk(this,e,null,true,false)};function readableAddChunk(e,t,r,n,i){u("readableAddChunk",t);var a=e._readableState;if(t===null){a.reading=false;onEofChunk(e,a)}else{var o;if(!i)o=chunkInvalid(a,t);if(o){R(e,o)}else if(a.objectMode||t&&t.length>0){if(typeof t!=="string"&&!a.objectMode&&Object.getPrototypeOf(t)!==s.prototype){t=_uint8ArrayToBuffer(t)}if(n){if(a.endEmitted)R(e,new v);else addChunk(e,a,t,true)}else if(a.ended){R(e,new y)}else if(a.destroyed){return false}else{a.reading=false;if(a.decoder&&!r){t=a.decoder.write(t);if(a.objectMode||t.length!==0)addChunk(e,a,t,false);else maybeReadMore(e,a)}else{addChunk(e,a,t,false)}}}else if(!n){a.reading=false;maybeReadMore(e,a)}}return!a.ended&&(a.length<a.highWaterMark||a.length===0)}function addChunk(e,t,r,n){if(t.flowing&&t.length===0&&!t.sync){t.awaitDrain=0;e.emit("data",r)}else{t.length+=t.objectMode?1:r.length;if(n)t.buffer.unshift(r);else t.buffer.push(r);if(t.needReadable)emitReadable(e)}maybeReadMore(e,t)}function chunkInvalid(e,t){var r;if(!_isUint8Array(t)&&typeof t!=="string"&&t!==undefined&&!e.objectMode){r=new g("chunk",["string","Buffer","Uint8Array"],t)}return r}Readable.prototype.isPaused=function(){return this._readableState.flowing===false};Readable.prototype.setEncoding=function(e){if(!w)w=r(704).s;var t=new w(e);this._readableState.decoder=t;this._readableState.encoding=this._readableState.decoder.encoding;var n=this._readableState.buffer.head;var i="";while(n!==null){i+=t.write(n.data);n=n.next}this._readableState.buffer.clear();if(i!=="")this._readableState.buffer.push(i);this._readableState.length=i.length;return this};var T=1073741824;function computeNewHighWaterMark(e){if(e>=T){e=T}else{e--;e|=e>>>1;e|=e>>>2;e|=e>>>4;e|=e>>>8;e|=e>>>16;e++}return e}function howMuchToRead(e,t){if(e<=0||t.length===0&&t.ended)return 0;if(t.objectMode)return 1;if(e!==e){if(t.flowing&&t.length)return t.buffer.head.data.length;else return t.length}if(e>t.highWaterMark)t.highWaterMark=computeNewHighWaterMark(e);if(e<=t.length)return e;if(!t.ended){t.needReadable=true;return 0}return t.length}Readable.prototype.read=function(e){u("read",e);e=parseInt(e,10);var t=this._readableState;var r=e;if(e!==0)t.emittedReadable=false;if(e===0&&t.needReadable&&((t.highWaterMark!==0?t.length>=t.highWaterMark:t.length>0)||t.ended)){u("read: emitReadable",t.length,t.ended);if(t.length===0&&t.ended)endReadable(this);else emitReadable(this);return null}e=howMuchToRead(e,t);if(e===0&&t.ended){if(t.length===0)endReadable(this);return null}var n=t.needReadable;u("need readable",n);if(t.length===0||t.length-e<t.highWaterMark){n=true;u("length less than watermark",n)}if(t.ended||t.reading){n=false;u("reading or ended",n)}else if(n){u("do read");t.reading=true;t.sync=true;if(t.length===0)t.needReadable=true;this._read(t.highWaterMark);t.sync=false;if(!t.reading)e=howMuchToRead(r,t)}var i;if(e>0)i=fromList(e,t);else i=null;if(i===null){t.needReadable=t.length<=t.highWaterMark;e=0}else{t.length-=e;t.awaitDrain=0}if(t.length===0){if(!t.ended)t.needReadable=true;if(r!==e&&t.ended)endReadable(this)}if(i!==null)this.emit("data",i);return i};function onEofChunk(e,t){u("onEofChunk");if(t.ended)return;if(t.decoder){var r=t.decoder.end();if(r&&r.length){t.buffer.push(r);t.length+=t.objectMode?1:r.length}}t.ended=true;if(t.sync){emitReadable(e)}else{t.needReadable=false;if(!t.emittedReadable){t.emittedReadable=true;emitReadable_(e)}}}function emitReadable(e){var t=e._readableState;u("emitReadable",t.needReadable,t.emittedReadable);t.needReadable=false;if(!t.emittedReadable){u("emitReadable",t.flowing);t.emittedReadable=true;process.nextTick(emitReadable_,e)}}function emitReadable_(e){var t=e._readableState;u("emitReadable_",t.destroyed,t.length,t.ended);if(!t.destroyed&&(t.length||t.ended)){e.emit("readable");t.emittedReadable=false}t.needReadable=!t.flowing&&!t.ended&&t.length<=t.highWaterMark;flow(e)}function maybeReadMore(e,t){if(!t.readingMore){t.readingMore=true;process.nextTick(maybeReadMore_,e,t)}}function maybeReadMore_(e,t){while(!t.reading&&!t.ended&&(t.length<t.highWaterMark||t.flowing&&t.length===0)){var r=t.length;u("maybeReadMore read 0");e.read(0);if(r===t.length)break}t.readingMore=false}Readable.prototype._read=function(e){R(this,new _("_read()"))};Readable.prototype.pipe=function(e,t){var r=this;var n=this._readableState;switch(n.pipesCount){case 0:n.pipes=e;break;case 1:n.pipes=[n.pipes,e];break;default:n.pipes.push(e);break}n.pipesCount+=1;u("pipe count=%d opts=%j",n.pipesCount,t);var i=(!t||t.end!==false)&&e!==process.stdout&&e!==process.stderr;var o=i?onend:unpipe;if(n.endEmitted)process.nextTick(o);else r.once("end",o);e.on("unpipe",onunpipe);function onunpipe(e,t){u("onunpipe");if(e===r){if(t&&t.hasUnpiped===false){t.hasUnpiped=true;cleanup()}}}function onend(){u("onend");e.end()}var s=pipeOnDrain(r);e.on("drain",s);var f=false;function cleanup(){u("cleanup");e.removeListener("close",onclose);e.removeListener("finish",onfinish);e.removeListener("drain",s);e.removeListener("error",onerror);e.removeListener("unpipe",onunpipe);r.removeListener("end",onend);r.removeListener("end",unpipe);r.removeListener("data",ondata);f=true;if(n.awaitDrain&&(!e._writableState||e._writableState.needDrain))s()}r.on("data",ondata);function ondata(t){u("ondata");var i=e.write(t);u("dest.write",i);if(i===false){if((n.pipesCount===1&&n.pipes===e||n.pipesCount>1&&indexOf(n.pipes,e)!==-1)&&!f){u("false write response, pause",n.awaitDrain);n.awaitDrain++}r.pause()}}function onerror(t){u("onerror",t);unpipe();e.removeListener("error",onerror);if(a(e,"error")===0)R(e,t)}prependListener(e,"error",onerror);function onclose(){e.removeListener("finish",onfinish);unpipe()}e.once("close",onclose);function onfinish(){u("onfinish");e.removeListener("close",onclose);unpipe()}e.once("finish",onfinish);function unpipe(){u("unpipe");r.unpipe(e)}e.emit("pipe",r);if(!n.flowing){u("pipe resume");r.resume()}return e};function pipeOnDrain(e){return function pipeOnDrainFunctionResult(){var t=e._readableState;u("pipeOnDrain",t.awaitDrain);if(t.awaitDrain)t.awaitDrain--;if(t.awaitDrain===0&&a(e,"data")){t.flowing=true;flow(e)}}}Readable.prototype.unpipe=function(e){var t=this._readableState;var r={hasUnpiped:false};if(t.pipesCount===0)return this;if(t.pipesCount===1){if(e&&e!==t.pipes)return this;if(!e)e=t.pipes;t.pipes=null;t.pipesCount=0;t.flowing=false;if(e)e.emit("unpipe",this,r);return this}if(!e){var n=t.pipes;var i=t.pipesCount;t.pipes=null;t.pipesCount=0;t.flowing=false;for(var a=0;a<i;a++){n[a].emit("unpipe",this,{hasUnpiped:false})}return this}var o=indexOf(t.pipes,e);if(o===-1)return this;t.pipes.splice(o,1);t.pipesCount-=1;if(t.pipesCount===1)t.pipes=t.pipes[0];e.emit("unpipe",this,r);return this};Readable.prototype.on=function(e,t){var r=o.prototype.on.call(this,e,t);var n=this._readableState;if(e==="data"){n.readableListening=this.listenerCount("readable")>0;if(n.flowing!==false)this.resume()}else if(e==="readable"){if(!n.endEmitted&&!n.readableListening){n.readableListening=n.needReadable=true;n.flowing=false;n.emittedReadable=false;u("on readable",n.length,n.reading);if(n.length){emitReadable(this)}else if(!n.reading){process.nextTick(nReadingNextTick,this)}}}return r};Readable.prototype.addListener=Readable.prototype.on;Readable.prototype.removeListener=function(e,t){var r=o.prototype.removeListener.call(this,e,t);if(e==="readable"){process.nextTick(updateReadableListening,this)}return r};Readable.prototype.removeAllListeners=function(e){var t=o.prototype.removeAllListeners.apply(this,arguments);if(e==="readable"||e===undefined){process.nextTick(updateReadableListening,this)}return t};function updateReadableListening(e){var t=e._readableState;t.readableListening=e.listenerCount("readable")>0;if(t.resumeScheduled&&!t.paused){t.flowing=true}else if(e.listenerCount("data")>0){e.resume()}}function nReadingNextTick(e){u("readable nexttick read 0");e.read(0)}Readable.prototype.resume=function(){var e=this._readableState;if(!e.flowing){u("resume");e.flowing=!e.readableListening;resume(this,e)}e.paused=false;return this};function resume(e,t){if(!t.resumeScheduled){t.resumeScheduled=true;process.nextTick(resume_,e,t)}}function resume_(e,t){u("resume",t.reading);if(!t.reading){e.read(0)}t.resumeScheduled=false;e.emit("resume");flow(e);if(t.flowing&&!t.reading)e.read(0)}Readable.prototype.pause=function(){u("call pause flowing=%j",this._readableState.flowing);if(this._readableState.flowing!==false){u("pause");this._readableState.flowing=false;this.emit("pause")}this._readableState.paused=true;return this};function flow(e){var t=e._readableState;u("flow",t.flowing);while(t.flowing&&e.read()!==null){}}Readable.prototype.wrap=function(e){var t=this;var r=this._readableState;var n=false;e.on("end",(function(){u("wrapped end");if(r.decoder&&!r.ended){var e=r.decoder.end();if(e&&e.length)t.push(e)}t.push(null)}));e.on("data",(function(i){u("wrapped data");if(r.decoder)i=r.decoder.write(i);if(r.objectMode&&(i===null||i===undefined))return;else if(!r.objectMode&&(!i||!i.length))return;var a=t.push(i);if(!a){n=true;e.pause()}}));for(var i in e){if(this[i]===undefined&&typeof e[i]==="function"){this[i]=function methodWrap(t){return function methodWrapReturnFunction(){return e[t].apply(e,arguments)}}(i)}}for(var a=0;a<E.length;a++){e.on(E[a],this.emit.bind(this,E[a]))}this._read=function(t){u("wrapped _read",t);if(n){n=false;e.resume()}};return this};if(typeof Symbol==="function"){Readable.prototype[Symbol.asyncIterator]=function(){if(m===undefined){m=r(871)}return m(this)}}Object.defineProperty(Readable.prototype,"readableHighWaterMark",{enumerable:false,get:function get(){return this._readableState.highWaterMark}});Object.defineProperty(Readable.prototype,"readableBuffer",{enumerable:false,get:function get(){return this._readableState&&this._readableState.buffer}});Object.defineProperty(Readable.prototype,"readableFlowing",{enumerable:false,get:function get(){return this._readableState.flowing},set:function set(e){if(this._readableState){this._readableState.flowing=e}}});Readable._fromList=fromList;Object.defineProperty(Readable.prototype,"readableLength",{enumerable:false,get:function get(){return this._readableState.length}});function fromList(e,t){if(t.length===0)return null;var r;if(t.objectMode)r=t.buffer.shift();else if(!e||e>=t.length){if(t.decoder)r=t.buffer.join("");else if(t.buffer.length===1)r=t.buffer.first();else r=t.buffer.concat(t.length);t.buffer.clear()}else{r=t.buffer.consume(e,t.decoder)}return r}function endReadable(e){var t=e._readableState;u("endReadable",t.endEmitted);if(!t.endEmitted){t.ended=true;process.nextTick(endReadableNT,t,e)}}function endReadableNT(e,t){u("endReadableNT",e.endEmitted,e.length);if(!e.endEmitted&&e.length===0){e.endEmitted=true;t.readable=false;t.emit("end");if(e.autoDestroy){var r=t._writableState;if(!r||r.autoDestroy&&r.finished){t.destroy()}}}}if(typeof Symbol==="function"){Readable.from=function(e,t){if(S===undefined){S=r(727)}return S(Readable,e,t)}}function indexOf(e,t){for(var r=0,n=e.length;r<n;r++){if(e[r]===t)return r}return-1}},170:function(e,t,r){"use strict";e.exports=Transform;var n=r(646).q,i=n.ERR_METHOD_NOT_IMPLEMENTED,a=n.ERR_MULTIPLE_CALLBACK,o=n.ERR_TRANSFORM_ALREADY_TRANSFORMING,s=n.ERR_TRANSFORM_WITH_LENGTH_0;var f=r(403);r(782)(Transform,f);function afterTransform(e,t){var r=this._transformState;r.transforming=false;var n=r.writecb;if(n===null){return this.emit("error",new a)}r.writechunk=null;r.writecb=null;if(t!=null)this.push(t);n(e);var i=this._readableState;i.reading=false;if(i.needReadable||i.length<i.highWaterMark){this._read(i.highWaterMark)}}function Transform(e){if(!(this instanceof Transform))return new Transform(e);f.call(this,e);this._transformState={afterTransform:afterTransform.bind(this),needTransform:false,transforming:false,writecb:null,writechunk:null,writeencoding:null};this._readableState.needReadable=true;this._readableState.sync=false;if(e){if(typeof e.transform==="function")this._transform=e.transform;if(typeof e.flush==="function")this._flush=e.flush}this.on("prefinish",prefinish)}function prefinish(){var e=this;if(typeof this._flush==="function"&&!this._readableState.destroyed){this._flush((function(t,r){done(e,t,r)}))}else{done(this,null,null)}}Transform.prototype.push=function(e,t){this._transformState.needTransform=false;return f.prototype.push.call(this,e,t)};Transform.prototype._transform=function(e,t,r){r(new i("_transform()"))};Transform.prototype._write=function(e,t,r){var n=this._transformState;n.writecb=r;n.writechunk=e;n.writeencoding=t;if(!n.transforming){var i=this._readableState;if(n.needTransform||i.needReadable||i.length<i.highWaterMark)this._read(i.highWaterMark)}};Transform.prototype._read=function(e){var t=this._transformState;if(t.writechunk!==null&&!t.transforming){t.transforming=true;this._transform(t.writechunk,t.writeencoding,t.afterTransform)}else{t.needTransform=true}};Transform.prototype._destroy=function(e,t){f.prototype._destroy.call(this,e,(function(e){t(e)}))};function done(e,t,r){if(t)return e.emit("error",t);if(r!=null)e.push(r);if(e._writableState.length)throw new s;if(e._transformState.transforming)throw new o;return e.push(null)}},337:function(e,t,r){"use strict";e.exports=Writable;function WriteReq(e,t,r){this.chunk=e;this.encoding=t;this.callback=r;this.next=null}function CorkedRequest(e){var t=this;this.next=null;this.entry=null;this.finish=function(){onCorkedFinish(t,e)}}var n;Writable.WritableState=WritableState;var i={deprecate:r(769)};var a=r(678);var o=r(300).Buffer;var s=__webpack_require__.g.Uint8Array||function(){};function _uint8ArrayToBuffer(e){return o.from(e)}function _isUint8Array(e){return o.isBuffer(e)||e instanceof s}var f=r(25);var l=r(776),u=l.getHighWaterMark;var d=r(646).q,c=d.ERR_INVALID_ARG_TYPE,h=d.ERR_METHOD_NOT_IMPLEMENTED,p=d.ERR_MULTIPLE_CALLBACK,b=d.ERR_STREAM_CANNOT_PIPE,g=d.ERR_STREAM_DESTROYED,y=d.ERR_STREAM_NULL_VALUES,_=d.ERR_STREAM_WRITE_AFTER_END,v=d.ERR_UNKNOWN_ENCODING;var w=f.errorOrDestroy;r(782)(Writable,a);function nop(){}function WritableState(e,t,i){n=n||r(403);e=e||{};if(typeof i!=="boolean")i=t instanceof n;this.objectMode=!!e.objectMode;if(i)this.objectMode=this.objectMode||!!e.writableObjectMode;this.highWaterMark=u(this,e,"writableHighWaterMark",i);this.finalCalled=false;this.needDrain=false;this.ending=false;this.ended=false;this.finished=false;this.destroyed=false;var a=e.decodeStrings===false;this.decodeStrings=!a;this.defaultEncoding=e.defaultEncoding||"utf8";this.length=0;this.writing=false;this.corked=0;this.sync=true;this.bufferProcessing=false;this.onwrite=function(e){onwrite(t,e)};this.writecb=null;this.writelen=0;this.bufferedRequest=null;this.lastBufferedRequest=null;this.pendingcb=0;this.prefinished=false;this.errorEmitted=false;this.emitClose=e.emitClose!==false;this.autoDestroy=!!e.autoDestroy;this.bufferedRequestCount=0;this.corkedRequestsFree=new CorkedRequest(this)}WritableState.prototype.getBuffer=function getBuffer(){var e=this.bufferedRequest;var t=[];while(e){t.push(e);e=e.next}return t};(function(){try{Object.defineProperty(WritableState.prototype,"buffer",{get:i.deprecate((function writableStateBufferGetter(){return this.getBuffer()}),"_writableState.buffer is deprecated. Use _writableState.getBuffer "+"instead.","DEP0003")})}catch(e){}})();var m;if(typeof Symbol==="function"&&Symbol.hasInstance&&typeof Function.prototype[Symbol.hasInstance]==="function"){m=Function.prototype[Symbol.hasInstance];Object.defineProperty(Writable,Symbol.hasInstance,{value:function value(e){if(m.call(this,e))return true;if(this!==Writable)return false;return e&&e._writableState instanceof WritableState}})}else{m=function realHasInstance(e){return e instanceof this}}function Writable(e){n=n||r(403);var t=this instanceof n;if(!t&&!m.call(Writable,this))return new Writable(e);this._writableState=new WritableState(e,this,t);this.writable=true;if(e){if(typeof e.write==="function")this._write=e.write;if(typeof e.writev==="function")this._writev=e.writev;if(typeof e.destroy==="function")this._destroy=e.destroy;if(typeof e.final==="function")this._final=e.final}a.call(this)}Writable.prototype.pipe=function(){w(this,new b)};function writeAfterEnd(e,t){var r=new _;w(e,r);process.nextTick(t,r)}function validChunk(e,t,r,n){var i;if(r===null){i=new y}else if(typeof r!=="string"&&!t.objectMode){i=new c("chunk",["string","Buffer"],r)}if(i){w(e,i);process.nextTick(n,i);return false}return true}Writable.prototype.write=function(e,t,r){var n=this._writableState;var i=false;var a=!n.objectMode&&_isUint8Array(e);if(a&&!o.isBuffer(e)){e=_uint8ArrayToBuffer(e)}if(typeof t==="function"){r=t;t=null}if(a)t="buffer";else if(!t)t=n.defaultEncoding;if(typeof r!=="function")r=nop;if(n.ending)writeAfterEnd(this,r);else if(a||validChunk(this,n,e,r)){n.pendingcb++;i=writeOrBuffer(this,n,a,e,t,r)}return i};Writable.prototype.cork=function(){this._writableState.corked++};Writable.prototype.uncork=function(){var e=this._writableState;if(e.corked){e.corked--;if(!e.writing&&!e.corked&&!e.bufferProcessing&&e.bufferedRequest)clearBuffer(this,e)}};Writable.prototype.setDefaultEncoding=function setDefaultEncoding(e){if(typeof e==="string")e=e.toLowerCase();if(!(["hex","utf8","utf-8","ascii","binary","base64","ucs2","ucs-2","utf16le","utf-16le","raw"].indexOf((e+"").toLowerCase())>-1))throw new v(e);this._writableState.defaultEncoding=e;return this};Object.defineProperty(Writable.prototype,"writableBuffer",{enumerable:false,get:function get(){return this._writableState&&this._writableState.getBuffer()}});function decodeChunk(e,t,r){if(!e.objectMode&&e.decodeStrings!==false&&typeof t==="string"){t=o.from(t,r)}return t}Object.defineProperty(Writable.prototype,"writableHighWaterMark",{enumerable:false,get:function get(){return this._writableState.highWaterMark}});function writeOrBuffer(e,t,r,n,i,a){if(!r){var o=decodeChunk(t,n,i);if(n!==o){r=true;i="buffer";n=o}}var s=t.objectMode?1:n.length;t.length+=s;var f=t.length<t.highWaterMark;if(!f)t.needDrain=true;if(t.writing||t.corked){var l=t.lastBufferedRequest;t.lastBufferedRequest={chunk:n,encoding:i,isBuf:r,callback:a,next:null};if(l){l.next=t.lastBufferedRequest}else{t.bufferedRequest=t.lastBufferedRequest}t.bufferedRequestCount+=1}else{doWrite(e,t,false,s,n,i,a)}return f}function doWrite(e,t,r,n,i,a,o){t.writelen=n;t.writecb=o;t.writing=true;t.sync=true;if(t.destroyed)t.onwrite(new g("write"));else if(r)e._writev(i,t.onwrite);else e._write(i,a,t.onwrite);t.sync=false}function onwriteError(e,t,r,n,i){--t.pendingcb;if(r){process.nextTick(i,n);process.nextTick(finishMaybe,e,t);e._writableState.errorEmitted=true;w(e,n)}else{i(n);e._writableState.errorEmitted=true;w(e,n);finishMaybe(e,t)}}function onwriteStateUpdate(e){e.writing=false;e.writecb=null;e.length-=e.writelen;e.writelen=0}function onwrite(e,t){var r=e._writableState;var n=r.sync;var i=r.writecb;if(typeof i!=="function")throw new p;onwriteStateUpdate(r);if(t)onwriteError(e,r,n,t,i);else{var a=needFinish(r)||e.destroyed;if(!a&&!r.corked&&!r.bufferProcessing&&r.bufferedRequest){clearBuffer(e,r)}if(n){process.nextTick(afterWrite,e,r,a,i)}else{afterWrite(e,r,a,i)}}}function afterWrite(e,t,r,n){if(!r)onwriteDrain(e,t);t.pendingcb--;n();finishMaybe(e,t)}function onwriteDrain(e,t){if(t.length===0&&t.needDrain){t.needDrain=false;e.emit("drain")}}function clearBuffer(e,t){t.bufferProcessing=true;var r=t.bufferedRequest;if(e._writev&&r&&r.next){var n=t.bufferedRequestCount;var i=new Array(n);var a=t.corkedRequestsFree;a.entry=r;var o=0;var s=true;while(r){i[o]=r;if(!r.isBuf)s=false;r=r.next;o+=1}i.allBuffers=s;doWrite(e,t,true,t.length,i,"",a.finish);t.pendingcb++;t.lastBufferedRequest=null;if(a.next){t.corkedRequestsFree=a.next;a.next=null}else{t.corkedRequestsFree=new CorkedRequest(t)}t.bufferedRequestCount=0}else{while(r){var f=r.chunk;var l=r.encoding;var u=r.callback;var d=t.objectMode?1:f.length;doWrite(e,t,false,d,f,l,u);r=r.next;t.bufferedRequestCount--;if(t.writing){break}}if(r===null)t.lastBufferedRequest=null}t.bufferedRequest=r;t.bufferProcessing=false}Writable.prototype._write=function(e,t,r){r(new h("_write()"))};Writable.prototype._writev=null;Writable.prototype.end=function(e,t,r){var n=this._writableState;if(typeof e==="function"){r=e;e=null;t=null}else if(typeof t==="function"){r=t;t=null}if(e!==null&&e!==undefined)this.write(e,t);if(n.corked){n.corked=1;this.uncork()}if(!n.ending)endWritable(this,n,r);return this};Object.defineProperty(Writable.prototype,"writableLength",{enumerable:false,get:function get(){return this._writableState.length}});function needFinish(e){return e.ending&&e.length===0&&e.bufferedRequest===null&&!e.finished&&!e.writing}function callFinal(e,t){e._final((function(r){t.pendingcb--;if(r){w(e,r)}t.prefinished=true;e.emit("prefinish");finishMaybe(e,t)}))}function prefinish(e,t){if(!t.prefinished&&!t.finalCalled){if(typeof e._final==="function"&&!t.destroyed){t.pendingcb++;t.finalCalled=true;process.nextTick(callFinal,e,t)}else{t.prefinished=true;e.emit("prefinish")}}}function finishMaybe(e,t){var r=needFinish(t);if(r){prefinish(e,t);if(t.pendingcb===0){t.finished=true;e.emit("finish");if(t.autoDestroy){var n=e._readableState;if(!n||n.autoDestroy&&n.endEmitted){e.destroy()}}}}return r}function endWritable(e,t,r){t.ending=true;finishMaybe(e,t);if(r){if(t.finished)process.nextTick(r);else e.once("finish",r)}t.ended=true;e.writable=false}function onCorkedFinish(e,t,r){var n=e.entry;e.entry=null;while(n){var i=n.callback;t.pendingcb--;i(r);n=n.next}t.corkedRequestsFree.next=e}Object.defineProperty(Writable.prototype,"destroyed",{enumerable:false,get:function get(){if(this._writableState===undefined){return false}return this._writableState.destroyed},set:function set(e){if(!this._writableState){return}this._writableState.destroyed=e}});Writable.prototype.destroy=f.destroy;Writable.prototype._undestroy=f.undestroy;Writable.prototype._destroy=function(e,t){t(e)}},871:function(e,t,r){"use strict";var n;function _defineProperty(e,t,r){if(t in e){Object.defineProperty(e,t,{value:r,enumerable:true,configurable:true,writable:true})}else{e[t]=r}return e}var i=r(698);var a=Symbol("lastResolve");var o=Symbol("lastReject");var s=Symbol("error");var f=Symbol("ended");var l=Symbol("lastPromise");var u=Symbol("handlePromise");var d=Symbol("stream");function createIterResult(e,t){return{value:e,done:t}}function readAndResolve(e){var t=e[a];if(t!==null){var r=e[d].read();if(r!==null){e[l]=null;e[a]=null;e[o]=null;t(createIterResult(r,false))}}}function onReadable(e){process.nextTick(readAndResolve,e)}function wrapForNext(e,t){return function(r,n){e.then((function(){if(t[f]){r(createIterResult(undefined,true));return}t[u](r,n)}),n)}}var c=Object.getPrototypeOf((function(){}));var h=Object.setPrototypeOf((n={get stream(){return this[d]},next:function next(){var e=this;var t=this[s];if(t!==null){return Promise.reject(t)}if(this[f]){return Promise.resolve(createIterResult(undefined,true))}if(this[d].destroyed){return new Promise((function(t,r){process.nextTick((function(){if(e[s]){r(e[s])}else{t(createIterResult(undefined,true))}}))}))}var r=this[l];var n;if(r){n=new Promise(wrapForNext(r,this))}else{var i=this[d].read();if(i!==null){return Promise.resolve(createIterResult(i,false))}n=new Promise(this[u])}this[l]=n;return n}},_defineProperty(n,Symbol.asyncIterator,(function(){return this})),_defineProperty(n,"return",(function _return(){var e=this;return new Promise((function(t,r){e[d].destroy(null,(function(e){if(e){r(e);return}t(createIterResult(undefined,true))}))}))})),n),c);var p=function createReadableStreamAsyncIterator(e){var t;var r=Object.create(h,(t={},_defineProperty(t,d,{value:e,writable:true}),_defineProperty(t,a,{value:null,writable:true}),_defineProperty(t,o,{value:null,writable:true}),_defineProperty(t,s,{value:null,writable:true}),_defineProperty(t,f,{value:e._readableState.endEmitted,writable:true}),_defineProperty(t,u,{value:function value(e,t){var n=r[d].read();if(n){r[l]=null;r[a]=null;r[o]=null;e(createIterResult(n,false))}else{r[a]=e;r[o]=t}},writable:true}),t));r[l]=null;i(e,(function(e){if(e&&e.code!=="ERR_STREAM_PREMATURE_CLOSE"){var t=r[o];if(t!==null){r[l]=null;r[a]=null;r[o]=null;t(e)}r[s]=e;return}var n=r[a];if(n!==null){r[l]=null;r[a]=null;r[o]=null;n(createIterResult(undefined,true))}r[f]=true}));e.on("readable",onReadable.bind(null,r));return r};e.exports=p},379:function(e,t,r){"use strict";function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);if(t)n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}));r.push.apply(r,n)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};if(t%2){ownKeys(Object(r),true).forEach((function(t){_defineProperty(e,t,r[t])}))}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(e,Object.getOwnPropertyDescriptors(r))}else{ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}}return e}function _defineProperty(e,t,r){if(t in e){Object.defineProperty(e,t,{value:r,enumerable:true,configurable:true,writable:true})}else{e[t]=r}return e}function _classCallCheck(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||false;n.configurable=true;if("value"in n)n.writable=true;Object.defineProperty(e,n.key,n)}}function _createClass(e,t,r){if(t)_defineProperties(e.prototype,t);if(r)_defineProperties(e,r);return e}var n=r(300),i=n.Buffer;var a=r(837),o=a.inspect;var s=o&&o.custom||"inspect";function copyBuffer(e,t,r){i.prototype.copy.call(e,t,r)}e.exports=function(){function BufferList(){_classCallCheck(this,BufferList);this.head=null;this.tail=null;this.length=0}_createClass(BufferList,[{key:"push",value:function push(e){var t={data:e,next:null};if(this.length>0)this.tail.next=t;else this.head=t;this.tail=t;++this.length}},{key:"unshift",value:function unshift(e){var t={data:e,next:this.head};if(this.length===0)this.tail=t;this.head=t;++this.length}},{key:"shift",value:function shift(){if(this.length===0)return;var e=this.head.data;if(this.length===1)this.head=this.tail=null;else this.head=this.head.next;--this.length;return e}},{key:"clear",value:function clear(){this.head=this.tail=null;this.length=0}},{key:"join",value:function join(e){if(this.length===0)return"";var t=this.head;var r=""+t.data;while(t=t.next){r+=e+t.data}return r}},{key:"concat",value:function concat(e){if(this.length===0)return i.alloc(0);var t=i.allocUnsafe(e>>>0);var r=this.head;var n=0;while(r){copyBuffer(r.data,t,n);n+=r.data.length;r=r.next}return t}},{key:"consume",value:function consume(e,t){var r;if(e<this.head.data.length){r=this.head.data.slice(0,e);this.head.data=this.head.data.slice(e)}else if(e===this.head.data.length){r=this.shift()}else{r=t?this._getString(e):this._getBuffer(e)}return r}},{key:"first",value:function first(){return this.head.data}},{key:"_getString",value:function _getString(e){var t=this.head;var r=1;var n=t.data;e-=n.length;while(t=t.next){var i=t.data;var a=e>i.length?i.length:e;if(a===i.length)n+=i;else n+=i.slice(0,e);e-=a;if(e===0){if(a===i.length){++r;if(t.next)this.head=t.next;else this.head=this.tail=null}else{this.head=t;t.data=i.slice(a)}break}++r}this.length-=r;return n}},{key:"_getBuffer",value:function _getBuffer(e){var t=i.allocUnsafe(e);var r=this.head;var n=1;r.data.copy(t);e-=r.data.length;while(r=r.next){var a=r.data;var o=e>a.length?a.length:e;a.copy(t,t.length-e,0,o);e-=o;if(e===0){if(o===a.length){++n;if(r.next)this.head=r.next;else this.head=this.tail=null}else{this.head=r;r.data=a.slice(o)}break}++n}this.length-=n;return t}},{key:s,value:function value(e,t){return o(this,_objectSpread({},t,{depth:0,customInspect:false}))}}]);return BufferList}()},25:function(e){"use strict";function destroy(e,t){var r=this;var n=this._readableState&&this._readableState.destroyed;var i=this._writableState&&this._writableState.destroyed;if(n||i){if(t){t(e)}else if(e){if(!this._writableState){process.nextTick(emitErrorNT,this,e)}else if(!this._writableState.errorEmitted){this._writableState.errorEmitted=true;process.nextTick(emitErrorNT,this,e)}}return this}if(this._readableState){this._readableState.destroyed=true}if(this._writableState){this._writableState.destroyed=true}this._destroy(e||null,(function(e){if(!t&&e){if(!r._writableState){process.nextTick(emitErrorAndCloseNT,r,e)}else if(!r._writableState.errorEmitted){r._writableState.errorEmitted=true;process.nextTick(emitErrorAndCloseNT,r,e)}else{process.nextTick(emitCloseNT,r)}}else if(t){process.nextTick(emitCloseNT,r);t(e)}else{process.nextTick(emitCloseNT,r)}}));return this}function emitErrorAndCloseNT(e,t){emitErrorNT(e,t);emitCloseNT(e)}function emitCloseNT(e){if(e._writableState&&!e._writableState.emitClose)return;if(e._readableState&&!e._readableState.emitClose)return;e.emit("close")}function undestroy(){if(this._readableState){this._readableState.destroyed=false;this._readableState.reading=false;this._readableState.ended=false;this._readableState.endEmitted=false}if(this._writableState){this._writableState.destroyed=false;this._writableState.ended=false;this._writableState.ending=false;this._writableState.finalCalled=false;this._writableState.prefinished=false;this._writableState.finished=false;this._writableState.errorEmitted=false}}function emitErrorNT(e,t){e.emit("error",t)}function errorOrDestroy(e,t){var r=e._readableState;var n=e._writableState;if(r&&r.autoDestroy||n&&n.autoDestroy)e.destroy(t);else e.emit("error",t)}e.exports={destroy:destroy,undestroy:undestroy,errorOrDestroy:errorOrDestroy}},698:function(e,t,r){"use strict";var n=r(646).q.ERR_STREAM_PREMATURE_CLOSE;function once(e){var t=false;return function(){if(t)return;t=true;for(var r=arguments.length,n=new Array(r),i=0;i<r;i++){n[i]=arguments[i]}e.apply(this,n)}}function noop(){}function isRequest(e){return e.setHeader&&typeof e.abort==="function"}function eos(e,t,r){if(typeof t==="function")return eos(e,null,t);if(!t)t={};r=once(r||noop);var i=t.readable||t.readable!==false&&e.readable;var a=t.writable||t.writable!==false&&e.writable;var o=function onlegacyfinish(){if(!e.writable)f()};var s=e._writableState&&e._writableState.finished;var f=function onfinish(){a=false;s=true;if(!i)r.call(e)};var l=e._readableState&&e._readableState.endEmitted;var u=function onend(){i=false;l=true;if(!a)r.call(e)};var d=function onerror(t){r.call(e,t)};var c=function onclose(){var t;if(i&&!l){if(!e._readableState||!e._readableState.ended)t=new n;return r.call(e,t)}if(a&&!s){if(!e._writableState||!e._writableState.ended)t=new n;return r.call(e,t)}};var h=function onrequest(){e.req.on("finish",f)};if(isRequest(e)){e.on("complete",f);e.on("abort",c);if(e.req)h();else e.on("request",h)}else if(a&&!e._writableState){e.on("end",o);e.on("close",o)}e.on("end",u);e.on("finish",f);if(t.error!==false)e.on("error",d);e.on("close",c);return function(){e.removeListener("complete",f);e.removeListener("abort",c);e.removeListener("request",h);if(e.req)e.req.removeListener("finish",f);e.removeListener("end",o);e.removeListener("close",o);e.removeListener("finish",f);e.removeListener("end",u);e.removeListener("error",d);e.removeListener("close",c)}}e.exports=eos},727:function(e,t,r){"use strict";function asyncGeneratorStep(e,t,r,n,i,a,o){try{var s=e[a](o);var f=s.value}catch(e){r(e);return}if(s.done){t(f)}else{Promise.resolve(f).then(n,i)}}function _asyncToGenerator(e){return function(){var t=this,r=arguments;return new Promise((function(n,i){var a=e.apply(t,r);function _next(e){asyncGeneratorStep(a,n,i,_next,_throw,"next",e)}function _throw(e){asyncGeneratorStep(a,n,i,_next,_throw,"throw",e)}_next(undefined)}))}}function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);if(t)n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}));r.push.apply(r,n)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};if(t%2){ownKeys(Object(r),true).forEach((function(t){_defineProperty(e,t,r[t])}))}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(e,Object.getOwnPropertyDescriptors(r))}else{ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}}return e}function _defineProperty(e,t,r){if(t in e){Object.defineProperty(e,t,{value:r,enumerable:true,configurable:true,writable:true})}else{e[t]=r}return e}var n=r(646).q.ERR_INVALID_ARG_TYPE;function from(e,t,r){var i;if(t&&typeof t.next==="function"){i=t}else if(t&&t[Symbol.asyncIterator])i=t[Symbol.asyncIterator]();else if(t&&t[Symbol.iterator])i=t[Symbol.iterator]();else throw new n("iterable",["Iterable"],t);var a=new e(_objectSpread({objectMode:true},r));var o=false;a._read=function(){if(!o){o=true;next()}};function next(){return _next2.apply(this,arguments)}function _next2(){_next2=_asyncToGenerator((function*(){try{var e=yield i.next(),t=e.value,r=e.done;if(r){a.push(null)}else if(a.push(yield t)){next()}else{o=false}}catch(e){a.destroy(e)}}));return _next2.apply(this,arguments)}return a}e.exports=from},442:function(e,t,r){"use strict";var n;function once(e){var t=false;return function(){if(t)return;t=true;e.apply(void 0,arguments)}}var i=r(646).q,a=i.ERR_MISSING_ARGS,o=i.ERR_STREAM_DESTROYED;function noop(e){if(e)throw e}function isRequest(e){return e.setHeader&&typeof e.abort==="function"}function destroyer(e,t,i,a){a=once(a);var s=false;e.on("close",(function(){s=true}));if(n===undefined)n=r(698);n(e,{readable:t,writable:i},(function(e){if(e)return a(e);s=true;a()}));var f=false;return function(t){if(s)return;if(f)return;f=true;if(isRequest(e))return e.abort();if(typeof e.destroy==="function")return e.destroy();a(t||new o("pipe"))}}function call(e){e()}function pipe(e,t){return e.pipe(t)}function popCallback(e){if(!e.length)return noop;if(typeof e[e.length-1]!=="function")return noop;return e.pop()}function pipeline(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++){t[r]=arguments[r]}var n=popCallback(t);if(Array.isArray(t[0]))t=t[0];if(t.length<2){throw new a("streams")}var i;var o=t.map((function(e,r){var a=r<t.length-1;var s=r>0;return destroyer(e,a,s,(function(e){if(!i)i=e;if(e)o.forEach(call);if(a)return;o.forEach(call);n(i)}))}));return t.reduce(pipe)}e.exports=pipeline},776:function(e,t,r){"use strict";var n=r(646).q.ERR_INVALID_OPT_VALUE;function highWaterMarkFrom(e,t,r){return e.highWaterMark!=null?e.highWaterMark:t?e[r]:null}function getHighWaterMark(e,t,r,i){var a=highWaterMarkFrom(t,i,r);if(a!=null){if(!(isFinite(a)&&Math.floor(a)===a)||a<0){var o=i?r:"highWaterMark";throw new n(o,a)}return Math.floor(a)}return e.objectMode?16:16*1024}e.exports={getHighWaterMark:getHighWaterMark}},678:function(e,t,r){e.exports=r(781)},55:function(e,t,r){var n=r(300);var i=n.Buffer;function copyProps(e,t){for(var r in e){t[r]=e[r]}}if(i.from&&i.alloc&&i.allocUnsafe&&i.allocUnsafeSlow){e.exports=n}else{copyProps(n,t);t.Buffer=SafeBuffer}function SafeBuffer(e,t,r){return i(e,t,r)}SafeBuffer.prototype=Object.create(i.prototype);copyProps(i,SafeBuffer);SafeBuffer.from=function(e,t,r){if(typeof e==="number"){throw new TypeError("Argument must not be a number")}return i(e,t,r)};SafeBuffer.alloc=function(e,t,r){if(typeof e!=="number"){throw new TypeError("Argument must be a number")}var n=i(e);if(t!==undefined){if(typeof r==="string"){n.fill(t,r)}else{n.fill(t)}}else{n.fill(0)}return n};SafeBuffer.allocUnsafe=function(e){if(typeof e!=="number"){throw new TypeError("Argument must be a number")}return i(e)};SafeBuffer.allocUnsafeSlow=function(e){if(typeof e!=="number"){throw new TypeError("Argument must be a number")}return n.SlowBuffer(e)}},173:function(e,t,r){e.exports=Stream;var n=r(361).EventEmitter;var i=r(782);i(Stream,n);Stream.Readable=r(709);Stream.Writable=r(337);Stream.Duplex=r(403);Stream.Transform=r(170);Stream.PassThrough=r(889);Stream.finished=r(698);Stream.pipeline=r(442);Stream.Stream=Stream;function Stream(){n.call(this)}Stream.prototype.pipe=function(e,t){var r=this;function ondata(t){if(e.writable){if(false===e.write(t)&&r.pause){r.pause()}}}r.on("data",ondata);function ondrain(){if(r.readable&&r.resume){r.resume()}}e.on("drain",ondrain);if(!e._isStdio&&(!t||t.end!==false)){r.on("end",onend);r.on("close",onclose)}var i=false;function onend(){if(i)return;i=true;e.end()}function onclose(){if(i)return;i=true;if(typeof e.destroy==="function")e.destroy()}function onerror(e){cleanup();if(n.listenerCount(this,"error")===0){throw e}}r.on("error",onerror);e.on("error",onerror);function cleanup(){r.removeListener("data",ondata);e.removeListener("drain",ondrain);r.removeListener("end",onend);r.removeListener("close",onclose);r.removeListener("error",onerror);e.removeListener("error",onerror);r.removeListener("end",cleanup);r.removeListener("close",cleanup);e.removeListener("close",cleanup)}r.on("end",cleanup);r.on("close",cleanup);e.on("close",cleanup);e.emit("pipe",r);return e}},704:function(e,t,r){"use strict";var n=r(55).Buffer;var i=n.isEncoding||function(e){e=""+e;switch(e&&e.toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":case"raw":return true;default:return false}};function _normalizeEncoding(e){if(!e)return"utf8";var t;while(true){switch(e){case"utf8":case"utf-8":return"utf8";case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return"utf16le";case"latin1":case"binary":return"latin1";case"base64":case"ascii":case"hex":return e;default:if(t)return;e=(""+e).toLowerCase();t=true}}}function normalizeEncoding(e){var t=_normalizeEncoding(e);if(typeof t!=="string"&&(n.isEncoding===i||!i(e)))throw new Error("Unknown encoding: "+e);return t||e}t.s=StringDecoder;function StringDecoder(e){this.encoding=normalizeEncoding(e);var t;switch(this.encoding){case"utf16le":this.text=utf16Text;this.end=utf16End;t=4;break;case"utf8":this.fillLast=utf8FillLast;t=4;break;case"base64":this.text=base64Text;this.end=base64End;t=3;break;default:this.write=simpleWrite;this.end=simpleEnd;return}this.lastNeed=0;this.lastTotal=0;this.lastChar=n.allocUnsafe(t)}StringDecoder.prototype.write=function(e){if(e.length===0)return"";var t;var r;if(this.lastNeed){t=this.fillLast(e);if(t===undefined)return"";r=this.lastNeed;this.lastNeed=0}else{r=0}if(r<e.length)return t?t+this.text(e,r):this.text(e,r);return t||""};StringDecoder.prototype.end=utf8End;StringDecoder.prototype.text=utf8Text;StringDecoder.prototype.fillLast=function(e){if(this.lastNeed<=e.length){e.copy(this.lastChar,this.lastTotal-this.lastNeed,0,this.lastNeed);return this.lastChar.toString(this.encoding,0,this.lastTotal)}e.copy(this.lastChar,this.lastTotal-this.lastNeed,0,e.length);this.lastNeed-=e.length};function utf8CheckByte(e){if(e<=127)return 0;else if(e>>5===6)return 2;else if(e>>4===14)return 3;else if(e>>3===30)return 4;return e>>6===2?-1:-2}function utf8CheckIncomplete(e,t,r){var n=t.length-1;if(n<r)return 0;var i=utf8CheckByte(t[n]);if(i>=0){if(i>0)e.lastNeed=i-1;return i}if(--n<r||i===-2)return 0;i=utf8CheckByte(t[n]);if(i>=0){if(i>0)e.lastNeed=i-2;return i}if(--n<r||i===-2)return 0;i=utf8CheckByte(t[n]);if(i>=0){if(i>0){if(i===2)i=0;else e.lastNeed=i-3}return i}return 0}function utf8CheckExtraBytes(e,t,r){if((t[0]&192)!==128){e.lastNeed=0;return"�"}if(e.lastNeed>1&&t.length>1){if((t[1]&192)!==128){e.lastNeed=1;return"�"}if(e.lastNeed>2&&t.length>2){if((t[2]&192)!==128){e.lastNeed=2;return"�"}}}}function utf8FillLast(e){var t=this.lastTotal-this.lastNeed;var r=utf8CheckExtraBytes(this,e,t);if(r!==undefined)return r;if(this.lastNeed<=e.length){e.copy(this.lastChar,t,0,this.lastNeed);return this.lastChar.toString(this.encoding,0,this.lastTotal)}e.copy(this.lastChar,t,0,e.length);this.lastNeed-=e.length}function utf8Text(e,t){var r=utf8CheckIncomplete(this,e,t);if(!this.lastNeed)return e.toString("utf8",t);this.lastTotal=r;var n=e.length-(r-this.lastNeed);e.copy(this.lastChar,0,n);return e.toString("utf8",t,n)}function utf8End(e){var t=e&&e.length?this.write(e):"";if(this.lastNeed)return t+"�";return t}function utf16Text(e,t){if((e.length-t)%2===0){var r=e.toString("utf16le",t);if(r){var n=r.charCodeAt(r.length-1);if(n>=55296&&n<=56319){this.lastNeed=2;this.lastTotal=4;this.lastChar[0]=e[e.length-2];this.lastChar[1]=e[e.length-1];return r.slice(0,-1)}}return r}this.lastNeed=1;this.lastTotal=2;this.lastChar[0]=e[e.length-1];return e.toString("utf16le",t,e.length-1)}function utf16End(e){var t=e&&e.length?this.write(e):"";if(this.lastNeed){var r=this.lastTotal-this.lastNeed;return t+this.lastChar.toString("utf16le",0,r)}return t}function base64Text(e,t){var r=(e.length-t)%3;if(r===0)return e.toString("base64",t);this.lastNeed=3-r;this.lastTotal=3;if(r===1){this.lastChar[0]=e[e.length-1]}else{this.lastChar[0]=e[e.length-2];this.lastChar[1]=e[e.length-1]}return e.toString("base64",t,e.length-r)}function base64End(e){var t=e&&e.length?this.write(e):"";if(this.lastNeed)return t+this.lastChar.toString("base64",0,3-this.lastNeed);return t}function simpleWrite(e){return e.toString(this.encoding)}function simpleEnd(e){return e&&e.length?this.write(e):""}},769:function(e){e.exports=deprecate;function deprecate(e,t){if(config("noDeprecation")){return e}var r=false;function deprecated(){if(!r){if(config("throwDeprecation")){throw new Error(t)}else if(config("traceDeprecation")){console.trace(t)}else{console.warn(t)}r=true}return e.apply(this,arguments)}return deprecated}function config(e){try{if(!__webpack_require__.g.localStorage)return false}catch(e){return false}var t=__webpack_require__.g.localStorage[e];if(null==t)return false;return String(t).toLowerCase()==="true"}},300:function(e){"use strict";e.exports=__webpack_require__(40263)},361:function(e){"use strict";e.exports=__webpack_require__(17795)},781:function(e){"use strict";e.exports=(__webpack_require__(17795).EventEmitter)},837:function(e){"use strict";e.exports=__webpack_require__(15647)}};var t={};function __nccwpck_require__(r){var n=t[r];if(n!==undefined){return n.exports}var i=t[r]={exports:{}};var a=true;try{e[r](i,i.exports,__nccwpck_require__);a=false}finally{if(a)delete t[r]}return i.exports}if(typeof __nccwpck_require__!=="undefined")__nccwpck_require__.ab=__dirname+"/";var r=__nccwpck_require__(173);module.exports=r})();

/***/ }),

/***/ 72909:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var __dirname = "/";
/* provided dependency */ var process = __webpack_require__(62601);
/* provided dependency */ var Buffer = __webpack_require__(40263)["Buffer"];
(function(){var e={523:function(e){e.exports={100:"Continue",101:"Switching Protocols",102:"Processing",200:"OK",201:"Created",202:"Accepted",203:"Non-Authoritative Information",204:"No Content",205:"Reset Content",206:"Partial Content",207:"Multi-Status",208:"Already Reported",226:"IM Used",300:"Multiple Choices",301:"Moved Permanently",302:"Found",303:"See Other",304:"Not Modified",305:"Use Proxy",307:"Temporary Redirect",308:"Permanent Redirect",400:"Bad Request",401:"Unauthorized",402:"Payment Required",403:"Forbidden",404:"Not Found",405:"Method Not Allowed",406:"Not Acceptable",407:"Proxy Authentication Required",408:"Request Timeout",409:"Conflict",410:"Gone",411:"Length Required",412:"Precondition Failed",413:"Payload Too Large",414:"URI Too Long",415:"Unsupported Media Type",416:"Range Not Satisfiable",417:"Expectation Failed",418:"I'm a teapot",421:"Misdirected Request",422:"Unprocessable Entity",423:"Locked",424:"Failed Dependency",425:"Unordered Collection",426:"Upgrade Required",428:"Precondition Required",429:"Too Many Requests",431:"Request Header Fields Too Large",451:"Unavailable For Legal Reasons",500:"Internal Server Error",501:"Not Implemented",502:"Bad Gateway",503:"Service Unavailable",504:"Gateway Timeout",505:"HTTP Version Not Supported",506:"Variant Also Negotiates",507:"Insufficient Storage",508:"Loop Detected",509:"Bandwidth Limit Exceeded",510:"Not Extended",511:"Network Authentication Required"}},782:function(e){if(typeof Object.create==="function"){e.exports=function inherits(e,t){if(t){e.super_=t;e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}})}}}else{e.exports=function inherits(e,t){if(t){e.super_=t;var TempCtor=function(){};TempCtor.prototype=t.prototype;e.prototype=new TempCtor;e.prototype.constructor=e}}}},646:function(e){"use strict";const t={};function createErrorType(e,r,n){if(!n){n=Error}function getMessage(e,t,n){if(typeof r==="string"){return r}else{return r(e,t,n)}}class NodeError extends n{constructor(e,t,r){super(getMessage(e,t,r))}}NodeError.prototype.name=n.name;NodeError.prototype.code=e;t[e]=NodeError}function oneOf(e,t){if(Array.isArray(e)){const r=e.length;e=e.map((e=>String(e)));if(r>2){return`one of ${t} ${e.slice(0,r-1).join(", ")}, or `+e[r-1]}else if(r===2){return`one of ${t} ${e[0]} or ${e[1]}`}else{return`of ${t} ${e[0]}`}}else{return`of ${t} ${String(e)}`}}function startsWith(e,t,r){return e.substr(!r||r<0?0:+r,t.length)===t}function endsWith(e,t,r){if(r===undefined||r>e.length){r=e.length}return e.substring(r-t.length,r)===t}function includes(e,t,r){if(typeof r!=="number"){r=0}if(r+t.length>e.length){return false}else{return e.indexOf(t,r)!==-1}}createErrorType("ERR_INVALID_OPT_VALUE",(function(e,t){return'The value "'+t+'" is invalid for option "'+e+'"'}),TypeError);createErrorType("ERR_INVALID_ARG_TYPE",(function(e,t,r){let n;if(typeof t==="string"&&startsWith(t,"not ")){n="must not be";t=t.replace(/^not /,"")}else{n="must be"}let i;if(endsWith(e," argument")){i=`The ${e} ${n} ${oneOf(t,"type")}`}else{const r=includes(e,".")?"property":"argument";i=`The "${e}" ${r} ${n} ${oneOf(t,"type")}`}i+=`. Received type ${typeof r}`;return i}),TypeError);createErrorType("ERR_STREAM_PUSH_AFTER_EOF","stream.push() after EOF");createErrorType("ERR_METHOD_NOT_IMPLEMENTED",(function(e){return"The "+e+" method is not implemented"}));createErrorType("ERR_STREAM_PREMATURE_CLOSE","Premature close");createErrorType("ERR_STREAM_DESTROYED",(function(e){return"Cannot call "+e+" after a stream was destroyed"}));createErrorType("ERR_MULTIPLE_CALLBACK","Callback called multiple times");createErrorType("ERR_STREAM_CANNOT_PIPE","Cannot pipe, not readable");createErrorType("ERR_STREAM_WRITE_AFTER_END","write after end");createErrorType("ERR_STREAM_NULL_VALUES","May not write null values to stream",TypeError);createErrorType("ERR_UNKNOWN_ENCODING",(function(e){return"Unknown encoding: "+e}),TypeError);createErrorType("ERR_STREAM_UNSHIFT_AFTER_END_EVENT","stream.unshift() after end event");e.exports.q=t},403:function(e,t,r){"use strict";var n=Object.keys||function(e){var t=[];for(var r in e){t.push(r)}return t};e.exports=Duplex;var i=r(709);var a=r(337);r(782)(Duplex,i);{var o=n(a.prototype);for(var s=0;s<o.length;s++){var f=o[s];if(!Duplex.prototype[f])Duplex.prototype[f]=a.prototype[f]}}function Duplex(e){if(!(this instanceof Duplex))return new Duplex(e);i.call(this,e);a.call(this,e);this.allowHalfOpen=true;if(e){if(e.readable===false)this.readable=false;if(e.writable===false)this.writable=false;if(e.allowHalfOpen===false){this.allowHalfOpen=false;this.once("end",onend)}}}Object.defineProperty(Duplex.prototype,"writableHighWaterMark",{enumerable:false,get:function get(){return this._writableState.highWaterMark}});Object.defineProperty(Duplex.prototype,"writableBuffer",{enumerable:false,get:function get(){return this._writableState&&this._writableState.getBuffer()}});Object.defineProperty(Duplex.prototype,"writableLength",{enumerable:false,get:function get(){return this._writableState.length}});function onend(){if(this._writableState.ended)return;process.nextTick(onEndNT,this)}function onEndNT(e){e.end()}Object.defineProperty(Duplex.prototype,"destroyed",{enumerable:false,get:function get(){if(this._readableState===undefined||this._writableState===undefined){return false}return this._readableState.destroyed&&this._writableState.destroyed},set:function set(e){if(this._readableState===undefined||this._writableState===undefined){return}this._readableState.destroyed=e;this._writableState.destroyed=e}})},889:function(e,t,r){"use strict";e.exports=PassThrough;var n=r(170);r(782)(PassThrough,n);function PassThrough(e){if(!(this instanceof PassThrough))return new PassThrough(e);n.call(this,e)}PassThrough.prototype._transform=function(e,t,r){r(null,e)}},709:function(e,t,r){"use strict";e.exports=Readable;var n;Readable.ReadableState=ReadableState;var i=r(361).EventEmitter;var a=function EElistenerCount(e,t){return e.listeners(t).length};var o=r(678);var s=r(300).Buffer;var f=__webpack_require__.g.Uint8Array||function(){};function _uint8ArrayToBuffer(e){return s.from(e)}function _isUint8Array(e){return s.isBuffer(e)||e instanceof f}var l=r(837);var u;if(l&&l.debuglog){u=l.debuglog("stream")}else{u=function debug(){}}var d=r(379);var c=r(25);var h=r(776),p=h.getHighWaterMark;var b=r(646).q,y=b.ERR_INVALID_ARG_TYPE,g=b.ERR_STREAM_PUSH_AFTER_EOF,_=b.ERR_METHOD_NOT_IMPLEMENTED,v=b.ERR_STREAM_UNSHIFT_AFTER_END_EVENT;var m;var w;var R;r(782)(Readable,o);var S=c.errorOrDestroy;var E=["error","close","destroy","pause","resume"];function prependListener(e,t,r){if(typeof e.prependListener==="function")return e.prependListener(t,r);if(!e._events||!e._events[t])e.on(t,r);else if(Array.isArray(e._events[t]))e._events[t].unshift(r);else e._events[t]=[r,e._events[t]]}function ReadableState(e,t,i){n=n||r(403);e=e||{};if(typeof i!=="boolean")i=t instanceof n;this.objectMode=!!e.objectMode;if(i)this.objectMode=this.objectMode||!!e.readableObjectMode;this.highWaterMark=p(this,e,"readableHighWaterMark",i);this.buffer=new d;this.length=0;this.pipes=null;this.pipesCount=0;this.flowing=null;this.ended=false;this.endEmitted=false;this.reading=false;this.sync=true;this.needReadable=false;this.emittedReadable=false;this.readableListening=false;this.resumeScheduled=false;this.paused=true;this.emitClose=e.emitClose!==false;this.autoDestroy=!!e.autoDestroy;this.destroyed=false;this.defaultEncoding=e.defaultEncoding||"utf8";this.awaitDrain=0;this.readingMore=false;this.decoder=null;this.encoding=null;if(e.encoding){if(!m)m=r(704).s;this.decoder=new m(e.encoding);this.encoding=e.encoding}}function Readable(e){n=n||r(403);if(!(this instanceof Readable))return new Readable(e);var t=this instanceof n;this._readableState=new ReadableState(e,this,t);this.readable=true;if(e){if(typeof e.read==="function")this._read=e.read;if(typeof e.destroy==="function")this._destroy=e.destroy}o.call(this)}Object.defineProperty(Readable.prototype,"destroyed",{enumerable:false,get:function get(){if(this._readableState===undefined){return false}return this._readableState.destroyed},set:function set(e){if(!this._readableState){return}this._readableState.destroyed=e}});Readable.prototype.destroy=c.destroy;Readable.prototype._undestroy=c.undestroy;Readable.prototype._destroy=function(e,t){t(e)};Readable.prototype.push=function(e,t){var r=this._readableState;var n;if(!r.objectMode){if(typeof e==="string"){t=t||r.defaultEncoding;if(t!==r.encoding){e=s.from(e,t);t=""}n=true}}else{n=true}return readableAddChunk(this,e,t,false,n)};Readable.prototype.unshift=function(e){return readableAddChunk(this,e,null,true,false)};function readableAddChunk(e,t,r,n,i){u("readableAddChunk",t);var a=e._readableState;if(t===null){a.reading=false;onEofChunk(e,a)}else{var o;if(!i)o=chunkInvalid(a,t);if(o){S(e,o)}else if(a.objectMode||t&&t.length>0){if(typeof t!=="string"&&!a.objectMode&&Object.getPrototypeOf(t)!==s.prototype){t=_uint8ArrayToBuffer(t)}if(n){if(a.endEmitted)S(e,new v);else addChunk(e,a,t,true)}else if(a.ended){S(e,new g)}else if(a.destroyed){return false}else{a.reading=false;if(a.decoder&&!r){t=a.decoder.write(t);if(a.objectMode||t.length!==0)addChunk(e,a,t,false);else maybeReadMore(e,a)}else{addChunk(e,a,t,false)}}}else if(!n){a.reading=false;maybeReadMore(e,a)}}return!a.ended&&(a.length<a.highWaterMark||a.length===0)}function addChunk(e,t,r,n){if(t.flowing&&t.length===0&&!t.sync){t.awaitDrain=0;e.emit("data",r)}else{t.length+=t.objectMode?1:r.length;if(n)t.buffer.unshift(r);else t.buffer.push(r);if(t.needReadable)emitReadable(e)}maybeReadMore(e,t)}function chunkInvalid(e,t){var r;if(!_isUint8Array(t)&&typeof t!=="string"&&t!==undefined&&!e.objectMode){r=new y("chunk",["string","Buffer","Uint8Array"],t)}return r}Readable.prototype.isPaused=function(){return this._readableState.flowing===false};Readable.prototype.setEncoding=function(e){if(!m)m=r(704).s;var t=new m(e);this._readableState.decoder=t;this._readableState.encoding=this._readableState.decoder.encoding;var n=this._readableState.buffer.head;var i="";while(n!==null){i+=t.write(n.data);n=n.next}this._readableState.buffer.clear();if(i!=="")this._readableState.buffer.push(i);this._readableState.length=i.length;return this};var T=1073741824;function computeNewHighWaterMark(e){if(e>=T){e=T}else{e--;e|=e>>>1;e|=e>>>2;e|=e>>>4;e|=e>>>8;e|=e>>>16;e++}return e}function howMuchToRead(e,t){if(e<=0||t.length===0&&t.ended)return 0;if(t.objectMode)return 1;if(e!==e){if(t.flowing&&t.length)return t.buffer.head.data.length;else return t.length}if(e>t.highWaterMark)t.highWaterMark=computeNewHighWaterMark(e);if(e<=t.length)return e;if(!t.ended){t.needReadable=true;return 0}return t.length}Readable.prototype.read=function(e){u("read",e);e=parseInt(e,10);var t=this._readableState;var r=e;if(e!==0)t.emittedReadable=false;if(e===0&&t.needReadable&&((t.highWaterMark!==0?t.length>=t.highWaterMark:t.length>0)||t.ended)){u("read: emitReadable",t.length,t.ended);if(t.length===0&&t.ended)endReadable(this);else emitReadable(this);return null}e=howMuchToRead(e,t);if(e===0&&t.ended){if(t.length===0)endReadable(this);return null}var n=t.needReadable;u("need readable",n);if(t.length===0||t.length-e<t.highWaterMark){n=true;u("length less than watermark",n)}if(t.ended||t.reading){n=false;u("reading or ended",n)}else if(n){u("do read");t.reading=true;t.sync=true;if(t.length===0)t.needReadable=true;this._read(t.highWaterMark);t.sync=false;if(!t.reading)e=howMuchToRead(r,t)}var i;if(e>0)i=fromList(e,t);else i=null;if(i===null){t.needReadable=t.length<=t.highWaterMark;e=0}else{t.length-=e;t.awaitDrain=0}if(t.length===0){if(!t.ended)t.needReadable=true;if(r!==e&&t.ended)endReadable(this)}if(i!==null)this.emit("data",i);return i};function onEofChunk(e,t){u("onEofChunk");if(t.ended)return;if(t.decoder){var r=t.decoder.end();if(r&&r.length){t.buffer.push(r);t.length+=t.objectMode?1:r.length}}t.ended=true;if(t.sync){emitReadable(e)}else{t.needReadable=false;if(!t.emittedReadable){t.emittedReadable=true;emitReadable_(e)}}}function emitReadable(e){var t=e._readableState;u("emitReadable",t.needReadable,t.emittedReadable);t.needReadable=false;if(!t.emittedReadable){u("emitReadable",t.flowing);t.emittedReadable=true;process.nextTick(emitReadable_,e)}}function emitReadable_(e){var t=e._readableState;u("emitReadable_",t.destroyed,t.length,t.ended);if(!t.destroyed&&(t.length||t.ended)){e.emit("readable");t.emittedReadable=false}t.needReadable=!t.flowing&&!t.ended&&t.length<=t.highWaterMark;flow(e)}function maybeReadMore(e,t){if(!t.readingMore){t.readingMore=true;process.nextTick(maybeReadMore_,e,t)}}function maybeReadMore_(e,t){while(!t.reading&&!t.ended&&(t.length<t.highWaterMark||t.flowing&&t.length===0)){var r=t.length;u("maybeReadMore read 0");e.read(0);if(r===t.length)break}t.readingMore=false}Readable.prototype._read=function(e){S(this,new _("_read()"))};Readable.prototype.pipe=function(e,t){var r=this;var n=this._readableState;switch(n.pipesCount){case 0:n.pipes=e;break;case 1:n.pipes=[n.pipes,e];break;default:n.pipes.push(e);break}n.pipesCount+=1;u("pipe count=%d opts=%j",n.pipesCount,t);var i=(!t||t.end!==false)&&e!==process.stdout&&e!==process.stderr;var o=i?onend:unpipe;if(n.endEmitted)process.nextTick(o);else r.once("end",o);e.on("unpipe",onunpipe);function onunpipe(e,t){u("onunpipe");if(e===r){if(t&&t.hasUnpiped===false){t.hasUnpiped=true;cleanup()}}}function onend(){u("onend");e.end()}var s=pipeOnDrain(r);e.on("drain",s);var f=false;function cleanup(){u("cleanup");e.removeListener("close",onclose);e.removeListener("finish",onfinish);e.removeListener("drain",s);e.removeListener("error",onerror);e.removeListener("unpipe",onunpipe);r.removeListener("end",onend);r.removeListener("end",unpipe);r.removeListener("data",ondata);f=true;if(n.awaitDrain&&(!e._writableState||e._writableState.needDrain))s()}r.on("data",ondata);function ondata(t){u("ondata");var i=e.write(t);u("dest.write",i);if(i===false){if((n.pipesCount===1&&n.pipes===e||n.pipesCount>1&&indexOf(n.pipes,e)!==-1)&&!f){u("false write response, pause",n.awaitDrain);n.awaitDrain++}r.pause()}}function onerror(t){u("onerror",t);unpipe();e.removeListener("error",onerror);if(a(e,"error")===0)S(e,t)}prependListener(e,"error",onerror);function onclose(){e.removeListener("finish",onfinish);unpipe()}e.once("close",onclose);function onfinish(){u("onfinish");e.removeListener("close",onclose);unpipe()}e.once("finish",onfinish);function unpipe(){u("unpipe");r.unpipe(e)}e.emit("pipe",r);if(!n.flowing){u("pipe resume");r.resume()}return e};function pipeOnDrain(e){return function pipeOnDrainFunctionResult(){var t=e._readableState;u("pipeOnDrain",t.awaitDrain);if(t.awaitDrain)t.awaitDrain--;if(t.awaitDrain===0&&a(e,"data")){t.flowing=true;flow(e)}}}Readable.prototype.unpipe=function(e){var t=this._readableState;var r={hasUnpiped:false};if(t.pipesCount===0)return this;if(t.pipesCount===1){if(e&&e!==t.pipes)return this;if(!e)e=t.pipes;t.pipes=null;t.pipesCount=0;t.flowing=false;if(e)e.emit("unpipe",this,r);return this}if(!e){var n=t.pipes;var i=t.pipesCount;t.pipes=null;t.pipesCount=0;t.flowing=false;for(var a=0;a<i;a++){n[a].emit("unpipe",this,{hasUnpiped:false})}return this}var o=indexOf(t.pipes,e);if(o===-1)return this;t.pipes.splice(o,1);t.pipesCount-=1;if(t.pipesCount===1)t.pipes=t.pipes[0];e.emit("unpipe",this,r);return this};Readable.prototype.on=function(e,t){var r=o.prototype.on.call(this,e,t);var n=this._readableState;if(e==="data"){n.readableListening=this.listenerCount("readable")>0;if(n.flowing!==false)this.resume()}else if(e==="readable"){if(!n.endEmitted&&!n.readableListening){n.readableListening=n.needReadable=true;n.flowing=false;n.emittedReadable=false;u("on readable",n.length,n.reading);if(n.length){emitReadable(this)}else if(!n.reading){process.nextTick(nReadingNextTick,this)}}}return r};Readable.prototype.addListener=Readable.prototype.on;Readable.prototype.removeListener=function(e,t){var r=o.prototype.removeListener.call(this,e,t);if(e==="readable"){process.nextTick(updateReadableListening,this)}return r};Readable.prototype.removeAllListeners=function(e){var t=o.prototype.removeAllListeners.apply(this,arguments);if(e==="readable"||e===undefined){process.nextTick(updateReadableListening,this)}return t};function updateReadableListening(e){var t=e._readableState;t.readableListening=e.listenerCount("readable")>0;if(t.resumeScheduled&&!t.paused){t.flowing=true}else if(e.listenerCount("data")>0){e.resume()}}function nReadingNextTick(e){u("readable nexttick read 0");e.read(0)}Readable.prototype.resume=function(){var e=this._readableState;if(!e.flowing){u("resume");e.flowing=!e.readableListening;resume(this,e)}e.paused=false;return this};function resume(e,t){if(!t.resumeScheduled){t.resumeScheduled=true;process.nextTick(resume_,e,t)}}function resume_(e,t){u("resume",t.reading);if(!t.reading){e.read(0)}t.resumeScheduled=false;e.emit("resume");flow(e);if(t.flowing&&!t.reading)e.read(0)}Readable.prototype.pause=function(){u("call pause flowing=%j",this._readableState.flowing);if(this._readableState.flowing!==false){u("pause");this._readableState.flowing=false;this.emit("pause")}this._readableState.paused=true;return this};function flow(e){var t=e._readableState;u("flow",t.flowing);while(t.flowing&&e.read()!==null){}}Readable.prototype.wrap=function(e){var t=this;var r=this._readableState;var n=false;e.on("end",(function(){u("wrapped end");if(r.decoder&&!r.ended){var e=r.decoder.end();if(e&&e.length)t.push(e)}t.push(null)}));e.on("data",(function(i){u("wrapped data");if(r.decoder)i=r.decoder.write(i);if(r.objectMode&&(i===null||i===undefined))return;else if(!r.objectMode&&(!i||!i.length))return;var a=t.push(i);if(!a){n=true;e.pause()}}));for(var i in e){if(this[i]===undefined&&typeof e[i]==="function"){this[i]=function methodWrap(t){return function methodWrapReturnFunction(){return e[t].apply(e,arguments)}}(i)}}for(var a=0;a<E.length;a++){e.on(E[a],this.emit.bind(this,E[a]))}this._read=function(t){u("wrapped _read",t);if(n){n=false;e.resume()}};return this};if(typeof Symbol==="function"){Readable.prototype[Symbol.asyncIterator]=function(){if(w===undefined){w=r(871)}return w(this)}}Object.defineProperty(Readable.prototype,"readableHighWaterMark",{enumerable:false,get:function get(){return this._readableState.highWaterMark}});Object.defineProperty(Readable.prototype,"readableBuffer",{enumerable:false,get:function get(){return this._readableState&&this._readableState.buffer}});Object.defineProperty(Readable.prototype,"readableFlowing",{enumerable:false,get:function get(){return this._readableState.flowing},set:function set(e){if(this._readableState){this._readableState.flowing=e}}});Readable._fromList=fromList;Object.defineProperty(Readable.prototype,"readableLength",{enumerable:false,get:function get(){return this._readableState.length}});function fromList(e,t){if(t.length===0)return null;var r;if(t.objectMode)r=t.buffer.shift();else if(!e||e>=t.length){if(t.decoder)r=t.buffer.join("");else if(t.buffer.length===1)r=t.buffer.first();else r=t.buffer.concat(t.length);t.buffer.clear()}else{r=t.buffer.consume(e,t.decoder)}return r}function endReadable(e){var t=e._readableState;u("endReadable",t.endEmitted);if(!t.endEmitted){t.ended=true;process.nextTick(endReadableNT,t,e)}}function endReadableNT(e,t){u("endReadableNT",e.endEmitted,e.length);if(!e.endEmitted&&e.length===0){e.endEmitted=true;t.readable=false;t.emit("end");if(e.autoDestroy){var r=t._writableState;if(!r||r.autoDestroy&&r.finished){t.destroy()}}}}if(typeof Symbol==="function"){Readable.from=function(e,t){if(R===undefined){R=r(727)}return R(Readable,e,t)}}function indexOf(e,t){for(var r=0,n=e.length;r<n;r++){if(e[r]===t)return r}return-1}},170:function(e,t,r){"use strict";e.exports=Transform;var n=r(646).q,i=n.ERR_METHOD_NOT_IMPLEMENTED,a=n.ERR_MULTIPLE_CALLBACK,o=n.ERR_TRANSFORM_ALREADY_TRANSFORMING,s=n.ERR_TRANSFORM_WITH_LENGTH_0;var f=r(403);r(782)(Transform,f);function afterTransform(e,t){var r=this._transformState;r.transforming=false;var n=r.writecb;if(n===null){return this.emit("error",new a)}r.writechunk=null;r.writecb=null;if(t!=null)this.push(t);n(e);var i=this._readableState;i.reading=false;if(i.needReadable||i.length<i.highWaterMark){this._read(i.highWaterMark)}}function Transform(e){if(!(this instanceof Transform))return new Transform(e);f.call(this,e);this._transformState={afterTransform:afterTransform.bind(this),needTransform:false,transforming:false,writecb:null,writechunk:null,writeencoding:null};this._readableState.needReadable=true;this._readableState.sync=false;if(e){if(typeof e.transform==="function")this._transform=e.transform;if(typeof e.flush==="function")this._flush=e.flush}this.on("prefinish",prefinish)}function prefinish(){var e=this;if(typeof this._flush==="function"&&!this._readableState.destroyed){this._flush((function(t,r){done(e,t,r)}))}else{done(this,null,null)}}Transform.prototype.push=function(e,t){this._transformState.needTransform=false;return f.prototype.push.call(this,e,t)};Transform.prototype._transform=function(e,t,r){r(new i("_transform()"))};Transform.prototype._write=function(e,t,r){var n=this._transformState;n.writecb=r;n.writechunk=e;n.writeencoding=t;if(!n.transforming){var i=this._readableState;if(n.needTransform||i.needReadable||i.length<i.highWaterMark)this._read(i.highWaterMark)}};Transform.prototype._read=function(e){var t=this._transformState;if(t.writechunk!==null&&!t.transforming){t.transforming=true;this._transform(t.writechunk,t.writeencoding,t.afterTransform)}else{t.needTransform=true}};Transform.prototype._destroy=function(e,t){f.prototype._destroy.call(this,e,(function(e){t(e)}))};function done(e,t,r){if(t)return e.emit("error",t);if(r!=null)e.push(r);if(e._writableState.length)throw new s;if(e._transformState.transforming)throw new o;return e.push(null)}},337:function(e,t,r){"use strict";e.exports=Writable;function WriteReq(e,t,r){this.chunk=e;this.encoding=t;this.callback=r;this.next=null}function CorkedRequest(e){var t=this;this.next=null;this.entry=null;this.finish=function(){onCorkedFinish(t,e)}}var n;Writable.WritableState=WritableState;var i={deprecate:r(769)};var a=r(678);var o=r(300).Buffer;var s=__webpack_require__.g.Uint8Array||function(){};function _uint8ArrayToBuffer(e){return o.from(e)}function _isUint8Array(e){return o.isBuffer(e)||e instanceof s}var f=r(25);var l=r(776),u=l.getHighWaterMark;var d=r(646).q,c=d.ERR_INVALID_ARG_TYPE,h=d.ERR_METHOD_NOT_IMPLEMENTED,p=d.ERR_MULTIPLE_CALLBACK,b=d.ERR_STREAM_CANNOT_PIPE,y=d.ERR_STREAM_DESTROYED,g=d.ERR_STREAM_NULL_VALUES,_=d.ERR_STREAM_WRITE_AFTER_END,v=d.ERR_UNKNOWN_ENCODING;var m=f.errorOrDestroy;r(782)(Writable,a);function nop(){}function WritableState(e,t,i){n=n||r(403);e=e||{};if(typeof i!=="boolean")i=t instanceof n;this.objectMode=!!e.objectMode;if(i)this.objectMode=this.objectMode||!!e.writableObjectMode;this.highWaterMark=u(this,e,"writableHighWaterMark",i);this.finalCalled=false;this.needDrain=false;this.ending=false;this.ended=false;this.finished=false;this.destroyed=false;var a=e.decodeStrings===false;this.decodeStrings=!a;this.defaultEncoding=e.defaultEncoding||"utf8";this.length=0;this.writing=false;this.corked=0;this.sync=true;this.bufferProcessing=false;this.onwrite=function(e){onwrite(t,e)};this.writecb=null;this.writelen=0;this.bufferedRequest=null;this.lastBufferedRequest=null;this.pendingcb=0;this.prefinished=false;this.errorEmitted=false;this.emitClose=e.emitClose!==false;this.autoDestroy=!!e.autoDestroy;this.bufferedRequestCount=0;this.corkedRequestsFree=new CorkedRequest(this)}WritableState.prototype.getBuffer=function getBuffer(){var e=this.bufferedRequest;var t=[];while(e){t.push(e);e=e.next}return t};(function(){try{Object.defineProperty(WritableState.prototype,"buffer",{get:i.deprecate((function writableStateBufferGetter(){return this.getBuffer()}),"_writableState.buffer is deprecated. Use _writableState.getBuffer "+"instead.","DEP0003")})}catch(e){}})();var w;if(typeof Symbol==="function"&&Symbol.hasInstance&&typeof Function.prototype[Symbol.hasInstance]==="function"){w=Function.prototype[Symbol.hasInstance];Object.defineProperty(Writable,Symbol.hasInstance,{value:function value(e){if(w.call(this,e))return true;if(this!==Writable)return false;return e&&e._writableState instanceof WritableState}})}else{w=function realHasInstance(e){return e instanceof this}}function Writable(e){n=n||r(403);var t=this instanceof n;if(!t&&!w.call(Writable,this))return new Writable(e);this._writableState=new WritableState(e,this,t);this.writable=true;if(e){if(typeof e.write==="function")this._write=e.write;if(typeof e.writev==="function")this._writev=e.writev;if(typeof e.destroy==="function")this._destroy=e.destroy;if(typeof e.final==="function")this._final=e.final}a.call(this)}Writable.prototype.pipe=function(){m(this,new b)};function writeAfterEnd(e,t){var r=new _;m(e,r);process.nextTick(t,r)}function validChunk(e,t,r,n){var i;if(r===null){i=new g}else if(typeof r!=="string"&&!t.objectMode){i=new c("chunk",["string","Buffer"],r)}if(i){m(e,i);process.nextTick(n,i);return false}return true}Writable.prototype.write=function(e,t,r){var n=this._writableState;var i=false;var a=!n.objectMode&&_isUint8Array(e);if(a&&!o.isBuffer(e)){e=_uint8ArrayToBuffer(e)}if(typeof t==="function"){r=t;t=null}if(a)t="buffer";else if(!t)t=n.defaultEncoding;if(typeof r!=="function")r=nop;if(n.ending)writeAfterEnd(this,r);else if(a||validChunk(this,n,e,r)){n.pendingcb++;i=writeOrBuffer(this,n,a,e,t,r)}return i};Writable.prototype.cork=function(){this._writableState.corked++};Writable.prototype.uncork=function(){var e=this._writableState;if(e.corked){e.corked--;if(!e.writing&&!e.corked&&!e.bufferProcessing&&e.bufferedRequest)clearBuffer(this,e)}};Writable.prototype.setDefaultEncoding=function setDefaultEncoding(e){if(typeof e==="string")e=e.toLowerCase();if(!(["hex","utf8","utf-8","ascii","binary","base64","ucs2","ucs-2","utf16le","utf-16le","raw"].indexOf((e+"").toLowerCase())>-1))throw new v(e);this._writableState.defaultEncoding=e;return this};Object.defineProperty(Writable.prototype,"writableBuffer",{enumerable:false,get:function get(){return this._writableState&&this._writableState.getBuffer()}});function decodeChunk(e,t,r){if(!e.objectMode&&e.decodeStrings!==false&&typeof t==="string"){t=o.from(t,r)}return t}Object.defineProperty(Writable.prototype,"writableHighWaterMark",{enumerable:false,get:function get(){return this._writableState.highWaterMark}});function writeOrBuffer(e,t,r,n,i,a){if(!r){var o=decodeChunk(t,n,i);if(n!==o){r=true;i="buffer";n=o}}var s=t.objectMode?1:n.length;t.length+=s;var f=t.length<t.highWaterMark;if(!f)t.needDrain=true;if(t.writing||t.corked){var l=t.lastBufferedRequest;t.lastBufferedRequest={chunk:n,encoding:i,isBuf:r,callback:a,next:null};if(l){l.next=t.lastBufferedRequest}else{t.bufferedRequest=t.lastBufferedRequest}t.bufferedRequestCount+=1}else{doWrite(e,t,false,s,n,i,a)}return f}function doWrite(e,t,r,n,i,a,o){t.writelen=n;t.writecb=o;t.writing=true;t.sync=true;if(t.destroyed)t.onwrite(new y("write"));else if(r)e._writev(i,t.onwrite);else e._write(i,a,t.onwrite);t.sync=false}function onwriteError(e,t,r,n,i){--t.pendingcb;if(r){process.nextTick(i,n);process.nextTick(finishMaybe,e,t);e._writableState.errorEmitted=true;m(e,n)}else{i(n);e._writableState.errorEmitted=true;m(e,n);finishMaybe(e,t)}}function onwriteStateUpdate(e){e.writing=false;e.writecb=null;e.length-=e.writelen;e.writelen=0}function onwrite(e,t){var r=e._writableState;var n=r.sync;var i=r.writecb;if(typeof i!=="function")throw new p;onwriteStateUpdate(r);if(t)onwriteError(e,r,n,t,i);else{var a=needFinish(r)||e.destroyed;if(!a&&!r.corked&&!r.bufferProcessing&&r.bufferedRequest){clearBuffer(e,r)}if(n){process.nextTick(afterWrite,e,r,a,i)}else{afterWrite(e,r,a,i)}}}function afterWrite(e,t,r,n){if(!r)onwriteDrain(e,t);t.pendingcb--;n();finishMaybe(e,t)}function onwriteDrain(e,t){if(t.length===0&&t.needDrain){t.needDrain=false;e.emit("drain")}}function clearBuffer(e,t){t.bufferProcessing=true;var r=t.bufferedRequest;if(e._writev&&r&&r.next){var n=t.bufferedRequestCount;var i=new Array(n);var a=t.corkedRequestsFree;a.entry=r;var o=0;var s=true;while(r){i[o]=r;if(!r.isBuf)s=false;r=r.next;o+=1}i.allBuffers=s;doWrite(e,t,true,t.length,i,"",a.finish);t.pendingcb++;t.lastBufferedRequest=null;if(a.next){t.corkedRequestsFree=a.next;a.next=null}else{t.corkedRequestsFree=new CorkedRequest(t)}t.bufferedRequestCount=0}else{while(r){var f=r.chunk;var l=r.encoding;var u=r.callback;var d=t.objectMode?1:f.length;doWrite(e,t,false,d,f,l,u);r=r.next;t.bufferedRequestCount--;if(t.writing){break}}if(r===null)t.lastBufferedRequest=null}t.bufferedRequest=r;t.bufferProcessing=false}Writable.prototype._write=function(e,t,r){r(new h("_write()"))};Writable.prototype._writev=null;Writable.prototype.end=function(e,t,r){var n=this._writableState;if(typeof e==="function"){r=e;e=null;t=null}else if(typeof t==="function"){r=t;t=null}if(e!==null&&e!==undefined)this.write(e,t);if(n.corked){n.corked=1;this.uncork()}if(!n.ending)endWritable(this,n,r);return this};Object.defineProperty(Writable.prototype,"writableLength",{enumerable:false,get:function get(){return this._writableState.length}});function needFinish(e){return e.ending&&e.length===0&&e.bufferedRequest===null&&!e.finished&&!e.writing}function callFinal(e,t){e._final((function(r){t.pendingcb--;if(r){m(e,r)}t.prefinished=true;e.emit("prefinish");finishMaybe(e,t)}))}function prefinish(e,t){if(!t.prefinished&&!t.finalCalled){if(typeof e._final==="function"&&!t.destroyed){t.pendingcb++;t.finalCalled=true;process.nextTick(callFinal,e,t)}else{t.prefinished=true;e.emit("prefinish")}}}function finishMaybe(e,t){var r=needFinish(t);if(r){prefinish(e,t);if(t.pendingcb===0){t.finished=true;e.emit("finish");if(t.autoDestroy){var n=e._readableState;if(!n||n.autoDestroy&&n.endEmitted){e.destroy()}}}}return r}function endWritable(e,t,r){t.ending=true;finishMaybe(e,t);if(r){if(t.finished)process.nextTick(r);else e.once("finish",r)}t.ended=true;e.writable=false}function onCorkedFinish(e,t,r){var n=e.entry;e.entry=null;while(n){var i=n.callback;t.pendingcb--;i(r);n=n.next}t.corkedRequestsFree.next=e}Object.defineProperty(Writable.prototype,"destroyed",{enumerable:false,get:function get(){if(this._writableState===undefined){return false}return this._writableState.destroyed},set:function set(e){if(!this._writableState){return}this._writableState.destroyed=e}});Writable.prototype.destroy=f.destroy;Writable.prototype._undestroy=f.undestroy;Writable.prototype._destroy=function(e,t){t(e)}},871:function(e,t,r){"use strict";var n;function _defineProperty(e,t,r){if(t in e){Object.defineProperty(e,t,{value:r,enumerable:true,configurable:true,writable:true})}else{e[t]=r}return e}var i=r(698);var a=Symbol("lastResolve");var o=Symbol("lastReject");var s=Symbol("error");var f=Symbol("ended");var l=Symbol("lastPromise");var u=Symbol("handlePromise");var d=Symbol("stream");function createIterResult(e,t){return{value:e,done:t}}function readAndResolve(e){var t=e[a];if(t!==null){var r=e[d].read();if(r!==null){e[l]=null;e[a]=null;e[o]=null;t(createIterResult(r,false))}}}function onReadable(e){process.nextTick(readAndResolve,e)}function wrapForNext(e,t){return function(r,n){e.then((function(){if(t[f]){r(createIterResult(undefined,true));return}t[u](r,n)}),n)}}var c=Object.getPrototypeOf((function(){}));var h=Object.setPrototypeOf((n={get stream(){return this[d]},next:function next(){var e=this;var t=this[s];if(t!==null){return Promise.reject(t)}if(this[f]){return Promise.resolve(createIterResult(undefined,true))}if(this[d].destroyed){return new Promise((function(t,r){process.nextTick((function(){if(e[s]){r(e[s])}else{t(createIterResult(undefined,true))}}))}))}var r=this[l];var n;if(r){n=new Promise(wrapForNext(r,this))}else{var i=this[d].read();if(i!==null){return Promise.resolve(createIterResult(i,false))}n=new Promise(this[u])}this[l]=n;return n}},_defineProperty(n,Symbol.asyncIterator,(function(){return this})),_defineProperty(n,"return",(function _return(){var e=this;return new Promise((function(t,r){e[d].destroy(null,(function(e){if(e){r(e);return}t(createIterResult(undefined,true))}))}))})),n),c);var p=function createReadableStreamAsyncIterator(e){var t;var r=Object.create(h,(t={},_defineProperty(t,d,{value:e,writable:true}),_defineProperty(t,a,{value:null,writable:true}),_defineProperty(t,o,{value:null,writable:true}),_defineProperty(t,s,{value:null,writable:true}),_defineProperty(t,f,{value:e._readableState.endEmitted,writable:true}),_defineProperty(t,u,{value:function value(e,t){var n=r[d].read();if(n){r[l]=null;r[a]=null;r[o]=null;e(createIterResult(n,false))}else{r[a]=e;r[o]=t}},writable:true}),t));r[l]=null;i(e,(function(e){if(e&&e.code!=="ERR_STREAM_PREMATURE_CLOSE"){var t=r[o];if(t!==null){r[l]=null;r[a]=null;r[o]=null;t(e)}r[s]=e;return}var n=r[a];if(n!==null){r[l]=null;r[a]=null;r[o]=null;n(createIterResult(undefined,true))}r[f]=true}));e.on("readable",onReadable.bind(null,r));return r};e.exports=p},379:function(e,t,r){"use strict";function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);if(t)n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}));r.push.apply(r,n)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};if(t%2){ownKeys(Object(r),true).forEach((function(t){_defineProperty(e,t,r[t])}))}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(e,Object.getOwnPropertyDescriptors(r))}else{ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}}return e}function _defineProperty(e,t,r){if(t in e){Object.defineProperty(e,t,{value:r,enumerable:true,configurable:true,writable:true})}else{e[t]=r}return e}function _classCallCheck(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||false;n.configurable=true;if("value"in n)n.writable=true;Object.defineProperty(e,n.key,n)}}function _createClass(e,t,r){if(t)_defineProperties(e.prototype,t);if(r)_defineProperties(e,r);return e}var n=r(300),i=n.Buffer;var a=r(837),o=a.inspect;var s=o&&o.custom||"inspect";function copyBuffer(e,t,r){i.prototype.copy.call(e,t,r)}e.exports=function(){function BufferList(){_classCallCheck(this,BufferList);this.head=null;this.tail=null;this.length=0}_createClass(BufferList,[{key:"push",value:function push(e){var t={data:e,next:null};if(this.length>0)this.tail.next=t;else this.head=t;this.tail=t;++this.length}},{key:"unshift",value:function unshift(e){var t={data:e,next:this.head};if(this.length===0)this.tail=t;this.head=t;++this.length}},{key:"shift",value:function shift(){if(this.length===0)return;var e=this.head.data;if(this.length===1)this.head=this.tail=null;else this.head=this.head.next;--this.length;return e}},{key:"clear",value:function clear(){this.head=this.tail=null;this.length=0}},{key:"join",value:function join(e){if(this.length===0)return"";var t=this.head;var r=""+t.data;while(t=t.next){r+=e+t.data}return r}},{key:"concat",value:function concat(e){if(this.length===0)return i.alloc(0);var t=i.allocUnsafe(e>>>0);var r=this.head;var n=0;while(r){copyBuffer(r.data,t,n);n+=r.data.length;r=r.next}return t}},{key:"consume",value:function consume(e,t){var r;if(e<this.head.data.length){r=this.head.data.slice(0,e);this.head.data=this.head.data.slice(e)}else if(e===this.head.data.length){r=this.shift()}else{r=t?this._getString(e):this._getBuffer(e)}return r}},{key:"first",value:function first(){return this.head.data}},{key:"_getString",value:function _getString(e){var t=this.head;var r=1;var n=t.data;e-=n.length;while(t=t.next){var i=t.data;var a=e>i.length?i.length:e;if(a===i.length)n+=i;else n+=i.slice(0,e);e-=a;if(e===0){if(a===i.length){++r;if(t.next)this.head=t.next;else this.head=this.tail=null}else{this.head=t;t.data=i.slice(a)}break}++r}this.length-=r;return n}},{key:"_getBuffer",value:function _getBuffer(e){var t=i.allocUnsafe(e);var r=this.head;var n=1;r.data.copy(t);e-=r.data.length;while(r=r.next){var a=r.data;var o=e>a.length?a.length:e;a.copy(t,t.length-e,0,o);e-=o;if(e===0){if(o===a.length){++n;if(r.next)this.head=r.next;else this.head=this.tail=null}else{this.head=r;r.data=a.slice(o)}break}++n}this.length-=n;return t}},{key:s,value:function value(e,t){return o(this,_objectSpread({},t,{depth:0,customInspect:false}))}}]);return BufferList}()},25:function(e){"use strict";function destroy(e,t){var r=this;var n=this._readableState&&this._readableState.destroyed;var i=this._writableState&&this._writableState.destroyed;if(n||i){if(t){t(e)}else if(e){if(!this._writableState){process.nextTick(emitErrorNT,this,e)}else if(!this._writableState.errorEmitted){this._writableState.errorEmitted=true;process.nextTick(emitErrorNT,this,e)}}return this}if(this._readableState){this._readableState.destroyed=true}if(this._writableState){this._writableState.destroyed=true}this._destroy(e||null,(function(e){if(!t&&e){if(!r._writableState){process.nextTick(emitErrorAndCloseNT,r,e)}else if(!r._writableState.errorEmitted){r._writableState.errorEmitted=true;process.nextTick(emitErrorAndCloseNT,r,e)}else{process.nextTick(emitCloseNT,r)}}else if(t){process.nextTick(emitCloseNT,r);t(e)}else{process.nextTick(emitCloseNT,r)}}));return this}function emitErrorAndCloseNT(e,t){emitErrorNT(e,t);emitCloseNT(e)}function emitCloseNT(e){if(e._writableState&&!e._writableState.emitClose)return;if(e._readableState&&!e._readableState.emitClose)return;e.emit("close")}function undestroy(){if(this._readableState){this._readableState.destroyed=false;this._readableState.reading=false;this._readableState.ended=false;this._readableState.endEmitted=false}if(this._writableState){this._writableState.destroyed=false;this._writableState.ended=false;this._writableState.ending=false;this._writableState.finalCalled=false;this._writableState.prefinished=false;this._writableState.finished=false;this._writableState.errorEmitted=false}}function emitErrorNT(e,t){e.emit("error",t)}function errorOrDestroy(e,t){var r=e._readableState;var n=e._writableState;if(r&&r.autoDestroy||n&&n.autoDestroy)e.destroy(t);else e.emit("error",t)}e.exports={destroy:destroy,undestroy:undestroy,errorOrDestroy:errorOrDestroy}},698:function(e,t,r){"use strict";var n=r(646).q.ERR_STREAM_PREMATURE_CLOSE;function once(e){var t=false;return function(){if(t)return;t=true;for(var r=arguments.length,n=new Array(r),i=0;i<r;i++){n[i]=arguments[i]}e.apply(this,n)}}function noop(){}function isRequest(e){return e.setHeader&&typeof e.abort==="function"}function eos(e,t,r){if(typeof t==="function")return eos(e,null,t);if(!t)t={};r=once(r||noop);var i=t.readable||t.readable!==false&&e.readable;var a=t.writable||t.writable!==false&&e.writable;var o=function onlegacyfinish(){if(!e.writable)f()};var s=e._writableState&&e._writableState.finished;var f=function onfinish(){a=false;s=true;if(!i)r.call(e)};var l=e._readableState&&e._readableState.endEmitted;var u=function onend(){i=false;l=true;if(!a)r.call(e)};var d=function onerror(t){r.call(e,t)};var c=function onclose(){var t;if(i&&!l){if(!e._readableState||!e._readableState.ended)t=new n;return r.call(e,t)}if(a&&!s){if(!e._writableState||!e._writableState.ended)t=new n;return r.call(e,t)}};var h=function onrequest(){e.req.on("finish",f)};if(isRequest(e)){e.on("complete",f);e.on("abort",c);if(e.req)h();else e.on("request",h)}else if(a&&!e._writableState){e.on("end",o);e.on("close",o)}e.on("end",u);e.on("finish",f);if(t.error!==false)e.on("error",d);e.on("close",c);return function(){e.removeListener("complete",f);e.removeListener("abort",c);e.removeListener("request",h);if(e.req)e.req.removeListener("finish",f);e.removeListener("end",o);e.removeListener("close",o);e.removeListener("finish",f);e.removeListener("end",u);e.removeListener("error",d);e.removeListener("close",c)}}e.exports=eos},727:function(e,t,r){"use strict";function asyncGeneratorStep(e,t,r,n,i,a,o){try{var s=e[a](o);var f=s.value}catch(e){r(e);return}if(s.done){t(f)}else{Promise.resolve(f).then(n,i)}}function _asyncToGenerator(e){return function(){var t=this,r=arguments;return new Promise((function(n,i){var a=e.apply(t,r);function _next(e){asyncGeneratorStep(a,n,i,_next,_throw,"next",e)}function _throw(e){asyncGeneratorStep(a,n,i,_next,_throw,"throw",e)}_next(undefined)}))}}function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);if(t)n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}));r.push.apply(r,n)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};if(t%2){ownKeys(Object(r),true).forEach((function(t){_defineProperty(e,t,r[t])}))}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(e,Object.getOwnPropertyDescriptors(r))}else{ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}}return e}function _defineProperty(e,t,r){if(t in e){Object.defineProperty(e,t,{value:r,enumerable:true,configurable:true,writable:true})}else{e[t]=r}return e}var n=r(646).q.ERR_INVALID_ARG_TYPE;function from(e,t,r){var i;if(t&&typeof t.next==="function"){i=t}else if(t&&t[Symbol.asyncIterator])i=t[Symbol.asyncIterator]();else if(t&&t[Symbol.iterator])i=t[Symbol.iterator]();else throw new n("iterable",["Iterable"],t);var a=new e(_objectSpread({objectMode:true},r));var o=false;a._read=function(){if(!o){o=true;next()}};function next(){return _next2.apply(this,arguments)}function _next2(){_next2=_asyncToGenerator((function*(){try{var e=yield i.next(),t=e.value,r=e.done;if(r){a.push(null)}else if(a.push(yield t)){next()}else{o=false}}catch(e){a.destroy(e)}}));return _next2.apply(this,arguments)}return a}e.exports=from},442:function(e,t,r){"use strict";var n;function once(e){var t=false;return function(){if(t)return;t=true;e.apply(void 0,arguments)}}var i=r(646).q,a=i.ERR_MISSING_ARGS,o=i.ERR_STREAM_DESTROYED;function noop(e){if(e)throw e}function isRequest(e){return e.setHeader&&typeof e.abort==="function"}function destroyer(e,t,i,a){a=once(a);var s=false;e.on("close",(function(){s=true}));if(n===undefined)n=r(698);n(e,{readable:t,writable:i},(function(e){if(e)return a(e);s=true;a()}));var f=false;return function(t){if(s)return;if(f)return;f=true;if(isRequest(e))return e.abort();if(typeof e.destroy==="function")return e.destroy();a(t||new o("pipe"))}}function call(e){e()}function pipe(e,t){return e.pipe(t)}function popCallback(e){if(!e.length)return noop;if(typeof e[e.length-1]!=="function")return noop;return e.pop()}function pipeline(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++){t[r]=arguments[r]}var n=popCallback(t);if(Array.isArray(t[0]))t=t[0];if(t.length<2){throw new a("streams")}var i;var o=t.map((function(e,r){var a=r<t.length-1;var s=r>0;return destroyer(e,a,s,(function(e){if(!i)i=e;if(e)o.forEach(call);if(a)return;o.forEach(call);n(i)}))}));return t.reduce(pipe)}e.exports=pipeline},776:function(e,t,r){"use strict";var n=r(646).q.ERR_INVALID_OPT_VALUE;function highWaterMarkFrom(e,t,r){return e.highWaterMark!=null?e.highWaterMark:t?e[r]:null}function getHighWaterMark(e,t,r,i){var a=highWaterMarkFrom(t,i,r);if(a!=null){if(!(isFinite(a)&&Math.floor(a)===a)||a<0){var o=i?r:"highWaterMark";throw new n(o,a)}return Math.floor(a)}return e.objectMode?16:16*1024}e.exports={getHighWaterMark:getHighWaterMark}},678:function(e,t,r){e.exports=r(781)},726:function(e,t,r){var n=r(781);if(process.env.READABLE_STREAM==="disable"&&n){e.exports=n.Readable;Object.assign(e.exports,n);e.exports.Stream=n}else{t=e.exports=r(709);t.Stream=n||t;t.Readable=t;t.Writable=r(337);t.Duplex=r(403);t.Transform=r(170);t.PassThrough=r(889);t.finished=r(698);t.pipeline=r(442)}},55:function(e,t,r){var n=r(300);var i=n.Buffer;function copyProps(e,t){for(var r in e){t[r]=e[r]}}if(i.from&&i.alloc&&i.allocUnsafe&&i.allocUnsafeSlow){e.exports=n}else{copyProps(n,t);t.Buffer=SafeBuffer}function SafeBuffer(e,t,r){return i(e,t,r)}SafeBuffer.prototype=Object.create(i.prototype);copyProps(i,SafeBuffer);SafeBuffer.from=function(e,t,r){if(typeof e==="number"){throw new TypeError("Argument must not be a number")}return i(e,t,r)};SafeBuffer.alloc=function(e,t,r){if(typeof e!=="number"){throw new TypeError("Argument must be a number")}var n=i(e);if(t!==undefined){if(typeof r==="string"){n.fill(t,r)}else{n.fill(t)}}else{n.fill(0)}return n};SafeBuffer.allocUnsafe=function(e){if(typeof e!=="number"){throw new TypeError("Argument must be a number")}return i(e)};SafeBuffer.allocUnsafeSlow=function(e){if(typeof e!=="number"){throw new TypeError("Argument must be a number")}return n.SlowBuffer(e)}},813:function(e,t,r){var n=r(450);var i=r(254);var a=r(911);var o=r(523);var s=r(310);var f=t;f.request=function(e,t){if(typeof e==="string")e=s.parse(e);else e=a(e);var r=__webpack_require__.g.location.protocol.search(/^https?:$/)===-1?"http:":"";var i=e.protocol||r;var o=e.hostname||e.host;var f=e.port;var l=e.path||"/";if(o&&o.indexOf(":")!==-1)o="["+o+"]";e.url=(o?i+"//"+o:"")+(f?":"+f:"")+l;e.method=(e.method||"GET").toUpperCase();e.headers=e.headers||{};var u=new n(e);if(t)u.on("response",t);return u};f.get=function get(e,t){var r=f.request(e,t);r.end();return r};f.ClientRequest=n;f.IncomingMessage=i.IncomingMessage;f.Agent=function(){};f.Agent.defaultMaxSockets=4;f.globalAgent=new f.Agent;f.STATUS_CODES=o;f.METHODS=["CHECKOUT","CONNECT","COPY","DELETE","GET","HEAD","LOCK","M-SEARCH","MERGE","MKACTIVITY","MKCOL","MOVE","NOTIFY","OPTIONS","PATCH","POST","PROPFIND","PROPPATCH","PURGE","PUT","REPORT","SEARCH","SUBSCRIBE","TRACE","UNLOCK","UNSUBSCRIBE"]},301:function(e,t){t.fetch=isFunction(__webpack_require__.g.fetch)&&isFunction(__webpack_require__.g.ReadableStream);t.writableStream=isFunction(__webpack_require__.g.WritableStream);t.abortController=isFunction(__webpack_require__.g.AbortController);var r;function getXHR(){if(r!==undefined)return r;if(__webpack_require__.g.XMLHttpRequest){r=new __webpack_require__.g.XMLHttpRequest;try{r.open("GET",__webpack_require__.g.XDomainRequest?"/":"https://example.com")}catch(e){r=null}}else{r=null}return r}function checkTypeSupport(e){var t=getXHR();if(!t)return false;try{t.responseType=e;return t.responseType===e}catch(e){}return false}t.arraybuffer=t.fetch||checkTypeSupport("arraybuffer");t.msstream=!t.fetch&&checkTypeSupport("ms-stream");t.mozchunkedarraybuffer=!t.fetch&&checkTypeSupport("moz-chunked-arraybuffer");t.overrideMimeType=t.fetch||(getXHR()?isFunction(getXHR().overrideMimeType):false);function isFunction(e){return typeof e==="function"}r=null},450:function(e,t,r){var n=r(301);var i=r(782);var a=r(254);var o=r(726);var s=a.IncomingMessage;var f=a.readyStates;function decideMode(e,t){if(n.fetch&&t){return"fetch"}else if(n.mozchunkedarraybuffer){return"moz-chunked-arraybuffer"}else if(n.msstream){return"ms-stream"}else if(n.arraybuffer&&e){return"arraybuffer"}else{return"text"}}var l=e.exports=function(e){var t=this;o.Writable.call(t);t._opts=e;t._body=[];t._headers={};if(e.auth)t.setHeader("Authorization","Basic "+Buffer.from(e.auth).toString("base64"));Object.keys(e.headers).forEach((function(r){t.setHeader(r,e.headers[r])}));var r;var i=true;if(e.mode==="disable-fetch"||"requestTimeout"in e&&!n.abortController){i=false;r=true}else if(e.mode==="prefer-streaming"){r=false}else if(e.mode==="allow-wrong-content-type"){r=!n.overrideMimeType}else if(!e.mode||e.mode==="default"||e.mode==="prefer-fast"){r=true}else{throw new Error("Invalid value for opts.mode")}t._mode=decideMode(r,i);t._fetchTimer=null;t.on("finish",(function(){t._onFinish()}))};i(l,o.Writable);l.prototype.setHeader=function(e,t){var r=this;var n=e.toLowerCase();if(u.indexOf(n)!==-1)return;r._headers[n]={name:e,value:t}};l.prototype.getHeader=function(e){var t=this._headers[e.toLowerCase()];if(t)return t.value;return null};l.prototype.removeHeader=function(e){var t=this;delete t._headers[e.toLowerCase()]};l.prototype._onFinish=function(){var e=this;if(e._destroyed)return;var t=e._opts;var r=e._headers;var i=null;if(t.method!=="GET"&&t.method!=="HEAD"){i=new Blob(e._body,{type:(r["content-type"]||{}).value||""})}var a=[];Object.keys(r).forEach((function(e){var t=r[e].name;var n=r[e].value;if(Array.isArray(n)){n.forEach((function(e){a.push([t,e])}))}else{a.push([t,n])}}));if(e._mode==="fetch"){var o=null;if(n.abortController){var s=new AbortController;o=s.signal;e._fetchAbortController=s;if("requestTimeout"in t&&t.requestTimeout!==0){e._fetchTimer=__webpack_require__.g.setTimeout((function(){e.emit("requestTimeout");if(e._fetchAbortController)e._fetchAbortController.abort()}),t.requestTimeout)}}__webpack_require__.g.fetch(e._opts.url,{method:e._opts.method,headers:a,body:i||undefined,mode:"cors",credentials:t.withCredentials?"include":"same-origin",signal:o}).then((function(t){e._fetchResponse=t;e._connect()}),(function(t){__webpack_require__.g.clearTimeout(e._fetchTimer);if(!e._destroyed)e.emit("error",t)}))}else{var l=e._xhr=new __webpack_require__.g.XMLHttpRequest;try{l.open(e._opts.method,e._opts.url,true)}catch(t){process.nextTick((function(){e.emit("error",t)}));return}if("responseType"in l)l.responseType=e._mode;if("withCredentials"in l)l.withCredentials=!!t.withCredentials;if(e._mode==="text"&&"overrideMimeType"in l)l.overrideMimeType("text/plain; charset=x-user-defined");if("requestTimeout"in t){l.timeout=t.requestTimeout;l.ontimeout=function(){e.emit("requestTimeout")}}a.forEach((function(e){l.setRequestHeader(e[0],e[1])}));e._response=null;l.onreadystatechange=function(){switch(l.readyState){case f.LOADING:case f.DONE:e._onXHRProgress();break}};if(e._mode==="moz-chunked-arraybuffer"){l.onprogress=function(){e._onXHRProgress()}}l.onerror=function(){if(e._destroyed)return;e.emit("error",new Error("XHR error"))};try{l.send(i)}catch(t){process.nextTick((function(){e.emit("error",t)}));return}}};function statusValid(e){try{var t=e.status;return t!==null&&t!==0}catch(e){return false}}l.prototype._onXHRProgress=function(){var e=this;if(!statusValid(e._xhr)||e._destroyed)return;if(!e._response)e._connect();e._response._onXHRProgress()};l.prototype._connect=function(){var e=this;if(e._destroyed)return;e._response=new s(e._xhr,e._fetchResponse,e._mode,e._fetchTimer);e._response.on("error",(function(t){e.emit("error",t)}));e.emit("response",e._response)};l.prototype._write=function(e,t,r){var n=this;n._body.push(e);r()};l.prototype.abort=l.prototype.destroy=function(){var e=this;e._destroyed=true;__webpack_require__.g.clearTimeout(e._fetchTimer);if(e._response)e._response._destroyed=true;if(e._xhr)e._xhr.abort();else if(e._fetchAbortController)e._fetchAbortController.abort()};l.prototype.end=function(e,t,r){var n=this;if(typeof e==="function"){r=e;e=undefined}o.Writable.prototype.end.call(n,e,t,r)};l.prototype.flushHeaders=function(){};l.prototype.setTimeout=function(){};l.prototype.setNoDelay=function(){};l.prototype.setSocketKeepAlive=function(){};var u=["accept-charset","accept-encoding","access-control-request-headers","access-control-request-method","connection","content-length","cookie","cookie2","date","dnt","expect","host","keep-alive","origin","referer","te","trailer","transfer-encoding","upgrade","via"]},254:function(e,t,r){var n=r(301);var i=r(782);var a=r(726);var o=t.readyStates={UNSENT:0,OPENED:1,HEADERS_RECEIVED:2,LOADING:3,DONE:4};var s=t.IncomingMessage=function(e,t,r,i){var o=this;a.Readable.call(o);o._mode=r;o.headers={};o.rawHeaders=[];o.trailers={};o.rawTrailers=[];o.on("end",(function(){process.nextTick((function(){o.emit("close")}))}));if(r==="fetch"){o._fetchResponse=t;o.url=t.url;o.statusCode=t.status;o.statusMessage=t.statusText;t.headers.forEach((function(e,t){o.headers[t.toLowerCase()]=e;o.rawHeaders.push(t,e)}));if(n.writableStream){var s=new WritableStream({write:function(e){return new Promise((function(t,r){if(o._destroyed){r()}else if(o.push(Buffer.from(e))){t()}else{o._resumeFetch=t}}))},close:function(){__webpack_require__.g.clearTimeout(i);if(!o._destroyed)o.push(null)},abort:function(e){if(!o._destroyed)o.emit("error",e)}});try{t.body.pipeTo(s).catch((function(e){__webpack_require__.g.clearTimeout(i);if(!o._destroyed)o.emit("error",e)}));return}catch(e){}}var f=t.body.getReader();function read(){f.read().then((function(e){if(o._destroyed)return;if(e.done){__webpack_require__.g.clearTimeout(i);o.push(null);return}o.push(Buffer.from(e.value));read()})).catch((function(e){__webpack_require__.g.clearTimeout(i);if(!o._destroyed)o.emit("error",e)}))}read()}else{o._xhr=e;o._pos=0;o.url=e.responseURL;o.statusCode=e.status;o.statusMessage=e.statusText;var l=e.getAllResponseHeaders().split(/\r?\n/);l.forEach((function(e){var t=e.match(/^([^:]+):\s*(.*)/);if(t){var r=t[1].toLowerCase();if(r==="set-cookie"){if(o.headers[r]===undefined){o.headers[r]=[]}o.headers[r].push(t[2])}else if(o.headers[r]!==undefined){o.headers[r]+=", "+t[2]}else{o.headers[r]=t[2]}o.rawHeaders.push(t[1],t[2])}}));o._charset="x-user-defined";if(!n.overrideMimeType){var u=o.rawHeaders["mime-type"];if(u){var d=u.match(/;\s*charset=([^;])(;|$)/);if(d){o._charset=d[1].toLowerCase()}}if(!o._charset)o._charset="utf-8"}}};i(s,a.Readable);s.prototype._read=function(){var e=this;var t=e._resumeFetch;if(t){e._resumeFetch=null;t()}};s.prototype._onXHRProgress=function(){var e=this;var t=e._xhr;var r=null;switch(e._mode){case"text":r=t.responseText;if(r.length>e._pos){var n=r.substr(e._pos);if(e._charset==="x-user-defined"){var i=Buffer.alloc(n.length);for(var a=0;a<n.length;a++)i[a]=n.charCodeAt(a)&255;e.push(i)}else{e.push(n,e._charset)}e._pos=r.length}break;case"arraybuffer":if(t.readyState!==o.DONE||!t.response)break;r=t.response;e.push(Buffer.from(new Uint8Array(r)));break;case"moz-chunked-arraybuffer":r=t.response;if(t.readyState!==o.LOADING||!r)break;e.push(Buffer.from(new Uint8Array(r)));break;case"ms-stream":r=t.response;if(t.readyState!==o.LOADING)break;var s=new __webpack_require__.g.MSStreamReader;s.onprogress=function(){if(s.result.byteLength>e._pos){e.push(Buffer.from(new Uint8Array(s.result.slice(e._pos))));e._pos=s.result.byteLength}};s.onload=function(){e.push(null)};s.readAsArrayBuffer(r);break}if(e._xhr.readyState===o.DONE&&e._mode!=="ms-stream"){e.push(null)}}},704:function(e,t,r){"use strict";var n=r(55).Buffer;var i=n.isEncoding||function(e){e=""+e;switch(e&&e.toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":case"raw":return true;default:return false}};function _normalizeEncoding(e){if(!e)return"utf8";var t;while(true){switch(e){case"utf8":case"utf-8":return"utf8";case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return"utf16le";case"latin1":case"binary":return"latin1";case"base64":case"ascii":case"hex":return e;default:if(t)return;e=(""+e).toLowerCase();t=true}}}function normalizeEncoding(e){var t=_normalizeEncoding(e);if(typeof t!=="string"&&(n.isEncoding===i||!i(e)))throw new Error("Unknown encoding: "+e);return t||e}t.s=StringDecoder;function StringDecoder(e){this.encoding=normalizeEncoding(e);var t;switch(this.encoding){case"utf16le":this.text=utf16Text;this.end=utf16End;t=4;break;case"utf8":this.fillLast=utf8FillLast;t=4;break;case"base64":this.text=base64Text;this.end=base64End;t=3;break;default:this.write=simpleWrite;this.end=simpleEnd;return}this.lastNeed=0;this.lastTotal=0;this.lastChar=n.allocUnsafe(t)}StringDecoder.prototype.write=function(e){if(e.length===0)return"";var t;var r;if(this.lastNeed){t=this.fillLast(e);if(t===undefined)return"";r=this.lastNeed;this.lastNeed=0}else{r=0}if(r<e.length)return t?t+this.text(e,r):this.text(e,r);return t||""};StringDecoder.prototype.end=utf8End;StringDecoder.prototype.text=utf8Text;StringDecoder.prototype.fillLast=function(e){if(this.lastNeed<=e.length){e.copy(this.lastChar,this.lastTotal-this.lastNeed,0,this.lastNeed);return this.lastChar.toString(this.encoding,0,this.lastTotal)}e.copy(this.lastChar,this.lastTotal-this.lastNeed,0,e.length);this.lastNeed-=e.length};function utf8CheckByte(e){if(e<=127)return 0;else if(e>>5===6)return 2;else if(e>>4===14)return 3;else if(e>>3===30)return 4;return e>>6===2?-1:-2}function utf8CheckIncomplete(e,t,r){var n=t.length-1;if(n<r)return 0;var i=utf8CheckByte(t[n]);if(i>=0){if(i>0)e.lastNeed=i-1;return i}if(--n<r||i===-2)return 0;i=utf8CheckByte(t[n]);if(i>=0){if(i>0)e.lastNeed=i-2;return i}if(--n<r||i===-2)return 0;i=utf8CheckByte(t[n]);if(i>=0){if(i>0){if(i===2)i=0;else e.lastNeed=i-3}return i}return 0}function utf8CheckExtraBytes(e,t,r){if((t[0]&192)!==128){e.lastNeed=0;return"�"}if(e.lastNeed>1&&t.length>1){if((t[1]&192)!==128){e.lastNeed=1;return"�"}if(e.lastNeed>2&&t.length>2){if((t[2]&192)!==128){e.lastNeed=2;return"�"}}}}function utf8FillLast(e){var t=this.lastTotal-this.lastNeed;var r=utf8CheckExtraBytes(this,e,t);if(r!==undefined)return r;if(this.lastNeed<=e.length){e.copy(this.lastChar,t,0,this.lastNeed);return this.lastChar.toString(this.encoding,0,this.lastTotal)}e.copy(this.lastChar,t,0,e.length);this.lastNeed-=e.length}function utf8Text(e,t){var r=utf8CheckIncomplete(this,e,t);if(!this.lastNeed)return e.toString("utf8",t);this.lastTotal=r;var n=e.length-(r-this.lastNeed);e.copy(this.lastChar,0,n);return e.toString("utf8",t,n)}function utf8End(e){var t=e&&e.length?this.write(e):"";if(this.lastNeed)return t+"�";return t}function utf16Text(e,t){if((e.length-t)%2===0){var r=e.toString("utf16le",t);if(r){var n=r.charCodeAt(r.length-1);if(n>=55296&&n<=56319){this.lastNeed=2;this.lastTotal=4;this.lastChar[0]=e[e.length-2];this.lastChar[1]=e[e.length-1];return r.slice(0,-1)}}return r}this.lastNeed=1;this.lastTotal=2;this.lastChar[0]=e[e.length-1];return e.toString("utf16le",t,e.length-1)}function utf16End(e){var t=e&&e.length?this.write(e):"";if(this.lastNeed){var r=this.lastTotal-this.lastNeed;return t+this.lastChar.toString("utf16le",0,r)}return t}function base64Text(e,t){var r=(e.length-t)%3;if(r===0)return e.toString("base64",t);this.lastNeed=3-r;this.lastTotal=3;if(r===1){this.lastChar[0]=e[e.length-1]}else{this.lastChar[0]=e[e.length-2];this.lastChar[1]=e[e.length-1]}return e.toString("base64",t,e.length-r)}function base64End(e){var t=e&&e.length?this.write(e):"";if(this.lastNeed)return t+this.lastChar.toString("base64",0,3-this.lastNeed);return t}function simpleWrite(e){return e.toString(this.encoding)}function simpleEnd(e){return e&&e.length?this.write(e):""}},769:function(e){e.exports=deprecate;function deprecate(e,t){if(config("noDeprecation")){return e}var r=false;function deprecated(){if(!r){if(config("throwDeprecation")){throw new Error(t)}else if(config("traceDeprecation")){console.trace(t)}else{console.warn(t)}r=true}return e.apply(this,arguments)}return deprecated}function config(e){try{if(!__webpack_require__.g.localStorage)return false}catch(e){return false}var t=__webpack_require__.g.localStorage[e];if(null==t)return false;return String(t).toLowerCase()==="true"}},911:function(e){e.exports=extend;var t=Object.prototype.hasOwnProperty;function extend(){var e={};for(var r=0;r<arguments.length;r++){var n=arguments[r];for(var i in n){if(t.call(n,i)){e[i]=n[i]}}}return e}},300:function(e){"use strict";e.exports=__webpack_require__(40263)},361:function(e){"use strict";e.exports=__webpack_require__(17795)},781:function(e){"use strict";e.exports=__webpack_require__(48290)},310:function(e){"use strict";e.exports=__webpack_require__(40692)},837:function(e){"use strict";e.exports=__webpack_require__(15647)}};var t={};function __nccwpck_require__(r){var n=t[r];if(n!==undefined){return n.exports}var i=t[r]={exports:{}};var a=true;try{e[r](i,i.exports,__nccwpck_require__);a=false}finally{if(a)delete t[r]}return i.exports}if(typeof __nccwpck_require__!=="undefined")__nccwpck_require__.ab=__dirname+"/";var r=__nccwpck_require__(813);module.exports=r})();

/***/ }),

/***/ 36943:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var __dirname = "/";
(function(){var t={55:function(t,e,r){var n=r(300);var i=n.Buffer;function copyProps(t,e){for(var r in t){e[r]=t[r]}}if(i.from&&i.alloc&&i.allocUnsafe&&i.allocUnsafeSlow){t.exports=n}else{copyProps(n,e);e.Buffer=SafeBuffer}function SafeBuffer(t,e,r){return i(t,e,r)}SafeBuffer.prototype=Object.create(i.prototype);copyProps(i,SafeBuffer);SafeBuffer.from=function(t,e,r){if(typeof t==="number"){throw new TypeError("Argument must not be a number")}return i(t,e,r)};SafeBuffer.alloc=function(t,e,r){if(typeof t!=="number"){throw new TypeError("Argument must be a number")}var n=i(t);if(e!==undefined){if(typeof r==="string"){n.fill(e,r)}else{n.fill(e)}}else{n.fill(0)}return n};SafeBuffer.allocUnsafe=function(t){if(typeof t!=="number"){throw new TypeError("Argument must be a number")}return i(t)};SafeBuffer.allocUnsafeSlow=function(t){if(typeof t!=="number"){throw new TypeError("Argument must be a number")}return n.SlowBuffer(t)}},300:function(t){"use strict";t.exports=__webpack_require__(40263)}};var e={};function __nccwpck_require__(r){var n=e[r];if(n!==undefined){return n.exports}var i=e[r]={exports:{}};var s=true;try{t[r](i,i.exports,__nccwpck_require__);s=false}finally{if(s)delete e[r]}return i.exports}if(typeof __nccwpck_require__!=="undefined")__nccwpck_require__.ab=__dirname+"/";var r={};!function(){"use strict";var t=r;var e=__nccwpck_require__(55).Buffer;var n=e.isEncoding||function(t){t=""+t;switch(t&&t.toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":case"raw":return true;default:return false}};function _normalizeEncoding(t){if(!t)return"utf8";var e;while(true){switch(t){case"utf8":case"utf-8":return"utf8";case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return"utf16le";case"latin1":case"binary":return"latin1";case"base64":case"ascii":case"hex":return t;default:if(e)return;t=(""+t).toLowerCase();e=true}}}function normalizeEncoding(t){var r=_normalizeEncoding(t);if(typeof r!=="string"&&(e.isEncoding===n||!n(t)))throw new Error("Unknown encoding: "+t);return r||t}t.StringDecoder=StringDecoder;function StringDecoder(t){this.encoding=normalizeEncoding(t);var r;switch(this.encoding){case"utf16le":this.text=utf16Text;this.end=utf16End;r=4;break;case"utf8":this.fillLast=utf8FillLast;r=4;break;case"base64":this.text=base64Text;this.end=base64End;r=3;break;default:this.write=simpleWrite;this.end=simpleEnd;return}this.lastNeed=0;this.lastTotal=0;this.lastChar=e.allocUnsafe(r)}StringDecoder.prototype.write=function(t){if(t.length===0)return"";var e;var r;if(this.lastNeed){e=this.fillLast(t);if(e===undefined)return"";r=this.lastNeed;this.lastNeed=0}else{r=0}if(r<t.length)return e?e+this.text(t,r):this.text(t,r);return e||""};StringDecoder.prototype.end=utf8End;StringDecoder.prototype.text=utf8Text;StringDecoder.prototype.fillLast=function(t){if(this.lastNeed<=t.length){t.copy(this.lastChar,this.lastTotal-this.lastNeed,0,this.lastNeed);return this.lastChar.toString(this.encoding,0,this.lastTotal)}t.copy(this.lastChar,this.lastTotal-this.lastNeed,0,t.length);this.lastNeed-=t.length};function utf8CheckByte(t){if(t<=127)return 0;else if(t>>5===6)return 2;else if(t>>4===14)return 3;else if(t>>3===30)return 4;return t>>6===2?-1:-2}function utf8CheckIncomplete(t,e,r){var n=e.length-1;if(n<r)return 0;var i=utf8CheckByte(e[n]);if(i>=0){if(i>0)t.lastNeed=i-1;return i}if(--n<r||i===-2)return 0;i=utf8CheckByte(e[n]);if(i>=0){if(i>0)t.lastNeed=i-2;return i}if(--n<r||i===-2)return 0;i=utf8CheckByte(e[n]);if(i>=0){if(i>0){if(i===2)i=0;else t.lastNeed=i-3}return i}return 0}function utf8CheckExtraBytes(t,e,r){if((e[0]&192)!==128){t.lastNeed=0;return"�"}if(t.lastNeed>1&&e.length>1){if((e[1]&192)!==128){t.lastNeed=1;return"�"}if(t.lastNeed>2&&e.length>2){if((e[2]&192)!==128){t.lastNeed=2;return"�"}}}}function utf8FillLast(t){var e=this.lastTotal-this.lastNeed;var r=utf8CheckExtraBytes(this,t,e);if(r!==undefined)return r;if(this.lastNeed<=t.length){t.copy(this.lastChar,e,0,this.lastNeed);return this.lastChar.toString(this.encoding,0,this.lastTotal)}t.copy(this.lastChar,e,0,t.length);this.lastNeed-=t.length}function utf8Text(t,e){var r=utf8CheckIncomplete(this,t,e);if(!this.lastNeed)return t.toString("utf8",e);this.lastTotal=r;var n=t.length-(r-this.lastNeed);t.copy(this.lastChar,0,n);return t.toString("utf8",e,n)}function utf8End(t){var e=t&&t.length?this.write(t):"";if(this.lastNeed)return e+"�";return e}function utf16Text(t,e){if((t.length-e)%2===0){var r=t.toString("utf16le",e);if(r){var n=r.charCodeAt(r.length-1);if(n>=55296&&n<=56319){this.lastNeed=2;this.lastTotal=4;this.lastChar[0]=t[t.length-2];this.lastChar[1]=t[t.length-1];return r.slice(0,-1)}}return r}this.lastNeed=1;this.lastTotal=2;this.lastChar[0]=t[t.length-1];return t.toString("utf16le",e,t.length-1)}function utf16End(t){var e=t&&t.length?this.write(t):"";if(this.lastNeed){var r=this.lastTotal-this.lastNeed;return e+this.lastChar.toString("utf16le",0,r)}return e}function base64Text(t,e){var r=(t.length-e)%3;if(r===0)return t.toString("base64",e);this.lastNeed=3-r;this.lastTotal=3;if(r===1){this.lastChar[0]=t[t.length-1]}else{this.lastChar[0]=t[t.length-2];this.lastChar[1]=t[t.length-1]}return t.toString("base64",e,t.length-r)}function base64End(t){var e=t&&t.length?this.write(t):"";if(this.lastNeed)return e+this.lastChar.toString("base64",0,3-this.lastNeed);return e}function simpleWrite(t){return t.toString(this.encoding)}function simpleEnd(t){return t&&t.length?this.write(t):""}}();module.exports=r})();

/***/ }),

/***/ 15647:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var __dirname = "/";
/* provided dependency */ var Buffer = __webpack_require__(40263)["Buffer"];
/* provided dependency */ var process = __webpack_require__(62601);
(function(){var r={992:function(r){r.exports=function(r,t,n){if(r.filter)return r.filter(t,n);if(void 0===r||null===r)throw new TypeError;if("function"!=typeof t)throw new TypeError;var o=[];for(var i=0;i<r.length;i++){if(!e.call(r,i))continue;var a=r[i];if(t.call(n,a,i,r))o.push(a)}return o};var e=Object.prototype.hasOwnProperty},256:function(r,e,t){"use strict";var n=t(500);var o=t(139);var i=o(n("String.prototype.indexOf"));r.exports=function callBoundIntrinsic(r,e){var t=n(r,!!e);if(typeof t==="function"&&i(r,".prototype.")>-1){return o(t)}return t}},139:function(r,e,t){"use strict";var n=t(174);var o=t(500);var i=o("%Function.prototype.apply%");var a=o("%Function.prototype.call%");var f=o("%Reflect.apply%",true)||n.call(a,i);var u=o("%Object.getOwnPropertyDescriptor%",true);var s=o("%Object.defineProperty%",true);var y=o("%Math.max%");if(s){try{s({},"a",{value:1})}catch(r){s=null}}r.exports=function callBind(r){var e=f(n,a,arguments);if(u&&s){var t=u(e,"length");if(t.configurable){s(e,"length",{value:1+y(0,r.length-(arguments.length-1))})}}return e};var c=function applyBind(){return f(n,i,arguments)};if(s){s(r.exports,"apply",{value:c})}else{r.exports.apply=c}},144:function(r){var e=Object.prototype.hasOwnProperty;var t=Object.prototype.toString;r.exports=function forEach(r,n,o){if(t.call(n)!=="[object Function]"){throw new TypeError("iterator must be a function")}var i=r.length;if(i===+i){for(var a=0;a<i;a++){n.call(o,r[a],a,r)}}else{for(var f in r){if(e.call(r,f)){n.call(o,r[f],f,r)}}}}},426:function(r){"use strict";var e="Function.prototype.bind called on incompatible ";var t=Array.prototype.slice;var n=Object.prototype.toString;var o="[object Function]";r.exports=function bind(r){var i=this;if(typeof i!=="function"||n.call(i)!==o){throw new TypeError(e+i)}var a=t.call(arguments,1);var f;var binder=function(){if(this instanceof f){var e=i.apply(this,a.concat(t.call(arguments)));if(Object(e)===e){return e}return this}else{return i.apply(r,a.concat(t.call(arguments)))}};var u=Math.max(0,i.length-a.length);var s=[];for(var y=0;y<u;y++){s.push("$"+y)}f=Function("binder","return function ("+s.join(",")+"){ return binder.apply(this,arguments); }")(binder);if(i.prototype){var c=function Empty(){};c.prototype=i.prototype;f.prototype=new c;c.prototype=null}return f}},174:function(r,e,t){"use strict";var n=t(426);r.exports=Function.prototype.bind||n},500:function(r,e,t){"use strict";var n;var o=SyntaxError;var i=Function;var a=TypeError;var getEvalledConstructor=function(r){try{return i('"use strict"; return ('+r+").constructor;")()}catch(r){}};var f=Object.getOwnPropertyDescriptor;if(f){try{f({},"")}catch(r){f=null}}var throwTypeError=function(){throw new a};var u=f?function(){try{arguments.callee;return throwTypeError}catch(r){try{return f(arguments,"callee").get}catch(r){return throwTypeError}}}():throwTypeError;var s=t(115)();var y=Object.getPrototypeOf||function(r){return r.__proto__};var c={};var p=typeof Uint8Array==="undefined"?n:y(Uint8Array);var l={"%AggregateError%":typeof AggregateError==="undefined"?n:AggregateError,"%Array%":Array,"%ArrayBuffer%":typeof ArrayBuffer==="undefined"?n:ArrayBuffer,"%ArrayIteratorPrototype%":s?y([][Symbol.iterator]()):n,"%AsyncFromSyncIteratorPrototype%":n,"%AsyncFunction%":c,"%AsyncGenerator%":c,"%AsyncGeneratorFunction%":c,"%AsyncIteratorPrototype%":c,"%Atomics%":typeof Atomics==="undefined"?n:Atomics,"%BigInt%":typeof BigInt==="undefined"?n:BigInt,"%Boolean%":Boolean,"%DataView%":typeof DataView==="undefined"?n:DataView,"%Date%":Date,"%decodeURI%":decodeURI,"%decodeURIComponent%":decodeURIComponent,"%encodeURI%":encodeURI,"%encodeURIComponent%":encodeURIComponent,"%Error%":Error,"%eval%":eval,"%EvalError%":EvalError,"%Float32Array%":typeof Float32Array==="undefined"?n:Float32Array,"%Float64Array%":typeof Float64Array==="undefined"?n:Float64Array,"%FinalizationRegistry%":typeof FinalizationRegistry==="undefined"?n:FinalizationRegistry,"%Function%":i,"%GeneratorFunction%":c,"%Int8Array%":typeof Int8Array==="undefined"?n:Int8Array,"%Int16Array%":typeof Int16Array==="undefined"?n:Int16Array,"%Int32Array%":typeof Int32Array==="undefined"?n:Int32Array,"%isFinite%":isFinite,"%isNaN%":isNaN,"%IteratorPrototype%":s?y(y([][Symbol.iterator]())):n,"%JSON%":typeof JSON==="object"?JSON:n,"%Map%":typeof Map==="undefined"?n:Map,"%MapIteratorPrototype%":typeof Map==="undefined"||!s?n:y((new Map)[Symbol.iterator]()),"%Math%":Math,"%Number%":Number,"%Object%":Object,"%parseFloat%":parseFloat,"%parseInt%":parseInt,"%Promise%":typeof Promise==="undefined"?n:Promise,"%Proxy%":typeof Proxy==="undefined"?n:Proxy,"%RangeError%":RangeError,"%ReferenceError%":ReferenceError,"%Reflect%":typeof Reflect==="undefined"?n:Reflect,"%RegExp%":RegExp,"%Set%":typeof Set==="undefined"?n:Set,"%SetIteratorPrototype%":typeof Set==="undefined"||!s?n:y((new Set)[Symbol.iterator]()),"%SharedArrayBuffer%":typeof SharedArrayBuffer==="undefined"?n:SharedArrayBuffer,"%String%":String,"%StringIteratorPrototype%":s?y(""[Symbol.iterator]()):n,"%Symbol%":s?Symbol:n,"%SyntaxError%":o,"%ThrowTypeError%":u,"%TypedArray%":p,"%TypeError%":a,"%Uint8Array%":typeof Uint8Array==="undefined"?n:Uint8Array,"%Uint8ClampedArray%":typeof Uint8ClampedArray==="undefined"?n:Uint8ClampedArray,"%Uint16Array%":typeof Uint16Array==="undefined"?n:Uint16Array,"%Uint32Array%":typeof Uint32Array==="undefined"?n:Uint32Array,"%URIError%":URIError,"%WeakMap%":typeof WeakMap==="undefined"?n:WeakMap,"%WeakRef%":typeof WeakRef==="undefined"?n:WeakRef,"%WeakSet%":typeof WeakSet==="undefined"?n:WeakSet};var g=function doEval(r){var e;if(r==="%AsyncFunction%"){e=getEvalledConstructor("async function () {}")}else if(r==="%GeneratorFunction%"){e=getEvalledConstructor("function* () {}")}else if(r==="%AsyncGeneratorFunction%"){e=getEvalledConstructor("async function* () {}")}else if(r==="%AsyncGenerator%"){var t=doEval("%AsyncGeneratorFunction%");if(t){e=t.prototype}}else if(r==="%AsyncIteratorPrototype%"){var n=doEval("%AsyncGenerator%");if(n){e=y(n.prototype)}}l[r]=e;return e};var b={"%ArrayBufferPrototype%":["ArrayBuffer","prototype"],"%ArrayPrototype%":["Array","prototype"],"%ArrayProto_entries%":["Array","prototype","entries"],"%ArrayProto_forEach%":["Array","prototype","forEach"],"%ArrayProto_keys%":["Array","prototype","keys"],"%ArrayProto_values%":["Array","prototype","values"],"%AsyncFunctionPrototype%":["AsyncFunction","prototype"],"%AsyncGenerator%":["AsyncGeneratorFunction","prototype"],"%AsyncGeneratorPrototype%":["AsyncGeneratorFunction","prototype","prototype"],"%BooleanPrototype%":["Boolean","prototype"],"%DataViewPrototype%":["DataView","prototype"],"%DatePrototype%":["Date","prototype"],"%ErrorPrototype%":["Error","prototype"],"%EvalErrorPrototype%":["EvalError","prototype"],"%Float32ArrayPrototype%":["Float32Array","prototype"],"%Float64ArrayPrototype%":["Float64Array","prototype"],"%FunctionPrototype%":["Function","prototype"],"%Generator%":["GeneratorFunction","prototype"],"%GeneratorPrototype%":["GeneratorFunction","prototype","prototype"],"%Int8ArrayPrototype%":["Int8Array","prototype"],"%Int16ArrayPrototype%":["Int16Array","prototype"],"%Int32ArrayPrototype%":["Int32Array","prototype"],"%JSONParse%":["JSON","parse"],"%JSONStringify%":["JSON","stringify"],"%MapPrototype%":["Map","prototype"],"%NumberPrototype%":["Number","prototype"],"%ObjectPrototype%":["Object","prototype"],"%ObjProto_toString%":["Object","prototype","toString"],"%ObjProto_valueOf%":["Object","prototype","valueOf"],"%PromisePrototype%":["Promise","prototype"],"%PromiseProto_then%":["Promise","prototype","then"],"%Promise_all%":["Promise","all"],"%Promise_reject%":["Promise","reject"],"%Promise_resolve%":["Promise","resolve"],"%RangeErrorPrototype%":["RangeError","prototype"],"%ReferenceErrorPrototype%":["ReferenceError","prototype"],"%RegExpPrototype%":["RegExp","prototype"],"%SetPrototype%":["Set","prototype"],"%SharedArrayBufferPrototype%":["SharedArrayBuffer","prototype"],"%StringPrototype%":["String","prototype"],"%SymbolPrototype%":["Symbol","prototype"],"%SyntaxErrorPrototype%":["SyntaxError","prototype"],"%TypedArrayPrototype%":["TypedArray","prototype"],"%TypeErrorPrototype%":["TypeError","prototype"],"%Uint8ArrayPrototype%":["Uint8Array","prototype"],"%Uint8ClampedArrayPrototype%":["Uint8ClampedArray","prototype"],"%Uint16ArrayPrototype%":["Uint16Array","prototype"],"%Uint32ArrayPrototype%":["Uint32Array","prototype"],"%URIErrorPrototype%":["URIError","prototype"],"%WeakMapPrototype%":["WeakMap","prototype"],"%WeakSetPrototype%":["WeakSet","prototype"]};var d=t(174);var v=t(101);var m=d.call(Function.call,Array.prototype.concat);var S=d.call(Function.apply,Array.prototype.splice);var A=d.call(Function.call,String.prototype.replace);var h=d.call(Function.call,String.prototype.slice);var O=d.call(Function.call,RegExp.prototype.exec);var j=/[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;var w=/\\(\\)?/g;var P=function stringToPath(r){var e=h(r,0,1);var t=h(r,-1);if(e==="%"&&t!=="%"){throw new o("invalid intrinsic syntax, expected closing `%`")}else if(t==="%"&&e!=="%"){throw new o("invalid intrinsic syntax, expected opening `%`")}var n=[];A(r,j,(function(r,e,t,o){n[n.length]=t?A(o,w,"$1"):e||r}));return n};var E=function getBaseIntrinsic(r,e){var t=r;var n;if(v(b,t)){n=b[t];t="%"+n[0]+"%"}if(v(l,t)){var i=l[t];if(i===c){i=g(t)}if(typeof i==="undefined"&&!e){throw new a("intrinsic "+r+" exists, but is not available. Please file an issue!")}return{alias:n,name:t,value:i}}throw new o("intrinsic "+r+" does not exist!")};r.exports=function GetIntrinsic(r,e){if(typeof r!=="string"||r.length===0){throw new a("intrinsic name must be a non-empty string")}if(arguments.length>1&&typeof e!=="boolean"){throw new a('"allowMissing" argument must be a boolean')}if(O(/^%?[^%]*%?$/g,r)===null){throw new o("`%` may not be present anywhere but at the beginning and end of the intrinsic name")}var t=P(r);var i=t.length>0?t[0]:"";var u=E("%"+i+"%",e);var s=u.name;var y=u.value;var c=false;var p=u.alias;if(p){i=p[0];S(t,m([0,1],p))}for(var g=1,b=true;g<t.length;g+=1){var d=t[g];var A=h(d,0,1);var j=h(d,-1);if((A==='"'||A==="'"||A==="`"||(j==='"'||j==="'"||j==="`"))&&A!==j){throw new o("property names with quotes must have matching quotes")}if(d==="constructor"||!b){c=true}i+="."+d;s="%"+i+"%";if(v(l,s)){y=l[s]}else if(y!=null){if(!(d in y)){if(!e){throw new a("base intrinsic for "+r+" exists, but the property is not available.")}return void n}if(f&&g+1>=t.length){var w=f(y,d);b=!!w;if(b&&"get"in w&&!("originalValue"in w.get)){y=w.get}else{y=y[d]}}else{b=v(y,d);y=y[d]}if(b&&!c){l[s]=y}}}return y}},942:function(r,e,t){"use strict";var n=typeof Symbol!=="undefined"&&Symbol;var o=t(773);r.exports=function hasNativeSymbols(){if(typeof n!=="function"){return false}if(typeof Symbol!=="function"){return false}if(typeof n("foo")!=="symbol"){return false}if(typeof Symbol("bar")!=="symbol"){return false}return o()}},773:function(r){"use strict";r.exports=function hasSymbols(){if(typeof Symbol!=="function"||typeof Object.getOwnPropertySymbols!=="function"){return false}if(typeof Symbol.iterator==="symbol"){return true}var r={};var e=Symbol("test");var t=Object(e);if(typeof e==="string"){return false}if(Object.prototype.toString.call(e)!=="[object Symbol]"){return false}if(Object.prototype.toString.call(t)!=="[object Symbol]"){return false}var n=42;r[e]=n;for(e in r){return false}if(typeof Object.keys==="function"&&Object.keys(r).length!==0){return false}if(typeof Object.getOwnPropertyNames==="function"&&Object.getOwnPropertyNames(r).length!==0){return false}var o=Object.getOwnPropertySymbols(r);if(o.length!==1||o[0]!==e){return false}if(!Object.prototype.propertyIsEnumerable.call(r,e)){return false}if(typeof Object.getOwnPropertyDescriptor==="function"){var i=Object.getOwnPropertyDescriptor(r,e);if(i.value!==n||i.enumerable!==true){return false}}return true}},115:function(r,e,t){"use strict";var n=typeof Symbol!=="undefined"&&Symbol;var o=t(832);r.exports=function hasNativeSymbols(){if(typeof n!=="function"){return false}if(typeof Symbol!=="function"){return false}if(typeof n("foo")!=="symbol"){return false}if(typeof Symbol("bar")!=="symbol"){return false}return o()}},832:function(r){"use strict";r.exports=function hasSymbols(){if(typeof Symbol!=="function"||typeof Object.getOwnPropertySymbols!=="function"){return false}if(typeof Symbol.iterator==="symbol"){return true}var r={};var e=Symbol("test");var t=Object(e);if(typeof e==="string"){return false}if(Object.prototype.toString.call(e)!=="[object Symbol]"){return false}if(Object.prototype.toString.call(t)!=="[object Symbol]"){return false}var n=42;r[e]=n;for(e in r){return false}if(typeof Object.keys==="function"&&Object.keys(r).length!==0){return false}if(typeof Object.getOwnPropertyNames==="function"&&Object.getOwnPropertyNames(r).length!==0){return false}var o=Object.getOwnPropertySymbols(r);if(o.length!==1||o[0]!==e){return false}if(!Object.prototype.propertyIsEnumerable.call(r,e)){return false}if(typeof Object.getOwnPropertyDescriptor==="function"){var i=Object.getOwnPropertyDescriptor(r,e);if(i.value!==n||i.enumerable!==true){return false}}return true}},101:function(r,e,t){"use strict";var n=t(174);r.exports=n.call(Function.call,Object.prototype.hasOwnProperty)},782:function(r){if(typeof Object.create==="function"){r.exports=function inherits(r,e){if(e){r.super_=e;r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:false,writable:true,configurable:true}})}}}else{r.exports=function inherits(r,e){if(e){r.super_=e;var TempCtor=function(){};TempCtor.prototype=e.prototype;r.prototype=new TempCtor;r.prototype.constructor=r}}}},157:function(r){"use strict";var e=typeof Symbol==="function"&&typeof Symbol.toStringTag==="symbol";var t=Object.prototype.toString;var n=function isArguments(r){if(e&&r&&typeof r==="object"&&Symbol.toStringTag in r){return false}return t.call(r)==="[object Arguments]"};var o=function isArguments(r){if(n(r)){return true}return r!==null&&typeof r==="object"&&typeof r.length==="number"&&r.length>=0&&t.call(r)!=="[object Array]"&&t.call(r.callee)==="[object Function]"};var i=function(){return n(arguments)}();n.isLegacyArguments=o;r.exports=i?n:o},391:function(r){"use strict";var e=Object.prototype.toString;var t=Function.prototype.toString;var n=/^\s*(?:function)?\*/;var o=typeof Symbol==="function"&&typeof Symbol.toStringTag==="symbol";var i=Object.getPrototypeOf;var getGeneratorFunc=function(){if(!o){return false}try{return Function("return function*() {}")()}catch(r){}};var a=getGeneratorFunc();var f=a?i(a):{};r.exports=function isGeneratorFunction(r){if(typeof r!=="function"){return false}if(n.test(t.call(r))){return true}if(!o){var a=e.call(r);return a==="[object GeneratorFunction]"}return i(r)===f}},994:function(r,e,t){"use strict";var n=t(144);var o=t(349);var i=t(256);var a=i("Object.prototype.toString");var f=t(942)();var u=f&&typeof Symbol.toStringTag==="symbol";var s=o();var y=i("Array.prototype.indexOf",true)||function indexOf(r,e){for(var t=0;t<r.length;t+=1){if(r[t]===e){return t}}return-1};var c=i("String.prototype.slice");var p={};var l=t(466);var g=Object.getPrototypeOf;if(u&&l&&g){n(s,(function(r){var e=new __webpack_require__.g[r];if(!(Symbol.toStringTag in e)){throw new EvalError("this engine has support for Symbol.toStringTag, but "+r+" does not have the property! Please report this.")}var t=g(e);var n=l(t,Symbol.toStringTag);if(!n){var o=g(t);n=l(o,Symbol.toStringTag)}p[r]=n.get}))}var b=function tryAllTypedArrays(r){var e=false;n(p,(function(t,n){if(!e){try{e=t.call(r)===n}catch(r){}}}));return e};r.exports=function isTypedArray(r){if(!r||typeof r!=="object"){return false}if(!u){var e=c(a(r),8,-1);return y(s,e)>-1}if(!l){return false}return b(r)}},369:function(r){r.exports=function isBuffer(r){return r instanceof Buffer}},584:function(r,e,t){"use strict";var n=t(157);var o=t(391);var i=t(490);var a=t(994);function uncurryThis(r){return r.call.bind(r)}var f=typeof BigInt!=="undefined";var u=typeof Symbol!=="undefined";var s=uncurryThis(Object.prototype.toString);var y=uncurryThis(Number.prototype.valueOf);var c=uncurryThis(String.prototype.valueOf);var p=uncurryThis(Boolean.prototype.valueOf);if(f){var l=uncurryThis(BigInt.prototype.valueOf)}if(u){var g=uncurryThis(Symbol.prototype.valueOf)}function checkBoxedPrimitive(r,e){if(typeof r!=="object"){return false}try{e(r);return true}catch(r){return false}}e.isArgumentsObject=n;e.isGeneratorFunction=o;e.isTypedArray=a;function isPromise(r){return typeof Promise!=="undefined"&&r instanceof Promise||r!==null&&typeof r==="object"&&typeof r.then==="function"&&typeof r.catch==="function"}e.isPromise=isPromise;function isArrayBufferView(r){if(typeof ArrayBuffer!=="undefined"&&ArrayBuffer.isView){return ArrayBuffer.isView(r)}return a(r)||isDataView(r)}e.isArrayBufferView=isArrayBufferView;function isUint8Array(r){return i(r)==="Uint8Array"}e.isUint8Array=isUint8Array;function isUint8ClampedArray(r){return i(r)==="Uint8ClampedArray"}e.isUint8ClampedArray=isUint8ClampedArray;function isUint16Array(r){return i(r)==="Uint16Array"}e.isUint16Array=isUint16Array;function isUint32Array(r){return i(r)==="Uint32Array"}e.isUint32Array=isUint32Array;function isInt8Array(r){return i(r)==="Int8Array"}e.isInt8Array=isInt8Array;function isInt16Array(r){return i(r)==="Int16Array"}e.isInt16Array=isInt16Array;function isInt32Array(r){return i(r)==="Int32Array"}e.isInt32Array=isInt32Array;function isFloat32Array(r){return i(r)==="Float32Array"}e.isFloat32Array=isFloat32Array;function isFloat64Array(r){return i(r)==="Float64Array"}e.isFloat64Array=isFloat64Array;function isBigInt64Array(r){return i(r)==="BigInt64Array"}e.isBigInt64Array=isBigInt64Array;function isBigUint64Array(r){return i(r)==="BigUint64Array"}e.isBigUint64Array=isBigUint64Array;function isMapToString(r){return s(r)==="[object Map]"}isMapToString.working=typeof Map!=="undefined"&&isMapToString(new Map);function isMap(r){if(typeof Map==="undefined"){return false}return isMapToString.working?isMapToString(r):r instanceof Map}e.isMap=isMap;function isSetToString(r){return s(r)==="[object Set]"}isSetToString.working=typeof Set!=="undefined"&&isSetToString(new Set);function isSet(r){if(typeof Set==="undefined"){return false}return isSetToString.working?isSetToString(r):r instanceof Set}e.isSet=isSet;function isWeakMapToString(r){return s(r)==="[object WeakMap]"}isWeakMapToString.working=typeof WeakMap!=="undefined"&&isWeakMapToString(new WeakMap);function isWeakMap(r){if(typeof WeakMap==="undefined"){return false}return isWeakMapToString.working?isWeakMapToString(r):r instanceof WeakMap}e.isWeakMap=isWeakMap;function isWeakSetToString(r){return s(r)==="[object WeakSet]"}isWeakSetToString.working=typeof WeakSet!=="undefined"&&isWeakSetToString(new WeakSet);function isWeakSet(r){return isWeakSetToString(r)}e.isWeakSet=isWeakSet;function isArrayBufferToString(r){return s(r)==="[object ArrayBuffer]"}isArrayBufferToString.working=typeof ArrayBuffer!=="undefined"&&isArrayBufferToString(new ArrayBuffer);function isArrayBuffer(r){if(typeof ArrayBuffer==="undefined"){return false}return isArrayBufferToString.working?isArrayBufferToString(r):r instanceof ArrayBuffer}e.isArrayBuffer=isArrayBuffer;function isDataViewToString(r){return s(r)==="[object DataView]"}isDataViewToString.working=typeof ArrayBuffer!=="undefined"&&typeof DataView!=="undefined"&&isDataViewToString(new DataView(new ArrayBuffer(1),0,1));function isDataView(r){if(typeof DataView==="undefined"){return false}return isDataViewToString.working?isDataViewToString(r):r instanceof DataView}e.isDataView=isDataView;var b=typeof SharedArrayBuffer!=="undefined"?SharedArrayBuffer:undefined;function isSharedArrayBufferToString(r){return s(r)==="[object SharedArrayBuffer]"}function isSharedArrayBuffer(r){if(typeof b==="undefined"){return false}if(typeof isSharedArrayBufferToString.working==="undefined"){isSharedArrayBufferToString.working=isSharedArrayBufferToString(new b)}return isSharedArrayBufferToString.working?isSharedArrayBufferToString(r):r instanceof b}e.isSharedArrayBuffer=isSharedArrayBuffer;function isAsyncFunction(r){return s(r)==="[object AsyncFunction]"}e.isAsyncFunction=isAsyncFunction;function isMapIterator(r){return s(r)==="[object Map Iterator]"}e.isMapIterator=isMapIterator;function isSetIterator(r){return s(r)==="[object Set Iterator]"}e.isSetIterator=isSetIterator;function isGeneratorObject(r){return s(r)==="[object Generator]"}e.isGeneratorObject=isGeneratorObject;function isWebAssemblyCompiledModule(r){return s(r)==="[object WebAssembly.Module]"}e.isWebAssemblyCompiledModule=isWebAssemblyCompiledModule;function isNumberObject(r){return checkBoxedPrimitive(r,y)}e.isNumberObject=isNumberObject;function isStringObject(r){return checkBoxedPrimitive(r,c)}e.isStringObject=isStringObject;function isBooleanObject(r){return checkBoxedPrimitive(r,p)}e.isBooleanObject=isBooleanObject;function isBigIntObject(r){return f&&checkBoxedPrimitive(r,l)}e.isBigIntObject=isBigIntObject;function isSymbolObject(r){return u&&checkBoxedPrimitive(r,g)}e.isSymbolObject=isSymbolObject;function isBoxedPrimitive(r){return isNumberObject(r)||isStringObject(r)||isBooleanObject(r)||isBigIntObject(r)||isSymbolObject(r)}e.isBoxedPrimitive=isBoxedPrimitive;function isAnyArrayBuffer(r){return typeof Uint8Array!=="undefined"&&(isArrayBuffer(r)||isSharedArrayBuffer(r))}e.isAnyArrayBuffer=isAnyArrayBuffer;["isProxy","isExternal","isModuleNamespaceObject"].forEach((function(r){Object.defineProperty(e,r,{enumerable:false,value:function(){throw new Error(r+" is not supported in userland")}})}))},177:function(r,e,t){var n=Object.getOwnPropertyDescriptors||function getOwnPropertyDescriptors(r){var e=Object.keys(r);var t={};for(var n=0;n<e.length;n++){t[e[n]]=Object.getOwnPropertyDescriptor(r,e[n])}return t};var o=/%[sdj%]/g;e.format=function(r){if(!isString(r)){var e=[];for(var t=0;t<arguments.length;t++){e.push(inspect(arguments[t]))}return e.join(" ")}var t=1;var n=arguments;var i=n.length;var a=String(r).replace(o,(function(r){if(r==="%%")return"%";if(t>=i)return r;switch(r){case"%s":return String(n[t++]);case"%d":return Number(n[t++]);case"%j":try{return JSON.stringify(n[t++])}catch(r){return"[Circular]"}default:return r}}));for(var f=n[t];t<i;f=n[++t]){if(isNull(f)||!isObject(f)){a+=" "+f}else{a+=" "+inspect(f)}}return a};e.deprecate=function(r,t){if(typeof process!=="undefined"&&process.noDeprecation===true){return r}if(typeof process==="undefined"){return function(){return e.deprecate(r,t).apply(this,arguments)}}var n=false;function deprecated(){if(!n){if(process.throwDeprecation){throw new Error(t)}else if(process.traceDeprecation){console.trace(t)}else{console.error(t)}n=true}return r.apply(this,arguments)}return deprecated};var i={};var a=/^$/;if(process.env.NODE_DEBUG){var f=process.env.NODE_DEBUG;f=f.replace(/[|\\{}()[\]^$+?.]/g,"\\$&").replace(/\*/g,".*").replace(/,/g,"$|^").toUpperCase();a=new RegExp("^"+f+"$","i")}e.debuglog=function(r){r=r.toUpperCase();if(!i[r]){if(a.test(r)){var t=process.pid;i[r]=function(){var n=e.format.apply(e,arguments);console.error("%s %d: %s",r,t,n)}}else{i[r]=function(){}}}return i[r]};function inspect(r,t){var n={seen:[],stylize:stylizeNoColor};if(arguments.length>=3)n.depth=arguments[2];if(arguments.length>=4)n.colors=arguments[3];if(isBoolean(t)){n.showHidden=t}else if(t){e._extend(n,t)}if(isUndefined(n.showHidden))n.showHidden=false;if(isUndefined(n.depth))n.depth=2;if(isUndefined(n.colors))n.colors=false;if(isUndefined(n.customInspect))n.customInspect=true;if(n.colors)n.stylize=stylizeWithColor;return formatValue(n,r,n.depth)}e.inspect=inspect;inspect.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]};inspect.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",regexp:"red"};function stylizeWithColor(r,e){var t=inspect.styles[e];if(t){return"["+inspect.colors[t][0]+"m"+r+"["+inspect.colors[t][1]+"m"}else{return r}}function stylizeNoColor(r,e){return r}function arrayToHash(r){var e={};r.forEach((function(r,t){e[r]=true}));return e}function formatValue(r,t,n){if(r.customInspect&&t&&isFunction(t.inspect)&&t.inspect!==e.inspect&&!(t.constructor&&t.constructor.prototype===t)){var o=t.inspect(n,r);if(!isString(o)){o=formatValue(r,o,n)}return o}var i=formatPrimitive(r,t);if(i){return i}var a=Object.keys(t);var f=arrayToHash(a);if(r.showHidden){a=Object.getOwnPropertyNames(t)}if(isError(t)&&(a.indexOf("message")>=0||a.indexOf("description")>=0)){return formatError(t)}if(a.length===0){if(isFunction(t)){var u=t.name?": "+t.name:"";return r.stylize("[Function"+u+"]","special")}if(isRegExp(t)){return r.stylize(RegExp.prototype.toString.call(t),"regexp")}if(isDate(t)){return r.stylize(Date.prototype.toString.call(t),"date")}if(isError(t)){return formatError(t)}}var s="",y=false,c=["{","}"];if(isArray(t)){y=true;c=["[","]"]}if(isFunction(t)){var p=t.name?": "+t.name:"";s=" [Function"+p+"]"}if(isRegExp(t)){s=" "+RegExp.prototype.toString.call(t)}if(isDate(t)){s=" "+Date.prototype.toUTCString.call(t)}if(isError(t)){s=" "+formatError(t)}if(a.length===0&&(!y||t.length==0)){return c[0]+s+c[1]}if(n<0){if(isRegExp(t)){return r.stylize(RegExp.prototype.toString.call(t),"regexp")}else{return r.stylize("[Object]","special")}}r.seen.push(t);var l;if(y){l=formatArray(r,t,n,f,a)}else{l=a.map((function(e){return formatProperty(r,t,n,f,e,y)}))}r.seen.pop();return reduceToSingleString(l,s,c)}function formatPrimitive(r,e){if(isUndefined(e))return r.stylize("undefined","undefined");if(isString(e)){var t="'"+JSON.stringify(e).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return r.stylize(t,"string")}if(isNumber(e))return r.stylize(""+e,"number");if(isBoolean(e))return r.stylize(""+e,"boolean");if(isNull(e))return r.stylize("null","null")}function formatError(r){return"["+Error.prototype.toString.call(r)+"]"}function formatArray(r,e,t,n,o){var i=[];for(var a=0,f=e.length;a<f;++a){if(hasOwnProperty(e,String(a))){i.push(formatProperty(r,e,t,n,String(a),true))}else{i.push("")}}o.forEach((function(o){if(!o.match(/^\d+$/)){i.push(formatProperty(r,e,t,n,o,true))}}));return i}function formatProperty(r,e,t,n,o,i){var a,f,u;u=Object.getOwnPropertyDescriptor(e,o)||{value:e[o]};if(u.get){if(u.set){f=r.stylize("[Getter/Setter]","special")}else{f=r.stylize("[Getter]","special")}}else{if(u.set){f=r.stylize("[Setter]","special")}}if(!hasOwnProperty(n,o)){a="["+o+"]"}if(!f){if(r.seen.indexOf(u.value)<0){if(isNull(t)){f=formatValue(r,u.value,null)}else{f=formatValue(r,u.value,t-1)}if(f.indexOf("\n")>-1){if(i){f=f.split("\n").map((function(r){return"  "+r})).join("\n").substr(2)}else{f="\n"+f.split("\n").map((function(r){return"   "+r})).join("\n")}}}else{f=r.stylize("[Circular]","special")}}if(isUndefined(a)){if(i&&o.match(/^\d+$/)){return f}a=JSON.stringify(""+o);if(a.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)){a=a.substr(1,a.length-2);a=r.stylize(a,"name")}else{a=a.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'");a=r.stylize(a,"string")}}return a+": "+f}function reduceToSingleString(r,e,t){var n=0;var o=r.reduce((function(r,e){n++;if(e.indexOf("\n")>=0)n++;return r+e.replace(/\u001b\[\d\d?m/g,"").length+1}),0);if(o>60){return t[0]+(e===""?"":e+"\n ")+" "+r.join(",\n  ")+" "+t[1]}return t[0]+e+" "+r.join(", ")+" "+t[1]}e.types=t(584);function isArray(r){return Array.isArray(r)}e.isArray=isArray;function isBoolean(r){return typeof r==="boolean"}e.isBoolean=isBoolean;function isNull(r){return r===null}e.isNull=isNull;function isNullOrUndefined(r){return r==null}e.isNullOrUndefined=isNullOrUndefined;function isNumber(r){return typeof r==="number"}e.isNumber=isNumber;function isString(r){return typeof r==="string"}e.isString=isString;function isSymbol(r){return typeof r==="symbol"}e.isSymbol=isSymbol;function isUndefined(r){return r===void 0}e.isUndefined=isUndefined;function isRegExp(r){return isObject(r)&&objectToString(r)==="[object RegExp]"}e.isRegExp=isRegExp;e.types.isRegExp=isRegExp;function isObject(r){return typeof r==="object"&&r!==null}e.isObject=isObject;function isDate(r){return isObject(r)&&objectToString(r)==="[object Date]"}e.isDate=isDate;e.types.isDate=isDate;function isError(r){return isObject(r)&&(objectToString(r)==="[object Error]"||r instanceof Error)}e.isError=isError;e.types.isNativeError=isError;function isFunction(r){return typeof r==="function"}e.isFunction=isFunction;function isPrimitive(r){return r===null||typeof r==="boolean"||typeof r==="number"||typeof r==="string"||typeof r==="symbol"||typeof r==="undefined"}e.isPrimitive=isPrimitive;e.isBuffer=t(369);function objectToString(r){return Object.prototype.toString.call(r)}function pad(r){return r<10?"0"+r.toString(10):r.toString(10)}var u=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function timestamp(){var r=new Date;var e=[pad(r.getHours()),pad(r.getMinutes()),pad(r.getSeconds())].join(":");return[r.getDate(),u[r.getMonth()],e].join(" ")}e.log=function(){console.log("%s - %s",timestamp(),e.format.apply(e,arguments))};e.inherits=t(782);e._extend=function(r,e){if(!e||!isObject(e))return r;var t=Object.keys(e);var n=t.length;while(n--){r[t[n]]=e[t[n]]}return r};function hasOwnProperty(r,e){return Object.prototype.hasOwnProperty.call(r,e)}var s=typeof Symbol!=="undefined"?Symbol("util.promisify.custom"):undefined;e.promisify=function promisify(r){if(typeof r!=="function")throw new TypeError('The "original" argument must be of type Function');if(s&&r[s]){var e=r[s];if(typeof e!=="function"){throw new TypeError('The "util.promisify.custom" argument must be of type Function')}Object.defineProperty(e,s,{value:e,enumerable:false,writable:false,configurable:true});return e}function e(){var e,t;var n=new Promise((function(r,n){e=r;t=n}));var o=[];for(var i=0;i<arguments.length;i++){o.push(arguments[i])}o.push((function(r,n){if(r){t(r)}else{e(n)}}));try{r.apply(this,o)}catch(r){t(r)}return n}Object.setPrototypeOf(e,Object.getPrototypeOf(r));if(s)Object.defineProperty(e,s,{value:e,enumerable:false,writable:false,configurable:true});return Object.defineProperties(e,n(r))};e.promisify.custom=s;function callbackifyOnRejected(r,e){if(!r){var t=new Error("Promise was rejected with a falsy value");t.reason=r;r=t}return e(r)}function callbackify(r){if(typeof r!=="function"){throw new TypeError('The "original" argument must be of type Function')}function callbackified(){var e=[];for(var t=0;t<arguments.length;t++){e.push(arguments[t])}var n=e.pop();if(typeof n!=="function"){throw new TypeError("The last argument must be of type Function")}var o=this;var cb=function(){return n.apply(o,arguments)};r.apply(this,e).then((function(r){process.nextTick(cb.bind(null,null,r))}),(function(r){process.nextTick(callbackifyOnRejected.bind(null,r,cb))}))}Object.setPrototypeOf(callbackified,Object.getPrototypeOf(r));Object.defineProperties(callbackified,n(r));return callbackified}e.callbackify=callbackify},490:function(r,e,t){"use strict";var n=t(144);var o=t(349);var i=t(256);var a=i("Object.prototype.toString");var f=t(942)();var u=f&&typeof Symbol.toStringTag==="symbol";var s=o();var y=i("String.prototype.slice");var c={};var p=t(466);var l=Object.getPrototypeOf;if(u&&p&&l){n(s,(function(r){if(typeof __webpack_require__.g[r]==="function"){var e=new __webpack_require__.g[r];if(!(Symbol.toStringTag in e)){throw new EvalError("this engine has support for Symbol.toStringTag, but "+r+" does not have the property! Please report this.")}var t=l(e);var n=p(t,Symbol.toStringTag);if(!n){var o=l(t);n=p(o,Symbol.toStringTag)}c[r]=n.get}}))}var g=function tryAllTypedArrays(r){var e=false;n(c,(function(t,n){if(!e){try{var o=t.call(r);if(o===n){e=o}}catch(r){}}}));return e};var b=t(994);r.exports=function whichTypedArray(r){if(!b(r)){return false}if(!u){return y(a(r),8,-1)}return g(r)}},349:function(r,e,t){"use strict";var n=t(992);r.exports=function availableTypedArrays(){return n(["BigInt64Array","BigUint64Array","Float32Array","Float64Array","Int16Array","Int32Array","Int8Array","Uint16Array","Uint32Array","Uint8Array","Uint8ClampedArray"],(function(r){return typeof __webpack_require__.g[r]==="function"}))}},466:function(r,e,t){"use strict";var n=t(500);var o=n("%Object.getOwnPropertyDescriptor%",true);if(o){try{o([],"length")}catch(r){o=null}}r.exports=o}};var e={};function __nccwpck_require__(t){var n=e[t];if(n!==undefined){return n.exports}var o=e[t]={exports:{}};var i=true;try{r[t](o,o.exports,__nccwpck_require__);i=false}finally{if(i)delete e[t]}return o.exports}if(typeof __nccwpck_require__!=="undefined")__nccwpck_require__.ab=__dirname+"/";var t=__nccwpck_require__(177);module.exports=t})();

/***/ }),

/***/ 5232:
/***/ (function(module) {

var __dirname = "/";
(function(){var __webpack_modules__={950:function(__unused_webpack_module,exports){var indexOf=function(e,t){if(e.indexOf)return e.indexOf(t);else for(var r=0;r<e.length;r++){if(e[r]===t)return r}return-1};var Object_keys=function(e){if(Object.keys)return Object.keys(e);else{var t=[];for(var r in e)t.push(r);return t}};var forEach=function(e,t){if(e.forEach)return e.forEach(t);else for(var r=0;r<e.length;r++){t(e[r],r,e)}};var defineProp=function(){try{Object.defineProperty({},"_",{});return function(e,t,r){Object.defineProperty(e,t,{writable:true,enumerable:false,configurable:true,value:r})}}catch(e){return function(e,t,r){e[t]=r}}}();var globals=["Array","Boolean","Date","Error","EvalError","Function","Infinity","JSON","Math","NaN","Number","Object","RangeError","ReferenceError","RegExp","String","SyntaxError","TypeError","URIError","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","eval","isFinite","isNaN","parseFloat","parseInt","undefined","unescape"];function Context(){}Context.prototype={};var Script=exports.Script=function NodeScript(e){if(!(this instanceof Script))return new Script(e);this.code=e};Script.prototype.runInContext=function(e){if(!(e instanceof Context)){throw new TypeError("needs a 'context' argument.")}var t=document.createElement("iframe");if(!t.style)t.style={};t.style.display="none";document.body.appendChild(t);var r=t.contentWindow;var n=r.eval,o=r.execScript;if(!n&&o){o.call(r,"null");n=r.eval}forEach(Object_keys(e),(function(t){r[t]=e[t]}));forEach(globals,(function(t){if(e[t]){r[t]=e[t]}}));var c=Object_keys(r);var i=n.call(r,this.code);forEach(Object_keys(r),(function(t){if(t in e||indexOf(c,t)===-1){e[t]=r[t]}}));forEach(globals,(function(t){if(!(t in e)){defineProp(e,t,r[t])}}));document.body.removeChild(t);return i};Script.prototype.runInThisContext=function(){return eval(this.code)};Script.prototype.runInNewContext=function(e){var t=Script.createContext(e);var r=this.runInContext(t);if(e){forEach(Object_keys(t),(function(r){e[r]=t[r]}))}return r};forEach(Object_keys(Script.prototype),(function(e){exports[e]=Script[e]=function(t){var r=Script(t);return r[e].apply(r,[].slice.call(arguments,1))}}));exports.isContext=function(e){return e instanceof Context};exports.createScript=function(e){return exports.Script(e)};exports.createContext=Script.createContext=function(e){var t=new Context;if(typeof e==="object"){forEach(Object_keys(e),(function(r){t[r]=e[r]}))}return t}}};if(typeof __nccwpck_require__!=="undefined")__nccwpck_require__.ab=__dirname+"/";var __nested_webpack_exports__={};__webpack_modules__[950](0,__nested_webpack_exports__);module.exports=__nested_webpack_exports__})();

/***/ }),

/***/ 82052:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* provided dependency */ var process = __webpack_require__(62601);
// vim:ts=4:sts=4:sw=4:
/*!
 *
 * Copyright 2009-2017 Kris Kowal under the terms of the MIT
 * license found at https://github.com/kriskowal/q/blob/v1/LICENSE
 *
 * With parts by Tyler Close
 * Copyright 2007-2009 Tyler Close under the terms of the MIT X license found
 * at http://www.opensource.org/licenses/mit-license.html
 * Forked at ref_send.js version: 2009-05-11
 *
 * With parts by Mark Miller
 * Copyright (C) 2011 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

(function (definition) {
    "use strict";

    // This file will function properly as a <script> tag, or a module
    // using CommonJS and NodeJS or RequireJS module formats.  In
    // Common/Node/RequireJS, the module exports the Q API and when
    // executed as a simple <script>, it creates a Q global instead.

    // Montage Require
    if (typeof bootstrap === "function") {
        bootstrap("promise", definition);

    // CommonJS
    } else if (true) {
        module.exports = definition();

    // RequireJS
    } else { var previousQ, global; }

})(function () {
"use strict";

var hasStacks = false;
try {
    throw new Error();
} catch (e) {
    hasStacks = !!e.stack;
}

// All code after this point will be filtered from stack traces reported
// by Q.
var qStartingLine = captureLine();
var qFileName;

// shims

// used for fallback in "allResolved"
var noop = function () {};

// Use the fastest possible means to execute a task in a future turn
// of the event loop.
var nextTick =(function () {
    // linked list of tasks (single, with head node)
    var head = {task: void 0, next: null};
    var tail = head;
    var flushing = false;
    var requestTick = void 0;
    var isNodeJS = false;
    // queue for late tasks, used by unhandled rejection tracking
    var laterQueue = [];

    function flush() {
        /* jshint loopfunc: true */
        var task, domain;

        while (head.next) {
            head = head.next;
            task = head.task;
            head.task = void 0;
            domain = head.domain;

            if (domain) {
                head.domain = void 0;
                domain.enter();
            }
            runSingle(task, domain);

        }
        while (laterQueue.length) {
            task = laterQueue.pop();
            runSingle(task);
        }
        flushing = false;
    }
    // runs a single function in the async queue
    function runSingle(task, domain) {
        try {
            task();

        } catch (e) {
            if (isNodeJS) {
                // In node, uncaught exceptions are considered fatal errors.
                // Re-throw them synchronously to interrupt flushing!

                // Ensure continuation if the uncaught exception is suppressed
                // listening "uncaughtException" events (as domains does).
                // Continue in next event to avoid tick recursion.
                if (domain) {
                    domain.exit();
                }
                setTimeout(flush, 0);
                if (domain) {
                    domain.enter();
                }

                throw e;

            } else {
                // In browsers, uncaught exceptions are not fatal.
                // Re-throw them asynchronously to avoid slow-downs.
                setTimeout(function () {
                    throw e;
                }, 0);
            }
        }

        if (domain) {
            domain.exit();
        }
    }

    nextTick = function (task) {
        tail = tail.next = {
            task: task,
            domain: isNodeJS && process.domain,
            next: null
        };

        if (!flushing) {
            flushing = true;
            requestTick();
        }
    };

    if (typeof process === "object" &&
        process.toString() === "[object process]" && process.nextTick) {
        // Ensure Q is in a real Node environment, with a `process.nextTick`.
        // To see through fake Node environments:
        // * Mocha test runner - exposes a `process` global without a `nextTick`
        // * Browserify - exposes a `process.nexTick` function that uses
        //   `setTimeout`. In this case `setImmediate` is preferred because
        //    it is faster. Browserify's `process.toString()` yields
        //   "[object Object]", while in a real Node environment
        //   `process.toString()` yields "[object process]".
        isNodeJS = true;

        requestTick = function () {
            process.nextTick(flush);
        };

    } else if (typeof setImmediate === "function") {
        // In IE10, Node.js 0.9+, or https://github.com/NobleJS/setImmediate
        if (typeof window !== "undefined") {
            requestTick = setImmediate.bind(window, flush);
        } else {
            requestTick = function () {
                setImmediate(flush);
            };
        }

    } else if (typeof MessageChannel !== "undefined") {
        // modern browsers
        // http://www.nonblocking.io/2011/06/windownexttick.html
        var channel = new MessageChannel();
        // At least Safari Version 6.0.5 (8536.30.1) intermittently cannot create
        // working message ports the first time a page loads.
        channel.port1.onmessage = function () {
            requestTick = requestPortTick;
            channel.port1.onmessage = flush;
            flush();
        };
        var requestPortTick = function () {
            // Opera requires us to provide a message payload, regardless of
            // whether we use it.
            channel.port2.postMessage(0);
        };
        requestTick = function () {
            setTimeout(flush, 0);
            requestPortTick();
        };

    } else {
        // old browsers
        requestTick = function () {
            setTimeout(flush, 0);
        };
    }
    // runs a task after all other tasks have been run
    // this is useful for unhandled rejection tracking that needs to happen
    // after all `then`d tasks have been run.
    nextTick.runAfter = function (task) {
        laterQueue.push(task);
        if (!flushing) {
            flushing = true;
            requestTick();
        }
    };
    return nextTick;
})();

// Attempt to make generics safe in the face of downstream
// modifications.
// There is no situation where this is necessary.
// If you need a security guarantee, these primordials need to be
// deeply frozen anyway, and if you don’t need a security guarantee,
// this is just plain paranoid.
// However, this **might** have the nice side-effect of reducing the size of
// the minified code by reducing x.call() to merely x()
// See Mark Miller’s explanation of what this does.
// http://wiki.ecmascript.org/doku.php?id=conventions:safe_meta_programming
var call = Function.call;
function uncurryThis(f) {
    return function () {
        return call.apply(f, arguments);
    };
}
// This is equivalent, but slower:
// uncurryThis = Function_bind.bind(Function_bind.call);
// http://jsperf.com/uncurrythis

var array_slice = uncurryThis(Array.prototype.slice);

var array_reduce = uncurryThis(
    Array.prototype.reduce || function (callback, basis) {
        var index = 0,
            length = this.length;
        // concerning the initial value, if one is not provided
        if (arguments.length === 1) {
            // seek to the first value in the array, accounting
            // for the possibility that is is a sparse array
            do {
                if (index in this) {
                    basis = this[index++];
                    break;
                }
                if (++index >= length) {
                    throw new TypeError();
                }
            } while (1);
        }
        // reduce
        for (; index < length; index++) {
            // account for the possibility that the array is sparse
            if (index in this) {
                basis = callback(basis, this[index], index);
            }
        }
        return basis;
    }
);

var array_indexOf = uncurryThis(
    Array.prototype.indexOf || function (value) {
        // not a very good shim, but good enough for our one use of it
        for (var i = 0; i < this.length; i++) {
            if (this[i] === value) {
                return i;
            }
        }
        return -1;
    }
);

var array_map = uncurryThis(
    Array.prototype.map || function (callback, thisp) {
        var self = this;
        var collect = [];
        array_reduce(self, function (undefined, value, index) {
            collect.push(callback.call(thisp, value, index, self));
        }, void 0);
        return collect;
    }
);

var object_create = Object.create || function (prototype) {
    function Type() { }
    Type.prototype = prototype;
    return new Type();
};

var object_defineProperty = Object.defineProperty || function (obj, prop, descriptor) {
    obj[prop] = descriptor.value;
    return obj;
};

var object_hasOwnProperty = uncurryThis(Object.prototype.hasOwnProperty);

var object_keys = Object.keys || function (object) {
    var keys = [];
    for (var key in object) {
        if (object_hasOwnProperty(object, key)) {
            keys.push(key);
        }
    }
    return keys;
};

var object_toString = uncurryThis(Object.prototype.toString);

function isObject(value) {
    return value === Object(value);
}

// generator related shims

// FIXME: Remove this function once ES6 generators are in SpiderMonkey.
function isStopIteration(exception) {
    return (
        object_toString(exception) === "[object StopIteration]" ||
        exception instanceof QReturnValue
    );
}

// FIXME: Remove this helper and Q.return once ES6 generators are in
// SpiderMonkey.
var QReturnValue;
if (typeof ReturnValue !== "undefined") {
    QReturnValue = ReturnValue;
} else {
    QReturnValue = function (value) {
        this.value = value;
    };
}

// long stack traces

var STACK_JUMP_SEPARATOR = "From previous event:";

function makeStackTraceLong(error, promise) {
    // If possible, transform the error stack trace by removing Node and Q
    // cruft, then concatenating with the stack trace of `promise`. See #57.
    if (hasStacks &&
        promise.stack &&
        typeof error === "object" &&
        error !== null &&
        error.stack
    ) {
        var stacks = [];
        for (var p = promise; !!p; p = p.source) {
            if (p.stack && (!error.__minimumStackCounter__ || error.__minimumStackCounter__ > p.stackCounter)) {
                object_defineProperty(error, "__minimumStackCounter__", {value: p.stackCounter, configurable: true});
                stacks.unshift(p.stack);
            }
        }
        stacks.unshift(error.stack);

        var concatedStacks = stacks.join("\n" + STACK_JUMP_SEPARATOR + "\n");
        var stack = filterStackString(concatedStacks);
        object_defineProperty(error, "stack", {value: stack, configurable: true});
    }
}

function filterStackString(stackString) {
    var lines = stackString.split("\n");
    var desiredLines = [];
    for (var i = 0; i < lines.length; ++i) {
        var line = lines[i];

        if (!isInternalFrame(line) && !isNodeFrame(line) && line) {
            desiredLines.push(line);
        }
    }
    return desiredLines.join("\n");
}

function isNodeFrame(stackLine) {
    return stackLine.indexOf("(module.js:") !== -1 ||
           stackLine.indexOf("(node.js:") !== -1;
}

function getFileNameAndLineNumber(stackLine) {
    // Named functions: "at functionName (filename:lineNumber:columnNumber)"
    // In IE10 function name can have spaces ("Anonymous function") O_o
    var attempt1 = /at .+ \((.+):(\d+):(?:\d+)\)$/.exec(stackLine);
    if (attempt1) {
        return [attempt1[1], Number(attempt1[2])];
    }

    // Anonymous functions: "at filename:lineNumber:columnNumber"
    var attempt2 = /at ([^ ]+):(\d+):(?:\d+)$/.exec(stackLine);
    if (attempt2) {
        return [attempt2[1], Number(attempt2[2])];
    }

    // Firefox style: "function@filename:lineNumber or @filename:lineNumber"
    var attempt3 = /.*@(.+):(\d+)$/.exec(stackLine);
    if (attempt3) {
        return [attempt3[1], Number(attempt3[2])];
    }
}

function isInternalFrame(stackLine) {
    var fileNameAndLineNumber = getFileNameAndLineNumber(stackLine);

    if (!fileNameAndLineNumber) {
        return false;
    }

    var fileName = fileNameAndLineNumber[0];
    var lineNumber = fileNameAndLineNumber[1];

    return fileName === qFileName &&
        lineNumber >= qStartingLine &&
        lineNumber <= qEndingLine;
}

// discover own file name and line number range for filtering stack
// traces
function captureLine() {
    if (!hasStacks) {
        return;
    }

    try {
        throw new Error();
    } catch (e) {
        var lines = e.stack.split("\n");
        var firstLine = lines[0].indexOf("@") > 0 ? lines[1] : lines[2];
        var fileNameAndLineNumber = getFileNameAndLineNumber(firstLine);
        if (!fileNameAndLineNumber) {
            return;
        }

        qFileName = fileNameAndLineNumber[0];
        return fileNameAndLineNumber[1];
    }
}

function deprecate(callback, name, alternative) {
    return function () {
        if (typeof console !== "undefined" &&
            typeof console.warn === "function") {
            console.warn(name + " is deprecated, use " + alternative +
                         " instead.", new Error("").stack);
        }
        return callback.apply(callback, arguments);
    };
}

// end of shims
// beginning of real work

/**
 * Constructs a promise for an immediate reference, passes promises through, or
 * coerces promises from different systems.
 * @param value immediate reference or promise
 */
function Q(value) {
    // If the object is already a Promise, return it directly.  This enables
    // the resolve function to both be used to created references from objects,
    // but to tolerably coerce non-promises to promises.
    if (value instanceof Promise) {
        return value;
    }

    // assimilate thenables
    if (isPromiseAlike(value)) {
        return coerce(value);
    } else {
        return fulfill(value);
    }
}
Q.resolve = Q;

/**
 * Performs a task in a future turn of the event loop.
 * @param {Function} task
 */
Q.nextTick = nextTick;

/**
 * Controls whether or not long stack traces will be on
 */
Q.longStackSupport = false;

/**
 * The counter is used to determine the stopping point for building
 * long stack traces. In makeStackTraceLong we walk backwards through
 * the linked list of promises, only stacks which were created before
 * the rejection are concatenated.
 */
var longStackCounter = 1;

// enable long stacks if Q_DEBUG is set
if (typeof process === "object" && process && process.env && process.env.Q_DEBUG) {
    Q.longStackSupport = true;
}

/**
 * Constructs a {promise, resolve, reject} object.
 *
 * `resolve` is a callback to invoke with a more resolved value for the
 * promise. To fulfill the promise, invoke `resolve` with any value that is
 * not a thenable. To reject the promise, invoke `resolve` with a rejected
 * thenable, or invoke `reject` with the reason directly. To resolve the
 * promise to another thenable, thus putting it in the same state, invoke
 * `resolve` with that other thenable.
 */
Q.defer = defer;
function defer() {
    // if "messages" is an "Array", that indicates that the promise has not yet
    // been resolved.  If it is "undefined", it has been resolved.  Each
    // element of the messages array is itself an array of complete arguments to
    // forward to the resolved promise.  We coerce the resolution value to a
    // promise using the `resolve` function because it handles both fully
    // non-thenable values and other thenables gracefully.
    var messages = [], progressListeners = [], resolvedPromise;

    var deferred = object_create(defer.prototype);
    var promise = object_create(Promise.prototype);

    promise.promiseDispatch = function (resolve, op, operands) {
        var args = array_slice(arguments);
        if (messages) {
            messages.push(args);
            if (op === "when" && operands[1]) { // progress operand
                progressListeners.push(operands[1]);
            }
        } else {
            Q.nextTick(function () {
                resolvedPromise.promiseDispatch.apply(resolvedPromise, args);
            });
        }
    };

    // XXX deprecated
    promise.valueOf = function () {
        if (messages) {
            return promise;
        }
        var nearerValue = nearer(resolvedPromise);
        if (isPromise(nearerValue)) {
            resolvedPromise = nearerValue; // shorten chain
        }
        return nearerValue;
    };

    promise.inspect = function () {
        if (!resolvedPromise) {
            return { state: "pending" };
        }
        return resolvedPromise.inspect();
    };

    if (Q.longStackSupport && hasStacks) {
        try {
            throw new Error();
        } catch (e) {
            // NOTE: don't try to use `Error.captureStackTrace` or transfer the
            // accessor around; that causes memory leaks as per GH-111. Just
            // reify the stack trace as a string ASAP.
            //
            // At the same time, cut off the first line; it's always just
            // "[object Promise]\n", as per the `toString`.
            promise.stack = e.stack.substring(e.stack.indexOf("\n") + 1);
            promise.stackCounter = longStackCounter++;
        }
    }

    // NOTE: we do the checks for `resolvedPromise` in each method, instead of
    // consolidating them into `become`, since otherwise we'd create new
    // promises with the lines `become(whatever(value))`. See e.g. GH-252.

    function become(newPromise) {
        resolvedPromise = newPromise;

        if (Q.longStackSupport && hasStacks) {
            // Only hold a reference to the new promise if long stacks
            // are enabled to reduce memory usage
            promise.source = newPromise;
        }

        array_reduce(messages, function (undefined, message) {
            Q.nextTick(function () {
                newPromise.promiseDispatch.apply(newPromise, message);
            });
        }, void 0);

        messages = void 0;
        progressListeners = void 0;
    }

    deferred.promise = promise;
    deferred.resolve = function (value) {
        if (resolvedPromise) {
            return;
        }

        become(Q(value));
    };

    deferred.fulfill = function (value) {
        if (resolvedPromise) {
            return;
        }

        become(fulfill(value));
    };
    deferred.reject = function (reason) {
        if (resolvedPromise) {
            return;
        }

        become(reject(reason));
    };
    deferred.notify = function (progress) {
        if (resolvedPromise) {
            return;
        }

        array_reduce(progressListeners, function (undefined, progressListener) {
            Q.nextTick(function () {
                progressListener(progress);
            });
        }, void 0);
    };

    return deferred;
}

/**
 * Creates a Node-style callback that will resolve or reject the deferred
 * promise.
 * @returns a nodeback
 */
defer.prototype.makeNodeResolver = function () {
    var self = this;
    return function (error, value) {
        if (error) {
            self.reject(error);
        } else if (arguments.length > 2) {
            self.resolve(array_slice(arguments, 1));
        } else {
            self.resolve(value);
        }
    };
};

/**
 * @param resolver {Function} a function that returns nothing and accepts
 * the resolve, reject, and notify functions for a deferred.
 * @returns a promise that may be resolved with the given resolve and reject
 * functions, or rejected by a thrown exception in resolver
 */
Q.Promise = promise; // ES6
Q.promise = promise;
function promise(resolver) {
    if (typeof resolver !== "function") {
        throw new TypeError("resolver must be a function.");
    }
    var deferred = defer();
    try {
        resolver(deferred.resolve, deferred.reject, deferred.notify);
    } catch (reason) {
        deferred.reject(reason);
    }
    return deferred.promise;
}

promise.race = race; // ES6
promise.all = all; // ES6
promise.reject = reject; // ES6
promise.resolve = Q; // ES6

// XXX experimental.  This method is a way to denote that a local value is
// serializable and should be immediately dispatched to a remote upon request,
// instead of passing a reference.
Q.passByCopy = function (object) {
    //freeze(object);
    //passByCopies.set(object, true);
    return object;
};

Promise.prototype.passByCopy = function () {
    //freeze(object);
    //passByCopies.set(object, true);
    return this;
};

/**
 * If two promises eventually fulfill to the same value, promises that value,
 * but otherwise rejects.
 * @param x {Any*}
 * @param y {Any*}
 * @returns {Any*} a promise for x and y if they are the same, but a rejection
 * otherwise.
 *
 */
Q.join = function (x, y) {
    return Q(x).join(y);
};

Promise.prototype.join = function (that) {
    return Q([this, that]).spread(function (x, y) {
        if (x === y) {
            // TODO: "===" should be Object.is or equiv
            return x;
        } else {
            throw new Error("Q can't join: not the same: " + x + " " + y);
        }
    });
};

/**
 * Returns a promise for the first of an array of promises to become settled.
 * @param answers {Array[Any*]} promises to race
 * @returns {Any*} the first promise to be settled
 */
Q.race = race;
function race(answerPs) {
    return promise(function (resolve, reject) {
        // Switch to this once we can assume at least ES5
        // answerPs.forEach(function (answerP) {
        //     Q(answerP).then(resolve, reject);
        // });
        // Use this in the meantime
        for (var i = 0, len = answerPs.length; i < len; i++) {
            Q(answerPs[i]).then(resolve, reject);
        }
    });
}

Promise.prototype.race = function () {
    return this.then(Q.race);
};

/**
 * Constructs a Promise with a promise descriptor object and optional fallback
 * function.  The descriptor contains methods like when(rejected), get(name),
 * set(name, value), post(name, args), and delete(name), which all
 * return either a value, a promise for a value, or a rejection.  The fallback
 * accepts the operation name, a resolver, and any further arguments that would
 * have been forwarded to the appropriate method above had a method been
 * provided with the proper name.  The API makes no guarantees about the nature
 * of the returned object, apart from that it is usable whereever promises are
 * bought and sold.
 */
Q.makePromise = Promise;
function Promise(descriptor, fallback, inspect) {
    if (fallback === void 0) {
        fallback = function (op) {
            return reject(new Error(
                "Promise does not support operation: " + op
            ));
        };
    }
    if (inspect === void 0) {
        inspect = function () {
            return {state: "unknown"};
        };
    }

    var promise = object_create(Promise.prototype);

    promise.promiseDispatch = function (resolve, op, args) {
        var result;
        try {
            if (descriptor[op]) {
                result = descriptor[op].apply(promise, args);
            } else {
                result = fallback.call(promise, op, args);
            }
        } catch (exception) {
            result = reject(exception);
        }
        if (resolve) {
            resolve(result);
        }
    };

    promise.inspect = inspect;

    // XXX deprecated `valueOf` and `exception` support
    if (inspect) {
        var inspected = inspect();
        if (inspected.state === "rejected") {
            promise.exception = inspected.reason;
        }

        promise.valueOf = function () {
            var inspected = inspect();
            if (inspected.state === "pending" ||
                inspected.state === "rejected") {
                return promise;
            }
            return inspected.value;
        };
    }

    return promise;
}

Promise.prototype.toString = function () {
    return "[object Promise]";
};

Promise.prototype.then = function (fulfilled, rejected, progressed) {
    var self = this;
    var deferred = defer();
    var done = false;   // ensure the untrusted promise makes at most a
                        // single call to one of the callbacks

    function _fulfilled(value) {
        try {
            return typeof fulfilled === "function" ? fulfilled(value) : value;
        } catch (exception) {
            return reject(exception);
        }
    }

    function _rejected(exception) {
        if (typeof rejected === "function") {
            makeStackTraceLong(exception, self);
            try {
                return rejected(exception);
            } catch (newException) {
                return reject(newException);
            }
        }
        return reject(exception);
    }

    function _progressed(value) {
        return typeof progressed === "function" ? progressed(value) : value;
    }

    Q.nextTick(function () {
        self.promiseDispatch(function (value) {
            if (done) {
                return;
            }
            done = true;

            deferred.resolve(_fulfilled(value));
        }, "when", [function (exception) {
            if (done) {
                return;
            }
            done = true;

            deferred.resolve(_rejected(exception));
        }]);
    });

    // Progress propagator need to be attached in the current tick.
    self.promiseDispatch(void 0, "when", [void 0, function (value) {
        var newValue;
        var threw = false;
        try {
            newValue = _progressed(value);
        } catch (e) {
            threw = true;
            if (Q.onerror) {
                Q.onerror(e);
            } else {
                throw e;
            }
        }

        if (!threw) {
            deferred.notify(newValue);
        }
    }]);

    return deferred.promise;
};

Q.tap = function (promise, callback) {
    return Q(promise).tap(callback);
};

/**
 * Works almost like "finally", but not called for rejections.
 * Original resolution value is passed through callback unaffected.
 * Callback may return a promise that will be awaited for.
 * @param {Function} callback
 * @returns {Q.Promise}
 * @example
 * doSomething()
 *   .then(...)
 *   .tap(console.log)
 *   .then(...);
 */
Promise.prototype.tap = function (callback) {
    callback = Q(callback);

    return this.then(function (value) {
        return callback.fcall(value).thenResolve(value);
    });
};

/**
 * Registers an observer on a promise.
 *
 * Guarantees:
 *
 * 1. that fulfilled and rejected will be called only once.
 * 2. that either the fulfilled callback or the rejected callback will be
 *    called, but not both.
 * 3. that fulfilled and rejected will not be called in this turn.
 *
 * @param value      promise or immediate reference to observe
 * @param fulfilled  function to be called with the fulfilled value
 * @param rejected   function to be called with the rejection exception
 * @param progressed function to be called on any progress notifications
 * @return promise for the return value from the invoked callback
 */
Q.when = when;
function when(value, fulfilled, rejected, progressed) {
    return Q(value).then(fulfilled, rejected, progressed);
}

Promise.prototype.thenResolve = function (value) {
    return this.then(function () { return value; });
};

Q.thenResolve = function (promise, value) {
    return Q(promise).thenResolve(value);
};

Promise.prototype.thenReject = function (reason) {
    return this.then(function () { throw reason; });
};

Q.thenReject = function (promise, reason) {
    return Q(promise).thenReject(reason);
};

/**
 * If an object is not a promise, it is as "near" as possible.
 * If a promise is rejected, it is as "near" as possible too.
 * If it’s a fulfilled promise, the fulfillment value is nearer.
 * If it’s a deferred promise and the deferred has been resolved, the
 * resolution is "nearer".
 * @param object
 * @returns most resolved (nearest) form of the object
 */

// XXX should we re-do this?
Q.nearer = nearer;
function nearer(value) {
    if (isPromise(value)) {
        var inspected = value.inspect();
        if (inspected.state === "fulfilled") {
            return inspected.value;
        }
    }
    return value;
}

/**
 * @returns whether the given object is a promise.
 * Otherwise it is a fulfilled value.
 */
Q.isPromise = isPromise;
function isPromise(object) {
    return object instanceof Promise;
}

Q.isPromiseAlike = isPromiseAlike;
function isPromiseAlike(object) {
    return isObject(object) && typeof object.then === "function";
}

/**
 * @returns whether the given object is a pending promise, meaning not
 * fulfilled or rejected.
 */
Q.isPending = isPending;
function isPending(object) {
    return isPromise(object) && object.inspect().state === "pending";
}

Promise.prototype.isPending = function () {
    return this.inspect().state === "pending";
};

/**
 * @returns whether the given object is a value or fulfilled
 * promise.
 */
Q.isFulfilled = isFulfilled;
function isFulfilled(object) {
    return !isPromise(object) || object.inspect().state === "fulfilled";
}

Promise.prototype.isFulfilled = function () {
    return this.inspect().state === "fulfilled";
};

/**
 * @returns whether the given object is a rejected promise.
 */
Q.isRejected = isRejected;
function isRejected(object) {
    return isPromise(object) && object.inspect().state === "rejected";
}

Promise.prototype.isRejected = function () {
    return this.inspect().state === "rejected";
};

//// BEGIN UNHANDLED REJECTION TRACKING

// This promise library consumes exceptions thrown in handlers so they can be
// handled by a subsequent promise.  The exceptions get added to this array when
// they are created, and removed when they are handled.  Note that in ES6 or
// shimmed environments, this would naturally be a `Set`.
var unhandledReasons = [];
var unhandledRejections = [];
var reportedUnhandledRejections = [];
var trackUnhandledRejections = true;

function resetUnhandledRejections() {
    unhandledReasons.length = 0;
    unhandledRejections.length = 0;

    if (!trackUnhandledRejections) {
        trackUnhandledRejections = true;
    }
}

function trackRejection(promise, reason) {
    if (!trackUnhandledRejections) {
        return;
    }
    if (typeof process === "object" && typeof process.emit === "function") {
        Q.nextTick.runAfter(function () {
            if (array_indexOf(unhandledRejections, promise) !== -1) {
                process.emit("unhandledRejection", reason, promise);
                reportedUnhandledRejections.push(promise);
            }
        });
    }

    unhandledRejections.push(promise);
    if (reason && typeof reason.stack !== "undefined") {
        unhandledReasons.push(reason.stack);
    } else {
        unhandledReasons.push("(no stack) " + reason);
    }
}

function untrackRejection(promise) {
    if (!trackUnhandledRejections) {
        return;
    }

    var at = array_indexOf(unhandledRejections, promise);
    if (at !== -1) {
        if (typeof process === "object" && typeof process.emit === "function") {
            Q.nextTick.runAfter(function () {
                var atReport = array_indexOf(reportedUnhandledRejections, promise);
                if (atReport !== -1) {
                    process.emit("rejectionHandled", unhandledReasons[at], promise);
                    reportedUnhandledRejections.splice(atReport, 1);
                }
            });
        }
        unhandledRejections.splice(at, 1);
        unhandledReasons.splice(at, 1);
    }
}

Q.resetUnhandledRejections = resetUnhandledRejections;

Q.getUnhandledReasons = function () {
    // Make a copy so that consumers can't interfere with our internal state.
    return unhandledReasons.slice();
};

Q.stopUnhandledRejectionTracking = function () {
    resetUnhandledRejections();
    trackUnhandledRejections = false;
};

resetUnhandledRejections();

//// END UNHANDLED REJECTION TRACKING

/**
 * Constructs a rejected promise.
 * @param reason value describing the failure
 */
Q.reject = reject;
function reject(reason) {
    var rejection = Promise({
        "when": function (rejected) {
            // note that the error has been handled
            if (rejected) {
                untrackRejection(this);
            }
            return rejected ? rejected(reason) : this;
        }
    }, function fallback() {
        return this;
    }, function inspect() {
        return { state: "rejected", reason: reason };
    });

    // Note that the reason has not been handled.
    trackRejection(rejection, reason);

    return rejection;
}

/**
 * Constructs a fulfilled promise for an immediate reference.
 * @param value immediate reference
 */
Q.fulfill = fulfill;
function fulfill(value) {
    return Promise({
        "when": function () {
            return value;
        },
        "get": function (name) {
            return value[name];
        },
        "set": function (name, rhs) {
            value[name] = rhs;
        },
        "delete": function (name) {
            delete value[name];
        },
        "post": function (name, args) {
            // Mark Miller proposes that post with no name should apply a
            // promised function.
            if (name === null || name === void 0) {
                return value.apply(void 0, args);
            } else {
                return value[name].apply(value, args);
            }
        },
        "apply": function (thisp, args) {
            return value.apply(thisp, args);
        },
        "keys": function () {
            return object_keys(value);
        }
    }, void 0, function inspect() {
        return { state: "fulfilled", value: value };
    });
}

/**
 * Converts thenables to Q promises.
 * @param promise thenable promise
 * @returns a Q promise
 */
function coerce(promise) {
    var deferred = defer();
    Q.nextTick(function () {
        try {
            promise.then(deferred.resolve, deferred.reject, deferred.notify);
        } catch (exception) {
            deferred.reject(exception);
        }
    });
    return deferred.promise;
}

/**
 * Annotates an object such that it will never be
 * transferred away from this process over any promise
 * communication channel.
 * @param object
 * @returns promise a wrapping of that object that
 * additionally responds to the "isDef" message
 * without a rejection.
 */
Q.master = master;
function master(object) {
    return Promise({
        "isDef": function () {}
    }, function fallback(op, args) {
        return dispatch(object, op, args);
    }, function () {
        return Q(object).inspect();
    });
}

/**
 * Spreads the values of a promised array of arguments into the
 * fulfillment callback.
 * @param fulfilled callback that receives variadic arguments from the
 * promised array
 * @param rejected callback that receives the exception if the promise
 * is rejected.
 * @returns a promise for the return value or thrown exception of
 * either callback.
 */
Q.spread = spread;
function spread(value, fulfilled, rejected) {
    return Q(value).spread(fulfilled, rejected);
}

Promise.prototype.spread = function (fulfilled, rejected) {
    return this.all().then(function (array) {
        return fulfilled.apply(void 0, array);
    }, rejected);
};

/**
 * The async function is a decorator for generator functions, turning
 * them into asynchronous generators.  Although generators are only part
 * of the newest ECMAScript 6 drafts, this code does not cause syntax
 * errors in older engines.  This code should continue to work and will
 * in fact improve over time as the language improves.
 *
 * ES6 generators are currently part of V8 version 3.19 with the
 * --harmony-generators runtime flag enabled.  SpiderMonkey has had them
 * for longer, but under an older Python-inspired form.  This function
 * works on both kinds of generators.
 *
 * Decorates a generator function such that:
 *  - it may yield promises
 *  - execution will continue when that promise is fulfilled
 *  - the value of the yield expression will be the fulfilled value
 *  - it returns a promise for the return value (when the generator
 *    stops iterating)
 *  - the decorated function returns a promise for the return value
 *    of the generator or the first rejected promise among those
 *    yielded.
 *  - if an error is thrown in the generator, it propagates through
 *    every following yield until it is caught, or until it escapes
 *    the generator function altogether, and is translated into a
 *    rejection for the promise returned by the decorated generator.
 */
Q.async = async;
function async(makeGenerator) {
    return function () {
        // when verb is "send", arg is a value
        // when verb is "throw", arg is an exception
        function continuer(verb, arg) {
            var result;

            // Until V8 3.19 / Chromium 29 is released, SpiderMonkey is the only
            // engine that has a deployed base of browsers that support generators.
            // However, SM's generators use the Python-inspired semantics of
            // outdated ES6 drafts.  We would like to support ES6, but we'd also
            // like to make it possible to use generators in deployed browsers, so
            // we also support Python-style generators.  At some point we can remove
            // this block.

            if (typeof StopIteration === "undefined") {
                // ES6 Generators
                try {
                    result = generator[verb](arg);
                } catch (exception) {
                    return reject(exception);
                }
                if (result.done) {
                    return Q(result.value);
                } else {
                    return when(result.value, callback, errback);
                }
            } else {
                // SpiderMonkey Generators
                // FIXME: Remove this case when SM does ES6 generators.
                try {
                    result = generator[verb](arg);
                } catch (exception) {
                    if (isStopIteration(exception)) {
                        return Q(exception.value);
                    } else {
                        return reject(exception);
                    }
                }
                return when(result, callback, errback);
            }
        }
        var generator = makeGenerator.apply(this, arguments);
        var callback = continuer.bind(continuer, "next");
        var errback = continuer.bind(continuer, "throw");
        return callback();
    };
}

/**
 * The spawn function is a small wrapper around async that immediately
 * calls the generator and also ends the promise chain, so that any
 * unhandled errors are thrown instead of forwarded to the error
 * handler. This is useful because it's extremely common to run
 * generators at the top-level to work with libraries.
 */
Q.spawn = spawn;
function spawn(makeGenerator) {
    Q.done(Q.async(makeGenerator)());
}

// FIXME: Remove this interface once ES6 generators are in SpiderMonkey.
/**
 * Throws a ReturnValue exception to stop an asynchronous generator.
 *
 * This interface is a stop-gap measure to support generator return
 * values in older Firefox/SpiderMonkey.  In browsers that support ES6
 * generators like Chromium 29, just use "return" in your generator
 * functions.
 *
 * @param value the return value for the surrounding generator
 * @throws ReturnValue exception with the value.
 * @example
 * // ES6 style
 * Q.async(function* () {
 *      var foo = yield getFooPromise();
 *      var bar = yield getBarPromise();
 *      return foo + bar;
 * })
 * // Older SpiderMonkey style
 * Q.async(function () {
 *      var foo = yield getFooPromise();
 *      var bar = yield getBarPromise();
 *      Q.return(foo + bar);
 * })
 */
Q["return"] = _return;
function _return(value) {
    throw new QReturnValue(value);
}

/**
 * The promised function decorator ensures that any promise arguments
 * are settled and passed as values (`this` is also settled and passed
 * as a value).  It will also ensure that the result of a function is
 * always a promise.
 *
 * @example
 * var add = Q.promised(function (a, b) {
 *     return a + b;
 * });
 * add(Q(a), Q(B));
 *
 * @param {function} callback The function to decorate
 * @returns {function} a function that has been decorated.
 */
Q.promised = promised;
function promised(callback) {
    return function () {
        return spread([this, all(arguments)], function (self, args) {
            return callback.apply(self, args);
        });
    };
}

/**
 * sends a message to a value in a future turn
 * @param object* the recipient
 * @param op the name of the message operation, e.g., "when",
 * @param args further arguments to be forwarded to the operation
 * @returns result {Promise} a promise for the result of the operation
 */
Q.dispatch = dispatch;
function dispatch(object, op, args) {
    return Q(object).dispatch(op, args);
}

Promise.prototype.dispatch = function (op, args) {
    var self = this;
    var deferred = defer();
    Q.nextTick(function () {
        self.promiseDispatch(deferred.resolve, op, args);
    });
    return deferred.promise;
};

/**
 * Gets the value of a property in a future turn.
 * @param object    promise or immediate reference for target object
 * @param name      name of property to get
 * @return promise for the property value
 */
Q.get = function (object, key) {
    return Q(object).dispatch("get", [key]);
};

Promise.prototype.get = function (key) {
    return this.dispatch("get", [key]);
};

/**
 * Sets the value of a property in a future turn.
 * @param object    promise or immediate reference for object object
 * @param name      name of property to set
 * @param value     new value of property
 * @return promise for the return value
 */
Q.set = function (object, key, value) {
    return Q(object).dispatch("set", [key, value]);
};

Promise.prototype.set = function (key, value) {
    return this.dispatch("set", [key, value]);
};

/**
 * Deletes a property in a future turn.
 * @param object    promise or immediate reference for target object
 * @param name      name of property to delete
 * @return promise for the return value
 */
Q.del = // XXX legacy
Q["delete"] = function (object, key) {
    return Q(object).dispatch("delete", [key]);
};

Promise.prototype.del = // XXX legacy
Promise.prototype["delete"] = function (key) {
    return this.dispatch("delete", [key]);
};

/**
 * Invokes a method in a future turn.
 * @param object    promise or immediate reference for target object
 * @param name      name of method to invoke
 * @param value     a value to post, typically an array of
 *                  invocation arguments for promises that
 *                  are ultimately backed with `resolve` values,
 *                  as opposed to those backed with URLs
 *                  wherein the posted value can be any
 *                  JSON serializable object.
 * @return promise for the return value
 */
// bound locally because it is used by other methods
Q.mapply = // XXX As proposed by "Redsandro"
Q.post = function (object, name, args) {
    return Q(object).dispatch("post", [name, args]);
};

Promise.prototype.mapply = // XXX As proposed by "Redsandro"
Promise.prototype.post = function (name, args) {
    return this.dispatch("post", [name, args]);
};

/**
 * Invokes a method in a future turn.
 * @param object    promise or immediate reference for target object
 * @param name      name of method to invoke
 * @param ...args   array of invocation arguments
 * @return promise for the return value
 */
Q.send = // XXX Mark Miller's proposed parlance
Q.mcall = // XXX As proposed by "Redsandro"
Q.invoke = function (object, name /*...args*/) {
    return Q(object).dispatch("post", [name, array_slice(arguments, 2)]);
};

Promise.prototype.send = // XXX Mark Miller's proposed parlance
Promise.prototype.mcall = // XXX As proposed by "Redsandro"
Promise.prototype.invoke = function (name /*...args*/) {
    return this.dispatch("post", [name, array_slice(arguments, 1)]);
};

/**
 * Applies the promised function in a future turn.
 * @param object    promise or immediate reference for target function
 * @param args      array of application arguments
 */
Q.fapply = function (object, args) {
    return Q(object).dispatch("apply", [void 0, args]);
};

Promise.prototype.fapply = function (args) {
    return this.dispatch("apply", [void 0, args]);
};

/**
 * Calls the promised function in a future turn.
 * @param object    promise or immediate reference for target function
 * @param ...args   array of application arguments
 */
Q["try"] =
Q.fcall = function (object /* ...args*/) {
    return Q(object).dispatch("apply", [void 0, array_slice(arguments, 1)]);
};

Promise.prototype.fcall = function (/*...args*/) {
    return this.dispatch("apply", [void 0, array_slice(arguments)]);
};

/**
 * Binds the promised function, transforming return values into a fulfilled
 * promise and thrown errors into a rejected one.
 * @param object    promise or immediate reference for target function
 * @param ...args   array of application arguments
 */
Q.fbind = function (object /*...args*/) {
    var promise = Q(object);
    var args = array_slice(arguments, 1);
    return function fbound() {
        return promise.dispatch("apply", [
            this,
            args.concat(array_slice(arguments))
        ]);
    };
};
Promise.prototype.fbind = function (/*...args*/) {
    var promise = this;
    var args = array_slice(arguments);
    return function fbound() {
        return promise.dispatch("apply", [
            this,
            args.concat(array_slice(arguments))
        ]);
    };
};

/**
 * Requests the names of the owned properties of a promised
 * object in a future turn.
 * @param object    promise or immediate reference for target object
 * @return promise for the keys of the eventually settled object
 */
Q.keys = function (object) {
    return Q(object).dispatch("keys", []);
};

Promise.prototype.keys = function () {
    return this.dispatch("keys", []);
};

/**
 * Turns an array of promises into a promise for an array.  If any of
 * the promises gets rejected, the whole array is rejected immediately.
 * @param {Array*} an array (or promise for an array) of values (or
 * promises for values)
 * @returns a promise for an array of the corresponding values
 */
// By Mark Miller
// http://wiki.ecmascript.org/doku.php?id=strawman:concurrency&rev=1308776521#allfulfilled
Q.all = all;
function all(promises) {
    return when(promises, function (promises) {
        var pendingCount = 0;
        var deferred = defer();
        array_reduce(promises, function (undefined, promise, index) {
            var snapshot;
            if (
                isPromise(promise) &&
                (snapshot = promise.inspect()).state === "fulfilled"
            ) {
                promises[index] = snapshot.value;
            } else {
                ++pendingCount;
                when(
                    promise,
                    function (value) {
                        promises[index] = value;
                        if (--pendingCount === 0) {
                            deferred.resolve(promises);
                        }
                    },
                    deferred.reject,
                    function (progress) {
                        deferred.notify({ index: index, value: progress });
                    }
                );
            }
        }, void 0);
        if (pendingCount === 0) {
            deferred.resolve(promises);
        }
        return deferred.promise;
    });
}

Promise.prototype.all = function () {
    return all(this);
};

/**
 * Returns the first resolved promise of an array. Prior rejected promises are
 * ignored.  Rejects only if all promises are rejected.
 * @param {Array*} an array containing values or promises for values
 * @returns a promise fulfilled with the value of the first resolved promise,
 * or a rejected promise if all promises are rejected.
 */
Q.any = any;

function any(promises) {
    if (promises.length === 0) {
        return Q.resolve();
    }

    var deferred = Q.defer();
    var pendingCount = 0;
    array_reduce(promises, function (prev, current, index) {
        var promise = promises[index];

        pendingCount++;

        when(promise, onFulfilled, onRejected, onProgress);
        function onFulfilled(result) {
            deferred.resolve(result);
        }
        function onRejected(err) {
            pendingCount--;
            if (pendingCount === 0) {
                var rejection = err || new Error("" + err);

                rejection.message = ("Q can't get fulfillment value from any promise, all " +
                    "promises were rejected. Last error message: " + rejection.message);

                deferred.reject(rejection);
            }
        }
        function onProgress(progress) {
            deferred.notify({
                index: index,
                value: progress
            });
        }
    }, undefined);

    return deferred.promise;
}

Promise.prototype.any = function () {
    return any(this);
};

/**
 * Waits for all promises to be settled, either fulfilled or
 * rejected.  This is distinct from `all` since that would stop
 * waiting at the first rejection.  The promise returned by
 * `allResolved` will never be rejected.
 * @param promises a promise for an array (or an array) of promises
 * (or values)
 * @return a promise for an array of promises
 */
Q.allResolved = deprecate(allResolved, "allResolved", "allSettled");
function allResolved(promises) {
    return when(promises, function (promises) {
        promises = array_map(promises, Q);
        return when(all(array_map(promises, function (promise) {
            return when(promise, noop, noop);
        })), function () {
            return promises;
        });
    });
}

Promise.prototype.allResolved = function () {
    return allResolved(this);
};

/**
 * @see Promise#allSettled
 */
Q.allSettled = allSettled;
function allSettled(promises) {
    return Q(promises).allSettled();
}

/**
 * Turns an array of promises into a promise for an array of their states (as
 * returned by `inspect`) when they have all settled.
 * @param {Array[Any*]} values an array (or promise for an array) of values (or
 * promises for values)
 * @returns {Array[State]} an array of states for the respective values.
 */
Promise.prototype.allSettled = function () {
    return this.then(function (promises) {
        return all(array_map(promises, function (promise) {
            promise = Q(promise);
            function regardless() {
                return promise.inspect();
            }
            return promise.then(regardless, regardless);
        }));
    });
};

/**
 * Captures the failure of a promise, giving an oportunity to recover
 * with a callback.  If the given promise is fulfilled, the returned
 * promise is fulfilled.
 * @param {Any*} promise for something
 * @param {Function} callback to fulfill the returned promise if the
 * given promise is rejected
 * @returns a promise for the return value of the callback
 */
Q.fail = // XXX legacy
Q["catch"] = function (object, rejected) {
    return Q(object).then(void 0, rejected);
};

Promise.prototype.fail = // XXX legacy
Promise.prototype["catch"] = function (rejected) {
    return this.then(void 0, rejected);
};

/**
 * Attaches a listener that can respond to progress notifications from a
 * promise's originating deferred. This listener receives the exact arguments
 * passed to ``deferred.notify``.
 * @param {Any*} promise for something
 * @param {Function} callback to receive any progress notifications
 * @returns the given promise, unchanged
 */
Q.progress = progress;
function progress(object, progressed) {
    return Q(object).then(void 0, void 0, progressed);
}

Promise.prototype.progress = function (progressed) {
    return this.then(void 0, void 0, progressed);
};

/**
 * Provides an opportunity to observe the settling of a promise,
 * regardless of whether the promise is fulfilled or rejected.  Forwards
 * the resolution to the returned promise when the callback is done.
 * The callback can return a promise to defer completion.
 * @param {Any*} promise
 * @param {Function} callback to observe the resolution of the given
 * promise, takes no arguments.
 * @returns a promise for the resolution of the given promise when
 * ``fin`` is done.
 */
Q.fin = // XXX legacy
Q["finally"] = function (object, callback) {
    return Q(object)["finally"](callback);
};

Promise.prototype.fin = // XXX legacy
Promise.prototype["finally"] = function (callback) {
    if (!callback || typeof callback.apply !== "function") {
        throw new Error("Q can't apply finally callback");
    }
    callback = Q(callback);
    return this.then(function (value) {
        return callback.fcall().then(function () {
            return value;
        });
    }, function (reason) {
        // TODO attempt to recycle the rejection with "this".
        return callback.fcall().then(function () {
            throw reason;
        });
    });
};

/**
 * Terminates a chain of promises, forcing rejections to be
 * thrown as exceptions.
 * @param {Any*} promise at the end of a chain of promises
 * @returns nothing
 */
Q.done = function (object, fulfilled, rejected, progress) {
    return Q(object).done(fulfilled, rejected, progress);
};

Promise.prototype.done = function (fulfilled, rejected, progress) {
    var onUnhandledError = function (error) {
        // forward to a future turn so that ``when``
        // does not catch it and turn it into a rejection.
        Q.nextTick(function () {
            makeStackTraceLong(error, promise);
            if (Q.onerror) {
                Q.onerror(error);
            } else {
                throw error;
            }
        });
    };

    // Avoid unnecessary `nextTick`ing via an unnecessary `when`.
    var promise = fulfilled || rejected || progress ?
        this.then(fulfilled, rejected, progress) :
        this;

    if (typeof process === "object" && process && process.domain) {
        onUnhandledError = process.domain.bind(onUnhandledError);
    }

    promise.then(void 0, onUnhandledError);
};

/**
 * Causes a promise to be rejected if it does not get fulfilled before
 * some milliseconds time out.
 * @param {Any*} promise
 * @param {Number} milliseconds timeout
 * @param {Any*} custom error message or Error object (optional)
 * @returns a promise for the resolution of the given promise if it is
 * fulfilled before the timeout, otherwise rejected.
 */
Q.timeout = function (object, ms, error) {
    return Q(object).timeout(ms, error);
};

Promise.prototype.timeout = function (ms, error) {
    var deferred = defer();
    var timeoutId = setTimeout(function () {
        if (!error || "string" === typeof error) {
            error = new Error(error || "Timed out after " + ms + " ms");
            error.code = "ETIMEDOUT";
        }
        deferred.reject(error);
    }, ms);

    this.then(function (value) {
        clearTimeout(timeoutId);
        deferred.resolve(value);
    }, function (exception) {
        clearTimeout(timeoutId);
        deferred.reject(exception);
    }, deferred.notify);

    return deferred.promise;
};

/**
 * Returns a promise for the given value (or promised value), some
 * milliseconds after it resolved. Passes rejections immediately.
 * @param {Any*} promise
 * @param {Number} milliseconds
 * @returns a promise for the resolution of the given promise after milliseconds
 * time has elapsed since the resolution of the given promise.
 * If the given promise rejects, that is passed immediately.
 */
Q.delay = function (object, timeout) {
    if (timeout === void 0) {
        timeout = object;
        object = void 0;
    }
    return Q(object).delay(timeout);
};

Promise.prototype.delay = function (timeout) {
    return this.then(function (value) {
        var deferred = defer();
        setTimeout(function () {
            deferred.resolve(value);
        }, timeout);
        return deferred.promise;
    });
};

/**
 * Passes a continuation to a Node function, which is called with the given
 * arguments provided as an array, and returns a promise.
 *
 *      Q.nfapply(FS.readFile, [__filename])
 *      .then(function (content) {
 *      })
 *
 */
Q.nfapply = function (callback, args) {
    return Q(callback).nfapply(args);
};

Promise.prototype.nfapply = function (args) {
    var deferred = defer();
    var nodeArgs = array_slice(args);
    nodeArgs.push(deferred.makeNodeResolver());
    this.fapply(nodeArgs).fail(deferred.reject);
    return deferred.promise;
};

/**
 * Passes a continuation to a Node function, which is called with the given
 * arguments provided individually, and returns a promise.
 * @example
 * Q.nfcall(FS.readFile, __filename)
 * .then(function (content) {
 * })
 *
 */
Q.nfcall = function (callback /*...args*/) {
    var args = array_slice(arguments, 1);
    return Q(callback).nfapply(args);
};

Promise.prototype.nfcall = function (/*...args*/) {
    var nodeArgs = array_slice(arguments);
    var deferred = defer();
    nodeArgs.push(deferred.makeNodeResolver());
    this.fapply(nodeArgs).fail(deferred.reject);
    return deferred.promise;
};

/**
 * Wraps a NodeJS continuation passing function and returns an equivalent
 * version that returns a promise.
 * @example
 * Q.nfbind(FS.readFile, __filename)("utf-8")
 * .then(console.log)
 * .done()
 */
Q.nfbind =
Q.denodeify = function (callback /*...args*/) {
    if (callback === undefined) {
        throw new Error("Q can't wrap an undefined function");
    }
    var baseArgs = array_slice(arguments, 1);
    return function () {
        var nodeArgs = baseArgs.concat(array_slice(arguments));
        var deferred = defer();
        nodeArgs.push(deferred.makeNodeResolver());
        Q(callback).fapply(nodeArgs).fail(deferred.reject);
        return deferred.promise;
    };
};

Promise.prototype.nfbind =
Promise.prototype.denodeify = function (/*...args*/) {
    var args = array_slice(arguments);
    args.unshift(this);
    return Q.denodeify.apply(void 0, args);
};

Q.nbind = function (callback, thisp /*...args*/) {
    var baseArgs = array_slice(arguments, 2);
    return function () {
        var nodeArgs = baseArgs.concat(array_slice(arguments));
        var deferred = defer();
        nodeArgs.push(deferred.makeNodeResolver());
        function bound() {
            return callback.apply(thisp, arguments);
        }
        Q(bound).fapply(nodeArgs).fail(deferred.reject);
        return deferred.promise;
    };
};

Promise.prototype.nbind = function (/*thisp, ...args*/) {
    var args = array_slice(arguments, 0);
    args.unshift(this);
    return Q.nbind.apply(void 0, args);
};

/**
 * Calls a method of a Node-style object that accepts a Node-style
 * callback with a given array of arguments, plus a provided callback.
 * @param object an object that has the named method
 * @param {String} name name of the method of object
 * @param {Array} args arguments to pass to the method; the callback
 * will be provided by Q and appended to these arguments.
 * @returns a promise for the value or error
 */
Q.nmapply = // XXX As proposed by "Redsandro"
Q.npost = function (object, name, args) {
    return Q(object).npost(name, args);
};

Promise.prototype.nmapply = // XXX As proposed by "Redsandro"
Promise.prototype.npost = function (name, args) {
    var nodeArgs = array_slice(args || []);
    var deferred = defer();
    nodeArgs.push(deferred.makeNodeResolver());
    this.dispatch("post", [name, nodeArgs]).fail(deferred.reject);
    return deferred.promise;
};

/**
 * Calls a method of a Node-style object that accepts a Node-style
 * callback, forwarding the given variadic arguments, plus a provided
 * callback argument.
 * @param object an object that has the named method
 * @param {String} name name of the method of object
 * @param ...args arguments to pass to the method; the callback will
 * be provided by Q and appended to these arguments.
 * @returns a promise for the value or error
 */
Q.nsend = // XXX Based on Mark Miller's proposed "send"
Q.nmcall = // XXX Based on "Redsandro's" proposal
Q.ninvoke = function (object, name /*...args*/) {
    var nodeArgs = array_slice(arguments, 2);
    var deferred = defer();
    nodeArgs.push(deferred.makeNodeResolver());
    Q(object).dispatch("post", [name, nodeArgs]).fail(deferred.reject);
    return deferred.promise;
};

Promise.prototype.nsend = // XXX Based on Mark Miller's proposed "send"
Promise.prototype.nmcall = // XXX Based on "Redsandro's" proposal
Promise.prototype.ninvoke = function (name /*...args*/) {
    var nodeArgs = array_slice(arguments, 1);
    var deferred = defer();
    nodeArgs.push(deferred.makeNodeResolver());
    this.dispatch("post", [name, nodeArgs]).fail(deferred.reject);
    return deferred.promise;
};

/**
 * If a function would like to support both Node continuation-passing-style and
 * promise-returning-style, it can end its internal promise chain with
 * `nodeify(nodeback)`, forwarding the optional nodeback argument.  If the user
 * elects to use a nodeback, the result will be sent there.  If they do not
 * pass a nodeback, they will receive the result promise.
 * @param object a result (or a promise for a result)
 * @param {Function} nodeback a Node.js-style callback
 * @returns either the promise or nothing
 */
Q.nodeify = nodeify;
function nodeify(object, nodeback) {
    return Q(object).nodeify(nodeback);
}

Promise.prototype.nodeify = function (nodeback) {
    if (nodeback) {
        this.then(function (value) {
            Q.nextTick(function () {
                nodeback(null, value);
            });
        }, function (error) {
            Q.nextTick(function () {
                nodeback(error);
            });
        });
    } else {
        return this;
    }
};

Q.noConflict = function() {
    throw new Error("Q.noConflict only works when Q is used as a global");
};

// All code before this point will be filtered from stack traces.
var qEndingLine = captureLine();

return Q;

});


/***/ }),

/***/ 92722:
/***/ (function(module) {

"use strict";
module.exports = {"i8":"2.2.0"};

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [218,866,202,232,544,971,596,744], function() { return __webpack_exec__(28332); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);
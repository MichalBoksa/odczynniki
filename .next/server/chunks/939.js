exports.id = 939;
exports.ids = [939];
exports.modules = {

/***/ 15939:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

module.exports = __webpack_require__(20737);


/***/ }),

/***/ 23784:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

const utils = __webpack_require__(55604);
const { call_analysis_api } = __webpack_require__(11490);
function analyze_uri(uri, analysis_type, options = {}, callback) {
    const params = {
        uri,
        analysis_type
    };
    if (analysis_type === "custom") {
        if (!("model_name" in options) || !("model_version" in options)) {
            throw new Error('Setting analysis_type to "custom" requires additional params: "model_name" and "model_version"');
        }
        params.parameters = {
            custom: {
                model_name: options.model_name,
                model_version: options.model_version
            }
        };
    }
    let api_uri = [
        "analysis",
        "analyze",
        "uri"
    ];
    return call_analysis_api("POST", api_uri, params, callback, options);
}
module.exports = {
    analyze_uri
};


/***/ }),

/***/ 703:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

const utils = __webpack_require__(55604);
const call_api = __webpack_require__(76610);
const { extend, pickOnlyExistingValues } = utils;
const TRANSFORMATIONS_URI = "transformations";
function deleteResourcesParams(options, params = {}) {
    return extend(params, pickOnlyExistingValues(options, "keep_original", "invalidate", "next_cursor", "transformations"));
}
function getResourceParams(options) {
    return pickOnlyExistingValues(options, "exif", "cinemagraph_analysis", "colors", "derived_next_cursor", "faces", "image_metadata", "media_metadata", "pages", "phash", "coordinates", "max_results", "versions", "accessibility_analysis", "related", "related_next_cursor");
}
exports.ping = function ping(callback, options = {}) {
    return call_api("get", [
        "ping"
    ], {}, callback, options);
};
exports.usage = function usage(callback, options = {}) {
    const uri = [
        "usage"
    ];
    if (options.date) {
        uri.push(options.date);
    }
    return call_api("get", uri, {}, callback, options);
};
exports.resource_types = function resource_types(callback, options = {}) {
    return call_api("get", [
        "resources"
    ], {}, callback, options);
};
exports.resources = function resources(callback, options = {}) {
    let resource_type, type, uri;
    resource_type = options.resource_type || "image";
    type = options.type;
    uri = [
        "resources",
        resource_type
    ];
    if (type != null) {
        uri.push(type);
    }
    if (options.start_at != null && Object.prototype.toString.call(options.start_at) === "[object Date]") {
        options.start_at = options.start_at.toUTCString();
    }
    return call_api("get", uri, pickOnlyExistingValues(options, "next_cursor", "max_results", "prefix", "tags", "context", "direction", "moderations", "start_at", "metadata", "fields"), callback, options);
};
exports.resources_by_tag = function resources_by_tag(tag, callback, options = {}) {
    let resource_type, uri;
    resource_type = options.resource_type || "image";
    uri = [
        "resources",
        resource_type,
        "tags",
        tag
    ];
    return call_api("get", uri, pickOnlyExistingValues(options, "next_cursor", "max_results", "tags", "context", "direction", "moderations", "metadata", "fields"), callback, options);
};
exports.resources_by_context = function resources_by_context(key, value, callback, options = {}) {
    let params, resource_type, uri;
    resource_type = options.resource_type || "image";
    uri = [
        "resources",
        resource_type,
        "context"
    ];
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
    uri = [
        "resources",
        resource_type,
        "moderations",
        kind,
        status
    ];
    return call_api("get", uri, pickOnlyExistingValues(options, "next_cursor", "max_results", "tags", "context", "direction", "moderations", "metadata", "fields"), callback, options);
};
exports.resource_by_asset_id = function resource_by_asset_id(asset_id, callback, options = {}) {
    const uri = [
        "resources",
        asset_id
    ];
    return call_api("get", uri, getResourceParams(options), callback, options);
};
exports.resources_by_asset_folder = function resources_by_asset_folder(asset_folder, callback, options = {}) {
    let params, uri;
    uri = [
        "resources",
        "by_asset_folder"
    ];
    params = pickOnlyExistingValues(options, "next_cursor", "max_results", "tags", "context", "moderations", "fields");
    params.asset_folder = asset_folder;
    return call_api("get", uri, params, callback, options);
};
exports.resources_by_asset_ids = function resources_by_asset_ids(asset_ids, callback, options = {}) {
    let params, uri;
    uri = [
        "resources",
        "by_asset_ids"
    ];
    params = pickOnlyExistingValues(options, "tags", "context", "moderations", "fields");
    params["asset_ids[]"] = asset_ids;
    return call_api("get", uri, params, callback, options);
};
exports.resources_by_ids = function resources_by_ids(public_ids, callback, options = {}) {
    let params, resource_type, type, uri;
    resource_type = options.resource_type || "image";
    type = options.type || "upload";
    uri = [
        "resources",
        resource_type,
        type
    ];
    params = pickOnlyExistingValues(options, "tags", "context", "moderations", "fields");
    params["public_ids[]"] = public_ids;
    return call_api("get", uri, params, callback, options);
};
exports.resource = function resource(public_id, callback, options = {}) {
    let resource_type, type, uri;
    resource_type = options.resource_type || "image";
    type = options.type || "upload";
    uri = [
        "resources",
        resource_type,
        type,
        public_id
    ];
    return call_api("get", uri, getResourceParams(options), callback, options);
};
exports.restore = function restore(public_ids, callback, options = {}) {
    options.content_type = "json";
    let resource_type, type, uri;
    resource_type = options.resource_type || "image";
    type = options.type || "upload";
    uri = [
        "resources",
        resource_type,
        type,
        "restore"
    ];
    return call_api("post", uri, {
        public_ids: public_ids,
        versions: options.versions
    }, callback, options);
};
exports.update = function update(public_id, callback, options = {}) {
    let params, resource_type, type, uri;
    resource_type = options.resource_type || "image";
    type = options.type || "upload";
    uri = [
        "resources",
        resource_type,
        type,
        public_id
    ];
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
    uri = [
        "resources",
        resource_type,
        type
    ];
    return call_api("delete", uri, deleteResourcesParams(options, {
        "public_ids[]": public_ids
    }), callback, options);
};
exports.delete_resources_by_prefix = function delete_resources_by_prefix(prefix, callback, options = {}) {
    let resource_type, type, uri;
    resource_type = options.resource_type || "image";
    type = options.type || "upload";
    uri = [
        "resources",
        resource_type,
        type
    ];
    return call_api("delete", uri, deleteResourcesParams(options, {
        prefix: prefix
    }), callback, options);
};
exports.delete_resources_by_tag = function delete_resources_by_tag(tag, callback, options = {}) {
    let resource_type, uri;
    resource_type = options.resource_type || "image";
    uri = [
        "resources",
        resource_type,
        "tags",
        tag
    ];
    return call_api("delete", uri, deleteResourcesParams(options), callback, options);
};
exports.delete_all_resources = function delete_all_resources(callback, options = {}) {
    let resource_type, type, uri;
    resource_type = options.resource_type || "image";
    type = options.type || "upload";
    uri = [
        "resources",
        resource_type,
        type
    ];
    return call_api("delete", uri, deleteResourcesParams(options, {
        all: true
    }), callback, options);
};
const createRelationParams = (publicIds = [])=>{
    return {
        assets_to_relate: Array.isArray(publicIds) ? publicIds : [
            publicIds
        ]
    };
};
const deleteRelationParams = (publicIds = [])=>{
    return {
        assets_to_unrelate: Array.isArray(publicIds) ? publicIds : [
            publicIds
        ]
    };
};
exports.add_related_assets = (publicId, assetsToRelate, callback, options = {})=>{
    const params = createRelationParams(assetsToRelate);
    return call_api("post", [
        "resources",
        "related_assets",
        options.resource_type,
        options.type,
        publicId
    ], params, callback, options);
};
exports.add_related_assets_by_asset_id = (assetId, assetsToRelate, callback, options = {})=>{
    const params = createRelationParams(assetsToRelate);
    return call_api("post", [
        "resources",
        "related_assets",
        assetId
    ], params, callback, options);
};
exports.delete_related_assets = (publicId, assetsToUnrelate, callback, options = {})=>{
    const params = deleteRelationParams(assetsToUnrelate);
    return call_api("delete", [
        "resources",
        "related_assets",
        options.resource_type,
        options.type,
        publicId
    ], params, callback, options);
};
exports.delete_related_assets_by_asset_id = (assetId, assetsToUnrelate, callback, options = {})=>{
    const params = deleteRelationParams(assetsToUnrelate);
    return call_api("delete", [
        "resources",
        "related_assets",
        assetId
    ], params, callback, options);
};
exports.delete_derived_resources = function delete_derived_resources(derived_resource_ids, callback, options = {}) {
    let uri;
    uri = [
        "derived_resources"
    ];
    return call_api("delete", uri, {
        "derived_resource_ids[]": derived_resource_ids
    }, callback, options);
};
exports.delete_derived_by_transformation = function delete_derived_by_transformation(public_ids, transformations, callback, options = {}) {
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
    uri = [
        "tags",
        resource_type
    ];
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
    const params = {
        name
    };
    params.transformation = utils.build_eager(definition);
    return call_api("post", TRANSFORMATIONS_URI, params, callback, options);
};
exports.upload_presets = function upload_presets(callback, options = {}) {
    return call_api("get", [
        "upload_presets"
    ], pickOnlyExistingValues(options, "next_cursor", "max_results"), callback, options);
};
exports.upload_preset = function upload_preset(name, callback, options = {}) {
    let uri;
    uri = [
        "upload_presets",
        name
    ];
    return call_api("get", uri, {}, callback, options);
};
exports.delete_upload_preset = function delete_upload_preset(name, callback, options = {}) {
    let uri;
    uri = [
        "upload_presets",
        name
    ];
    return call_api("delete", uri, {}, callback, options);
};
exports.update_upload_preset = function update_upload_preset(name, callback, options = {}) {
    let params, uri;
    uri = [
        "upload_presets",
        name
    ];
    params = utils.merge(utils.clear_blank(utils.build_upload_params(options)), pickOnlyExistingValues(options, "unsigned", "disallow_public_id", "live"));
    return call_api("put", uri, params, callback, options);
};
exports.create_upload_preset = function create_upload_preset(callback, options = {}) {
    let params, uri;
    uri = [
        "upload_presets"
    ];
    params = utils.merge(utils.clear_blank(utils.build_upload_params(options)), pickOnlyExistingValues(options, "name", "unsigned", "disallow_public_id", "live"));
    return call_api("post", uri, params, callback, options);
};
exports.root_folders = function root_folders(callback, options = {}) {
    let uri, params;
    uri = [
        "folders"
    ];
    params = pickOnlyExistingValues(options, "next_cursor", "max_results");
    return call_api("get", uri, params, callback, options);
};
exports.sub_folders = function sub_folders(path, callback, options = {}) {
    let uri, params;
    uri = [
        "folders",
        path
    ];
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
 */ exports.create_folder = function create_folder(path, callback, options = {}) {
    let uri;
    uri = [
        "folders",
        path
    ];
    return call_api("post", uri, {}, callback, options);
};
exports.delete_folder = function delete_folder(path, callback, options = {}) {
    let uri;
    uri = [
        "folders",
        path
    ];
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
    return call_api("get", "upload_mappings", {
        folder: name
    }, callback, options);
};
exports.delete_upload_mapping = function delete_upload_mapping(name, callback, options = {}) {
    return call_api("delete", "upload_mappings", {
        folder: name
    }, callback, options);
};
exports.update_upload_mapping = function update_upload_mapping(name, callback, options = {}) {
    let params;
    params = pickOnlyExistingValues(options, "template");
    params.folder = name;
    return call_api("put", "upload_mappings", params, callback, options);
};
exports.create_upload_mapping = function create_upload_mapping(name, callback, options = {}) {
    let params;
    params = pickOnlyExistingValues(options, "template");
    params.folder = name;
    return call_api("post", "upload_mappings", params, callback, options);
};
function publishResource(byKey, value, callback, options = {}) {
    let params, resource_type, uri;
    params = pickOnlyExistingValues(options, "type", "invalidate", "overwrite");
    params[byKey] = value;
    resource_type = options.resource_type || "image";
    uri = [
        "resources",
        resource_type,
        "publish_resources"
    ];
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
    return call_api("post", "streaming_profiles", params, callback, options);
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
    options.content_type = "json";
    return call_api("post", "resources/search", params, callback, options);
};
exports.visual_search = function visual_search(params, callback, options = {}) {
    const allowedParams = pickOnlyExistingValues(params, "image_url", "image_asset_id", "text");
    return call_api("get", [
        "resources",
        "visual_search"
    ], allowedParams, callback, options);
};
exports.search_folders = function search_folders(params, callback, options = {}) {
    options.content_type = "json";
    return call_api("post", "folders/search", params, callback, options);
};
exports.update_resources_access_mode_by_prefix = function update_resources_access_mode_by_prefix(access_mode, prefix, callback, options = {}) {
    return updateResourcesAccessMode(access_mode, "prefix", prefix, callback, options);
};
exports.update_resources_access_mode_by_tag = function update_resources_access_mode_by_tag(access_mode, tag, callback, options = {}) {
    return updateResourcesAccessMode(access_mode, "tag", tag, callback, options);
};
exports.update_resources_access_mode_by_ids = function update_resources_access_mode_by_ids(access_mode, ids, callback, options = {}) {
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
 */ exports.add_metadata_field = function add_metadata_field(field, callback, options = {}) {
    const params = pickOnlyExistingValues(field, "external_id", "type", "label", "mandatory", "default_value", "validation", "datasource", "restrictions");
    options.content_type = "json";
    return call_api("post", [
        "metadata_fields"
    ], params, callback, options);
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
 */ exports.list_metadata_fields = function list_metadata_fields(callback, options = {}) {
    return call_api("get", [
        "metadata_fields"
    ], {}, callback, options);
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
 */ exports.delete_metadata_field = function delete_metadata_field(field_external_id, callback, options = {}) {
    return call_api("delete", [
        "metadata_fields",
        field_external_id
    ], {}, callback, options);
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
 */ exports.metadata_field_by_field_id = function metadata_field_by_field_id(external_id, callback, options = {}) {
    return call_api("get", [
        "metadata_fields",
        external_id
    ], {}, callback, options);
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
 */ exports.update_metadata_field = function update_metadata_field(external_id, field, callback, options = {}) {
    const params = pickOnlyExistingValues(field, "external_id", "type", "label", "mandatory", "default_value", "validation", "datasource", "restrictions");
    options.content_type = "json";
    return call_api("put", [
        "metadata_fields",
        external_id
    ], params, callback, options);
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
 */ exports.update_metadata_field_datasource = function update_metadata_field_datasource(field_external_id, entries_external_id, callback, options = {}) {
    const params = pickOnlyExistingValues(entries_external_id, "values");
    options.content_type = "json";
    return call_api("put", [
        "metadata_fields",
        field_external_id,
        "datasource"
    ], params, callback, options);
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
 */ exports.delete_datasource_entries = function delete_datasource_entries(field_external_id, entries_external_id, callback, options = {}) {
    options.content_type = "json";
    const params = {
        external_ids: entries_external_id
    };
    return call_api("delete", [
        "metadata_fields",
        field_external_id,
        "datasource"
    ], params, callback, options);
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
 */ exports.restore_metadata_field_datasource = function restore_metadata_field_datasource(field_external_id, entries_external_id, callback, options = {}) {
    options.content_type = "json";
    const params = {
        external_ids: entries_external_id
    };
    return call_api("post", [
        "metadata_fields",
        field_external_id,
        "datasource_restore"
    ], params, callback, options);
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
 */ exports.order_metadata_field_datasource = function order_metadata_field_datasource(field_external_id, sort_by, direction, callback, options = {}) {
    options.content_type = "json";
    const params = {
        order_by: sort_by,
        direction: direction
    };
    return call_api("post", [
        "metadata_fields",
        field_external_id,
        "datasource",
        "order"
    ], params, callback, options);
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
 */ exports.reorder_metadata_fields = function reorder_metadata_fields(order_by, direction, callback, options = {}) {
    options.content_type = "json";
    const params = {
        order_by,
        direction
    };
    return call_api("put", [
        "metadata_fields",
        "order"
    ], params, callback, options);
};
exports.list_metadata_rules = function list_metadata_rules(callback, options = {}) {
    return call_api("get", [
        "metadata_rules"
    ], {}, callback, options);
};
exports.add_metadata_rule = function add_metadata_rule(metadata_rule, callback, options = {}) {
    options.content_type = "json";
    const params = pickOnlyExistingValues(metadata_rule, "metadata_field_id", "condition", "result", "name");
    return call_api("post", [
        "metadata_rules"
    ], params, callback, options);
};
exports.update_metadata_rule = function update_metadata_rule(field_external_id, updated_metadata_rule, callback, options = {}) {
    options.content_type = "json";
    const params = pickOnlyExistingValues(updated_metadata_rule, "metadata_field_id", "condition", "result", "name", "state");
    return call_api("put", [
        "metadata_rules",
        field_external_id
    ], params, callback, options);
};
exports.delete_metadata_rule = function delete_metadata_rule(field_external_id, callback, options = {}) {
    return call_api("delete", [
        "metadata_rules",
        field_external_id
    ], {}, callback, options);
};


/***/ }),

/***/ 90086:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
// eslint-disable-next-line import/order

const config = __webpack_require__(21833);
const utils = __webpack_require__(55604);
const ensureOption = (__webpack_require__(59482).defaults)(config());
const execute_request = __webpack_require__(2176);
const { ensurePresenceOf } = utils;
function call_account_api(method, uri, params, callback, options) {
    ensurePresenceOf({
        method,
        uri
    });
    const cloudinary = ensureOption(options, "upload_prefix", "https://api.cloudinary.com");
    const account_id = ensureOption(options, "account_id");
    const api_url = [
        cloudinary,
        "v1_1",
        "provisioning",
        "accounts",
        account_id
    ].concat(uri).join("/");
    const auth = {
        key: ensureOption(options, "provisioning_api_key"),
        secret: ensureOption(options, "provisioning_api_secret")
    };
    return execute_request(method, params, auth, api_url, callback, options);
}
module.exports = call_account_api;


/***/ }),

/***/ 11490:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

const utils = __webpack_require__(55604);
const config = __webpack_require__(21833);
const ensureOption = (__webpack_require__(59482).defaults)(config());
const execute_request = __webpack_require__(2176);
const { ensurePresenceOf } = utils;
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
    options.content_type = "json";
    return execute_request(method, params, auth, api_url, callback, options);
}
module.exports = {
    call_analysis_api
};


/***/ }),

/***/ 76610:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
// eslint-disable-next-line import/order

const config = __webpack_require__(21833);
const utils = __webpack_require__(55604);
const ensureOption = (__webpack_require__(59482).defaults)(config());
const execute_request = __webpack_require__(2176);
const { ensurePresenceOf } = utils;
function call_api(method, uri, params, callback, options) {
    ensurePresenceOf({
        method,
        uri
    });
    const api_url = utils.base_api_url_v1()(uri, options);
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
    return execute_request(method, params, auth, api_url, callback, options);
}
module.exports = call_api;


/***/ }),

/***/ 2176:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
// eslint-disable-next-line import/order

const config = __webpack_require__(21833);
const https = /^http:/.test(config().upload_prefix) ? __webpack_require__(13685) : __webpack_require__(95687);
const querystring = __webpack_require__(63477);
const Q = __webpack_require__(92895);
const url = __webpack_require__(57310);
const utils = __webpack_require__(55604);
const ensureOption = (__webpack_require__(59482).defaults)(config());
const { extend, includes, isEmpty } = utils;
const agent = config.api_proxy ? new https.Agent(config.api_proxy) : null;
function execute_request(method, params, auth, api_url, callback, options = {}) {
    method = method.toUpperCase();
    const deferred = Q.defer();
    let query_params, handle_response; // declare to user later
    let key = auth.key;
    let secret = auth.secret;
    let oauth_token = auth.oauth_token;
    let content_type = "application/x-www-form-urlencoded";
    if (options.content_type === "json") {
        query_params = JSON.stringify(params);
        content_type = "application/json";
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
            "Content-Type": content_type,
            "User-Agent": utils.getUserAgent()
        }
    });
    if (oauth_token) {
        request_options.headers.Authorization = `Bearer ${oauth_token}`;
    } else {
        request_options.auth = key + ":" + secret;
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
        request_options.headers["Content-Length"] = Buffer.byteLength(query_params);
    }
    handle_response = function(res) {
        const { hide_sensitive = false } = config();
        const sanitizedOptions = {
            ...request_options
        };
        if (hide_sensitive === true) {
            if ("auth" in sanitizedOptions) {
                delete sanitizedOptions.auth;
            }
            if ("Authorization" in sanitizedOptions.headers) {
                delete sanitizedOptions.headers.Authorization;
            }
        }
        if (includes([
            200,
            400,
            401,
            403,
            404,
            409,
            420,
            500
        ], res.statusCode)) {
            let buffer = "";
            let error = false;
            res.on("data", function(d) {
                buffer += d;
                return buffer;
            });
            res.on("end", function() {
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
            res.on("error", function(e) {
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
    request.on("error", function(e) {
        deferred.reject(e);
        return typeof callback === "function" ? callback({
            error: e
        }) : void 0;
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

/***/ 95861:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/**
 * Authorization Token
 * @module auth_token
 */ 
const crypto = __webpack_require__(6113);
const smart_escape = __webpack_require__(39535);
const unsafe = /([ "#%&'/:;<=>?@[\]^`{|}~]+)/g;
function digest(message, key) {
    return crypto.createHmac("sha256", Buffer.from(key, "hex")).update(message).digest("hex");
}
/**
 * Escape url using lowercase hex code
 * @param {string} url a url string
 * @return {string} escaped url
 */ function escapeToLower(url) {
    const safeUrl = smart_escape(url, unsafe);
    return safeUrl.replace(/%../g, function(match) {
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
 */ /**
 * Generate an authorization token
 * @param {authTokenOptions} options
 * @returns {string} the authorization token
 */ module.exports = function(options) {
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
    let toSign = [
        ...tokenParts
    ];
    if (options.url != null && options.acl == null) {
        let url = escapeToLower(options.url);
        toSign.push(`url=${url}`);
    }
    let auth = digest(toSign.join(tokenSeparator), options.key);
    tokenParts.push(`hmac=${auth}`);
    if (!options.url && !options.acl) {
        throw "authToken must contain either an acl or a url property";
    }
    return `${tokenName}=${tokenParts.join(tokenSeparator)}`;
};


/***/ }),

/***/ 91234:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* eslint-disable class-methods-use-this */ 
const CACHE = Symbol.for("com.cloudinary.cache");
const CACHE_ADAPTER = Symbol.for("com.cloudinary.cacheAdapter");
const { ensurePresenceOf, generate_transformation_string } = __webpack_require__(55604);
/**
 * The adapter used to communicate with the underlying cache storage
 */ class CacheAdapter {
    /**
   * Get a value from the cache
   * @param {string} publicId
   * @param {string} type
   * @param {string} resourceType
   * @param {string} transformation
   * @param {string} format
   * @return {*} the value associated with the provided arguments
   */ get(publicId, type, resourceType, transformation, format) {}
    /**
   * Set a new value in the cache
   * @param {string} publicId
   * @param {string} type
   * @param {string} resourceType
   * @param {string} transformation
   * @param {string} format
   * @param {*} value
   */ set(publicId, type, resourceType, transformation, format, value) {}
    /**
   * Delete all values in the cache
   */ flushAll() {}
}
/**
 * @class Cache
 * Stores and retrieves values identified by publicId / options pairs
 */ const Cache = {
    /**
   * The adapter interface. Extend this class to implement a specific adapter.
   * @type CacheAdapter
   */ CacheAdapter,
    /**
   * Set the cache adapter
   * @param {CacheAdapter} adapter The cache adapter
   */ setAdapter (adapter) {
        if (this.adapter) {
            console.warn("Overriding existing cache adapter");
        }
        this.adapter = adapter;
    },
    /**
   * Get the adapter the Cache is using
   * @return {CacheAdapter} the current cache adapter
   */ getAdapter () {
        return this.adapter;
    },
    /**
   * Get an item from the cache
   * @param {string} publicId
   * @param {object} options
   * @return {*}
   */ get (publicId, options) {
        if (!this.adapter) {
            return undefined;
        }
        ensurePresenceOf({
            publicId
        });
        let transformation = generate_transformation_string({
            ...options
        });
        return this.adapter.get(publicId, options.type || "upload", options.resource_type || "image", transformation, options.format);
    },
    /**
   * Set a new value in the cache
   * @param {string} publicId
   * @param {object} options
   * @param {*} value
   * @return {*}
   */ set (publicId, options, value) {
        if (!this.adapter) {
            return undefined;
        }
        ensurePresenceOf({
            publicId,
            value
        });
        let transformation = generate_transformation_string({
            ...options
        });
        return this.adapter.set(publicId, options.type || "upload", options.resource_type || "image", transformation, options.format, value);
    },
    /**
   * Clear all items in the cache
   * @return {*} Returns the value from the adapter's flushAll() method
   */ flushAll () {
        if (!this.adapter) {
            return undefined;
        }
        return this.adapter.flushAll();
    }
};
// Define singleton property
Object.defineProperty(Cache, "instance", {
    get () {
        return global[CACHE];
    }
});
Object.defineProperty(Cache, "adapter", {
    /**
   *
   * @return {CacheAdapter} The current cache adapter
   */ get () {
        return global[CACHE_ADAPTER];
    },
    /**
   * Set the cache adapter to be used by Cache
   * @param {CacheAdapter} adapter Cache adapter
   */ set (adapter) {
        global[CACHE_ADAPTER] = adapter;
    }
});
Object.freeze(Cache);
// Instantiate the singleton
let symbols = Object.getOwnPropertySymbols(global);
if (symbols.indexOf(CACHE) < 0) {
    global[CACHE] = Cache;
}
/**
 * Store key value pairs

 */ module.exports = Cache;


/***/ }),

/***/ 20737:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

const _ = __webpack_require__(46517);
exports.config = __webpack_require__(21833);
exports.utils = __webpack_require__(55604);
exports.uploader = __webpack_require__(97204);
exports.api = __webpack_require__(703);
exports.analysis = __webpack_require__(23784);
const account = __webpack_require__(58170);
exports.provisioning = {
    account: account
};
exports.PreloadedFile = __webpack_require__(17209);
exports.Cache = __webpack_require__(91234);
const cloudinary = module.exports;
const optionConsume = cloudinary.utils.option_consume;
exports.url = function url(public_id, options) {
    options = _.extend({}, options);
    return cloudinary.utils.url(public_id, options);
};
const { generateImageResponsiveAttributes, generateMediaAttr } = __webpack_require__(97540);
/**
 * Helper function, allows chaining transformation to the end of transformation list
 *
 * @private
 * @param {object} options Original options
 * @param {object|object[]} transformation Transformations to chain at the end
 *
 * @return {object} Resulting options
 */ function chainTransformations(options, transformation = []) {
    // preserve url options
    let urlOptions = cloudinary.utils.extractUrlParams(options);
    let currentTransformation = cloudinary.utils.extractTransformationParams(options);
    transformation = cloudinary.utils.build_array(transformation);
    urlOptions.transformation = [
        currentTransformation,
        ...transformation
    ];
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
 */ exports.image = function image(source, options) {
    let localOptions = _.extend({}, options);
    let srcsetParam = optionConsume(localOptions, "srcset");
    let attributes = optionConsume(localOptions, "attributes", {});
    let src = cloudinary.utils.url(source, localOptions);
    if ("html_width" in localOptions) localOptions.width = optionConsume(localOptions, "html_width");
    if ("html_height" in localOptions) localOptions.height = optionConsume(localOptions, "html_height");
    let client_hints = optionConsume(localOptions, "client_hints", cloudinary.config().client_hints);
    let responsive = optionConsume(localOptions, "responsive");
    let hidpi = optionConsume(localOptions, "hidpi");
    if ((responsive || hidpi) && !client_hints) {
        localOptions["data-src"] = src;
        let classes = [
            responsive ? "cld-responsive" : "cld-hidpi"
        ];
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
 */ exports.video = function video(public_id, options) {
    options = _.extend({}, options);
    public_id = public_id.replace(/\.(mp4|ogv|webm)$/, "");
    let source_types = optionConsume(options, "source_types", []);
    let source_transformation = optionConsume(options, "source_transformation", {});
    let sources = optionConsume(options, "sources", []);
    let fallback = optionConsume(options, "fallback_content", "");
    if (source_types.length === 0) source_types = cloudinary.utils.DEFAULT_VIDEO_SOURCE_TYPES;
    let video_options = _.cloneDeep(options);
    if (video_options.hasOwnProperty("poster")) {
        if (_.isPlainObject(video_options.poster)) {
            if (video_options.poster.hasOwnProperty("public_id")) {
                video_options.poster = cloudinary.utils.url(video_options.poster.public_id, video_options.poster);
            } else {
                video_options.poster = cloudinary.utils.url(public_id, _.extend({}, cloudinary.utils.DEFAULT_POSTER_OPTIONS, video_options.poster));
            }
        }
    } else {
        video_options.poster = cloudinary.utils.url(public_id, _.extend({}, cloudinary.utils.DEFAULT_POSTER_OPTIONS, options));
    }
    if (!video_options.poster) delete video_options.poster;
    let html = "<video ";
    if (!video_options.hasOwnProperty("resource_type")) video_options.resource_type = "video";
    let multi_source_types = _.isArray(source_types) && source_types.length > 1;
    let has_sources = _.isArray(sources) && sources.length > 0;
    let source = public_id;
    if (!multi_source_types && !has_sources) {
        source = source + "." + cloudinary.utils.build_array(source_types)[0];
    }
    let src = cloudinary.utils.url(source, video_options);
    if (!multi_source_types && !has_sources) video_options.src = src;
    if (video_options.hasOwnProperty("html_width")) video_options.width = optionConsume(video_options, "html_width");
    if (video_options.hasOwnProperty("html_height")) video_options.height = optionConsume(video_options, "html_height");
    html = html + cloudinary.utils.html_attrs(video_options) + ">";
    if (multi_source_types && !has_sources) {
        sources = source_types.map((source_type)=>({
                type: source_type,
                transformations: source_transformation[source_type] || {}
            }));
    }
    if (_.isArray(sources) && sources.length > 0) {
        html += sources.map((source_data)=>{
            let source_type = source_data.type;
            let codecs = source_data.codecs;
            let transformation = source_data.transformations || {};
            src = cloudinary.utils.url(source + "." + source_type, _.extend({
                resource_type: "video"
            }, _.cloneDeep(options), _.cloneDeep(transformation)));
            return cloudinary.utils.create_source_tag(src, source_type, codecs);
        }).join("");
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
 */ exports.source = function source(public_id, options = {}) {
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
 */ exports.picture = function picture(public_id, options = {}) {
    let sources = options.sources || [];
    options = cloudinary.utils.clone(options);
    delete options.sources;
    cloudinary.utils.patchFetchFormat(options);
    return "<picture>" + sources.map((source)=>{
        let sourceOptions = chainTransformations(options, source.transformation);
        sourceOptions.media = source;
        return cloudinary.source(public_id, sourceOptions);
    }).join("") + cloudinary.image(public_id, options) + "</picture>";
};
exports.cloudinary_js_config = cloudinary.utils.cloudinary_js_config;
exports.CF_SHARED_CDN = cloudinary.utils.CF_SHARED_CDN;
exports.AKAMAI_SHARED_CDN = cloudinary.utils.AKAMAI_SHARED_CDN;
exports.SHARED_CDN = cloudinary.utils.SHARED_CDN;
exports.BLANK = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
exports.v2 = __webpack_require__(30235);


/***/ }),

/***/ 21833:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/**
 * Assign a value to a nested object
 * @function putNestedValue
 * @param params the parent object - this argument will be modified!
 * @param key key in the form nested[innerkey]
 * @param value the value to assign
 * @return the modified params object
 */ 
const url = __webpack_require__(57310);
const extend = __webpack_require__(48390);
const isObject = __webpack_require__(75795);
const isString = __webpack_require__(97026);
const isUndefined = __webpack_require__(22133);
const isEmpty = __webpack_require__(89699);
const entries = __webpack_require__(7800);
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
 */ function putNestedValue(params, key, value) {
    let chain = key.split(/[\[\]]+/).filter((i)=>i.length);
    let outer = params;
    let lastKey = chain.pop();
    for(let j = 0; j < chain.length; j++){
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
    if (uri.protocol === "cloudinary:") {
        conf = Object.assign({}, conf, {
            cloud_name: uri.host,
            api_key: uri.auth && uri.auth.split(":")[0],
            api_secret: uri.auth && uri.auth.split(":")[1],
            private_cdn: uri.pathname != null,
            secure_distribution: uri.pathname && uri.pathname.substring(1)
        });
    } else if (uri.protocol === "account:") {
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
        entries(uri.query).forEach(([key, value])=>putNestedValue(confToExtend, key, value));
    }
}
function extendCloudinaryConfig(parsedConfig, confToExtend = {}) {
    entries(parsedConfig).forEach(([key, value])=>{
        if (value !== undefined) {
            confToExtend[key] = value;
        }
    });
    return confToExtend;
}
module.exports = function(new_config, new_value) {
    if (cloudinary_config == null || new_config === true) {
        if (cloudinary_config == null) {
            cloudinary_config = {};
        } else {
            Object.keys(cloudinary_config).forEach((key)=>delete cloudinary_config[key]);
        }
        let CLOUDINARY_ENV_URL = process.env.CLOUDINARY_URL;
        let CLOUDINARY_ENV_ACCOUNT_URL = process.env.CLOUDINARY_ACCOUNT_URL;
        let CLOUDINARY_API_PROXY = process.env.CLOUDINARY_API_PROXY;
        if (CLOUDINARY_ENV_URL && !CLOUDINARY_ENV_URL.toLowerCase().startsWith("cloudinary://")) {
            throw new Error("Invalid CLOUDINARY_URL protocol. URL should begin with 'cloudinary://'");
        }
        if (CLOUDINARY_ENV_ACCOUNT_URL && !CLOUDINARY_ENV_ACCOUNT_URL.toLowerCase().startsWith("account://")) {
            throw new Error("Invalid CLOUDINARY_ACCOUNT_URL protocol. URL should begin with 'account://'");
        }
        if (!isEmpty(CLOUDINARY_API_PROXY)) {
            extendCloudinaryConfig({
                api_proxy: CLOUDINARY_API_PROXY
            }, cloudinary_config);
        }
        [
            CLOUDINARY_ENV_URL,
            CLOUDINARY_ENV_ACCOUNT_URL
        ].forEach((ENV_URL)=>{
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

/***/ 17209:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

let PRELOADED_CLOUDINARY_PATH, config, utils;
utils = __webpack_require__(55604);
config = __webpack_require__(21833);
PRELOADED_CLOUDINARY_PATH = /^([^\/]+)\/([^\/]+)\/v(\d+)\/([^#]+)#([^\/]+)$/;
class PreloadedFile {
    constructor(file_info){
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
            return [
                identifier,
                null
            ];
        }
        public_id = identifier.substr(0, last_dot);
        format = identifier.substr(last_dot + 1);
        return [
            public_id,
            format
        ];
    }
    identifier() {
        return `v${this.version}/${this.filename}`;
    }
    toString() {
        return `${this.resource_type}/${this.type}/v${this.version}/${this.filename}#${this.signature}`;
    }
    toJSON() {
        let result = {};
        Object.getOwnPropertyNames(this).forEach((key)=>{
            let val = this[key];
            if (typeof val !== "function") {
                result[key] = val;
            }
        });
        return result;
    }
}
module.exports = PreloadedFile;


/***/ }),

/***/ 58170:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

const utils = __webpack_require__(55604);
const call_account_api = __webpack_require__(90086);
const { pickOnlyExistingValues } = utils;
/**
 * @desc Lists sub-accounts.
 * @param [enabled] {boolean} - Whether to only return enabled sub-accounts (true) or disabled accounts (false).
 *                              Default: all accounts are returned (both enabled and disabled).
 * @param [ids] {number[]} - A list of up to 100 sub-account IDs. When provided, other parameters are ignored.
 * @param [prefix] {string} - Returns accounts where the name begins with the specified case-insensitive string.
 * @param [options] {object} - See {@link https://cloudinary.com/documentation/cloudinary_sdks#configuration_parameters|Configuration parameters} in the SDK documentation.
 * @param [callback] {function}
 */ function sub_accounts(enabled, ids = [], prefix, options = {}, callback) {
    let params = {
        enabled,
        ids,
        prefix
    };
    let uri = [
        "sub_accounts"
    ];
    return call_account_api("GET", uri, params, callback, options);
}
/**
 * @desc Retrieves the details of the specified sub-account.
 * @param sub_account_id {string} - The ID of the sub-account.
 * @param [options] {object} - See {@link https://cloudinary.com/documentation/cloudinary_sdks#configuration_parameters|Configuration parameters} in the SDK documentation.
 * @param [callback] {function}
 */ function sub_account(sub_account_id, options = {}, callback) {
    let uri = [
        "sub_accounts",
        sub_account_id
    ];
    return call_account_api("GET", uri, {}, callback, options);
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
 */ function create_sub_account(name, cloud_name, custom_attributes, enabled, base_account, options = {}, callback) {
    let params = {
        cloud_name: cloud_name,
        name,
        custom_attributes: custom_attributes,
        enabled,
        base_sub_account_id: base_account
    };
    options.content_type = "json";
    let uri = [
        "sub_accounts"
    ];
    return call_account_api("POST", uri, params, callback, options);
}
/**
 * @desc Deletes the specified sub-account. Supported only for accounts with fewer than 1000 assets.
 * @param sub_account_id {string} - The ID of the sub-account to delete.
 * @param [options] {object} - See {@link https://cloudinary.com/documentation/cloudinary_sdks#configuration_parameters|Configuration parameters} in the SDK documentation.
 * @param [callback] {function}
 */ function delete_sub_account(sub_account_id, options = {}, callback) {
    let uri = [
        "sub_accounts",
        sub_account_id
    ];
    return call_account_api("DELETE", uri, {}, callback, options);
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
 */ function update_sub_account(sub_account_id, name, cloud_name, custom_attributes, enabled, options = {}, callback) {
    let params = {
        cloud_name: cloud_name,
        name,
        custom_attributes: custom_attributes,
        enabled
    };
    options.content_type = "json";
    let uri = [
        "sub_accounts",
        sub_account_id
    ];
    return call_account_api("PUT", uri, params, callback, options);
}
/**
 * @desc Returns the user with the specified ID.
 * @param user_id {string} - The ID of the user.
 * @param [options] {object} - See {@link https://cloudinary.com/documentation/cloudinary_sdks#configuration_parameters|Configuration parameters} in the SDK documentation.
 * @param [callback] {function}
 */ function user(user_id, options = {}, callback) {
    let uri = [
        "users",
        user_id
    ];
    return call_account_api("GET", uri, {}, callback, options);
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
 */ function users(pending, user_ids, prefix, sub_account_id, options = {}, callback) {
    let uri = [
        "users"
    ];
    let params = {
        ids: user_ids,
        pending,
        prefix,
        sub_account_id
    };
    return call_account_api("GET", uri, pickOnlyExistingValues(params, "ids", "pending", "prefix", "sub_account_id"), callback, options);
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
 */ function create_user(name, email, role, sub_account_ids, options = {}, callback) {
    let uri = [
        "users"
    ];
    let params = {
        name,
        email,
        role,
        sub_account_ids: sub_account_ids
    };
    options.content_type = "json";
    return call_account_api("POST", uri, params, callback, options);
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
 */ function update_user(user_id, name, email, role, sub_account_ids, options = {}, callback) {
    let uri = [
        "users",
        user_id
    ];
    let params = {
        name,
        email,
        role,
        sub_account_ids: sub_account_ids
    };
    options.content_type = "json";
    return call_account_api("PUT", uri, params, callback, options);
}
/**
 * @desc Deletes an existing user.
 * @param user_id {string} - The ID of the user to delete.
 * @param [options] {object} - See {@link https://cloudinary.com/documentation/cloudinary_sdks#configuration_parameters|Configuration parameters} in the SDK documentation.
 * @param [callback] {function}
 */ function delete_user(user_id, options = {}, callback) {
    let uri = [
        "users",
        user_id
    ];
    return call_account_api("DELETE", uri, {}, callback, options);
}
/**
 * @desc Creates a new user group.
 * @param name {string} - The name for the user group.
 * @param [options] {object} - See {@link https://cloudinary.com/documentation/cloudinary_sdks#configuration_parameters|Configuration parameters} in the SDK documentation.
 * @param [callback] {function}
 */ function create_user_group(name, options = {}, callback) {
    let uri = [
        "user_groups"
    ];
    options.content_type = "json";
    let params = {
        name
    };
    return call_account_api("POST", uri, params, callback, options);
}
/**
 * @desc Updates the specified user group.
 * @param group_id {string} The ID of the user group to update.
 * @param name {string} - The name for the user group.
 * @param [options] {object} - See {@link https://cloudinary.com/documentation/cloudinary_sdks#configuration_parameters|Configuration parameters} in the SDK documentation.
 * @param [callback] {function}
 */ function update_user_group(group_id, name, options = {}, callback) {
    let uri = [
        "user_groups",
        group_id
    ];
    let params = {
        name
    };
    return call_account_api("PUT", uri, params, callback, options);
}
/**
 * @desc Deletes the user group with the specified ID.
 * @param group_id {string} The ID of the user group to delete.
 * @param [options] {object} - See {@link https://cloudinary.com/documentation/cloudinary_sdks#configuration_parameters|Configuration parameters} in the SDK documentation.
 * @param [callback] {function}
 */ function delete_user_group(group_id, options = {}, callback) {
    let uri = [
        "user_groups",
        group_id
    ];
    return call_account_api("DELETE", uri, {}, callback, options);
}
/**
 * @desc Adds a user to a group with the specified ID.
 * @param group_id {string} - The ID of the user group.
 * @param user_id {string} - The ID of the user.
 * @param [options] {object} - See {@link https://cloudinary.com/documentation/cloudinary_sdks#configuration_parameters|Configuration parameters} in the SDK documentation.
 * @param [callback] {function}
 */ function add_user_to_group(group_id, user_id, options = {}, callback) {
    let uri = [
        "user_groups",
        group_id,
        "users",
        user_id
    ];
    return call_account_api("POST", uri, {}, callback, options);
}
/**
 * @desc Removes a user from a group with the specified ID.
 * @param group_id {string} - The ID of the user group.
 * @param user_id {string} - The ID of the user.
 * @param [options] {object} - See {@link https://cloudinary.com/documentation/cloudinary_sdks#configuration_parameters|Configuration parameters} in the SDK documentation.
 * @param [callback] {function}
 */ function remove_user_from_group(group_id, user_id, options = {}, callback) {
    let uri = [
        "user_groups",
        group_id,
        "users",
        user_id
    ];
    return call_account_api("DELETE", uri, {}, callback, options);
}
/**
 * @desc Retrieves the details of the specified user group.
 * @param group_id {string} - The ID of the user group to retrieve.
 * @param [options] {object} - See {@link https://cloudinary.com/documentation/cloudinary_sdks#configuration_parameters|Configuration parameters} in the SDK documentation.
 * @param [callback] {function}
 */ function user_group(group_id, options = {}, callback) {
    let uri = [
        "user_groups",
        group_id
    ];
    return call_account_api("GET", uri, {}, callback, options);
}
/**
 * @desc Lists user groups in the account.
 * @param [options] {object} - See {@link https://cloudinary.com/documentation/cloudinary_sdks#configuration_parameters|Configuration parameters} in the SDK documentation.
 * @param [callback] {function}
 */ function user_groups(options = {}, callback) {
    let uri = [
        "user_groups"
    ];
    return call_account_api("GET", uri, {}, callback, options);
}
/**
 * @desc Lists users in the specified user group.
 * @param group_id {string} - The ID of the user group.
 * @param [options] {object} - See {@link https://cloudinary.com/documentation/cloudinary_sdks#configuration_parameters|Configuration parameters} in the SDK documentation.
 * @param [callback] {function}
 */ function user_group_users(group_id, options = {}, callback) {
    let uri = [
        "user_groups",
        group_id,
        "users"
    ];
    return call_account_api("GET", uri, {}, callback, options);
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

/***/ 70430:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

const Transform = (__webpack_require__(12781).Transform);
class UploadStream extends Transform {
    constructor(options){
        super();
        this.boundary = options.boundary;
    }
    _transform(data, encoding, next) {
        let buffer = Buffer.isBuffer(data) ? data : Buffer.from(data, encoding);
        this.push(buffer);
        next();
    }
    _flush(next) {
        this.push(Buffer.from("\r\n", "ascii"));
        this.push(Buffer.from("--" + this.boundary + "--", "ascii"));
        return next();
    }
}
module.exports = UploadStream;


/***/ }),

/***/ 97204:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

const fs = __webpack_require__(57147);
const { extname, basename } = __webpack_require__(71017);
const Q = __webpack_require__(92895);
const Writable = (__webpack_require__(12781).Writable);
const urlLib = __webpack_require__(57310);
// eslint-disable-next-line import/order
const { upload_prefix } = __webpack_require__(21833)();
const isSecure = !(upload_prefix && upload_prefix.slice(0, 5) === "http:");
const https = isSecure ? __webpack_require__(95687) : __webpack_require__(13685);
const Cache = __webpack_require__(91234);
const utils = __webpack_require__(55604);
const UploadStream = __webpack_require__(70430);
const config = __webpack_require__(21833);
const ensureOption = (__webpack_require__(59482).defaults)(config());
const agent = config.api_proxy ? new https.Agent(config.api_proxy) : null;
const { build_upload_params, extend, includes, isEmpty, isObject, isRemoteUrl, merge, pickOnlyExistingValues } = utils;
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
    return call_api("upload", callback, options, function() {
        let params = build_upload_params(options);
        return isRemoteUrl(file) ? [
            params,
            {
                file: file
            }
        ] : [
            params,
            {},
            file
        ];
    });
};
exports.upload_large = function upload_large(path, callback, options = {}) {
    if (path != null && isRemoteUrl(path)) {
        // upload a remote file
        return exports.upload(path, callback, options);
    }
    if (path != null && !options.filename) {
        options.filename = path.split(/(\\|\/)/g).pop().replace(/\.[^/.]+$/, "");
    }
    return exports.upload_chunked(path, callback, extend({
        resource_type: "raw"
    }, options));
};
exports.upload_chunked = function upload_chunked(path, callback, options) {
    let file_reader = fs.createReadStream(path);
    let out_stream = exports.upload_chunked_stream(callback, options);
    return file_reader.pipe(out_stream);
};
class Chunkable extends Writable {
    constructor(options){
        super(options);
        this.chunk_size = options.chunk_size != null ? options.chunk_size : 20000000;
        this.buffer = Buffer.alloc(0);
        this.active = true;
        this.on("finish", ()=>{
            if (this.active) {
                this.emit("ready", this.buffer, true, function() {});
            }
        });
    }
    _write(data, encoding, done) {
        if (!this.active) {
            done();
        }
        if (this.buffer.length + data.length <= this.chunk_size) {
            this.buffer = Buffer.concat([
                this.buffer,
                data
            ], this.buffer.length + data.length);
            done();
        } else {
            const grab = this.chunk_size - this.buffer.length;
            this.buffer = Buffer.concat([
                this.buffer,
                data.slice(0, grab)
            ], this.buffer.length + grab);
            this.emit("ready", this.buffer, false, (active)=>{
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
        resource_type: "raw"
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
    chunker.on("ready", function(buffer, is_last, done) {
        let chunk_start = sent;
        sent += buffer.length;
        options.content_range = `bytes ${chunk_start}-${sent - 1}/${is_last ? sent : -1}`;
        params.timestamp = utils.timestamp();
        let finished_part = function(result) {
            const errorOrLast = result.error != null || is_last;
            if (errorOrLast && typeof callback === "function") {
                callback(result);
            }
            return done(!errorOrLast);
        };
        let stream = call_api("upload", finished_part, options, function() {
            return [
                params,
                {},
                buffer
            ];
        });
        return stream.write(buffer, "buffer", function() {
            return stream.end();
        });
    });
    return chunker;
};
exports.explicit = function explicit(public_id, callback, options = {}) {
    return call_api("explicit", callback, options, function() {
        return utils.build_explicit_api_params(public_id, options);
    });
};
// Creates a new archive in the server and returns information in JSON format
exports.create_archive = function create_archive(callback, options = {}, target_format = null) {
    return call_api("generate_archive", callback, options, function() {
        let opt = utils.archive_params(options);
        if (target_format) {
            opt.target_format = target_format;
        }
        return [
            opt
        ];
    });
};
// Creates a new zip archive in the server and returns information in JSON format
exports.create_zip = function create_zip(callback, options = {}) {
    return exports.create_archive(callback, options, "zip");
};
exports.create_slideshow = function create_slideshow(options, callback) {
    options.resource_type = ensureOption(options, "resource_type", "video");
    return call_api("create_slideshow", callback, options, function() {
        // Generate a transformation from the manifest_transformation key, which should be a valid transformation
        const manifest_transformation = utils.generate_transformation_string(extend({}, options.manifest_transformation));
        // Try to use {options.transformation} to generate a transformation (Example: options.transformation.width, options.transformation.height)
        const transformation = utils.generate_transformation_string(extend({}, ensureOption(options, "transformation", {})));
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
    return call_api("destroy", callback, options, function() {
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
    return call_api("rename", callback, options, function() {
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
const TEXT_PARAMS = [
    "public_id",
    "font_family",
    "font_size",
    "font_color",
    "text_align",
    "font_weight",
    "font_style",
    "background",
    "opacity",
    "text_decoration",
    "font_hinting",
    "font_antialiasing"
];
exports.text = function text(content, callback, options = {}) {
    return call_api("text", callback, options, function() {
        let textParams = pickOnlyExistingValues(options, ...TEXT_PARAMS);
        let params = {
            timestamp: utils.timestamp(),
            text: content,
            ...textParams
        };
        return [
            params
        ];
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
 */ exports.generate_sprite = function generate_sprite(tag, callback, options = {}) {
    return call_api("sprite", callback, options, function() {
        return [
            utils.build_multi_and_sprite_params(tag, options)
        ];
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
 */ exports.download_generated_sprite = function download_generated_sprite(tag, options = {}) {
    return utils.api_download_url("sprite", utils.build_multi_and_sprite_params(tag, options), options);
};
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
 */ exports.download_multi = function download_multi(tag, options = {}) {
    return utils.api_download_url("multi", utils.build_multi_and_sprite_params(tag, options), options);
};
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
 */ exports.multi = function multi(tag, callback, options = {}) {
    return call_api("multi", callback, options, function() {
        return [
            utils.build_multi_and_sprite_params(tag, options)
        ];
    });
};
exports.explode = function explode(public_id, callback, options = {}) {
    return call_api("explode", callback, options, function() {
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
 */ exports.add_tag = function add_tag(tag, public_ids = [], callback, options = {}) {
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
 */ exports.remove_tag = function remove_tag(tag, public_ids = [], callback, options = {}) {
    return call_tags_api(tag, "remove", public_ids, callback, options);
};
exports.remove_all_tags = function remove_all_tags(public_ids = [], callback, options = {}) {
    return call_tags_api(null, "remove_all", public_ids, callback, options);
};
exports.replace_tag = function replace_tag(tag, public_ids = [], callback, options = {}) {
    return call_tags_api(tag, "replace", public_ids, callback, options);
};
function call_tags_api(tag, command, public_ids = [], callback, options = {}) {
    return call_api("tags", callback, options, function() {
        let params = {
            timestamp: utils.timestamp(),
            public_ids: utils.build_array(public_ids),
            command: command,
            type: options.type
        };
        if (tag != null) {
            params.tag = tag;
        }
        return [
            params
        ];
    });
}
exports.add_context = function add_context(context, public_ids = [], callback, options = {}) {
    return call_context_api(context, "add", public_ids, callback, options);
};
exports.remove_all_context = function remove_all_context(public_ids = [], callback, options = {}) {
    return call_context_api(null, "remove_all", public_ids, callback, options);
};
function call_context_api(context, command, public_ids = [], callback, options = {}) {
    return call_api("context", callback, options, function() {
        let params = {
            timestamp: utils.timestamp(),
            public_ids: utils.build_array(public_ids),
            command: command,
            type: options.type
        };
        if (context != null) {
            params.context = utils.encode_context(context);
        }
        return [
            params
        ];
    });
}
/**
 * Cache (part of) the upload results.
 * @param result
 * @param {object} options
 * @param {string} options.type
 * @param {string} options.resource_type
 */ function cacheResults(result, { type, resource_type }) {
    if (result.responsive_breakpoints) {
        result.responsive_breakpoints.forEach(({ transformation, url, breakpoints })=>Cache.set(result.public_id, {
                type,
                resource_type,
                raw_transformation: transformation,
                format: extname(breakpoints[0].url).slice(1)
            }, breakpoints.map((i)=>i.width)));
    }
}
function parseResult(buffer, res) {
    let result = "";
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
        callback = function() {};
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
    let handle_response = function(res) {
        // let buffer;
        if (errorRaised) {
        // Already reported
        } else if (res.error) {
            errorRaised = true;
            if (USE_PROMISES) {
                deferred.reject(res);
            }
            callback(res);
        } else if (includes([
            200,
            400,
            401,
            404,
            420,
            500
        ], res.statusCode)) {
            let buffer = "";
            res.on("data", (d)=>{
                buffer += d;
                return buffer;
            });
            res.on("end", ()=>{
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
            res.on("error", (error)=>{
                errorRaised = true;
                if (USE_PROMISES) {
                    deferred.reject(error);
                }
                callback({
                    error
                });
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
            callback({
                error
            });
        }
    };
    let post_data = utils.hashToParameters(params).filter(([key, value])=>value != null).map(([key, value])=>Buffer.from(encodeFieldPart(boundary, key, value), "utf8"));
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
    let finish_buffer = Buffer.from("--" + boundary + "--", "ascii");
    let oauth_token = options.oauth_token || config().oauth_token;
    if (file != null || options.stream) {
        // eslint-disable-next-line no-nested-ternary
        let filename = options.stream ? options.filename ? options.filename : "file" : basename(file);
        file_header = Buffer.from(encodeFilePart(boundary, "application/octet-stream", "file", filename), "binary");
    }
    let post_options = urlLib.parse(url);
    let headers = {
        "Content-Type": `multipart/form-data; boundary=${boundary}`,
        "User-Agent": utils.getUserAgent()
    };
    if (options.content_range != null) {
        headers["Content-Range"] = options.content_range;
    }
    if (options.x_unique_upload_id != null) {
        headers["X-Unique-Upload-Id"] = options.x_unique_upload_id;
    }
    if (options.extra_headers !== null) {
        headers = merge(headers, options.extra_headers);
    }
    if (oauth_token != null) {
        headers.Authorization = `Bearer ${oauth_token}`;
    }
    post_options = extend(post_options, {
        method: "POST",
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
    let upload_stream = new UploadStream({
        boundary
    });
    upload_stream.pipe(post_request);
    let timeout = false;
    post_request.on("error", function(error) {
        if (timeout) {
            error = {
                message: "Request Timeout",
                http_code: 499,
                name: "TimeoutError"
            };
        }
        return callback({
            error
        });
    });
    post_request.setTimeout(options.timeout != null ? options.timeout : 60000, function() {
        timeout = true;
        return post_request.abort();
    });
    post_data.forEach((postDatum)=>post_request.write(postDatum));
    if (options.stream) {
        post_request.write(file_header);
        return upload_stream;
    }
    if (file != null) {
        post_request.write(file_header);
        fs.createReadStream(file).on("error", function(error) {
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
        "\r\n",
        `${value}\r\n`,
        ""
    ].join("");
}
function encodeFilePart(boundary, type, name, filename) {
    return [
        `--${boundary}\r\n`,
        `Content-Disposition: form-data; name="${name}"; filename="${filename}"\r\n`,
        `Content-Type: ${type}\r\n`,
        "\r\n",
        ""
    ].join("");
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
        "class": [
            html_options.class,
            "cloudinary-fileupload"
        ].join(" ")
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
 */ exports.update_metadata = function update_metadata(metadata, public_ids, callback, options = {}) {
    return call_api("metadata", callback, options, function() {
        let params = {
            metadata: utils.encode_context(metadata),
            public_ids: utils.build_array(public_ids),
            timestamp: utils.timestamp(),
            type: options.type,
            clear_invalid: options.clear_invalid
        };
        return [
            params
        ];
    });
};


/***/ }),

/***/ 53067:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

const reverseVersion = __webpack_require__(10501);
const stringPad = __webpack_require__(74319);
const base64Map = __webpack_require__(30296);
/**
 * @private
 * @description Encodes a semVer-like version string
 * @param {string} semVer Input can be either x.y.z or x.y
 * @return {string} A string built from 3 characters of the base64 table that encode the semVer
 */ module.exports = (semVer)=>{
    let strResult = "";
    // support x.y or x.y.z by using 'parts' as a variable
    let parts = semVer.split(".").length;
    let paddedStringLength = parts * 6; // we pad to either 12 or 18 characters
    // reverse (but don't mirror) the version. 1.5.15 -> 15.5.1
    // Pad to two spaces, 15.5.1 -> 15.05.01
    let paddedReversedSemver = reverseVersion(semVer);
    // turn 15.05.01 to a string '150501' then to a number 150501
    let num = parseInt(paddedReversedSemver.split(".").join(""));
    // Represent as binary, add left padding to 12 or 18 characters.
    // 150,501 -> 100100101111100101
    let paddedBinary = num.toString(2);
    paddedBinary = stringPad(paddedBinary, paddedStringLength, "0");
    // Stop in case an invalid version number was provided
    // paddedBinary must be built from sections of 6 bits
    if (paddedBinary.length % 6 !== 0) {
        throw "Version must be smaller than 43.21.26)";
    }
    // turn every 6 bits into a character using the base64Map
    paddedBinary.match(/.{1,6}/g).forEach((bitString)=>{
        // console.log(bitString);
        strResult += base64Map[bitString];
    });
    return strResult;
};


/***/ }),

/***/ 42555:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

const fs = __webpack_require__(57147);
const path = __webpack_require__(71017);
const sdkCode = "M"; // Constant per SDK
/**
 * @description Gets the relevant versions of the SDK(package version, node version and sdkCode)
 * @param {'default' | 'x.y.z' | 'x.y' | string} useSDKVersion Default uses package.json version
 * @param {'default' | 'x.y.z' | 'x.y' | string} useNodeVersion Default uses process.versions.node
 * @return {{sdkSemver:string, techVersion:string, sdkCode:string}} A map of relevant versions and codes
 */ function getSDKVersions(useSDKVersion = "default", useNodeVersion = "default") {
    const pkgJSONFile = fs.readFileSync(path.join(__dirname, "../../../package.json"), "utf-8");
    // allow to pass a custom SDKVersion
    const sdkSemver = useSDKVersion === "default" ? JSON.parse(pkgJSONFile).version : useSDKVersion;
    // allow to pass a custom techVersion (Node version)
    const techVersion = useNodeVersion === "default" ? process.versions.node : useNodeVersion;
    const product = "A";
    return {
        sdkSemver,
        techVersion,
        sdkCode,
        product
    };
}
module.exports = getSDKVersions;


/***/ }),

/***/ 88424:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

const removePatchFromSemver = __webpack_require__(19820);
const encodeVersion = __webpack_require__(53067);
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
 */ function getSDKAnalyticsSignature(analyticsOptions = {}) {
    try {
        const twoPartVersion = removePatchFromSemver(analyticsOptions.techVersion);
        const encodedSDKVersion = encodeVersion(analyticsOptions.sdkSemver);
        const encodedTechVersion = encodeVersion(twoPartVersion);
        const featureCode = analyticsOptions.feature;
        const SDKCode = analyticsOptions.sdkCode;
        const product = analyticsOptions.product;
        const algoVersion = "B"; // The algo version is determined here, it should not be an argument
        return `${algoVersion}${product}${SDKCode}${encodedSDKVersion}${encodedTechVersion}${featureCode}`;
    } catch (e) {
        // Either SDK or Node versions were unparsable
        return "E";
    }
}
/**
 * @description Gets the analyticsOptions from options - should include sdkSemver, techVersion, sdkCode, and feature
 * @param options
 * @returns {{sdkSemver: (string), sdkCode, product, feature: string, techVersion: (string)} || {}}
 */ function getAnalyticsOptions(options) {
    let analyticsOptions = {
        sdkSemver: options.sdkSemver,
        techVersion: options.techVersion,
        sdkCode: options.sdkCode,
        product: options.product,
        feature: "0"
    };
    if (options.urlAnalytics) {
        if (options.accessibility) {
            analyticsOptions.feature = "D";
        }
        if (options.loading === "lazy") {
            analyticsOptions.feature = "C";
        }
        if (options.responsive) {
            analyticsOptions.feature = "A";
        }
        if (options.placeholder) {
            analyticsOptions.feature = "B";
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

/***/ 19820:
/***/ ((module) => {

"use strict";
/**
 * @description Removes patch version from the semver if it exists
 *              Turns x.y.z OR x.y into x.y
 * @param {'x.y.z' || 'x.y' || string} semVerStr
 */ 
module.exports = (semVerStr)=>{
    let parts = semVerStr.split(".");
    return `${parts[0]}.${parts[1]}`;
};


/***/ }),

/***/ 10501:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

const stringPad = __webpack_require__(74319);
/**
 * @description A semVer like string, x.y.z or x.y is allowed
 *              Reverses the version positions, x.y.z turns to z.y.x
 *              Pads each segment with '0' so they have length of 2
 *              Example: 1.2.3 -> 03.02.01
 * @param {string} semVer Input can be either x.y.z or x.y
 * @return {string} in the form of zz.yy.xx (
 */ module.exports = (semVer)=>{
    if (semVer.split(".").length < 2) {
        throw new Error("invalid semVer, must have at least two segments");
    }
    // Split by '.', reverse, create new array with padded values and concat it together
    return semVer.split(".").reverse().map((segment)=>{
        return stringPad(segment, 2, "0");
    }).join(".");
};


/***/ }),

/***/ 74319:
/***/ ((module) => {

"use strict";

function repeatStringNumTimes(string, times) {
    let repeatedString = "";
    while(times > 0){
        repeatedString += string;
        times--;
    }
    return repeatedString;
}
module.exports = (value, targetLength, padString)=>{
    targetLength = targetLength >> 0; // truncate if number or convert non-number to 0;
    padString = String(typeof padString !== "undefined" ? padString : " ");
    if (value.length > targetLength) {
        return String(value);
    } else {
        targetLength = targetLength - value.length;
        if (targetLength > padString.length) {
            padString += repeatStringNumTimes(padString, targetLength / padString.length);
        }
        return padString.slice(0, targetLength) + String(value);
    }
};


/***/ }),

/***/ 20891:
/***/ ((module) => {

"use strict";

const DEFAULT_RESPONSIVE_WIDTH_TRANSFORMATION = {
    width: "auto",
    crop: "limit"
};
const DEFAULT_POSTER_OPTIONS = {
    format: "jpg",
    resource_type: "video"
};
const DEFAULT_VIDEO_SOURCE_TYPES = [
    "webm",
    "mp4",
    "ogv"
];
const CONDITIONAL_OPERATORS = {
    "=": "eq",
    "!=": "ne",
    "<": "lt",
    ">": "gt",
    "<=": "lte",
    ">=": "gte",
    "&&": "and",
    "||": "or",
    "*": "mul",
    "/": "div",
    "+": "add",
    "-": "sub",
    "^": "pow"
};
let SIMPLE_PARAMS = [
    [
        "audio_codec",
        "ac"
    ],
    [
        "audio_frequency",
        "af"
    ],
    [
        "bit_rate",
        "br"
    ],
    [
        "color_space",
        "cs"
    ],
    [
        "default_image",
        "d"
    ],
    [
        "delay",
        "dl"
    ],
    [
        "density",
        "dn"
    ],
    [
        "duration",
        "du"
    ],
    [
        "end_offset",
        "eo"
    ],
    [
        "fetch_format",
        "f"
    ],
    [
        "gravity",
        "g"
    ],
    [
        "page",
        "pg"
    ],
    [
        "prefix",
        "p"
    ],
    [
        "start_offset",
        "so"
    ],
    [
        "streaming_profile",
        "sp"
    ],
    [
        "video_codec",
        "vc"
    ],
    [
        "video_sampling",
        "vs"
    ]
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
    "angle",
    "aspect_ratio",
    "audio_codec",
    "audio_frequency",
    "background",
    "bit_rate",
    "border",
    "color",
    "color_space",
    "crop",
    "default_image",
    "delay",
    "density",
    "dpr",
    "duration",
    "effect",
    "end_offset",
    "fetch_format",
    "flags",
    "fps",
    "gravity",
    "height",
    "if",
    "keyframe_interval",
    "offset",
    "opacity",
    "overlay",
    "page",
    "prefix",
    "quality",
    "radius",
    "raw_transformation",
    "responsive_width",
    "size",
    "start_offset",
    "streaming_profile",
    "transformation",
    "underlay",
    "variables",
    "video_codec",
    "video_sampling",
    "width",
    "x",
    "y",
    "zoom" // + any key that starts with '$'
];
const LAYER_KEYWORD_PARAMS = {
    font_weight: "normal",
    font_style: "normal",
    text_decoration: "none",
    text_align: null,
    stroke: "none"
};
const UPLOAD_PREFIX = "https://api.cloudinary.com";
const SUPPORTED_SIGNATURE_ALGORITHMS = [
    "sha1",
    "sha256"
];
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

/***/ 80214:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* eslint-disable no-bitwise */ // http://kevin.vanzonneveld.net
// +   original by: Webtoolkit.info (http://www.webtoolkit.info/)
// +   improved by: T0bsn
// +   improved by: http://stackoverflow.com/questions/2647935/javascript-crc32-function-and-php-crc32-not-matching
// -    depends on: utf8_encode
// *     example 1: crc32('Kevin van Zonneveld')
// *     returns 1: 1249991249

const utf8_encode = __webpack_require__(46757);
/**
 * Compute the crc32 checksum if the given string
 * @private
 * @param {string} str
 * @return {number|*}
 */ function crc32(str) {
    let crc, i, iTop, table, x, y;
    str = utf8_encode(str);
    table = "00000000 77073096 EE0E612C 990951BA 076DC419 706AF48F E963A535 9E6495A3 0EDB8832 79DCB8A4 E0D5E91E 97D2D988 09B64C2B 7EB17CBD E7B82D07 90BF1D91 1DB71064 6AB020F2 F3B97148 84BE41DE 1ADAD47D 6DDDE4EB F4D4B551 83D385C7 136C9856 646BA8C0 FD62F97A 8A65C9EC 14015C4F 63066CD9 FA0F3D63 8D080DF5 3B6E20C8 4C69105E D56041E4 A2677172 3C03E4D1 4B04D447 D20D85FD A50AB56B 35B5A8FA 42B2986C DBBBC9D6 ACBCF940 32D86CE3 45DF5C75 DCD60DCF ABD13D59 26D930AC 51DE003A C8D75180 BFD06116 21B4F4B5 56B3C423 CFBA9599 B8BDA50F 2802B89E 5F058808 C60CD9B2 B10BE924 2F6F7C87 58684C11 C1611DAB B6662D3D 76DC4190 01DB7106 98D220BC EFD5102A 71B18589 06B6B51F 9FBFE4A5 E8B8D433 7807C9A2 0F00F934 9609A88E E10E9818 7F6A0DBB 086D3D2D 91646C97 E6635C01 6B6B51F4 1C6C6162 856530D8 F262004E 6C0695ED 1B01A57B 8208F4C1 F50FC457 65B0D9C6 12B7E950 8BBEB8EA FCB9887C 62DD1DDF 15DA2D49 8CD37CF3 FBD44C65 4DB26158 3AB551CE A3BC0074 D4BB30E2 4ADFA541 3DD895D7 A4D1C46D D3D6F4FB 4369E96A 346ED9FC AD678846 DA60B8D0 44042D73 33031DE5 AA0A4C5F DD0D7CC9 5005713C 270241AA BE0B1010 C90C2086 5768B525 206F85B3 B966D409 CE61E49F 5EDEF90E 29D9C998 B0D09822 C7D7A8B4 59B33D17 2EB40D81 B7BD5C3B C0BA6CAD EDB88320 9ABFB3B6 03B6E20C 74B1D29A EAD54739 9DD277AF 04DB2615 73DC1683 E3630B12 94643B84 0D6D6A3E 7A6A5AA8 E40ECF0B 9309FF9D 0A00AE27 7D079EB1 F00F9344 8708A3D2 1E01F268 6906C2FE F762575D 806567CB 196C3671 6E6B06E7 FED41B76 89D32BE0 10DA7A5A 67DD4ACC F9B9DF6F 8EBEEFF9 17B7BE43 60B08ED5 D6D6A3E8 A1D1937E 38D8C2C4 4FDFF252 D1BB67F1 A6BC5767 3FB506DD 48B2364B D80D2BDA AF0A1B4C 36034AF6 41047A60 DF60EFC3 A867DF55 316E8EEF 4669BE79 CB61B38C BC66831A 256FD2A0 5268E236 CC0C7795 BB0B4703 220216B9 5505262F C5BA3BBE B2BD0B28 2BB45A92 5CB36A04 C2D7FFA7 B5D0CF31 2CD99E8B 5BDEAE1D 9B64C2B0 EC63F226 756AA39C 026D930A 9C0906A9 EB0E363F 72076785 05005713 95BF4A82 E2B87A14 7BB12BAE 0CB61B38 92D28E9B E5D5BE0D 7CDCEFB7 0BDBDF21 86D3D2D4 F1D4E242 68DDB3F8 1FDA836E 81BE16CD F6B9265B 6FB077E1 18B74777 88085AE6 FF0F6A70 66063BCA 11010B5C 8F659EFF F862AE69 616BFFD3 166CCF45 A00AE278 D70DD2EE 4E048354 3903B3C2 A7672661 D06016F7 4969474D 3E6E77DB AED16A4A D9D65ADC 40DF0B66 37D83BF0 A9BCAE53 DEBB9EC5 47B2CF7F 30B5FFE9 BDBDF21C CABAC28A 53B39330 24B4A3A6 BAD03605 CDD70693 54DE5729 23D967BF B3667A2E C4614AB8 5D681B02 2A6F2B94 B40BBE37 C30C8EA1 5A05DF1B 2D02EF8D";
    crc = 0;
    x = 0;
    y = 0;
    crc = crc ^ -1;
    i = 0;
    iTop = str.length;
    while(i < iTop){
        y = (crc ^ str.charCodeAt(i)) & 0xFF;
        x = "0x" + table.substr(y * 9, 8);
        crc = crc >>> 8 ^ x;
        i++;
    }
    crc = crc ^ -1;
    if (crc < 0) {
        crc += 4294967296;
    }
    return crc;
}
module.exports = crc32;


/***/ }),

/***/ 39608:
/***/ ((module) => {

"use strict";

function base64Encode(input) {
    if (!(input instanceof Buffer)) {
        input = Buffer.from(String(input), "binary");
    }
    return input.toString("base64");
}
module.exports.base64Encode = base64Encode;


/***/ }),

/***/ 98177:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

const { base64Encode } = __webpack_require__(39608);
function base64EncodeURL(sourceUrl) {
    try {
        sourceUrl = decodeURI(sourceUrl);
    } catch (error) {
    // ignore errors
    }
    sourceUrl = encodeURI(sourceUrl);
    return base64Encode(sourceUrl).replace(/\+/g, "-") // Convert '+' to '-'
    .replace(/\//g, "_") // Convert '/' to '_'
    .replace(/=+$/, ""); // Remove ending '=';
}
module.exports.base64EncodeURL = base64EncodeURL;


/***/ }),

/***/ 30296:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

const stringPad = __webpack_require__(74319);
const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
let num = 0;
/**
 * Map of six-bit binary codes to Base64 characters
 */ let base64Map = {};
[
    ...chars
].forEach((char)=>{
    let key = num.toString(2);
    key = stringPad(key, 6, "0");
    base64Map[key] = char;
    num++;
});
module.exports = base64Map;


/***/ }),

/***/ 71345:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

const isArray = __webpack_require__(35599);
const toArray = __webpack_require__(66021);
/**
 * Serialize an array of arrays into a string
 * @param {string[] | Array.<Array.<string>>} array - An array of arrays.
 *                          If the first element is not an array the argument is wrapped in an array.
 * @returns {string} A string representation of the arrays.
 */ function encodeDoubleArray(array) {
    array = toArray(array);
    if (!isArray(array[0])) {
        array = [
            array
        ];
    }
    return array.map((e)=>toArray(e).join(",")).join("|");
}
module.exports = encodeDoubleArray;


/***/ }),

/***/ 39535:
/***/ ((module) => {

"use strict";
// Based on CGI::unescape. In addition does not escape / :
// smart_escape = (string) => encodeURIComponent(string).replace(/%3A/g, ":").replace(/%2F/g, "/")

function smart_escape(string, unsafe = /([^a-zA-Z0-9_.\-\/:]+)/g) {
    return string.replace(unsafe, function(match) {
        return match.split("").map(function(c) {
            return "%" + c.charCodeAt(0).toString(16).toUpperCase();
        }).join("");
    });
}
module.exports = smart_escape;


/***/ }),

/***/ 59482:
/***/ ((module) => {

"use strict";
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
        if (typeof options[name] !== "undefined") {
            value = options[name];
        } else if (typeof defaultOptions[name] !== "undefined") {
            value = defaultOptions[name];
        } else if (typeof defaultValue !== "undefined") {
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
 */ module.exports = defaults({});
module.exports.defaults = defaults;


/***/ }),

/***/ 11814:
/***/ ((module) => {

"use strict";
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
    let missing = Object.keys(parameters).filter((key)=>parameters[key] === undefined);
    if (missing.length) {
        console.error(missing.join(",") + " cannot be undefined");
    }
}
module.exports = ensurePresenceOf;


/***/ }),

/***/ 7800:
/***/ ((module) => {

"use strict";

module.exports = Object.entries ? Object.entries : function(obj) {
    let ownProps = Object.keys(obj), i = ownProps.length, resArray = new Array(i); // preallocate the Array
    while(i--){
        resArray[i] = [
            ownProps[i],
            obj[ownProps[i]]
        ];
    }
    return resArray;
};


/***/ }),

/***/ 45474:
/***/ ((module) => {

"use strict";
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
    let [min_width, max_width, max_images] = [
        srcset.min_width,
        srcset.max_width,
        srcset.max_images
    ].map(Number);
    if ([
        min_width,
        max_width,
        max_images
    ].some(Number.isNaN)) {
        throw "Either (min_width, max_width, max_images) " + "or breakpoints must be provided to the image srcset attribute";
    }
    if (min_width > max_width) {
        throw "min_width must be less than max_width";
    }
    if (max_images <= 0) {
        throw "max_images must be a positive integer";
    } else if (max_images === 1) {
        min_width = max_width;
    }
    let stepSize = Math.ceil((max_width - min_width) / Math.max(max_images - 1, 1));
    for(let current = min_width; current < max_width; current += stepSize){
        breakpoints.push(current);
    }
    breakpoints.push(max_width);
    return breakpoints;
}
module.exports = generateBreakpoints;


/***/ }),

/***/ 55604:
/***/ ((module, exports, __webpack_require__) => {

"use strict";
/**
 * Utilities
 * @module utils
 * @borrows module:auth_token as generate_auth_token
 */ 
const crypto = __webpack_require__(6113);
const querystring = __webpack_require__(63477);
const urlParse = (__webpack_require__(57310).parse);
// Functions used internally
const compact = __webpack_require__(39131);
const first = __webpack_require__(22265);
const isFunction = __webpack_require__(25716);
const isPlainObject = __webpack_require__(15452);
const last = __webpack_require__(83824);
const map = __webpack_require__(53707);
const take = __webpack_require__(11516);
const at = __webpack_require__(59283);
// Exposed by the module
const clone = __webpack_require__(20770);
const extend = __webpack_require__(48390);
const filter = __webpack_require__(9368);
const includes = __webpack_require__(41238);
const isArray = __webpack_require__(35599);
const isEmpty = __webpack_require__(89699);
const isNumber = __webpack_require__(27078);
const isObject = __webpack_require__(75795);
const isString = __webpack_require__(97026);
const isUndefined = __webpack_require__(22133);
const smart_escape = __webpack_require__(39535);
const consumeOption = __webpack_require__(88373);
const toArray = __webpack_require__(66021);
let { base64EncodeURL } = __webpack_require__(98177);
const encodeDoubleArray = __webpack_require__(71345);
const config = __webpack_require__(21833);
const generate_token = __webpack_require__(95861);
const crc32 = __webpack_require__(80214);
const ensurePresenceOf = __webpack_require__(11814);
const ensureOption = (__webpack_require__(59482).defaults)(config());
const entries = __webpack_require__(7800);
const isRemoteUrl = __webpack_require__(20863);
const getSDKVersions = __webpack_require__(42555);
const { getAnalyticsOptions, getSDKAnalyticsSignature } = __webpack_require__(88424);
exports = module.exports;
const utils = module.exports;
try {
    // eslint-disable-next-line global-require
    utils.VERSION = (__webpack_require__(93196)/* .version */ .i8);
} catch (error) {
    utils.VERSION = "";
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
const { DEFAULT_RESPONSIVE_WIDTH_TRANSFORMATION, DEFAULT_POSTER_OPTIONS, DEFAULT_VIDEO_SOURCE_TYPES, CONDITIONAL_OPERATORS, PREDEFINED_VARS, LAYER_KEYWORD_PARAMS, TRANSFORMATION_PARAMS, SIMPLE_PARAMS, UPLOAD_PREFIX, SUPPORTED_SIGNATURE_ALGORITHMS, DEFAULT_SIGNATURE_ALGORITHM } = __webpack_require__(20891);
function textStyle(layer) {
    let keywords = [];
    let style = "";
    if (!isEmpty(layer.text_style)) {
        return layer.text_style;
    }
    Object.keys(LAYER_KEYWORD_PARAMS).forEach((attr)=>{
        let default_value = LAYER_KEYWORD_PARAMS[attr];
        let attr_value = layer[attr] || default_value;
        if (attr_value !== default_value) {
            keywords.push(attr_value);
        }
    });
    Object.keys(layer).forEach((attr)=>{
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
        if (!layer.font_size) throw new Error("Must supply font_size for text in overlay/underlay");
        if (!layer.font_family) throw new Error("Must supply font_family for text in overlay/underlay");
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
 */ function normalize_expression(expression) {
    if (!isString(expression) || expression.length === 0 || expression.match(/^!.+!$/)) {
        return expression;
    }
    const operators = "\\|\\||>=|<=|&&|!=|>|=|<|/|-|\\^|\\+|\\*";
    const operatorsPattern = "((" + operators + ")(?=[ _]))";
    const operatorsReplaceRE = new RegExp(operatorsPattern, "g");
    expression = expression.replace(operatorsReplaceRE, (match)=>CONDITIONAL_OPERATORS[match]);
    // Duplicate PREDEFINED_VARS to also include :{var_name} as well as {var_name}
    // Example:
    // -- PREDEFINED_VARS = ['foo']
    // -- predefinedVarsPattern = ':foo|foo'
    // It is done like this because node 6 does not support regex lookbehind
    const predefinedVarsPattern = "(" + Object.keys(PREDEFINED_VARS).map((v)=>`:${v}|${v}`).join("|") + ")";
    const userVariablePattern = "(\\$_*[^_ ]+)";
    const variablesReplaceRE = new RegExp(`${userVariablePattern}|${predefinedVarsPattern}`, "g");
    expression = expression.replace(variablesReplaceRE, (match)=>PREDEFINED_VARS[match] || match);
    return expression.replace(/[ _]+/g, "_");
}
/**
 * Parse custom_function options
 * @private
 * @param {object|*} customFunction a custom function object containing function_type and source values
 * @return {string|*} custom_function transformation string
 */ function process_custom_function(customFunction) {
    if (!isObject(customFunction)) {
        return customFunction;
    }
    if (customFunction.function_type === "remote") {
        const encodedSource = base64EncodeURL(customFunction.source);
        return [
            customFunction.function_type,
            encodedSource
        ].join(":");
    }
    return [
        customFunction.function_type,
        customFunction.source
    ].join(":");
}
/**
 * Parse custom_pre_function options
 * @private
 * @param {object|*} customPreFunction a custom function object containing function_type and source values
 * @return {string|*} custom_pre_function transformation string
 */ function process_custom_pre_function(customPreFunction) {
    let result = process_custom_function(customPreFunction);
    return utils.isString(result) ? `pre:${result}` : null;
}
/**
 * Parse "if" parameter
 * Translates the condition if provided.
 * @private
 * @return {string} "if_" + ifValue
 */ function process_if(ifValue) {
    return ifValue ? "if_" + normalize_expression(ifValue) : ifValue;
}
/**
 * Parse layer options
 * @private
 * @param {object|*} layer The layer to parse.
 * @return {string} layer transformation string
 */ function process_layer(layer) {
    if (isString(layer)) {
        let resourceType = null;
        let layerUrl = "";
        let fetchLayerBegin = "fetch:";
        if (layer.startsWith(fetchLayerBegin)) {
            layerUrl = layer.substring(fetchLayerBegin.length);
        } else if (layer.indexOf(":fetch:", 0) !== -1) {
            const parts = layer.split(":", 3);
            resourceType = parts[0];
            layerUrl = parts[2];
        } else {
            return layer;
        }
        layer = {
            url: layerUrl,
            type: "fetch"
        };
        if (resourceType) {
            layer.resource_type = resourceType;
        }
    }
    if (typeof layer !== "object") {
        return layer;
    }
    let { resource_type, text, type, public_id, format, url: fetchUrl } = layer;
    const components = [];
    if (!isEmpty(text) && isEmpty(resource_type)) {
        resource_type = "text";
    }
    if (!isEmpty(fetchUrl) && isEmpty(type)) {
        type = "fetch";
    }
    if (!isEmpty(public_id) && !isEmpty(format)) {
        public_id = `${public_id}.${format}`;
    }
    if (isEmpty(public_id) && resource_type !== "text" && type !== "fetch") {
        throw new Error("Must supply public_id for non-text overlay");
    }
    if (!isEmpty(resource_type) && resource_type !== "image") {
        components.push(resource_type);
    }
    if (!isEmpty(type) && type !== "upload") {
        components.push(type);
    }
    if (resource_type === "text" || resource_type === "subtitles") {
        if (isEmpty(public_id) && isEmpty(text)) {
            throw new Error("Must supply either text or public_in in overlay");
        }
        const textOptions = textStyle(layer);
        if (!isEmpty(textOptions)) {
            components.push(textOptions);
        }
        if (!isEmpty(public_id)) {
            public_id = public_id.replace("/", ":");
            components.push(public_id);
        }
        if (!isEmpty(text)) {
            const variablesRegex = new RegExp(/(\$\([a-zA-Z]\w+\))/g);
            const textDividedByVariables = text.split(variablesRegex).filter((x)=>x);
            const encodedParts = textDividedByVariables.map((subText)=>{
                const matches = variablesRegex[Symbol.match](subText);
                const isVariable = matches ? matches.length > 0 : false;
                if (isVariable) {
                    return subText;
                }
                return encodeCurlyBraces(encodeURIComponent(smart_escape(subText, new RegExp(/([,\/])/g))));
            });
            components.push(encodedParts.join(""));
        }
    } else if (type === "fetch") {
        const encodedUrl = base64EncodeURL(fetchUrl);
        components.push(encodedUrl);
    } else {
        public_id = public_id.replace("/", ":");
        components.push(public_id);
    }
    return components.join(":");
}
function replaceAllSubstrings(string, search, replacement = "") {
    return string.split(search).join(replacement);
}
function encodeCurlyBraces(input) {
    return replaceAllSubstrings(replaceAllSubstrings(input, "(", "%28"), ")", "%29");
}
/**
 * Parse radius options
 * @private
 * @param {Array<string|number>|string|number} radius The radius to parse
 * @return {string} radius transformation string
 */ function process_radius(radius) {
    if (!radius) {
        return radius;
    }
    if (!isArray(radius)) {
        radius = [
            radius
        ];
    }
    if (radius.length === 0 || radius.length > 4) {
        throw new Error("Radius array should contain between 1 and 4 values");
    }
    if (radius.findIndex((x)=>x === null) >= 0) {
        throw new Error("Corner: Cannot be null");
    }
    return radius.map(normalize_expression).join(":");
}
function build_multi_and_sprite_params(tagOrOptions, options) {
    let tag = null;
    if (typeof tagOrOptions === "string") {
        tag = tagOrOptions;
    } else {
        if (isEmpty(options)) {
            options = tagOrOptions;
        } else {
            throw new Error("First argument must be a tag when additional options are passed");
        }
        tag = null;
    }
    if (!options && !tag) {
        throw new Error("Either tag or urls are required");
    }
    if (!options) {
        options = {};
    }
    const urls = options.urls;
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
    return entries(arg).map(([k, v])=>`${k}=${v}`).join("|");
}
/**
 * @description Escape = and | with two backslashes \\
 * @param {string|number} value
 * @return {string}
 */ function escapeMetadataValue(value) {
    return value.toString().replace(/([=|])/g, "\\$&");
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
 */ function encode_context(metadataObj) {
    if (!isObject(metadataObj)) {
        return metadataObj;
    }
    return entries(metadataObj).map(([key, value])=>{
        // if string, simply parse the value and move on
        if (isString(value)) {
            return `${key}=${escapeMetadataValue(value)}`;
        // If array, parse each item individually
        } else if (isArray(value)) {
            let values = value.map((innerVal)=>{
                return `\"${escapeMetadataValue(innerVal)}\"`;
            }).join(",");
            return `${key}=[${values}]`;
        // if number, convert to string
        } else if (Number.isInteger(value)) {
            return `${key}=${escapeMetadataValue(String(value))}`;
        // if unknown, return the value as string
        } else {
            return value.toString();
        }
    }).join("|");
}
function build_eager(transformations) {
    return toArray(transformations).map((transformation)=>{
        const transformationString = utils.generate_transformation_string(clone(transformation));
        const format = transformation.format;
        return format == null ? transformationString : `${transformationString}/${format}`;
    }).join("|");
}
/**
 * Build the custom headers for the request
 * @private
 * @param headers
 * @return {Array<string>|object|string} An object of name and value,
 *         an array of header strings, or a string of headers
 */ function build_custom_headers(headers) {
    switch(true){
        case headers == null:
            return void 0;
        case isArray(headers):
            return headers.join("\n");
        case isObject(headers):
            return entries(headers).map(([k, v])=>`${k}:${v}`).join("\n");
        default:
            return headers;
    }
}
function generate_transformation_string(options) {
    if (utils.isString(options)) {
        return options;
    }
    if (isArray(options)) {
        return options.map((t)=>utils.generate_transformation_string(clone(t))).filter(utils.present).join("/");
    }
    let responsive_width = consumeOption(options, "responsive_width", config().responsive_width);
    let width = options.width;
    let height = options.height;
    let size = consumeOption(options, "size");
    if (size) {
        [width, height] = size.split("x");
        [options.width, options.height] = [
            width,
            height
        ];
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
        base_transformations = base_transformations.map((tr)=>utils.generate_transformation_string(isObject(tr) ? clone(tr) : {
                transformation: tr
            }));
    } else {
        named_transformation = base_transformations.join(".");
        base_transformations = [];
    }
    let effect = consumeOption(options, "effect");
    if (isArray(effect)) {
        effect = effect.join(":");
    } else if (isObject(effect)) {
        effect = entries(effect).map(([key, value])=>`${key}:${value}`);
    }
    let border = consumeOption(options, "border");
    if (isObject(border)) {
        border = `${border.width != null ? border.width : 2}px_solid_${(border.color != null ? border.color : "black").replace(/^#/, "rgb:")}`;
    } else if (/^\d+$/.exec(border)) {
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
    let fps = consumeOption(options, "fps");
    if (isArray(fps)) {
        fps = fps.join("-");
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
    SIMPLE_PARAMS.forEach(([name, short])=>{
        let value = consumeOption(options, name);
        if (value !== undefined) {
            params[short] = value;
        }
    });
    if (params.vc != null) {
        params.vc = process_video_params(params.vc);
    }
    [
        "so",
        "eo",
        "du"
    ].forEach((short)=>{
        if (params[short] !== undefined) {
            params[short] = norm_range_value(params[short]);
        }
    });
    let variablesParam = consumeOption(options, "variables", []);
    let variables = entries(options).filter(([key, value])=>key.startsWith("$")).map(([key, value])=>{
        delete options[key];
        return `${key}_${normalize_expression(value)}`;
    }).sort().concat(variablesParam.map(([name, value])=>`${name}_${normalize_expression(value)}`)).join(",");
    let transformations = entries(params).filter(([key, value])=>utils.present(value)).map(([key, value])=>key + "_" + value).sort().join(",");
    let raw_transformation = consumeOption(options, "raw_transformation");
    transformations = compact([
        ifValue,
        variables,
        transformations,
        raw_transformation
    ]).join(",");
    base_transformations.push(transformations);
    transformations = base_transformations;
    if (responsive_width) {
        let responsive_width_transformation = config().responsive_width_transformation || DEFAULT_RESPONSIVE_WIDTH_TRANSFORMATION;
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
 */ const URL_KEYS = [
    "api_secret",
    "auth_token",
    "cdn_subdomain",
    "cloud_name",
    "cname",
    "format",
    "long_url_signature",
    "private_cdn",
    "resource_type",
    "secure",
    "secure_cdn_subdomain",
    "secure_distribution",
    "shorten",
    "sign_url",
    "ssl_detected",
    "type",
    "url_suffix",
    "use_root_path",
    "version"
];
/**
 * Create a new object with only URL parameters
 * @param {object} options The source object
 * @return {Object} An object containing only URL parameters
 */ function extractUrlParams(options) {
    return pickOnlyExistingValues(options, ...URL_KEYS);
}
/**
 * Create a new object with only transformation parameters
 * @param {object} options The source object
 * @return {Object} An object containing only transformation parameters
 */ function extractTransformationParams(options) {
    return pickOnlyExistingValues(options, ...TRANSFORMATION_PARAMS);
}
/**
 * Handle the format parameter for fetch urls
 * @private
 * @param options url and transformation options. This argument may be changed by the function!
 */ function patchFetchFormat(options = {}) {
    if (options.type === "fetch") {
        if (options.fetch_format == null) {
            options.fetch_format = consumeOption(options, "format");
        }
    }
}
function build_distribution_domain(source, options) {
    const cloud_name = consumeOption(options, "cloud_name", config().cloud_name);
    if (!cloud_name) {
        throw new Error("Must supply cloud_name in tag or in configuration");
    }
    let secure = consumeOption(options, "secure", true);
    const ssl_detected = consumeOption(options, "ssl_detected", config().ssl_detected);
    if (secure === null) {
        secure = ssl_detected || config().secure;
    }
    const private_cdn = consumeOption(options, "private_cdn", config().private_cdn);
    const cname = consumeOption(options, "cname", config().cname);
    const secure_distribution = consumeOption(options, "secure_distribution", config().secure_distribution);
    const cdn_subdomain = consumeOption(options, "cdn_subdomain", config().cdn_subdomain);
    const secure_cdn_subdomain = consumeOption(options, "secure_cdn_subdomain", config().secure_cdn_subdomain);
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
        signature_algorithm = "sha256";
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
    transformation = transformation.replace(/([^:])\/\//g, "$1/");
    if (sign_url && isEmpty(auth_token)) {
        let to_sign = [
            transformation,
            source_to_sign
        ].filter(function(part) {
            return part != null && part !== "";
        }).join("/");
        const signatureConfig = {};
        if (long_url_signature) {
            signatureConfig.algorithm = "sha256";
            signatureConfig.signatureLength = 32;
        } else {
            signatureConfig.algorithm = signature_algorithm;
            signatureConfig.signatureLength = 8;
        }
        const truncated = compute_hash(to_sign + api_secret, signatureConfig.algorithm, "base64").slice(0, signatureConfig.signatureLength).replace(/\//g, "_").replace(/\+/g, "-");
        signature = `s--${truncated}--`;
    }
    let prefix = build_distribution_domain(public_id, options);
    let resultUrl = [
        prefix,
        resource_type,
        type,
        signature,
        transformation,
        version,
        public_id
    ].filter(function(part) {
        return part != null && part !== "";
    }).join("/").replace(/ /g, "%20");
    if (sign_url && !isEmpty(auth_token)) {
        auth_token.url = urlParse(resultUrl).path;
        let token = generate_token(auth_token);
        resultUrl += `?${token}`;
    }
    let urlAnalytics = ensureOption(options, "urlAnalytics", true);
    if (urlAnalytics === true) {
        let { sdkCode, sdkSemver, techVersion, product } = getSDKVersions();
        let sdkVersions = {
            sdkCode: ensureOption(options, "sdkCode", sdkCode),
            sdkSemver: ensureOption(options, "sdkSemver", sdkSemver),
            techVersion: ensureOption(options, "techVersion", techVersion),
            product: ensureOption(options, "product", product),
            urlAnalytics
        };
        let analyticsOptions = getAnalyticsOptions(Object.assign({}, options, sdkVersions));
        let sdkAnalyticsSignature = getSDKAnalyticsSignature(analyticsOptions);
        // url might already have a '?' query param
        let appender = "?";
        if (resultUrl.indexOf("?") >= 0) {
            appender = "&";
        }
        resultUrl = `${resultUrl}${appender}_a=${sdkAnalyticsSignature}`;
    }
    return resultUrl;
}
function video_url(public_id, options) {
    options = extend({
        resource_type: "video"
    }, options);
    return utils.url(public_id, options);
}
function finalize_source(source, format, url_suffix) {
    let source_to_sign;
    source = source.replace(/([^:])\/\//g, "$1/");
    if (source.match(/^https?:\//i)) {
        source = smart_escape(source);
        source_to_sign = source;
    } else {
        source = encodeURIComponent(decodeURIComponent(source)).replace(/%3A/g, ":").replace(/%2F/g, "/");
        source_to_sign = source;
        if (url_suffix) {
            if (url_suffix.match(/[\.\/]/)) {
                throw new Error("url_suffix should not include . or /");
            }
            source = source + "/" + url_suffix;
        }
        if (format != null) {
            source = source + "." + format;
            source_to_sign = source_to_sign + "." + format;
        }
    }
    return [
        source,
        source_to_sign
    ];
}
function video_thumbnail_url(public_id, options) {
    options = extend({}, DEFAULT_POSTER_OPTIONS, options);
    return utils.url(public_id, options);
}
function finalize_resource_type(resource_type, type, url_suffix, use_root_path, shorten) {
    if (type == null) {
        type = "upload";
    }
    if (url_suffix != null) {
        if (resource_type === "image" && type === "upload") {
            resource_type = "images";
            type = null;
        } else if (resource_type === "image" && type === "private") {
            resource_type = "private_images";
            type = null;
        } else if (resource_type === "image" && type === "authenticated") {
            resource_type = "authenticated_images";
            type = null;
        } else if (resource_type === "raw" && type === "upload") {
            resource_type = "files";
            type = null;
        } else if (resource_type === "video" && type === "upload") {
            resource_type = "videos";
            type = null;
        } else {
            throw new Error("URL Suffix only supported for image/upload, image/private, image/authenticated, video/upload and raw/upload");
        }
    }
    if (use_root_path) {
        if (resource_type === "image" && type === "upload" || resource_type === "images" && type == null) {
            resource_type = null;
            type = null;
        } else {
            throw new Error("Root path only supported for image/upload");
        }
    }
    if (shorten && resource_type === "image" && type === "upload") {
        resource_type = "iu";
        type = null;
    }
    return [
        resource_type,
        type
    ];
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
function unsigned_url_prefix(source, cloud_name, private_cdn, cdn_subdomain, secure_cdn_subdomain, cname, secure, secure_distribution) {
    let prefix;
    if (cloud_name.indexOf("/") === 0) {
        return "/res" + cloud_name;
    }
    let shared_domain = !private_cdn;
    if (secure) {
        if (secure_distribution == null || secure_distribution === exports.OLD_AKAMAI_SHARED_CDN) {
            secure_distribution = private_cdn ? cloud_name + "-res.cloudinary.com" : exports.SHARED_CDN;
        }
        if (shared_domain == null) {
            shared_domain = secure_distribution === exports.SHARED_CDN;
        }
        if (secure_cdn_subdomain == null && shared_domain) {
            secure_cdn_subdomain = cdn_subdomain;
        }
        if (secure_cdn_subdomain) {
            secure_distribution = secure_distribution.replace("res.cloudinary.com", "res-" + (crc32(source) % 5 + 1 + ".cloudinary.com"));
        }
        prefix = "https://" + secure_distribution;
    } else if (cname) {
        let subdomain = cdn_subdomain ? "a" + (crc32(source) % 5 + 1) + "." : "";
        prefix = "http://" + subdomain + cname;
    } else {
        let cdn_part = private_cdn ? cloud_name + "-" : "";
        let subdomain_part = cdn_subdomain ? "-" + (crc32(source) % 5 + 1) : "";
        let host = [
            cdn_part,
            "res",
            subdomain_part,
            ".cloudinary.com"
        ].join("");
        prefix = "http://" + host;
    }
    if (shared_domain) {
        prefix += "/" + cloud_name;
    }
    return prefix;
}
function base_api_url_v1_1() {
    return base_api_url("v1_1");
}
function base_api_url_v2() {
    return base_api_url("v2");
}
function base_api_url(api_version) {
    if (!api_version || api_version.length === 0) {
        throw new Error("api_version needs to be a non-empty string");
    }
    return (path = [], options = [])=>{
        let cloudinary = ensureOption(options, "upload_prefix", UPLOAD_PREFIX);
        let cloud_name = ensureOption(options, "cloud_name");
        let encode_path = (unencoded_path)=>encodeURIComponent(unencoded_path).replace("'", "%27");
        let encoded_path = Array.isArray(path) ? path.map(encode_path) : encode_path(path);
        return [
            cloudinary,
            api_version,
            cloud_name
        ].concat(encoded_path).join("/");
    };
}
function api_url(action = "upload", options = {}) {
    let resource_type = options.resource_type || "image";
    return base_api_url_v1_1()([
        resource_type,
        action
    ], options);
}
function random_public_id() {
    return crypto.randomBytes(12).toString("base64").replace(/[^a-z0-9]/g, "");
}
function signed_preloaded_image(result) {
    return `${result.resource_type}/upload/v${result.version}/${filter([
        result.public_id,
        result.format
    ], utils.present).join(".")}#${result.signature}`;
}
function api_sign_request(params_to_sign, api_secret) {
    let to_sign = entries(params_to_sign).filter(([k, v])=>utils.present(v)).map(([k, v])=>`${k}=${toArray(v).join(",")}`).sort().join("&");
    return compute_hash(to_sign + api_secret, config().signature_algorithm || DEFAULT_SIGNATURE_ALGORITHM, "hex");
}
/**
 * Computes hash from input string using specified algorithm.
 * @private
 * @param {string} input string which to compute hash from
 * @param {string} signature_algorithm algorithm to use for computing hash
 * @param {string} encoding type of encoding
 * @return {string} computed hash value
 */ function compute_hash(input, signature_algorithm, encoding) {
    if (!SUPPORTED_SIGNATURE_ALGORITHMS.includes(signature_algorithm)) {
        throw new Error(`Signature algorithm ${signature_algorithm} is not supported. Supported algorithms: ${SUPPORTED_SIGNATURE_ALGORITHMS.join(", ")}`);
    }
    const hash = crypto.createHash(signature_algorithm).update(input).digest();
    return Buffer.from(hash).toString(encoding);
}
function clear_blank(hash) {
    let filtered_hash = {};
    entries(hash).filter(([k, v])=>utils.present(v)).forEach(([k, v])=>{
        filtered_hash[k] = v.filter ? v.filter((x)=>x) : v;
    });
    return filtered_hash;
}
function sort_object_by_key(object) {
    return Object.keys(object).sort().reduce((obj, key)=>{
        obj[key] = object[key];
        return obj;
    }, {});
}
function merge(hash1, hash2) {
    return {
        ...hash1,
        ...hash2
    };
}
function sign_request(params, options = {}) {
    let apiKey = ensureOption(options, "api_key");
    let apiSecret = ensureOption(options, "api_secret");
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
    let api_secret = ensureOption(options, "api_secret");
    let signature_algorithm = ensureOption(options, "signature_algorithm", DEFAULT_SIGNATURE_ALGORITHM);
    return compute_hash(data + timestamp + api_secret, signature_algorithm, "hex");
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
 */ function verifyNotificationSignature(body, timestamp, signature, valid_for = 7200) {
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
    if (options.unsigned != null && options.unsigned) {
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
 */ function zip_download_url(tag, options = {}) {
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
 */ function download_backedup_asset(asset_id, version_id, options = {}) {
    let params = exports.sign_request({
        timestamp: options.timestamp || exports.timestamp(),
        asset_id: asset_id,
        version_id: version_id
    }, options);
    return exports.base_api_url_v1()([
        "download_backup"
    ], options) + "?" + hashToQuery(params);
}
/**
 * Utility method to create a signed URL for specified resources.
 * @param action
 * @param params
 * @param options
 */ function api_download_url(action, params, options) {
    const download_params = {
        ...params,
        mode: "download"
    };
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
 */ function download_archive_url(options = {}) {
    const params = exports.archive_params(merge(options, {
        mode: "download"
    }));
    return api_download_url("generate_archive", params, options);
}
/**
 * Returns a URL that when invokes creates an zip archive and returns it.
 * @see download_archive_url
 */ function download_zip_url(options = {}) {
    return exports.download_archive_url(merge(options, {
        target_format: "zip"
    }));
}
/**
 * Creates and returns a URL that when invoked creates an archive of a folder
 * @param {string} folder_path Full path (from the root) of the folder to download
 * @param {object} options Additional options
 * @returns {string} Url for downloading an archive of a folder
 */ function download_folder(folder_path, options = {}) {
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
 */ function join_pair(key, value) {
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
 */ function escapeQuotes(value) {
    return isString(value) ? value.replace(/\"/g, "&#34;").replace(/\'/g, "&#39;") : value;
}
/**
 *
 * @param attrs
 * @return {*}
 */ exports.html_attrs = function html_attrs(attrs) {
    return filter(map(attrs, function(value, key) {
        return join_pair(key, escapeQuotes(value));
    })).sort().join(" ");
};
const CLOUDINARY_JS_CONFIG_PARAMS = [
    "api_key",
    "cloud_name",
    "private_cdn",
    "secure_distribution",
    "cdn_subdomain"
];
function cloudinary_js_config() {
    let params = pickOnlyExistingValues(config(), ...CLOUDINARY_JS_CONFIG_PARAMS);
    return `<script type='text/javascript'>\n$.cloudinary.config(${JSON.stringify(params)});\n</script>`;
}
function v1_result_adapter(callback) {
    if (callback == null) {
        return undefined;
    }
    return function(result) {
        if (result.error != null) {
            return callback(result.error);
        }
        return callback(void 0, result);
    };
}
function v1_adapter(name, num_pass_args, v1) {
    return function(...args) {
        let pass_args = take(args, num_pass_args);
        let options = args[num_pass_args];
        let callback = args[num_pass_args + 1];
        if (callback == null && isFunction(options)) {
            callback = options;
            options = {};
        }
        callback = v1_result_adapter(callback);
        args = pass_args.concat([
            callback,
            options
        ]);
        return v1[name].apply(this, args);
    };
}
function v1_adapters(exports1, v1, mapping) {
    return Object.keys(mapping).map((name)=>{
        let num_pass_args = mapping[name];
        exports1[name] = v1_adapter(name, num_pass_args, v1);
        return exports1[name];
    });
}
function as_safe_bool(value) {
    if (value == null) {
        return void 0;
    }
    if (value === true || value === "true" || value === "1") {
        value = 1;
    }
    if (value === false || value === "false" || value === "0") {
        value = 0;
    }
    return value;
}
const NUMBER_PATTERN = "([0-9]*)\\.([0-9]+)|([0-9]+)";
const OFFSET_ANY_PATTERN = `(${NUMBER_PATTERN})([%pP])?`;
const RANGE_VALUE_RE = RegExp(`^${OFFSET_ANY_PATTERN}$`);
const OFFSET_ANY_PATTERN_RE = RegExp(`(${OFFSET_ANY_PATTERN})\\.\\.(${OFFSET_ANY_PATTERN})`);
// Split a range into the start and end values
function split_range(range) {
    switch(range.constructor){
        case String:
            if (!OFFSET_ANY_PATTERN_RE.test(range)) {
                return range;
            }
            return range.split("..");
        case Array:
            return [
                first(range),
                last(range)
            ];
        default:
            return [
                null,
                null
            ];
    }
}
function norm_range_value(value) {
    let offset = String(value).match(RANGE_VALUE_RE);
    if (offset) {
        let modifier = offset[5] ? "p" : "";
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
 */ function process_video_params(param) {
    switch(param.constructor){
        case Object:
            {
                let video = "";
                if ("codec" in param) {
                    video = param.codec;
                    if ("profile" in param) {
                        video += ":" + param.profile;
                        if ("level" in param) {
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
 */ function archive_params(options = {}) {
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
    let video_type = source_type === "ogv" ? "ogg" : source_type;
    let mime_type = `video/${video_type}`;
    if (!isEmpty(codecs)) {
        let codecs_str = isArray(codecs) ? codecs.join(", ") : codecs;
        mime_type += `; codecs=${codecs_str}`;
    }
    return `<source ${utils.html_attrs({
        src,
        type: mime_type
    })}>`;
};
function build_explicit_api_params(public_id, options = {}) {
    return [
        exports.build_upload_params(extend({}, {
            public_id
        }, options))
    ];
}
function generate_responsive_breakpoints_string(breakpoints) {
    if (breakpoints == null) {
        return null;
    }
    breakpoints = clone(breakpoints);
    if (!isArray(breakpoints)) {
        breakpoints = [
            breakpoints
        ];
    }
    for(let j = 0; j < breakpoints.length; j++){
        let breakpoint_settings = breakpoints[j];
        if (breakpoint_settings != null) {
            if (breakpoint_settings.transformation) {
                breakpoint_settings.transformation = utils.generate_transformation_string(clone(breakpoint_settings.transformation));
            }
        }
    }
    return JSON.stringify(breakpoints);
}
function build_streaming_profiles_param(options = {}) {
    let params = pickOnlyExistingValues(options, "display_name", "representations");
    if (isArray(params.representations)) {
        params.representations = JSON.stringify(params.representations.map((r)=>({
                transformation: utils.generate_transformation_string(r.transformation)
            })));
    }
    return params;
}
function hashToParameters(hash) {
    return entries(hash).reduce((parameters, [key, value])=>{
        if (isArray(value)) {
            key = key.endsWith("[]") ? key : key + "[]";
            const items = value.map((v)=>[
                    key,
                    v
                ]);
            parameters = parameters.concat(items);
        } else {
            parameters.push([
                key,
                value
            ]);
        }
        return parameters;
    }, []);
}
/**
 * Convert a hash of values to a URI query string.
 * Array values are spread as individual parameters.
 * @param {object} hash Key-value parameters
 * @return {string} A URI query string.
 */ function hashToQuery(hash) {
    return hashToParameters(hash).map(([key, value])=>`${querystring.escape(key)}=${querystring.escape(value)}`).join("&");
}
/**
 * Verify that the parameter `value` is defined and it's string value is not zero.
 * <br>This function should not be confused with `isEmpty()`.
 * @private
 * @param {string|number} value The value to check.
 * @return {boolean} True if the value is defined and not empty.
 */ function present(value) {
    return value != null && ("" + value).length > 0;
}
/**
 * Returns a new object with key values from source based on the keys.
 * `null` or `undefined` values are not copied.
 * @private
 * @param {object} source The object to pick values from.
 * @param {...string} keys One or more keys to copy from source.
 * @return {object} A new object with the required keys and values.
 */ function pickOnlyExistingValues(source, ...keys) {
    let result = {};
    if (source) {
        keys.forEach((key)=>{
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
 */ function jsonArrayParam(data, modifier) {
    if (!data) {
        return null;
    }
    if (isString(data)) {
        data = JSON.parse(data);
    }
    if (!isArray(data)) {
        data = [
            data
        ];
    }
    if (isFunction(modifier)) {
        data = modifier(data);
    }
    return JSON.stringify(data);
}
/**
 * Empty function - do nothing
 *
 */ exports.NOP = function() {};
exports.generate_auth_token = generate_auth_token;
exports.getUserAgent = getUserAgent;
exports.build_upload_params = build_upload_params;
exports.build_multi_and_sprite_params = build_multi_and_sprite_params;
exports.api_download_url = api_download_url;
exports.timestamp = ()=>Math.floor(new Date().getTime() / 1000);
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
    keys: (source)=>Object.keys(source),
    ensurePresenceOf
});


/***/ }),

/***/ 20863:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

const isString = __webpack_require__(97026);
/**
 * Checks whether a given url or path is a local file
 * @param {string} url the url or path to the file
 * @returns {boolean} true if the given url is a remote location or data
 */ function isRemoteUrl(url) {
    const SUBSTRING_LENGTH = 120;
    const urlSubstring = isString(url) && url.substring(0, SUBSTRING_LENGTH);
    return isString(url) && /^ftp:|^https?:|^gs:|^s3:|^data:([\w-.]+\/[\w-.]+(\+[\w-.]+)?)?(;[\w-.]+=[\w-.]+)*;base64,([a-zA-Z0-9\/+\n=]+)$/.test(urlSubstring);
}
module.exports = isRemoteUrl;


/***/ }),

/***/ 88373:
/***/ ((module) => {

"use strict";
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

/***/ 66021:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

const isArray = __webpack_require__(35599);
/**
 * @desc Turns arguments that aren't arrays into arrays
 * @param arg
 * @returns { any | any[] }
 */ function toArray(arg) {
    switch(true){
        case arg == null:
            return [];
        case isArray(arg):
            return arg;
        default:
            return [
                arg
            ];
    }
}
module.exports = toArray;


/***/ }),

/***/ 97540:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

const utils = __webpack_require__(55604);
const generateBreakpoints = __webpack_require__(45474);
const Cache = __webpack_require__(91234);
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
 */ /**
 * Helper function. Generates a single srcset item url
 *
 * @private
 * @param {string} public_id  Public ID of the resource.
 * @param {number} width      Width in pixels of the srcset item.
 * @param {object|string} transformation
 * @param {object} options    Additional options.
 *
 * @return {string} Resulting URL of the item
 */ function scaledUrl(public_id, width, transformation, options = {}) {
    let configParams = utils.extractUrlParams(options);
    transformation = transformation || options;
    configParams.raw_transformation = utils.generate_transformation_string([
        utils.extend({}, transformation),
        {
            crop: "scale",
            width: width
        }
    ]);
    return utils.url(public_id, configParams);
}
/**
 * If cache is enabled, get the breakpoints from the cache. If the values were not found in the cache,
 * or cache is not enabled, generate the values.
 * @param {srcset} srcset The srcset configuration parameters
 * @param {string} public_id
 * @param {object} options
 * @return {*|Array}
 */ function getOrGenerateBreakpoints(public_id, srcset = {}, options = {}) {
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
 */ function generateSrcsetAttribute(public_id, breakpoints, transformation, options) {
    options = utils.clone(options);
    utils.patchFetchFormat(options);
    return breakpoints.map((width)=>`${scaledUrl(public_id, width, transformation, options)} ${width}w`).join(", ");
}
/**
 * Helper function. Generates sizes attribute value of the HTML img tag
 * @private
 * @param {number[]} breakpoints An array of breakpoints.
 * @return {string} Resulting sizes attribute value
 */ function generateSizesAttribute(breakpoints = []) {
    return breakpoints.map((width)=>`(max-width: ${width}px) ${width}px`).join(", ");
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
 */ function generateImageResponsiveAttributes(publicId, attributes = {}, srcsetData = {}, options = {}) {
    // Create both srcset and sizes here to avoid fetching breakpoints twice
    let responsiveAttributes = {};
    if (isEmpty(srcsetData)) {
        return responsiveAttributes;
    }
    const generateSizes = !attributes.sizes && srcsetData.sizes === true;
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
 */ function generateMediaAttr(options = {}) {
    let mediaQuery = [];
    if (options.min_width != null) {
        mediaQuery.push(`(min-width: ${options.min_width}px)`);
    }
    if (options.max_width != null) {
        mediaQuery.push(`(max-width: ${options.max_width}px)`);
    }
    return mediaQuery.join(" and ");
}
module.exports = {
    srcsetUrl: scaledUrl,
    generateSrcsetAttribute,
    generateSizesAttribute,
    generateMediaAttr,
    generateImageResponsiveAttributes
};


/***/ }),

/***/ 46757:
/***/ ((module) => {

"use strict";
/* eslint-disable no-bitwise */ // http://kevin.vanzonneveld.net
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
    while(n < stringl){
        c1 = string.charCodeAt(n);
        enc = null;
        if (c1 < 128) {
            end++;
        } else if (c1 > 127 && c1 < 2048) {
            enc = String.fromCharCode(c1 >> 6 | 192, c1 & 63 | 128);
        } else {
            enc = String.fromCharCode(c1 >> 12 | 224, c1 >> 6 & 63 | 128, c1 & 63 | 128);
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

/***/ 61574:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

const api = __webpack_require__(703);
const v1_adapters = (__webpack_require__(55604).v1_adapters);
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

/***/ 30235:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

const v1 = __webpack_require__(20737);
const api = __webpack_require__(61574);
const uploader = __webpack_require__(51930);
const search = __webpack_require__(16264);
const search_folders = __webpack_require__(57300);
const v2 = {
    ...v1,
    api,
    uploader,
    search,
    search_folders
};
module.exports = v2;


/***/ }),

/***/ 16264:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

const api = __webpack_require__(61574);
const config = __webpack_require__(21833);
const { isEmpty, isNumber, compute_hash, build_distribution_domain, clear_blank, sort_object_by_key } = __webpack_require__(55604);
const { base64Encode } = __webpack_require__(39608);
const Search = class Search {
    constructor(){
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
    static sort_by(field_name, dir = "asc") {
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
        const found = this.query_hash.aggregate.find((v)=>v === value);
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
        const previously_sorted_obj = this.query_hash.sort_by.find((sort_by)=>sort_by[field_name]);
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
        throw new Error("New TTL value has to be a Number.");
    }
    to_query() {
        Object.keys(this.query_hash).forEach((k)=>{
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
        const apiSecret = "api_secret" in options ? options.api_secret : config().api_secret;
        if (!apiSecret) {
            throw new Error("Must supply api_secret");
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
        const signature = compute_hash(`${urlTtl}${encodedQuery}${apiSecret}`, "sha256", "hex");
        const urlWithoutCursor = `${urlPrefix}/search/${signature}/${urlTtl}/${encodedQuery}`;
        return urlCursor ? `${urlWithoutCursor}/${urlCursor}` : urlWithoutCursor;
    }
};
module.exports = Search;


/***/ }),

/***/ 57300:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

const Search = __webpack_require__(16264);
const api = __webpack_require__(61574);
const SearchFolders = class SearchFolders extends Search {
    constructor(){
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

/***/ 51930:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

const uploader = __webpack_require__(97204);
const v1_adapters = (__webpack_require__(55604).v1_adapters);
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

/***/ 92895:
/***/ ((module) => {

"use strict";

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
 */ (function(definition) {
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
})(function() {
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
    var noop = function() {};
    // Use the fastest possible means to execute a task in a future turn
    // of the event loop.
    var nextTick = function() {
        // linked list of tasks (single, with head node)
        var head = {
            task: void 0,
            next: null
        };
        var tail = head;
        var flushing = false;
        var requestTick = void 0;
        var isNodeJS = false;
        // queue for late tasks, used by unhandled rejection tracking
        var laterQueue = [];
        function flush() {
            /* jshint loopfunc: true */ var task, domain;
            while(head.next){
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
            while(laterQueue.length){
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
                    setTimeout(function() {
                        throw e;
                    }, 0);
                }
            }
            if (domain) {
                domain.exit();
            }
        }
        nextTick = function(task) {
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
        if (typeof process === "object" && process.toString() === "[object process]" && process.nextTick) {
            // Ensure Q is in a real Node environment, with a `process.nextTick`.
            // To see through fake Node environments:
            // * Mocha test runner - exposes a `process` global without a `nextTick`
            // * Browserify - exposes a `process.nexTick` function that uses
            //   `setTimeout`. In this case `setImmediate` is preferred because
            //    it is faster. Browserify's `process.toString()` yields
            //   "[object Object]", while in a real Node environment
            //   `process.toString()` yields "[object process]".
            isNodeJS = true;
            requestTick = function() {
                process.nextTick(flush);
            };
        } else if (typeof setImmediate === "function") {
            // In IE10, Node.js 0.9+, or https://github.com/NobleJS/setImmediate
            if (false) {} else {
                requestTick = function() {
                    setImmediate(flush);
                };
            }
        } else if (typeof MessageChannel !== "undefined") {
            // modern browsers
            // http://www.nonblocking.io/2011/06/windownexttick.html
            var channel = new MessageChannel();
            // At least Safari Version 6.0.5 (8536.30.1) intermittently cannot create
            // working message ports the first time a page loads.
            channel.port1.onmessage = function() {
                requestTick = requestPortTick;
                channel.port1.onmessage = flush;
                flush();
            };
            var requestPortTick = function() {
                // Opera requires us to provide a message payload, regardless of
                // whether we use it.
                channel.port2.postMessage(0);
            };
            requestTick = function() {
                setTimeout(flush, 0);
                requestPortTick();
            };
        } else {
            // old browsers
            requestTick = function() {
                setTimeout(flush, 0);
            };
        }
        // runs a task after all other tasks have been run
        // this is useful for unhandled rejection tracking that needs to happen
        // after all `then`d tasks have been run.
        nextTick.runAfter = function(task) {
            laterQueue.push(task);
            if (!flushing) {
                flushing = true;
                requestTick();
            }
        };
        return nextTick;
    }();
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
        return function() {
            return call.apply(f, arguments);
        };
    }
    // This is equivalent, but slower:
    // uncurryThis = Function_bind.bind(Function_bind.call);
    // http://jsperf.com/uncurrythis
    var array_slice = uncurryThis(Array.prototype.slice);
    var array_reduce = uncurryThis(Array.prototype.reduce || function(callback, basis) {
        var index = 0, length = this.length;
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
            }while (1);
        }
        // reduce
        for(; index < length; index++){
            // account for the possibility that the array is sparse
            if (index in this) {
                basis = callback(basis, this[index], index);
            }
        }
        return basis;
    });
    var array_indexOf = uncurryThis(Array.prototype.indexOf || function(value) {
        // not a very good shim, but good enough for our one use of it
        for(var i = 0; i < this.length; i++){
            if (this[i] === value) {
                return i;
            }
        }
        return -1;
    });
    var array_map = uncurryThis(Array.prototype.map || function(callback, thisp) {
        var self1 = this;
        var collect = [];
        array_reduce(self1, function(undefined1, value, index) {
            collect.push(callback.call(thisp, value, index, self1));
        }, void 0);
        return collect;
    });
    var object_create = Object.create || function(prototype) {
        function Type() {}
        Type.prototype = prototype;
        return new Type();
    };
    var object_defineProperty = Object.defineProperty || function(obj, prop, descriptor) {
        obj[prop] = descriptor.value;
        return obj;
    };
    var object_hasOwnProperty = uncurryThis(Object.prototype.hasOwnProperty);
    var object_keys = Object.keys || function(object) {
        var keys = [];
        for(var key in object){
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
        return object_toString(exception) === "[object StopIteration]" || exception instanceof QReturnValue;
    }
    // FIXME: Remove this helper and Q.return once ES6 generators are in
    // SpiderMonkey.
    var QReturnValue;
    if (typeof ReturnValue !== "undefined") {
        QReturnValue = ReturnValue;
    } else {
        QReturnValue = function(value) {
            this.value = value;
        };
    }
    // long stack traces
    var STACK_JUMP_SEPARATOR = "From previous event:";
    function makeStackTraceLong(error, promise) {
        // If possible, transform the error stack trace by removing Node and Q
        // cruft, then concatenating with the stack trace of `promise`. See #57.
        if (hasStacks && promise.stack && typeof error === "object" && error !== null && error.stack) {
            var stacks = [];
            for(var p = promise; !!p; p = p.source){
                if (p.stack && (!error.__minimumStackCounter__ || error.__minimumStackCounter__ > p.stackCounter)) {
                    object_defineProperty(error, "__minimumStackCounter__", {
                        value: p.stackCounter,
                        configurable: true
                    });
                    stacks.unshift(p.stack);
                }
            }
            stacks.unshift(error.stack);
            var concatedStacks = stacks.join("\n" + STACK_JUMP_SEPARATOR + "\n");
            var stack = filterStackString(concatedStacks);
            object_defineProperty(error, "stack", {
                value: stack,
                configurable: true
            });
        }
    }
    function filterStackString(stackString) {
        var lines = stackString.split("\n");
        var desiredLines = [];
        for(var i = 0; i < lines.length; ++i){
            var line = lines[i];
            if (!isInternalFrame(line) && !isNodeFrame(line) && line) {
                desiredLines.push(line);
            }
        }
        return desiredLines.join("\n");
    }
    function isNodeFrame(stackLine) {
        return stackLine.indexOf("(module.js:") !== -1 || stackLine.indexOf("(node.js:") !== -1;
    }
    function getFileNameAndLineNumber(stackLine) {
        // Named functions: "at functionName (filename:lineNumber:columnNumber)"
        // In IE10 function name can have spaces ("Anonymous function") O_o
        var attempt1 = /at .+ \((.+):(\d+):(?:\d+)\)$/.exec(stackLine);
        if (attempt1) {
            return [
                attempt1[1],
                Number(attempt1[2])
            ];
        }
        // Anonymous functions: "at filename:lineNumber:columnNumber"
        var attempt2 = /at ([^ ]+):(\d+):(?:\d+)$/.exec(stackLine);
        if (attempt2) {
            return [
                attempt2[1],
                Number(attempt2[2])
            ];
        }
        // Firefox style: "function@filename:lineNumber or @filename:lineNumber"
        var attempt3 = /.*@(.+):(\d+)$/.exec(stackLine);
        if (attempt3) {
            return [
                attempt3[1],
                Number(attempt3[2])
            ];
        }
    }
    function isInternalFrame(stackLine) {
        var fileNameAndLineNumber = getFileNameAndLineNumber(stackLine);
        if (!fileNameAndLineNumber) {
            return false;
        }
        var fileName = fileNameAndLineNumber[0];
        var lineNumber = fileNameAndLineNumber[1];
        return fileName === qFileName && lineNumber >= qStartingLine && lineNumber <= qEndingLine;
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
        return function() {
            if (typeof console !== "undefined" && typeof console.warn === "function") {
                console.warn(name + " is deprecated, use " + alternative + " instead.", new Error("").stack);
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
 */ function Q(value) {
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
 */ Q.nextTick = nextTick;
    /**
 * Controls whether or not long stack traces will be on
 */ Q.longStackSupport = false;
    /**
 * The counter is used to determine the stopping point for building
 * long stack traces. In makeStackTraceLong we walk backwards through
 * the linked list of promises, only stacks which were created before
 * the rejection are concatenated.
 */ var longStackCounter = 1;
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
 */ Q.defer = defer;
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
        promise.promiseDispatch = function(resolve, op, operands) {
            var args = array_slice(arguments);
            if (messages) {
                messages.push(args);
                if (op === "when" && operands[1]) {
                    progressListeners.push(operands[1]);
                }
            } else {
                Q.nextTick(function() {
                    resolvedPromise.promiseDispatch.apply(resolvedPromise, args);
                });
            }
        };
        // XXX deprecated
        promise.valueOf = function() {
            if (messages) {
                return promise;
            }
            var nearerValue = nearer(resolvedPromise);
            if (isPromise(nearerValue)) {
                resolvedPromise = nearerValue; // shorten chain
            }
            return nearerValue;
        };
        promise.inspect = function() {
            if (!resolvedPromise) {
                return {
                    state: "pending"
                };
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
            array_reduce(messages, function(undefined1, message) {
                Q.nextTick(function() {
                    newPromise.promiseDispatch.apply(newPromise, message);
                });
            }, void 0);
            messages = void 0;
            progressListeners = void 0;
        }
        deferred.promise = promise;
        deferred.resolve = function(value) {
            if (resolvedPromise) {
                return;
            }
            become(Q(value));
        };
        deferred.fulfill = function(value) {
            if (resolvedPromise) {
                return;
            }
            become(fulfill(value));
        };
        deferred.reject = function(reason) {
            if (resolvedPromise) {
                return;
            }
            become(reject(reason));
        };
        deferred.notify = function(progress) {
            if (resolvedPromise) {
                return;
            }
            array_reduce(progressListeners, function(undefined1, progressListener) {
                Q.nextTick(function() {
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
 */ defer.prototype.makeNodeResolver = function() {
        var self1 = this;
        return function(error, value) {
            if (error) {
                self1.reject(error);
            } else if (arguments.length > 2) {
                self1.resolve(array_slice(arguments, 1));
            } else {
                self1.resolve(value);
            }
        };
    };
    /**
 * @param resolver {Function} a function that returns nothing and accepts
 * the resolve, reject, and notify functions for a deferred.
 * @returns a promise that may be resolved with the given resolve and reject
 * functions, or rejected by a thrown exception in resolver
 */ Q.Promise = promise; // ES6
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
    Q.passByCopy = function(object) {
        //freeze(object);
        //passByCopies.set(object, true);
        return object;
    };
    Promise.prototype.passByCopy = function() {
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
 */ Q.join = function(x, y) {
        return Q(x).join(y);
    };
    Promise.prototype.join = function(that) {
        return Q([
            this,
            that
        ]).spread(function(x, y) {
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
 */ Q.race = race;
    function race(answerPs) {
        return promise(function(resolve, reject) {
            // Switch to this once we can assume at least ES5
            // answerPs.forEach(function (answerP) {
            //     Q(answerP).then(resolve, reject);
            // });
            // Use this in the meantime
            for(var i = 0, len = answerPs.length; i < len; i++){
                Q(answerPs[i]).then(resolve, reject);
            }
        });
    }
    Promise.prototype.race = function() {
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
 */ Q.makePromise = Promise;
    function Promise(descriptor, fallback, inspect) {
        if (fallback === void 0) {
            fallback = function(op) {
                return reject(new Error("Promise does not support operation: " + op));
            };
        }
        if (inspect === void 0) {
            inspect = function() {
                return {
                    state: "unknown"
                };
            };
        }
        var promise = object_create(Promise.prototype);
        promise.promiseDispatch = function(resolve, op, args) {
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
            promise.valueOf = function() {
                var inspected = inspect();
                if (inspected.state === "pending" || inspected.state === "rejected") {
                    return promise;
                }
                return inspected.value;
            };
        }
        return promise;
    }
    Promise.prototype.toString = function() {
        return "[object Promise]";
    };
    Promise.prototype.then = function(fulfilled, rejected, progressed) {
        var self1 = this;
        var deferred = defer();
        var done = false; // ensure the untrusted promise makes at most a
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
                makeStackTraceLong(exception, self1);
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
        Q.nextTick(function() {
            self1.promiseDispatch(function(value) {
                if (done) {
                    return;
                }
                done = true;
                deferred.resolve(_fulfilled(value));
            }, "when", [
                function(exception) {
                    if (done) {
                        return;
                    }
                    done = true;
                    deferred.resolve(_rejected(exception));
                }
            ]);
        });
        // Progress propagator need to be attached in the current tick.
        self1.promiseDispatch(void 0, "when", [
            void 0,
            function(value) {
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
            }
        ]);
        return deferred.promise;
    };
    Q.tap = function(promise, callback) {
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
 */ Promise.prototype.tap = function(callback) {
        callback = Q(callback);
        return this.then(function(value) {
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
 */ Q.when = when;
    function when(value, fulfilled, rejected, progressed) {
        return Q(value).then(fulfilled, rejected, progressed);
    }
    Promise.prototype.thenResolve = function(value) {
        return this.then(function() {
            return value;
        });
    };
    Q.thenResolve = function(promise, value) {
        return Q(promise).thenResolve(value);
    };
    Promise.prototype.thenReject = function(reason) {
        return this.then(function() {
            throw reason;
        });
    };
    Q.thenReject = function(promise, reason) {
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
 */ // XXX should we re-do this?
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
 */ Q.isPromise = isPromise;
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
 */ Q.isPending = isPending;
    function isPending(object) {
        return isPromise(object) && object.inspect().state === "pending";
    }
    Promise.prototype.isPending = function() {
        return this.inspect().state === "pending";
    };
    /**
 * @returns whether the given object is a value or fulfilled
 * promise.
 */ Q.isFulfilled = isFulfilled;
    function isFulfilled(object) {
        return !isPromise(object) || object.inspect().state === "fulfilled";
    }
    Promise.prototype.isFulfilled = function() {
        return this.inspect().state === "fulfilled";
    };
    /**
 * @returns whether the given object is a rejected promise.
 */ Q.isRejected = isRejected;
    function isRejected(object) {
        return isPromise(object) && object.inspect().state === "rejected";
    }
    Promise.prototype.isRejected = function() {
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
            Q.nextTick.runAfter(function() {
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
                Q.nextTick.runAfter(function() {
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
    Q.getUnhandledReasons = function() {
        // Make a copy so that consumers can't interfere with our internal state.
        return unhandledReasons.slice();
    };
    Q.stopUnhandledRejectionTracking = function() {
        resetUnhandledRejections();
        trackUnhandledRejections = false;
    };
    resetUnhandledRejections();
    //// END UNHANDLED REJECTION TRACKING
    /**
 * Constructs a rejected promise.
 * @param reason value describing the failure
 */ Q.reject = reject;
    function reject(reason) {
        var rejection = Promise({
            "when": function(rejected) {
                // note that the error has been handled
                if (rejected) {
                    untrackRejection(this);
                }
                return rejected ? rejected(reason) : this;
            }
        }, function fallback() {
            return this;
        }, function inspect() {
            return {
                state: "rejected",
                reason: reason
            };
        });
        // Note that the reason has not been handled.
        trackRejection(rejection, reason);
        return rejection;
    }
    /**
 * Constructs a fulfilled promise for an immediate reference.
 * @param value immediate reference
 */ Q.fulfill = fulfill;
    function fulfill(value) {
        return Promise({
            "when": function() {
                return value;
            },
            "get": function(name) {
                return value[name];
            },
            "set": function(name, rhs) {
                value[name] = rhs;
            },
            "delete": function(name) {
                delete value[name];
            },
            "post": function(name, args) {
                // Mark Miller proposes that post with no name should apply a
                // promised function.
                if (name === null || name === void 0) {
                    return value.apply(void 0, args);
                } else {
                    return value[name].apply(value, args);
                }
            },
            "apply": function(thisp, args) {
                return value.apply(thisp, args);
            },
            "keys": function() {
                return object_keys(value);
            }
        }, void 0, function inspect() {
            return {
                state: "fulfilled",
                value: value
            };
        });
    }
    /**
 * Converts thenables to Q promises.
 * @param promise thenable promise
 * @returns a Q promise
 */ function coerce(promise) {
        var deferred = defer();
        Q.nextTick(function() {
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
 */ Q.master = master;
    function master(object) {
        return Promise({
            "isDef": function() {}
        }, function fallback(op, args) {
            return dispatch(object, op, args);
        }, function() {
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
 */ Q.spread = spread;
    function spread(value, fulfilled, rejected) {
        return Q(value).spread(fulfilled, rejected);
    }
    Promise.prototype.spread = function(fulfilled, rejected) {
        return this.all().then(function(array) {
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
 */ Q.async = async;
    function async(makeGenerator) {
        return function() {
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
 */ Q.spawn = spawn;
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
 */ Q["return"] = _return;
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
 */ Q.promised = promised;
    function promised(callback) {
        return function() {
            return spread([
                this,
                all(arguments)
            ], function(self1, args) {
                return callback.apply(self1, args);
            });
        };
    }
    /**
 * sends a message to a value in a future turn
 * @param object* the recipient
 * @param op the name of the message operation, e.g., "when",
 * @param args further arguments to be forwarded to the operation
 * @returns result {Promise} a promise for the result of the operation
 */ Q.dispatch = dispatch;
    function dispatch(object, op, args) {
        return Q(object).dispatch(op, args);
    }
    Promise.prototype.dispatch = function(op, args) {
        var self1 = this;
        var deferred = defer();
        Q.nextTick(function() {
            self1.promiseDispatch(deferred.resolve, op, args);
        });
        return deferred.promise;
    };
    /**
 * Gets the value of a property in a future turn.
 * @param object    promise or immediate reference for target object
 * @param name      name of property to get
 * @return promise for the property value
 */ Q.get = function(object, key) {
        return Q(object).dispatch("get", [
            key
        ]);
    };
    Promise.prototype.get = function(key) {
        return this.dispatch("get", [
            key
        ]);
    };
    /**
 * Sets the value of a property in a future turn.
 * @param object    promise or immediate reference for object object
 * @param name      name of property to set
 * @param value     new value of property
 * @return promise for the return value
 */ Q.set = function(object, key, value) {
        return Q(object).dispatch("set", [
            key,
            value
        ]);
    };
    Promise.prototype.set = function(key, value) {
        return this.dispatch("set", [
            key,
            value
        ]);
    };
    /**
 * Deletes a property in a future turn.
 * @param object    promise or immediate reference for target object
 * @param name      name of property to delete
 * @return promise for the return value
 */ Q.del = Q["delete"] = function(object, key) {
        return Q(object).dispatch("delete", [
            key
        ]);
    };
    Promise.prototype.del = Promise.prototype["delete"] = function(key) {
        return this.dispatch("delete", [
            key
        ]);
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
 */ // bound locally because it is used by other methods
    Q.mapply = Q.post = function(object, name, args) {
        return Q(object).dispatch("post", [
            name,
            args
        ]);
    };
    Promise.prototype.mapply = Promise.prototype.post = function(name, args) {
        return this.dispatch("post", [
            name,
            args
        ]);
    };
    /**
 * Invokes a method in a future turn.
 * @param object    promise or immediate reference for target object
 * @param name      name of method to invoke
 * @param ...args   array of invocation arguments
 * @return promise for the return value
 */ Q.send = Q.mcall = Q.invoke = function(object, name /*...args*/ ) {
        return Q(object).dispatch("post", [
            name,
            array_slice(arguments, 2)
        ]);
    };
    Promise.prototype.send = Promise.prototype.mcall = Promise.prototype.invoke = function(name /*...args*/ ) {
        return this.dispatch("post", [
            name,
            array_slice(arguments, 1)
        ]);
    };
    /**
 * Applies the promised function in a future turn.
 * @param object    promise or immediate reference for target function
 * @param args      array of application arguments
 */ Q.fapply = function(object, args) {
        return Q(object).dispatch("apply", [
            void 0,
            args
        ]);
    };
    Promise.prototype.fapply = function(args) {
        return this.dispatch("apply", [
            void 0,
            args
        ]);
    };
    /**
 * Calls the promised function in a future turn.
 * @param object    promise or immediate reference for target function
 * @param ...args   array of application arguments
 */ Q["try"] = Q.fcall = function(object /* ...args*/ ) {
        return Q(object).dispatch("apply", [
            void 0,
            array_slice(arguments, 1)
        ]);
    };
    Promise.prototype.fcall = function() {
        return this.dispatch("apply", [
            void 0,
            array_slice(arguments)
        ]);
    };
    /**
 * Binds the promised function, transforming return values into a fulfilled
 * promise and thrown errors into a rejected one.
 * @param object    promise or immediate reference for target function
 * @param ...args   array of application arguments
 */ Q.fbind = function(object /*...args*/ ) {
        var promise = Q(object);
        var args = array_slice(arguments, 1);
        return function fbound() {
            return promise.dispatch("apply", [
                this,
                args.concat(array_slice(arguments))
            ]);
        };
    };
    Promise.prototype.fbind = function() {
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
 */ Q.keys = function(object) {
        return Q(object).dispatch("keys", []);
    };
    Promise.prototype.keys = function() {
        return this.dispatch("keys", []);
    };
    /**
 * Turns an array of promises into a promise for an array.  If any of
 * the promises gets rejected, the whole array is rejected immediately.
 * @param {Array*} an array (or promise for an array) of values (or
 * promises for values)
 * @returns a promise for an array of the corresponding values
 */ // By Mark Miller
    // http://wiki.ecmascript.org/doku.php?id=strawman:concurrency&rev=1308776521#allfulfilled
    Q.all = all;
    function all(promises) {
        return when(promises, function(promises) {
            var pendingCount = 0;
            var deferred = defer();
            array_reduce(promises, function(undefined1, promise, index) {
                var snapshot;
                if (isPromise(promise) && (snapshot = promise.inspect()).state === "fulfilled") {
                    promises[index] = snapshot.value;
                } else {
                    ++pendingCount;
                    when(promise, function(value) {
                        promises[index] = value;
                        if (--pendingCount === 0) {
                            deferred.resolve(promises);
                        }
                    }, deferred.reject, function(progress) {
                        deferred.notify({
                            index: index,
                            value: progress
                        });
                    });
                }
            }, void 0);
            if (pendingCount === 0) {
                deferred.resolve(promises);
            }
            return deferred.promise;
        });
    }
    Promise.prototype.all = function() {
        return all(this);
    };
    /**
 * Returns the first resolved promise of an array. Prior rejected promises are
 * ignored.  Rejects only if all promises are rejected.
 * @param {Array*} an array containing values or promises for values
 * @returns a promise fulfilled with the value of the first resolved promise,
 * or a rejected promise if all promises are rejected.
 */ Q.any = any;
    function any(promises) {
        if (promises.length === 0) {
            return Q.resolve();
        }
        var deferred = Q.defer();
        var pendingCount = 0;
        array_reduce(promises, function(prev, current, index) {
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
                    rejection.message = "Q can't get fulfillment value from any promise, all " + "promises were rejected. Last error message: " + rejection.message;
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
    Promise.prototype.any = function() {
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
 */ Q.allResolved = deprecate(allResolved, "allResolved", "allSettled");
    function allResolved(promises) {
        return when(promises, function(promises) {
            promises = array_map(promises, Q);
            return when(all(array_map(promises, function(promise) {
                return when(promise, noop, noop);
            })), function() {
                return promises;
            });
        });
    }
    Promise.prototype.allResolved = function() {
        return allResolved(this);
    };
    /**
 * @see Promise#allSettled
 */ Q.allSettled = allSettled;
    function allSettled(promises) {
        return Q(promises).allSettled();
    }
    /**
 * Turns an array of promises into a promise for an array of their states (as
 * returned by `inspect`) when they have all settled.
 * @param {Array[Any*]} values an array (or promise for an array) of values (or
 * promises for values)
 * @returns {Array[State]} an array of states for the respective values.
 */ Promise.prototype.allSettled = function() {
        return this.then(function(promises) {
            return all(array_map(promises, function(promise) {
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
 */ Q.fail = Q["catch"] = function(object, rejected) {
        return Q(object).then(void 0, rejected);
    };
    Promise.prototype.fail = Promise.prototype["catch"] = function(rejected) {
        return this.then(void 0, rejected);
    };
    /**
 * Attaches a listener that can respond to progress notifications from a
 * promise's originating deferred. This listener receives the exact arguments
 * passed to ``deferred.notify``.
 * @param {Any*} promise for something
 * @param {Function} callback to receive any progress notifications
 * @returns the given promise, unchanged
 */ Q.progress = progress;
    function progress(object, progressed) {
        return Q(object).then(void 0, void 0, progressed);
    }
    Promise.prototype.progress = function(progressed) {
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
 */ Q.fin = Q["finally"] = function(object, callback) {
        return Q(object)["finally"](callback);
    };
    Promise.prototype.fin = Promise.prototype["finally"] = function(callback) {
        if (!callback || typeof callback.apply !== "function") {
            throw new Error("Q can't apply finally callback");
        }
        callback = Q(callback);
        return this.then(function(value) {
            return callback.fcall().then(function() {
                return value;
            });
        }, function(reason) {
            // TODO attempt to recycle the rejection with "this".
            return callback.fcall().then(function() {
                throw reason;
            });
        });
    };
    /**
 * Terminates a chain of promises, forcing rejections to be
 * thrown as exceptions.
 * @param {Any*} promise at the end of a chain of promises
 * @returns nothing
 */ Q.done = function(object, fulfilled, rejected, progress) {
        return Q(object).done(fulfilled, rejected, progress);
    };
    Promise.prototype.done = function(fulfilled, rejected, progress) {
        var onUnhandledError = function(error) {
            // forward to a future turn so that ``when``
            // does not catch it and turn it into a rejection.
            Q.nextTick(function() {
                makeStackTraceLong(error, promise);
                if (Q.onerror) {
                    Q.onerror(error);
                } else {
                    throw error;
                }
            });
        };
        // Avoid unnecessary `nextTick`ing via an unnecessary `when`.
        var promise = fulfilled || rejected || progress ? this.then(fulfilled, rejected, progress) : this;
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
 */ Q.timeout = function(object, ms, error) {
        return Q(object).timeout(ms, error);
    };
    Promise.prototype.timeout = function(ms, error) {
        var deferred = defer();
        var timeoutId = setTimeout(function() {
            if (!error || "string" === typeof error) {
                error = new Error(error || "Timed out after " + ms + " ms");
                error.code = "ETIMEDOUT";
            }
            deferred.reject(error);
        }, ms);
        this.then(function(value) {
            clearTimeout(timeoutId);
            deferred.resolve(value);
        }, function(exception) {
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
 */ Q.delay = function(object, timeout) {
        if (timeout === void 0) {
            timeout = object;
            object = void 0;
        }
        return Q(object).delay(timeout);
    };
    Promise.prototype.delay = function(timeout) {
        return this.then(function(value) {
            var deferred = defer();
            setTimeout(function() {
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
 */ Q.nfapply = function(callback, args) {
        return Q(callback).nfapply(args);
    };
    Promise.prototype.nfapply = function(args) {
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
 */ Q.nfcall = function(callback /*...args*/ ) {
        var args = array_slice(arguments, 1);
        return Q(callback).nfapply(args);
    };
    Promise.prototype.nfcall = function() {
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
 */ Q.nfbind = Q.denodeify = function(callback /*...args*/ ) {
        if (callback === undefined) {
            throw new Error("Q can't wrap an undefined function");
        }
        var baseArgs = array_slice(arguments, 1);
        return function() {
            var nodeArgs = baseArgs.concat(array_slice(arguments));
            var deferred = defer();
            nodeArgs.push(deferred.makeNodeResolver());
            Q(callback).fapply(nodeArgs).fail(deferred.reject);
            return deferred.promise;
        };
    };
    Promise.prototype.nfbind = Promise.prototype.denodeify = function() {
        var args = array_slice(arguments);
        args.unshift(this);
        return Q.denodeify.apply(void 0, args);
    };
    Q.nbind = function(callback, thisp /*...args*/ ) {
        var baseArgs = array_slice(arguments, 2);
        return function() {
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
    Promise.prototype.nbind = function() {
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
 */ Q.nmapply = Q.npost = function(object, name, args) {
        return Q(object).npost(name, args);
    };
    Promise.prototype.nmapply = Promise.prototype.npost = function(name, args) {
        var nodeArgs = array_slice(args || []);
        var deferred = defer();
        nodeArgs.push(deferred.makeNodeResolver());
        this.dispatch("post", [
            name,
            nodeArgs
        ]).fail(deferred.reject);
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
 */ Q.nsend = Q.nmcall = Q.ninvoke = function(object, name /*...args*/ ) {
        var nodeArgs = array_slice(arguments, 2);
        var deferred = defer();
        nodeArgs.push(deferred.makeNodeResolver());
        Q(object).dispatch("post", [
            name,
            nodeArgs
        ]).fail(deferred.reject);
        return deferred.promise;
    };
    Promise.prototype.nsend = Promise.prototype.nmcall = Promise.prototype.ninvoke = function(name /*...args*/ ) {
        var nodeArgs = array_slice(arguments, 1);
        var deferred = defer();
        nodeArgs.push(deferred.makeNodeResolver());
        this.dispatch("post", [
            name,
            nodeArgs
        ]).fail(deferred.reject);
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
 */ Q.nodeify = nodeify;
    function nodeify(object, nodeback) {
        return Q(object).nodeify(nodeback);
    }
    Promise.prototype.nodeify = function(nodeback) {
        if (nodeback) {
            this.then(function(value) {
                Q.nextTick(function() {
                    nodeback(null, value);
                });
            }, function(error) {
                Q.nextTick(function() {
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

/***/ 93196:
/***/ ((module) => {

"use strict";
module.exports = {"i8":"2.2.0"};

/***/ })

};
;
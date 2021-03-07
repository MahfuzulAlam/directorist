export default {
    view: {
        type: 'string',
        default: 'grid'
    },
    _featured: {
        type: 'boolean',
        default: false
    },
    filterby: {
        type: 'string',
        default: ''
    },
    orderby: {
        type: 'string',
        default: 'date'
    },
    order: {
        type: 'string',
        default: 'desc'
    },
    listings_per_page: {
        type: 'number',
        default: 6
    },
    show_pagination: {
        type: 'boolean',
        default: false
    },
    header: {
        type: 'boolean',
        default: false
    },
    header_title: {
        type: 'string',
        default: ''
    },
    category: {
        type: 'string',
        default: ''
    },
    location: {
        type: 'string',
        default: ''
    },
    tag: {
        type: 'string',
        default: ''
    },
    ids: {
        type: 'string',
        default: ''
    },
    columns: {
        type: 'number',
        default: 3
    },
    featured_only: {
        type: 'boolean',
        default: false
    },
    popular_only: {
        type: 'boolean',
        default: false
    },
    advanced_filter: {
        type: 'boolean',
        default: false
    },
    display_preview_image: {
        type: 'boolean',
        default: false
    },
    action_before_after_loop: {
        type: 'boolean',
        default: false
    },
    logged_in_user_only: {
        type: 'boolean',
        default: false
    },
    redirect_page_url: {
        type: 'string',
        default: ''
    },
    map_height: {
        type: 'number',
        default: 500
    },
    map_zoom_level: {
        type: 'number',
        default: 0
    },
    directory_type: {
        type: 'array',
        default: []
    },
    default_directory_type: {
        type: 'number',
        default: 0
    }
};

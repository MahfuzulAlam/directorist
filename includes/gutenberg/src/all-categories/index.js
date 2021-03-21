import { registerBlockType, createBlock } from '@wordpress/blocks';
import { useBlockProps, InspectorControls, BlockControls } from '@wordpress/block-editor';
import { Fragment, useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import ServerSideRender from '@wordpress/server-side-render';
import { CategoryControl, TypesControl } from '../controls';

import {
	list,
	grid,
} from '@wordpress/icons';

import {
	PanelBody,
	SelectControl,
	ToggleControl,
	TextControl,
	Toolbar,
	ToolbarButton,
} from '@wordpress/components';

import { getAttsForTransform, isMultiDirectoryEnabled } from '../functions'
import blockAttributes from './attributes.json';
import getLogo from './../logo';
import './editor.scss';

registerBlockType( 'directorist/all-categories', {
	apiVersion: 2,

	title: __( 'All Categories', 'directorist' ),

	description: __( 'Create directory category listing grid view and list view.', 'directorist' ),

	category: 'directorist-blocks-collection',

	icon: getLogo(),

	supports: {
		html: false
	},

	transforms: {
		from: [
			{
				type: 'shortcode',
				tag: 'directorist_all_categories',
				attributes: getAttsForTransform( blockAttributes )
			},
			{
				type: 'block',
				blocks: [ 'directorist/all-locations' ],
				transform: ( attributes ) => {
					attributes.cat_per_page = attributes.loc_per_page;
					attributes.slug = '';
					delete attributes.loc_per_page;
					return createBlock( 'directorist/all-categories', attributes );
				},
			},
		]
	},

	attributes: blockAttributes,

	edit( { attributes, setAttributes } ) {
		let {
			view,
			orderby,
			order,
			cat_per_page,
			columns,
			slug,
			logged_in_user_only,
			redirect_page_url,
			directory_type,
			default_directory_type
		} = attributes;

		let oldCategories = slug ? slug.split(',') : [],
			oldTypes = directory_type ? directory_type.split(',') : [];

		const [ shouldRender, setShouldRender ] = useState( true );

		return (
			<Fragment>
				<BlockControls>
					<Toolbar>
						<ToolbarButton isPressed={view === 'grid'} icon={ grid } label={ __( 'Grid View', 'directorist' ) } onClick={ () => setAttributes( { view: 'grid' } ) } />
						<ToolbarButton isPressed={view === 'list'} icon={ list } label={ __( 'List View', 'directorist' ) } onClick={ () => setAttributes( { view: 'list' } ) } />
					</Toolbar>
				</BlockControls>
				
				<InspectorControls>
					<PanelBody title={ __( 'General', 'directorist' ) } initialOpen={ true }>
						{ isMultiDirectoryEnabled() ? <TypesControl
							shouldRender={ shouldRender }
							selected={ oldTypes }
							showDefault={ true }
							defaultType={ default_directory_type }
							onDefaultChange={ value => setAttributes( { default_directory_type: value } ) }
							onChange={ types => {
								setAttributes( { directory_type: types.join( ',' ) } );
								setShouldRender( false );
							} }  /> : '' }

						<SelectControl
							label={ __( 'View As', 'directorist' ) }
							labelPosition='side'
							value={ view }
							options={ [
								{ label: __( 'Grid', 'directorist' ), value: 'grid' },
								{ label: __( 'List', 'directorist' ), value: 'list' },
							] }
							onChange={ view => setAttributes( { view } ) }
							className='directorist-gb-fixed-control'
						/>
						{ view === 'grid' ? <SelectControl
							label={ __( 'Columns', 'directorist' ) }
							labelPosition='side'
							value={ columns }
							options={ [
								{ label: __( '1 Column', 'directorist' ), value: 1 },
								{ label: __( '2 Columns', 'directorist' ), value: 2 },
								{ label: __( '3 Columns', 'directorist' ), value: 3 },
								{ label: __( '4 Columns', 'directorist' ), value: 4 },
								{ label: __( '6 Columns', 'directorist' ), value: 6 },
							] }
							onChange={ columns => setAttributes( { columns } ) }
							className='directorist-gb-fixed-control'
						/> : '' }
						<TextControl
							label={ __( 'Number Of Listing', 'directorist' ) }
							type='number'
							value={ cat_per_page }
							onChange={ cat_per_page => setAttributes( { cat_per_page } ) }
							className='directorist-gb-fixed-control'
						/>
						<SelectControl
							label={ __( 'Order By', 'directorist' ) }
							labelPosition='side'
							value={ orderby }
							options={ [
								{ label: __( 'ID', 'directorist' ), value: 'id' },
								{ label: __( 'Count', 'directorist' ), value: 'count' },
								{ label: __( 'Name', 'directorist' ), value: 'name' },
								{ label: __( 'Categories', 'directorist' ), value: 'slug' },
							] }
							onChange={ orderby => setAttributes( { orderby } ) }
							className='directorist-gb-fixed-control'
						/>
						{ orderby === 'slug' ? <CategoryControl shouldRender={ shouldRender } onChange={ categories => {
							setAttributes( { slug: categories.join( ',' ) } );
							setShouldRender( false );
						}} selected={ oldCategories } /> : '' }
						<SelectControl
							label={ __( 'Order', 'directorist' ) }
							labelPosition='side'
							value={ order }
							options={ [
								{ label: __( 'ASC', 'directorist' ), value: 'asc' },
								{ label: __( 'DESC', 'directorist' ), value: 'desc' },
							] }
							onChange={ order => setAttributes( { order } ) }
							className='directorist-gb-fixed-control'
						/>
						<ToggleControl
							label={ __( 'Logged In User Only?', 'directorist' ) }
							checked={ logged_in_user_only }
							onChange={ logged_in_user_only => setAttributes( { logged_in_user_only } ) }
						/>
					</PanelBody>
				</InspectorControls>

				<div { ...useBlockProps() }>
					<ServerSideRender
						block="directorist/all-categories"
						attributes={ attributes }
					/>
				</div>
			</Fragment>
		);
	}
} );

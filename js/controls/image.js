import React from 'react';
import wp from 'wp';

const {
	InspectorControls,
	MediaUploadButton,
} = wp.blocks;

const {
	Button,
} = wp.components;

/**
 * InspectorControl for image upload.
 */
const ImageControl = props => {
	const {
		label,
		id,
		help,
		onChange,
		value = { id: null, src: null },
	} = props;

	const uploadButtonProps = { isLarge: true };
	const removeButtonProps = { isLarge: true };

	return <InspectorControls.BaseControl label={ label } id={ id } help={ help }>
		<img
			src={ value.src }
			data-id={ value.id }
			width="100"
			height="100"
			style={ { display: 'block', marginBottom: '8px' } }
		/>
		<MediaUploadButton
			buttonProps={ uploadButtonProps }
			onSelect={ onChange }
			type="image"
		>
			{ value.src ? 'Change' : 'Select' }
		</MediaUploadButton>

		{ value.src && <Button
			{ ...removeButtonProps }
			onClick={ () => onChange }
		>
			Remove
		</Button> }
	</InspectorControls.BaseControl>
}

export default ImageControl;

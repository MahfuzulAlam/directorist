<?php
/**
 * @author  wpWax
 * @since   6.6
 * @version 7.0.4.1
 */

if ( ! defined( 'ABSPATH' ) ) exit;
?>

<div class="directorist-search-field directorist-form-group">

	<label class="directorist-search-field__label"><?php echo esc_attr( $data['placeholder'] ); ?></label>

	<input class="directorist-form-element directorist-search-field__input" type="text" name="<?php echo esc_attr( $data['field_key'] ); ?>" value="<?php echo esc_attr( $value ); ?>" placeholder="" <?php echo ! empty( $data['required'] ) ? 'required="required"' : ''; ?>>

	<div class="directorist-search-field__btn directorist-search-field__btn--clear">
		<?php directorist_icon( 'fas fa-times-circle' ); ?>	
	</div>

</div>
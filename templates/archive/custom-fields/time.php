<?php
/**
 * @author  wpWax
 * @since   6.6
 * @version 6.7
 */

if ( ! defined( 'ABSPATH' ) ) exit;

$time_format = get_option( 'time_format' );
?>

<div class="directorist-listing-card-time"><?php directorist_icon( $icon ); ?><?php $listings->print_label( $label ); ?><?php echo esc_html( date( $time_format, strtotime( esc_html( $value ) ) ) ); ?></div>
<?php

	/**
		 * @package Model_Builder
		 * @version 0.2
	*/
	/*
		Plugin Name: Model Builder
		Plugin URI: https://github.com/wallyfaye/bp
		Description: Create custom post types with meta boxes and REST API endpoints
		Author: Wally Faye
		Version: 0.2
		Author URI: https://github.com/wallyfaye
	*/

	// debugging
		ini_set('display_errors', 1);
		error_reporting(E_ALL);

	// include class autoloader
		require __DIR__ . '/vendor/autoload.php';
		use ModelBuilder\ModelBuilder;

		$bp = new ModelBuilder(array(
			'models_file' => __DIR__ . '/src/models.json'
		));

		$bp->readModelsFile();
		$bp->buildPostTypes();
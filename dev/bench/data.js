window.BENCHMARK_DATA = {
  "lastUpdate": 1794820730436,
  "repoUrl": "https://github.com/giuseppe-esposito-87/phpantom_lsp",
  "entries": {
    "PHPantom Benchmarks": [
      {
        "commit": {
          "author": {
            "email": "4638858+giuseppe-esposito-87@users.noreply.github.com",
            "name": "Giuseppe Esposito",
            "username": "giuseppe-esposito-87"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d49e1dd479e6389ec222e5a9d2d481f4fee3f0cc",
          "message": "Service and plugin lookups in files open at startup",
          "timestamp": "2026-11-12T21:12:48+01:00",
          "tree_id": "92046ddd4cace05696c5e5665a68cee07eb2c0f2",
          "url": "https://github.com/giuseppe-esposito-87/phpantom_lsp/commit/d49e1dd479e6389ec222e5a9d2d481f4fee3f0cc"
        },
        "date": 1794820729860,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "cold_start_completion",
            "value": 3.447,
            "range": "± 0.074",
            "unit": "ms"
          },
          {
            "name": "completion_simple_class",
            "value": 0.023,
            "range": "± 0.010",
            "unit": "ms"
          },
          {
            "name": "completion_inheritance_depth/depth_5",
            "value": 0.059,
            "range": "± 0.018",
            "unit": "ms"
          },
          {
            "name": "completion_inheritance_depth/depth_10",
            "value": 0.082,
            "range": "± 0.022",
            "unit": "ms"
          },
          {
            "name": "completion_inheritance_depth/depth_20",
            "value": 0.213,
            "range": "± 0.030",
            "unit": "ms"
          },
          {
            "name": "completion_classmap_size/100_classes",
            "value": 0.194,
            "range": "± 0.018",
            "unit": "ms"
          },
          {
            "name": "completion_classmap_size/500_classes",
            "value": 0.811,
            "range": "± 0.030",
            "unit": "ms"
          },
          {
            "name": "completion_classmap_size/1000_classes",
            "value": 1.559,
            "range": "± 0.044",
            "unit": "ms"
          },
          {
            "name": "completion_generics_and_mixins",
            "value": 0.079,
            "range": "± 0.012",
            "unit": "ms"
          },
          {
            "name": "completion_with_narrowing",
            "value": 0.035,
            "range": "± 0.008",
            "unit": "ms"
          },
          {
            "name": "completion_5_method_chain",
            "value": 0.03,
            "range": "± 0.010",
            "unit": "ms"
          },
          {
            "name": "completion_cross_file_type_hint",
            "value": 0.028,
            "range": "± 0.012",
            "unit": "ms"
          },
          {
            "name": "completion_carbon_class",
            "value": 4.368,
            "range": "± 0.094",
            "unit": "ms"
          },
          {
            "name": "completion_yii_deep_hierarchy",
            "value": 0.224,
            "range": "± 0.075",
            "unit": "ms"
          },
          {
            "name": "completion_large_file",
            "value": 0.297,
            "range": "± 0.022",
            "unit": "ms"
          },
          {
            "name": "completion_short_file",
            "value": 0.047,
            "range": "± 0.012",
            "unit": "ms"
          },
          {
            "name": "variable_completion/short",
            "value": 0.031,
            "range": "± 0.014",
            "unit": "ms"
          },
          {
            "name": "variable_completion/long",
            "value": 0.127,
            "range": "± 0.020",
            "unit": "ms"
          },
          {
            "name": "hover_method_call",
            "value": 0.019,
            "range": "± 0.010",
            "unit": "ms"
          },
          {
            "name": "goto_definition_method",
            "value": 0.032,
            "range": "± 0.011",
            "unit": "ms"
          },
          {
            "name": "update_ast_parse_time/100_lines",
            "value": 0.149,
            "range": "± 0.001",
            "unit": "ms"
          },
          {
            "name": "update_ast_parse_time/500_lines",
            "value": 0.838,
            "range": "± 0.004",
            "unit": "ms"
          },
          {
            "name": "update_ast_parse_time/2000_lines",
            "value": 4.441,
            "range": "± 0.014",
            "unit": "ms"
          },
          {
            "name": "reparse_500_line_file",
            "value": 0.849,
            "range": "± 0.004",
            "unit": "ms"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_generic_objects",
            "value": 0.753,
            "range": "± 0.014",
            "unit": "ms"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_objects",
            "value": 0.256,
            "range": "± 0.004",
            "unit": "ms"
          },
          {
            "name": "diagnostics/fixture/lots_of_missing_methods",
            "value": 7.023,
            "range": "± 0.017",
            "unit": "ms"
          },
          {
            "name": "diagnostics/fixture/method_chain",
            "value": 0.841,
            "range": "± 0.014",
            "unit": "ms"
          },
          {
            "name": "custom_builder_completion/custom_builder_deep_inheritance",
            "value": 0.044,
            "range": "± 0.014",
            "unit": "ms"
          },
          {
            "name": "drupal_completion/service_id",
            "value": 0.228,
            "range": "± 0.029",
            "unit": "ms"
          },
          {
            "name": "drupal_completion/route_name",
            "value": 0.219,
            "range": "± 0.023",
            "unit": "ms"
          },
          {
            "name": "drupal_completion/entity_type_id",
            "value": 0.297,
            "range": "± 0.029",
            "unit": "ms"
          },
          {
            "name": "drupal_completion/permission_name",
            "value": 0.276,
            "range": "± 0.021",
            "unit": "ms"
          },
          {
            "name": "drupal_completion/config_name",
            "value": 0.076,
            "range": "± 0.013",
            "unit": "ms"
          },
          {
            "name": "drupal_completion/render_element",
            "value": 0.193,
            "range": "± 0.023",
            "unit": "ms"
          },
          {
            "name": "drupal_completion/plugin_id",
            "value": 0.123,
            "range": "± 0.014",
            "unit": "ms"
          },
          {
            "name": "drupal_completion/hook_name_invoke_all",
            "value": 0.115,
            "range": "± 0.016",
            "unit": "ms"
          },
          {
            "name": "drupal_completion/hook_name_attribute",
            "value": 0.067,
            "range": "± 0.014",
            "unit": "ms"
          },
          {
            "name": "drupal_completion/theme_hook_name",
            "value": 0.044,
            "range": "± 0.012",
            "unit": "ms"
          },
          {
            "name": "drupal_completion/library_name",
            "value": 0.244,
            "range": "± 0.020",
            "unit": "ms"
          },
          {
            "name": "drupal_completion/callback_function",
            "value": 0.178,
            "range": "± 0.031",
            "unit": "ms"
          },
          {
            "name": "drupal_completion/callback_method",
            "value": 0.068,
            "range": "± 0.011",
            "unit": "ms"
          },
          {
            "name": "drupal_completion/event_name",
            "value": 0.336,
            "range": "± 0.028",
            "unit": "ms"
          },
          {
            "name": "drupal_completion/hook_implementation",
            "value": 0.107,
            "range": "± 0.011",
            "unit": "ms"
          },
          {
            "name": "laravel_completion/model_where_prefix",
            "value": 0.045,
            "range": "± 0.014",
            "unit": "ms"
          },
          {
            "name": "laravel_completion/model_typing_sequence",
            "value": 0.207,
            "range": "± 0.052",
            "unit": "ms"
          },
          {
            "name": "laravel_morph_column_completion/cold_confirmation/1",
            "value": 0.041,
            "range": "± 0.012",
            "unit": "ms"
          },
          {
            "name": "laravel_morph_column_completion/cached_request/1",
            "value": 0.033,
            "range": "± 0.011",
            "unit": "ms"
          },
          {
            "name": "laravel_morph_column_completion/cold_confirmation/128",
            "value": 0.107,
            "range": "± 0.021",
            "unit": "ms"
          },
          {
            "name": "laravel_morph_column_completion/cached_request/128",
            "value": 0.069,
            "range": "± 0.008",
            "unit": "ms"
          },
          {
            "name": "laravel_collection_property_completion/key_by",
            "value": 0.079,
            "range": "± 0.012",
            "unit": "ms"
          },
          {
            "name": "laravel_collection_property_completion/key_by_callback",
            "value": 0.098,
            "range": "± 0.015",
            "unit": "ms"
          },
          {
            "name": "laravel_collection_property_completion/group_by",
            "value": 0.088,
            "range": "± 0.016",
            "unit": "ms"
          },
          {
            "name": "laravel_collection_property_completion/group_by_named",
            "value": 0.088,
            "range": "± 0.010",
            "unit": "ms"
          },
          {
            "name": "laravel_collection_property_completion/group_by_multilevel",
            "value": 0.098,
            "range": "± 0.014",
            "unit": "ms"
          },
          {
            "name": "laravel_collection_property_completion/pluck",
            "value": 0.049,
            "range": "± 0.013",
            "unit": "ms"
          },
          {
            "name": "laravel_collection_property_completion/pluck_named",
            "value": 0.064,
            "range": "± 0.014",
            "unit": "ms"
          },
          {
            "name": "laravel_collection_property_completion/ordinary_method",
            "value": 0.08,
            "range": "± 0.014",
            "unit": "ms"
          },
          {
            "name": "find_references/hierarchy_scan/50",
            "value": 0.181,
            "range": "± 0.025",
            "unit": "ms"
          },
          {
            "name": "find_references/hierarchy_scan/150",
            "value": 0.264,
            "range": "± 0.008",
            "unit": "ms"
          },
          {
            "name": "symfony_completion/service_id_php",
            "value": 0.236,
            "range": "± 0.025",
            "unit": "ms"
          },
          {
            "name": "symfony_completion/translation_key_php",
            "value": 0.578,
            "range": "± 0.027",
            "unit": "ms"
          },
          {
            "name": "symfony_completion/route_name_php",
            "value": 0.281,
            "range": "± 0.020",
            "unit": "ms"
          },
          {
            "name": "symfony_completion/template_name_php",
            "value": 0.207,
            "range": "± 0.025",
            "unit": "ms"
          },
          {
            "name": "symfony_completion/route_name_twig",
            "value": 0.26,
            "range": "± 0.018",
            "unit": "ms"
          },
          {
            "name": "tempest/member_completion",
            "value": 0.067,
            "range": "± 0.012",
            "unit": "ms"
          },
          {
            "name": "tempest/component_completion",
            "value": 0.166,
            "range": "± 0.027",
            "unit": "ms"
          },
          {
            "name": "tempest/attribute_completion",
            "value": 0.078,
            "range": "± 0.010",
            "unit": "ms"
          },
          {
            "name": "tempest/view_path_completion",
            "value": 0.351,
            "range": "± 0.032",
            "unit": "ms"
          },
          {
            "name": "tempest/component_definition",
            "value": 0.059,
            "range": "± 0.010",
            "unit": "ms"
          },
          {
            "name": "tempest/edit_10_loops",
            "value": 0.044,
            "range": "± 0.000",
            "unit": "ms"
          },
          {
            "name": "tempest/edit_100_loops",
            "value": 0.32,
            "range": "± 0.001",
            "unit": "ms"
          },
          {
            "name": "tempest/caller_edit_context",
            "value": 0.526,
            "range": "± 0.007",
            "unit": "ms"
          },
          {
            "name": "wordpress_completion/hook_name_add_action",
            "value": 0.791,
            "range": "± 0.022",
            "unit": "ms"
          },
          {
            "name": "wordpress_completion/hook_name_apply_filters",
            "value": 0.792,
            "range": "± 0.026",
            "unit": "ms"
          },
          {
            "name": "wordpress_completion/stub_member_global_wpdb",
            "value": 0.058,
            "range": "± 0.017",
            "unit": "ms"
          },
          {
            "name": "wordpress_completion/stub_member_get_post",
            "value": 0.086,
            "range": "± 0.023",
            "unit": "ms"
          },
          {
            "name": "wordpress_completion/hook_definition",
            "value": 0.095,
            "range": "± 0.011",
            "unit": "ms"
          },
          {
            "name": "yii_completion/view_name_php",
            "value": 0.088,
            "range": "± 0.015",
            "unit": "ms"
          },
          {
            "name": "yii_completion/view_path_php",
            "value": 0.078,
            "range": "± 0.012",
            "unit": "ms"
          },
          {
            "name": "yii_completion/view_name_template",
            "value": 0.073,
            "range": "± 0.011",
            "unit": "ms"
          },
          {
            "name": "yii_completion/view_parameter",
            "value": 0.088,
            "range": "± 0.017",
            "unit": "ms"
          },
          {
            "name": "yii_completion/alias_name",
            "value": 0.029,
            "range": "± 0.010",
            "unit": "ms"
          },
          {
            "name": "yii_completion/asset_file",
            "value": 0.05,
            "range": "± 0.008",
            "unit": "ms"
          },
          {
            "name": "yii_completion/route_name",
            "value": 0.103,
            "range": "± 0.015",
            "unit": "ms"
          },
          {
            "name": "yii_completion/route_name_wrapper",
            "value": 0.132,
            "range": "± 0.014",
            "unit": "ms"
          },
          {
            "name": "yii_completion/route_parameter_key",
            "value": 0.088,
            "range": "± 0.010",
            "unit": "ms"
          },
          {
            "name": "yii_completion/route_argument",
            "value": 0.039,
            "range": "± 0.009",
            "unit": "ms"
          },
          {
            "name": "yii_completion/definition_key",
            "value": 0.036,
            "range": "± 0.011",
            "unit": "ms"
          },
          {
            "name": "yii_completion/definition_argument",
            "value": 0.031,
            "range": "± 0.010",
            "unit": "ms"
          },
          {
            "name": "yii_completion/params_key",
            "value": 0.038,
            "range": "± 0.011",
            "unit": "ms"
          },
          {
            "name": "yii_completion/message_id",
            "value": 0.125,
            "range": "± 0.018",
            "unit": "ms"
          },
          {
            "name": "yii_completion/record_attribute",
            "value": 0.079,
            "range": "± 0.011",
            "unit": "ms"
          },
          {
            "name": "yii_completion/record_column",
            "value": 0.092,
            "range": "± 0.013",
            "unit": "ms"
          },
          {
            "name": "yii_completion/query_table",
            "value": 0.08,
            "range": "± 0.014",
            "unit": "ms"
          },
          {
            "name": "yii_completion/query_column",
            "value": 0.074,
            "range": "± 0.015",
            "unit": "ms"
          },
          {
            "name": "yii_completion/record_relation",
            "value": 0.046,
            "range": "± 0.011",
            "unit": "ms"
          },
          {
            "name": "yii_completion/record_relation_path",
            "value": 0.067,
            "range": "± 0.010",
            "unit": "ms"
          },
          {
            "name": "yii_completion/form_field",
            "value": 0.246,
            "range": "± 0.018",
            "unit": "ms"
          },
          {
            "name": "yii_completion/hydration_map_key",
            "value": 0.238,
            "range": "± 0.020",
            "unit": "ms"
          }
        ]
      }
    ]
  }
}
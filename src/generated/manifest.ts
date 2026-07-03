/** Auto-generated operation manifest. */
export const OPERATIONS = [
  {
    "operationId": "api_agg_data_retrieve",
    "domain": "analyticsMetrology",
    "method": "apiAggDataRetrieve",
    "http": "GET",
    "path": "/api/agg_data/",
    "paginate": "none"
  },
  {
    "operationId": "api_analytics_export_xlsx_retrieve",
    "domain": "analyticsMetrology",
    "method": "apiAnalyticsExportXlsxRetrieve",
    "http": "GET",
    "path": "/api/analytics/export/xlsx/",
    "paginate": "none"
  },
  {
    "operationId": "api_composer_data_retrieve",
    "domain": "analyticsMetrology",
    "method": "apiComposerDataRetrieve",
    "http": "GET",
    "path": "/api/composer_data/",
    "paginate": "none"
  },
  {
    "operationId": "api_get_audits_metrics_retrieve",
    "domain": "analyticsMetrology",
    "method": "apiGetAuditsMetricsRetrieve",
    "http": "GET",
    "path": "/api/get_audits_metrics/",
    "paginate": "none"
  },
  {
    "operationId": "api_get_combined_assessments_status_retrieve",
    "domain": "analyticsMetrology",
    "method": "apiGetCombinedAssessmentsStatusRetrieve",
    "http": "GET",
    "path": "/api/get_combined_assessments_status/",
    "paginate": "none"
  },
  {
    "operationId": "api_get_counters_retrieve",
    "domain": "analyticsMetrology",
    "method": "apiGetCountersRetrieve",
    "http": "GET",
    "path": "/api/get_counters/",
    "paginate": "none"
  },
  {
    "operationId": "api_get_governance_calendar_data_retrieve",
    "domain": "analyticsMetrology",
    "method": "apiGetGovernanceCalendarDataRetrieve",
    "http": "GET",
    "path": "/api/get_governance_calendar_data/",
    "paginate": "none"
  },
  {
    "operationId": "api_get_metrics_retrieve",
    "domain": "analyticsMetrology",
    "method": "apiGetMetricsRetrieve",
    "http": "GET",
    "path": "/api/get_metrics/",
    "paginate": "none"
  },
  {
    "operationId": "api_metrology_builtin_metric_samples_list",
    "domain": "analyticsMetrology",
    "method": "apiMetrologyBuiltinMetricSamplesList",
    "http": "GET",
    "path": "/api/metrology/builtin-metric-samples/",
    "paginate": "page"
  },
  {
    "operationId": "api_metrology_builtin_metric_samples_create",
    "domain": "analyticsMetrology",
    "method": "apiMetrologyBuiltinMetricSamplesCreate",
    "http": "POST",
    "path": "/api/metrology/builtin-metric-samples/",
    "paginate": "none"
  },
  {
    "operationId": "api_metrology_builtin_metric_samples_retrieve",
    "domain": "analyticsMetrology",
    "method": "apiMetrologyBuiltinMetricSamplesRetrieve",
    "http": "GET",
    "path": "/api/metrology/builtin-metric-samples/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_metrology_builtin_metric_samples_update",
    "domain": "analyticsMetrology",
    "method": "apiMetrologyBuiltinMetricSamplesUpdate",
    "http": "PUT",
    "path": "/api/metrology/builtin-metric-samples/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_metrology_builtin_metric_samples_partial_update",
    "domain": "analyticsMetrology",
    "method": "apiMetrologyBuiltinMetricSamplesPartialUpdate",
    "http": "PATCH",
    "path": "/api/metrology/builtin-metric-samples/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_metrology_builtin_metric_samples_destroy",
    "domain": "analyticsMetrology",
    "method": "apiMetrologyBuiltinMetricSamplesDestroy",
    "http": "DELETE",
    "path": "/api/metrology/builtin-metric-samples/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_metrology_builtin_metric_samples_cascade_info_retrieve",
    "domain": "analyticsMetrology",
    "method": "apiMetrologyBuiltinMetricSamplesCascadeInfoRetrieve",
    "http": "GET",
    "path": "/api/metrology/builtin-metric-samples/{id}/cascade-info/",
    "paginate": "none"
  },
  {
    "operationId": "api_metrology_builtin_metric_samples_object_retrieve",
    "domain": "analyticsMetrology",
    "method": "apiMetrologyBuiltinMetricSamplesObjectRetrieve",
    "http": "GET",
    "path": "/api/metrology/builtin-metric-samples/{id}/object/",
    "paginate": "none"
  },
  {
    "operationId": "api_metrology_builtin_metric_samples_batch_action_create",
    "domain": "analyticsMetrology",
    "method": "apiMetrologyBuiltinMetricSamplesBatchActionCreate",
    "http": "POST",
    "path": "/api/metrology/builtin-metric-samples/batch-action/",
    "paginate": "none"
  },
  {
    "operationId": "api_metrology_builtin_metric_samples_for_object_retrieve",
    "domain": "analyticsMetrology",
    "method": "apiMetrologyBuiltinMetricSamplesForObjectRetrieve",
    "http": "GET",
    "path": "/api/metrology/builtin-metric-samples/for_object/",
    "paginate": "none"
  },
  {
    "operationId": "api_metrology_builtin_metric_samples_refresh_create",
    "domain": "analyticsMetrology",
    "method": "apiMetrologyBuiltinMetricSamplesRefreshCreate",
    "http": "POST",
    "path": "/api/metrology/builtin-metric-samples/refresh/",
    "paginate": "none"
  },
  {
    "operationId": "api_metrology_builtin_metric_samples_supported_models_retrieve",
    "domain": "analyticsMetrology",
    "method": "apiMetrologyBuiltinMetricSamplesSupportedModelsRetrieve",
    "http": "GET",
    "path": "/api/metrology/builtin-metric-samples/supported_models/",
    "paginate": "none"
  },
  {
    "operationId": "api_metrology_custom_metric_samples_list",
    "domain": "analyticsMetrology",
    "method": "apiMetrologyCustomMetricSamplesList",
    "http": "GET",
    "path": "/api/metrology/custom-metric-samples/",
    "paginate": "page"
  },
  {
    "operationId": "api_metrology_custom_metric_samples_create",
    "domain": "analyticsMetrology",
    "method": "apiMetrologyCustomMetricSamplesCreate",
    "http": "POST",
    "path": "/api/metrology/custom-metric-samples/",
    "paginate": "none"
  },
  {
    "operationId": "api_metrology_custom_metric_samples_retrieve",
    "domain": "analyticsMetrology",
    "method": "apiMetrologyCustomMetricSamplesRetrieve",
    "http": "GET",
    "path": "/api/metrology/custom-metric-samples/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_metrology_custom_metric_samples_update",
    "domain": "analyticsMetrology",
    "method": "apiMetrologyCustomMetricSamplesUpdate",
    "http": "PUT",
    "path": "/api/metrology/custom-metric-samples/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_metrology_custom_metric_samples_partial_update",
    "domain": "analyticsMetrology",
    "method": "apiMetrologyCustomMetricSamplesPartialUpdate",
    "http": "PATCH",
    "path": "/api/metrology/custom-metric-samples/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_metrology_custom_metric_samples_destroy",
    "domain": "analyticsMetrology",
    "method": "apiMetrologyCustomMetricSamplesDestroy",
    "http": "DELETE",
    "path": "/api/metrology/custom-metric-samples/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_metrology_custom_metric_samples_cascade_info_retrieve",
    "domain": "analyticsMetrology",
    "method": "apiMetrologyCustomMetricSamplesCascadeInfoRetrieve",
    "http": "GET",
    "path": "/api/metrology/custom-metric-samples/{id}/cascade-info/",
    "paginate": "none"
  },
  {
    "operationId": "api_metrology_custom_metric_samples_object_retrieve",
    "domain": "analyticsMetrology",
    "method": "apiMetrologyCustomMetricSamplesObjectRetrieve",
    "http": "GET",
    "path": "/api/metrology/custom-metric-samples/{id}/object/",
    "paginate": "none"
  },
  {
    "operationId": "api_metrology_custom_metric_samples_batch_action_create",
    "domain": "analyticsMetrology",
    "method": "apiMetrologyCustomMetricSamplesBatchActionCreate",
    "http": "POST",
    "path": "/api/metrology/custom-metric-samples/batch-action/",
    "paginate": "none"
  },
  {
    "operationId": "api_metrology_dashboard_widgets_list",
    "domain": "analyticsMetrology",
    "method": "apiMetrologyDashboardWidgetsList",
    "http": "GET",
    "path": "/api/metrology/dashboard-widgets/",
    "paginate": "page"
  },
  {
    "operationId": "api_metrology_dashboard_widgets_create",
    "domain": "analyticsMetrology",
    "method": "apiMetrologyDashboardWidgetsCreate",
    "http": "POST",
    "path": "/api/metrology/dashboard-widgets/",
    "paginate": "none"
  },
  {
    "operationId": "api_metrology_dashboard_widgets_retrieve",
    "domain": "analyticsMetrology",
    "method": "apiMetrologyDashboardWidgetsRetrieve",
    "http": "GET",
    "path": "/api/metrology/dashboard-widgets/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_metrology_dashboard_widgets_update",
    "domain": "analyticsMetrology",
    "method": "apiMetrologyDashboardWidgetsUpdate",
    "http": "PUT",
    "path": "/api/metrology/dashboard-widgets/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_metrology_dashboard_widgets_partial_update",
    "domain": "analyticsMetrology",
    "method": "apiMetrologyDashboardWidgetsPartialUpdate",
    "http": "PATCH",
    "path": "/api/metrology/dashboard-widgets/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_metrology_dashboard_widgets_destroy",
    "domain": "analyticsMetrology",
    "method": "apiMetrologyDashboardWidgetsDestroy",
    "http": "DELETE",
    "path": "/api/metrology/dashboard-widgets/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_metrology_dashboard_widgets_cascade_info_retrieve",
    "domain": "analyticsMetrology",
    "method": "apiMetrologyDashboardWidgetsCascadeInfoRetrieve",
    "http": "GET",
    "path": "/api/metrology/dashboard-widgets/{id}/cascade-info/",
    "paginate": "none"
  },
  {
    "operationId": "api_metrology_dashboard_widgets_object_retrieve",
    "domain": "analyticsMetrology",
    "method": "apiMetrologyDashboardWidgetsObjectRetrieve",
    "http": "GET",
    "path": "/api/metrology/dashboard-widgets/{id}/object/",
    "paginate": "none"
  },
  {
    "operationId": "api_metrology_dashboard_widgets_aggregation_retrieve",
    "domain": "analyticsMetrology",
    "method": "apiMetrologyDashboardWidgetsAggregationRetrieve",
    "http": "GET",
    "path": "/api/metrology/dashboard-widgets/aggregation/",
    "paginate": "none"
  },
  {
    "operationId": "api_metrology_dashboard_widgets_batch_action_create",
    "domain": "analyticsMetrology",
    "method": "apiMetrologyDashboardWidgetsBatchActionCreate",
    "http": "POST",
    "path": "/api/metrology/dashboard-widgets/batch-action/",
    "paginate": "none"
  },
  {
    "operationId": "api_metrology_dashboard_widgets_chart_type_retrieve",
    "domain": "analyticsMetrology",
    "method": "apiMetrologyDashboardWidgetsChartTypeRetrieve",
    "http": "GET",
    "path": "/api/metrology/dashboard-widgets/chart_type/",
    "paginate": "none"
  },
  {
    "operationId": "api_metrology_dashboard_widgets_time_range_retrieve",
    "domain": "analyticsMetrology",
    "method": "apiMetrologyDashboardWidgetsTimeRangeRetrieve",
    "http": "GET",
    "path": "/api/metrology/dashboard-widgets/time_range/",
    "paginate": "none"
  },
  {
    "operationId": "api_metrology_dashboards_list",
    "domain": "analyticsMetrology",
    "method": "apiMetrologyDashboardsList",
    "http": "GET",
    "path": "/api/metrology/dashboards/",
    "paginate": "page"
  },
  {
    "operationId": "api_metrology_dashboards_create",
    "domain": "analyticsMetrology",
    "method": "apiMetrologyDashboardsCreate",
    "http": "POST",
    "path": "/api/metrology/dashboards/",
    "paginate": "none"
  },
  {
    "operationId": "api_metrology_dashboards_retrieve",
    "domain": "analyticsMetrology",
    "method": "apiMetrologyDashboardsRetrieve",
    "http": "GET",
    "path": "/api/metrology/dashboards/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_metrology_dashboards_update",
    "domain": "analyticsMetrology",
    "method": "apiMetrologyDashboardsUpdate",
    "http": "PUT",
    "path": "/api/metrology/dashboards/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_metrology_dashboards_partial_update",
    "domain": "analyticsMetrology",
    "method": "apiMetrologyDashboardsPartialUpdate",
    "http": "PATCH",
    "path": "/api/metrology/dashboards/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_metrology_dashboards_destroy",
    "domain": "analyticsMetrology",
    "method": "apiMetrologyDashboardsDestroy",
    "http": "DELETE",
    "path": "/api/metrology/dashboards/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_metrology_dashboards_cascade_info_retrieve",
    "domain": "analyticsMetrology",
    "method": "apiMetrologyDashboardsCascadeInfoRetrieve",
    "http": "GET",
    "path": "/api/metrology/dashboards/{id}/cascade-info/",
    "paginate": "none"
  },
  {
    "operationId": "api_metrology_dashboards_object_retrieve",
    "domain": "analyticsMetrology",
    "method": "apiMetrologyDashboardsObjectRetrieve",
    "http": "GET",
    "path": "/api/metrology/dashboards/{id}/object/",
    "paginate": "none"
  },
  {
    "operationId": "api_metrology_dashboards_batch_action_create",
    "domain": "analyticsMetrology",
    "method": "apiMetrologyDashboardsBatchActionCreate",
    "http": "POST",
    "path": "/api/metrology/dashboards/batch-action/",
    "paginate": "none"
  },
  {
    "operationId": "api_metrology_metric_definitions_list",
    "domain": "analyticsMetrology",
    "method": "apiMetrologyMetricDefinitionsList",
    "http": "GET",
    "path": "/api/metrology/metric-definitions/",
    "paginate": "page"
  },
  {
    "operationId": "api_metrology_metric_definitions_create",
    "domain": "analyticsMetrology",
    "method": "apiMetrologyMetricDefinitionsCreate",
    "http": "POST",
    "path": "/api/metrology/metric-definitions/",
    "paginate": "none"
  },
  {
    "operationId": "api_metrology_metric_definitions_retrieve",
    "domain": "analyticsMetrology",
    "method": "apiMetrologyMetricDefinitionsRetrieve",
    "http": "GET",
    "path": "/api/metrology/metric-definitions/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_metrology_metric_definitions_update",
    "domain": "analyticsMetrology",
    "method": "apiMetrologyMetricDefinitionsUpdate",
    "http": "PUT",
    "path": "/api/metrology/metric-definitions/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_metrology_metric_definitions_partial_update",
    "domain": "analyticsMetrology",
    "method": "apiMetrologyMetricDefinitionsPartialUpdate",
    "http": "PATCH",
    "path": "/api/metrology/metric-definitions/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_metrology_metric_definitions_destroy",
    "domain": "analyticsMetrology",
    "method": "apiMetrologyMetricDefinitionsDestroy",
    "http": "DELETE",
    "path": "/api/metrology/metric-definitions/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_metrology_metric_definitions_cascade_info_retrieve",
    "domain": "analyticsMetrology",
    "method": "apiMetrologyMetricDefinitionsCascadeInfoRetrieve",
    "http": "GET",
    "path": "/api/metrology/metric-definitions/{id}/cascade-info/",
    "paginate": "none"
  },
  {
    "operationId": "api_metrology_metric_definitions_object_retrieve",
    "domain": "analyticsMetrology",
    "method": "apiMetrologyMetricDefinitionsObjectRetrieve",
    "http": "GET",
    "path": "/api/metrology/metric-definitions/{id}/object/",
    "paginate": "none"
  },
  {
    "operationId": "api_metrology_metric_definitions_batch_action_create",
    "domain": "analyticsMetrology",
    "method": "apiMetrologyMetricDefinitionsBatchActionCreate",
    "http": "POST",
    "path": "/api/metrology/metric-definitions/batch-action/",
    "paginate": "none"
  },
  {
    "operationId": "api_metrology_metric_definitions_category_retrieve",
    "domain": "analyticsMetrology",
    "method": "apiMetrologyMetricDefinitionsCategoryRetrieve",
    "http": "GET",
    "path": "/api/metrology/metric-definitions/category/",
    "paginate": "none"
  },
  {
    "operationId": "api_metrology_metric_definitions_provider_retrieve",
    "domain": "analyticsMetrology",
    "method": "apiMetrologyMetricDefinitionsProviderRetrieve",
    "http": "GET",
    "path": "/api/metrology/metric-definitions/provider/",
    "paginate": "none"
  },
  {
    "operationId": "api_metrology_metric_instances_list",
    "domain": "analyticsMetrology",
    "method": "apiMetrologyMetricInstancesList",
    "http": "GET",
    "path": "/api/metrology/metric-instances/",
    "paginate": "page"
  },
  {
    "operationId": "api_metrology_metric_instances_create",
    "domain": "analyticsMetrology",
    "method": "apiMetrologyMetricInstancesCreate",
    "http": "POST",
    "path": "/api/metrology/metric-instances/",
    "paginate": "none"
  },
  {
    "operationId": "api_metrology_metric_instances_retrieve",
    "domain": "analyticsMetrology",
    "method": "apiMetrologyMetricInstancesRetrieve",
    "http": "GET",
    "path": "/api/metrology/metric-instances/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_metrology_metric_instances_update",
    "domain": "analyticsMetrology",
    "method": "apiMetrologyMetricInstancesUpdate",
    "http": "PUT",
    "path": "/api/metrology/metric-instances/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_metrology_metric_instances_partial_update",
    "domain": "analyticsMetrology",
    "method": "apiMetrologyMetricInstancesPartialUpdate",
    "http": "PATCH",
    "path": "/api/metrology/metric-instances/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_metrology_metric_instances_destroy",
    "domain": "analyticsMetrology",
    "method": "apiMetrologyMetricInstancesDestroy",
    "http": "DELETE",
    "path": "/api/metrology/metric-instances/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_metrology_metric_instances_cascade_info_retrieve",
    "domain": "analyticsMetrology",
    "method": "apiMetrologyMetricInstancesCascadeInfoRetrieve",
    "http": "GET",
    "path": "/api/metrology/metric-instances/{id}/cascade-info/",
    "paginate": "none"
  },
  {
    "operationId": "api_metrology_metric_instances_object_retrieve",
    "domain": "analyticsMetrology",
    "method": "apiMetrologyMetricInstancesObjectRetrieve",
    "http": "GET",
    "path": "/api/metrology/metric-instances/{id}/object/",
    "paginate": "none"
  },
  {
    "operationId": "api_metrology_metric_instances_batch_action_create",
    "domain": "analyticsMetrology",
    "method": "apiMetrologyMetricInstancesBatchActionCreate",
    "http": "POST",
    "path": "/api/metrology/metric-instances/batch-action/",
    "paginate": "none"
  },
  {
    "operationId": "api_metrology_metric_instances_collection_frequency_retrieve",
    "domain": "analyticsMetrology",
    "method": "apiMetrologyMetricInstancesCollectionFrequencyRetrieve",
    "http": "GET",
    "path": "/api/metrology/metric-instances/collection_frequency/",
    "paginate": "none"
  },
  {
    "operationId": "api_metrology_metric_instances_status_retrieve",
    "domain": "analyticsMetrology",
    "method": "apiMetrologyMetricInstancesStatusRetrieve",
    "http": "GET",
    "path": "/api/metrology/metric-instances/status/",
    "paginate": "none"
  },
  {
    "operationId": "api_asset_capabilities_list",
    "domain": "assets",
    "method": "apiAssetCapabilitiesList",
    "http": "GET",
    "path": "/api/asset-capabilities/",
    "paginate": "page"
  },
  {
    "operationId": "api_asset_capabilities_create",
    "domain": "assets",
    "method": "apiAssetCapabilitiesCreate",
    "http": "POST",
    "path": "/api/asset-capabilities/",
    "paginate": "none"
  },
  {
    "operationId": "api_asset_capabilities_retrieve",
    "domain": "assets",
    "method": "apiAssetCapabilitiesRetrieve",
    "http": "GET",
    "path": "/api/asset-capabilities/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_asset_capabilities_update",
    "domain": "assets",
    "method": "apiAssetCapabilitiesUpdate",
    "http": "PUT",
    "path": "/api/asset-capabilities/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_asset_capabilities_partial_update",
    "domain": "assets",
    "method": "apiAssetCapabilitiesPartialUpdate",
    "http": "PATCH",
    "path": "/api/asset-capabilities/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_asset_capabilities_destroy",
    "domain": "assets",
    "method": "apiAssetCapabilitiesDestroy",
    "http": "DELETE",
    "path": "/api/asset-capabilities/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_asset_capabilities_cascade_info_retrieve",
    "domain": "assets",
    "method": "apiAssetCapabilitiesCascadeInfoRetrieve",
    "http": "GET",
    "path": "/api/asset-capabilities/{id}/cascade-info/",
    "paginate": "none"
  },
  {
    "operationId": "api_asset_capabilities_object_retrieve",
    "domain": "assets",
    "method": "apiAssetCapabilitiesObjectRetrieve",
    "http": "GET",
    "path": "/api/asset-capabilities/{id}/object/",
    "paginate": "none"
  },
  {
    "operationId": "api_asset_capabilities_batch_action_create",
    "domain": "assets",
    "method": "apiAssetCapabilitiesBatchActionCreate",
    "http": "POST",
    "path": "/api/asset-capabilities/batch-action/",
    "paginate": "none"
  },
  {
    "operationId": "api_asset_class_list",
    "domain": "assets",
    "method": "apiAssetClassList",
    "http": "GET",
    "path": "/api/asset-class/",
    "paginate": "page"
  },
  {
    "operationId": "api_asset_class_create",
    "domain": "assets",
    "method": "apiAssetClassCreate",
    "http": "POST",
    "path": "/api/asset-class/",
    "paginate": "none"
  },
  {
    "operationId": "api_asset_class_retrieve",
    "domain": "assets",
    "method": "apiAssetClassRetrieve",
    "http": "GET",
    "path": "/api/asset-class/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_asset_class_update",
    "domain": "assets",
    "method": "apiAssetClassUpdate",
    "http": "PUT",
    "path": "/api/asset-class/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_asset_class_partial_update",
    "domain": "assets",
    "method": "apiAssetClassPartialUpdate",
    "http": "PATCH",
    "path": "/api/asset-class/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_asset_class_destroy",
    "domain": "assets",
    "method": "apiAssetClassDestroy",
    "http": "DELETE",
    "path": "/api/asset-class/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_asset_class_cascade_info_retrieve",
    "domain": "assets",
    "method": "apiAssetClassCascadeInfoRetrieve",
    "http": "GET",
    "path": "/api/asset-class/{id}/cascade-info/",
    "paginate": "none"
  },
  {
    "operationId": "api_asset_class_object_retrieve",
    "domain": "assets",
    "method": "apiAssetClassObjectRetrieve",
    "http": "GET",
    "path": "/api/asset-class/{id}/object/",
    "paginate": "none"
  },
  {
    "operationId": "api_asset_class_batch_action_create",
    "domain": "assets",
    "method": "apiAssetClassBatchActionCreate",
    "http": "POST",
    "path": "/api/asset-class/batch-action/",
    "paginate": "none"
  },
  {
    "operationId": "api_asset_class_tree_retrieve",
    "domain": "assets",
    "method": "apiAssetClassTreeRetrieve",
    "http": "GET",
    "path": "/api/asset-class/tree/",
    "paginate": "none"
  },
  {
    "operationId": "api_assets_list",
    "domain": "assets",
    "method": "apiAssetsList",
    "http": "GET",
    "path": "/api/assets/",
    "paginate": "page"
  },
  {
    "operationId": "api_assets_create",
    "domain": "assets",
    "method": "apiAssetsCreate",
    "http": "POST",
    "path": "/api/assets/",
    "paginate": "none"
  },
  {
    "operationId": "api_assets_retrieve",
    "domain": "assets",
    "method": "apiAssetsRetrieve",
    "http": "GET",
    "path": "/api/assets/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_assets_update",
    "domain": "assets",
    "method": "apiAssetsUpdate",
    "http": "PUT",
    "path": "/api/assets/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_assets_partial_update",
    "domain": "assets",
    "method": "apiAssetsPartialUpdate",
    "http": "PATCH",
    "path": "/api/assets/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_assets_destroy",
    "domain": "assets",
    "method": "apiAssetsDestroy",
    "http": "DELETE",
    "path": "/api/assets/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_assets_cascade_info_retrieve",
    "domain": "assets",
    "method": "apiAssetsCascadeInfoRetrieve",
    "http": "GET",
    "path": "/api/assets/{id}/cascade-info/",
    "paginate": "none"
  },
  {
    "operationId": "api_assets_object_retrieve",
    "domain": "assets",
    "method": "apiAssetsObjectRetrieve",
    "http": "GET",
    "path": "/api/assets/{id}/object/",
    "paginate": "none"
  },
  {
    "operationId": "api_assets_asset_class_retrieve",
    "domain": "assets",
    "method": "apiAssetsAssetClassRetrieve",
    "http": "GET",
    "path": "/api/assets/asset_class/",
    "paginate": "none"
  },
  {
    "operationId": "api_assets_autocomplete_retrieve",
    "domain": "assets",
    "method": "apiAssetsAutocompleteRetrieve",
    "http": "GET",
    "path": "/api/assets/autocomplete/",
    "paginate": "none"
  },
  {
    "operationId": "api_assets_batch_action_create",
    "domain": "assets",
    "method": "apiAssetsBatchActionCreate",
    "http": "POST",
    "path": "/api/assets/batch-action/",
    "paginate": "none"
  },
  {
    "operationId": "api_assets_batch_create_create",
    "domain": "assets",
    "method": "apiAssetsBatchCreateCreate",
    "http": "POST",
    "path": "/api/assets/batch-create/",
    "paginate": "none"
  },
  {
    "operationId": "api_assets_disaster_recovery_objectives_retrieve",
    "domain": "assets",
    "method": "apiAssetsDisasterRecoveryObjectivesRetrieve",
    "http": "GET",
    "path": "/api/assets/disaster_recovery_objectives/",
    "paginate": "none"
  },
  {
    "operationId": "api_assets_dora_criticality_assessment_retrieve",
    "domain": "assets",
    "method": "apiAssetsDoraCriticalityAssessmentRetrieve",
    "http": "GET",
    "path": "/api/assets/dora_criticality_assessment/",
    "paginate": "none"
  },
  {
    "operationId": "api_assets_dora_discontinuing_impact_retrieve",
    "domain": "assets",
    "method": "apiAssetsDoraDiscontinuingImpactRetrieve",
    "http": "GET",
    "path": "/api/assets/dora_discontinuing_impact/",
    "paginate": "none"
  },
  {
    "operationId": "api_assets_dora_licenced_activity_retrieve",
    "domain": "assets",
    "method": "apiAssetsDoraLicencedActivityRetrieve",
    "http": "GET",
    "path": "/api/assets/dora_licenced_activity/",
    "paginate": "none"
  },
  {
    "operationId": "api_assets_export_csv_retrieve",
    "domain": "assets",
    "method": "apiAssetsExportCsvRetrieve",
    "http": "GET",
    "path": "/api/assets/export_csv/",
    "paginate": "none"
  },
  {
    "operationId": "api_assets_export_xlsx_retrieve",
    "domain": "assets",
    "method": "apiAssetsExportXlsxRetrieve",
    "http": "GET",
    "path": "/api/assets/export_xlsx/",
    "paginate": "none"
  },
  {
    "operationId": "api_assets_graph_retrieve",
    "domain": "assets",
    "method": "apiAssetsGraphRetrieve",
    "http": "GET",
    "path": "/api/assets/graph/",
    "paginate": "none"
  },
  {
    "operationId": "api_assets_ids_retrieve",
    "domain": "assets",
    "method": "apiAssetsIdsRetrieve",
    "http": "GET",
    "path": "/api/assets/ids/",
    "paginate": "none"
  },
  {
    "operationId": "api_assets_security_objectives_retrieve",
    "domain": "assets",
    "method": "apiAssetsSecurityObjectivesRetrieve",
    "http": "GET",
    "path": "/api/assets/security_objectives/",
    "paginate": "none"
  },
  {
    "operationId": "api_assets_type_retrieve",
    "domain": "assets",
    "method": "apiAssetsTypeRetrieve",
    "http": "GET",
    "path": "/api/assets/type/",
    "paginate": "none"
  },
  {
    "operationId": "api_accounts_saml_download_cert_retrieve",
    "domain": "authUsers",
    "method": "apiAccountsSamlDownloadCertRetrieve",
    "http": "GET",
    "path": "/api/accounts/saml/{organization_slug}/download-cert/",
    "paginate": "none"
  },
  {
    "operationId": "api_accounts_saml_generate_keys_create",
    "domain": "authUsers",
    "method": "apiAccountsSamlGenerateKeysCreate",
    "http": "POST",
    "path": "/api/accounts/saml/{organization_slug}/generate-keys/",
    "paginate": "none"
  },
  {
    "operationId": "api_csrf_retrieve",
    "domain": "authUsers",
    "method": "apiCsrfRetrieve",
    "http": "GET",
    "path": "/api/csrf/",
    "paginate": "none"
  },
  {
    "operationId": "api_iam_auth_tokens_retrieve",
    "domain": "authUsers",
    "method": "apiIamAuthTokensRetrieve",
    "http": "GET",
    "path": "/api/iam/auth-tokens/",
    "paginate": "none"
  },
  {
    "operationId": "api_iam_auth_tokens_create",
    "domain": "authUsers",
    "method": "apiIamAuthTokensCreate",
    "http": "POST",
    "path": "/api/iam/auth-tokens/",
    "paginate": "none"
  },
  {
    "operationId": "api_iam_auth_tokens_destroy",
    "domain": "authUsers",
    "method": "apiIamAuthTokensDestroy",
    "http": "DELETE",
    "path": "/api/iam/auth-tokens/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_iam_change_password_create",
    "domain": "authUsers",
    "method": "apiIamChangePasswordCreate",
    "http": "POST",
    "path": "/api/iam/change-password/",
    "paginate": "none"
  },
  {
    "operationId": "api_iam_current_user_retrieve",
    "domain": "authUsers",
    "method": "apiIamCurrentUserRetrieve",
    "http": "GET",
    "path": "/api/iam/current-user/",
    "paginate": "none"
  },
  {
    "operationId": "api_iam_login_create",
    "domain": "authUsers",
    "method": "apiIamLoginCreate",
    "http": "POST",
    "path": "/api/iam/login/",
    "paginate": "none"
  },
  {
    "operationId": "api_iam_logout_create",
    "domain": "authUsers",
    "method": "apiIamLogoutCreate",
    "http": "POST",
    "path": "/api/iam/logout/",
    "paginate": "none"
  },
  {
    "operationId": "api_iam_logoutall_create",
    "domain": "authUsers",
    "method": "apiIamLogoutallCreate",
    "http": "POST",
    "path": "/api/iam/logoutall/",
    "paginate": "none"
  },
  {
    "operationId": "api_iam_password_reset_create",
    "domain": "authUsers",
    "method": "apiIamPasswordResetCreate",
    "http": "POST",
    "path": "/api/iam/password-reset/",
    "paginate": "none"
  },
  {
    "operationId": "api_iam_password_reset_confirm_create",
    "domain": "authUsers",
    "method": "apiIamPasswordResetConfirmCreate",
    "http": "POST",
    "path": "/api/iam/password-reset/confirm/",
    "paginate": "none"
  },
  {
    "operationId": "api_iam_revoke_sessions_create",
    "domain": "authUsers",
    "method": "apiIamRevokeSessionsCreate",
    "http": "POST",
    "path": "/api/iam/revoke-sessions/",
    "paginate": "none"
  },
  {
    "operationId": "api_iam_session_token_create",
    "domain": "authUsers",
    "method": "apiIamSessionTokenCreate",
    "http": "POST",
    "path": "/api/iam/session-token/",
    "paginate": "none"
  },
  {
    "operationId": "api_iam_set_password_create",
    "domain": "authUsers",
    "method": "apiIamSetPasswordCreate",
    "http": "POST",
    "path": "/api/iam/set-password/",
    "paginate": "none"
  },
  {
    "operationId": "api_role_assignments_list",
    "domain": "authUsers",
    "method": "apiRoleAssignmentsList",
    "http": "GET",
    "path": "/api/role-assignments/",
    "paginate": "page"
  },
  {
    "operationId": "api_role_assignments_create",
    "domain": "authUsers",
    "method": "apiRoleAssignmentsCreate",
    "http": "POST",
    "path": "/api/role-assignments/",
    "paginate": "none"
  },
  {
    "operationId": "api_role_assignments_retrieve",
    "domain": "authUsers",
    "method": "apiRoleAssignmentsRetrieve",
    "http": "GET",
    "path": "/api/role-assignments/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_role_assignments_update",
    "domain": "authUsers",
    "method": "apiRoleAssignmentsUpdate",
    "http": "PUT",
    "path": "/api/role-assignments/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_role_assignments_partial_update",
    "domain": "authUsers",
    "method": "apiRoleAssignmentsPartialUpdate",
    "http": "PATCH",
    "path": "/api/role-assignments/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_role_assignments_destroy",
    "domain": "authUsers",
    "method": "apiRoleAssignmentsDestroy",
    "http": "DELETE",
    "path": "/api/role-assignments/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_role_assignments_cascade_info_retrieve",
    "domain": "authUsers",
    "method": "apiRoleAssignmentsCascadeInfoRetrieve",
    "http": "GET",
    "path": "/api/role-assignments/{id}/cascade-info/",
    "paginate": "none"
  },
  {
    "operationId": "api_role_assignments_object_retrieve",
    "domain": "authUsers",
    "method": "apiRoleAssignmentsObjectRetrieve",
    "http": "GET",
    "path": "/api/role-assignments/{id}/object/",
    "paginate": "none"
  },
  {
    "operationId": "api_role_assignments_batch_action_create",
    "domain": "authUsers",
    "method": "apiRoleAssignmentsBatchActionCreate",
    "http": "POST",
    "path": "/api/role-assignments/batch-action/",
    "paginate": "none"
  },
  {
    "operationId": "api_teams_list",
    "domain": "authUsers",
    "method": "apiTeamsList",
    "http": "GET",
    "path": "/api/teams/",
    "paginate": "page"
  },
  {
    "operationId": "api_teams_create",
    "domain": "authUsers",
    "method": "apiTeamsCreate",
    "http": "POST",
    "path": "/api/teams/",
    "paginate": "none"
  },
  {
    "operationId": "api_teams_retrieve",
    "domain": "authUsers",
    "method": "apiTeamsRetrieve",
    "http": "GET",
    "path": "/api/teams/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_teams_update",
    "domain": "authUsers",
    "method": "apiTeamsUpdate",
    "http": "PUT",
    "path": "/api/teams/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_teams_partial_update",
    "domain": "authUsers",
    "method": "apiTeamsPartialUpdate",
    "http": "PATCH",
    "path": "/api/teams/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_teams_destroy",
    "domain": "authUsers",
    "method": "apiTeamsDestroy",
    "http": "DELETE",
    "path": "/api/teams/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_teams_cascade_info_retrieve",
    "domain": "authUsers",
    "method": "apiTeamsCascadeInfoRetrieve",
    "http": "GET",
    "path": "/api/teams/{id}/cascade-info/",
    "paginate": "none"
  },
  {
    "operationId": "api_teams_object_retrieve",
    "domain": "authUsers",
    "method": "apiTeamsObjectRetrieve",
    "http": "GET",
    "path": "/api/teams/{id}/object/",
    "paginate": "none"
  },
  {
    "operationId": "api_teams_batch_action_create",
    "domain": "authUsers",
    "method": "apiTeamsBatchActionCreate",
    "http": "POST",
    "path": "/api/teams/batch-action/",
    "paginate": "none"
  },
  {
    "operationId": "api_user_groups_list",
    "domain": "authUsers",
    "method": "apiUserGroupsList",
    "http": "GET",
    "path": "/api/user-groups/",
    "paginate": "page"
  },
  {
    "operationId": "api_user_groups_create",
    "domain": "authUsers",
    "method": "apiUserGroupsCreate",
    "http": "POST",
    "path": "/api/user-groups/",
    "paginate": "none"
  },
  {
    "operationId": "api_user_groups_retrieve",
    "domain": "authUsers",
    "method": "apiUserGroupsRetrieve",
    "http": "GET",
    "path": "/api/user-groups/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_user_groups_update",
    "domain": "authUsers",
    "method": "apiUserGroupsUpdate",
    "http": "PUT",
    "path": "/api/user-groups/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_user_groups_partial_update",
    "domain": "authUsers",
    "method": "apiUserGroupsPartialUpdate",
    "http": "PATCH",
    "path": "/api/user-groups/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_user_groups_destroy",
    "domain": "authUsers",
    "method": "apiUserGroupsDestroy",
    "http": "DELETE",
    "path": "/api/user-groups/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_user_groups_cascade_info_retrieve",
    "domain": "authUsers",
    "method": "apiUserGroupsCascadeInfoRetrieve",
    "http": "GET",
    "path": "/api/user-groups/{id}/cascade-info/",
    "paginate": "none"
  },
  {
    "operationId": "api_user_groups_object_retrieve",
    "domain": "authUsers",
    "method": "apiUserGroupsObjectRetrieve",
    "http": "GET",
    "path": "/api/user-groups/{id}/object/",
    "paginate": "none"
  },
  {
    "operationId": "api_user_groups_batch_action_create",
    "domain": "authUsers",
    "method": "apiUserGroupsBatchActionCreate",
    "http": "POST",
    "path": "/api/user-groups/batch-action/",
    "paginate": "none"
  },
  {
    "operationId": "api_user_preferences_retrieve",
    "domain": "authUsers",
    "method": "apiUserPreferencesRetrieve",
    "http": "GET",
    "path": "/api/user-preferences/",
    "paginate": "none"
  },
  {
    "operationId": "api_user_preferences_partial_update",
    "domain": "authUsers",
    "method": "apiUserPreferencesPartialUpdate",
    "http": "PATCH",
    "path": "/api/user-preferences/",
    "paginate": "none"
  },
  {
    "operationId": "api_users_list",
    "domain": "authUsers",
    "method": "apiUsersList",
    "http": "GET",
    "path": "/api/users/",
    "paginate": "page"
  },
  {
    "operationId": "api_users_create",
    "domain": "authUsers",
    "method": "apiUsersCreate",
    "http": "POST",
    "path": "/api/users/",
    "paginate": "none"
  },
  {
    "operationId": "api_users_retrieve",
    "domain": "authUsers",
    "method": "apiUsersRetrieve",
    "http": "GET",
    "path": "/api/users/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_users_update",
    "domain": "authUsers",
    "method": "apiUsersUpdate",
    "http": "PUT",
    "path": "/api/users/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_users_partial_update",
    "domain": "authUsers",
    "method": "apiUsersPartialUpdate",
    "http": "PATCH",
    "path": "/api/users/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_users_destroy",
    "domain": "authUsers",
    "method": "apiUsersDestroy",
    "http": "DELETE",
    "path": "/api/users/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_users_cascade_info_retrieve",
    "domain": "authUsers",
    "method": "apiUsersCascadeInfoRetrieve",
    "http": "GET",
    "path": "/api/users/{id}/cascade-info/",
    "paginate": "none"
  },
  {
    "operationId": "api_users_object_retrieve",
    "domain": "authUsers",
    "method": "apiUsersObjectRetrieve",
    "http": "GET",
    "path": "/api/users/{id}/object/",
    "paginate": "none"
  },
  {
    "operationId": "api_users_batch_action_create",
    "domain": "authUsers",
    "method": "apiUsersBatchActionCreate",
    "http": "POST",
    "path": "/api/users/batch-action/",
    "paginate": "none"
  },
  {
    "operationId": "api_chat_agent_actions_list",
    "domain": "chat",
    "method": "apiChatAgentActionsList",
    "http": "GET",
    "path": "/api/chat/agent-actions/",
    "paginate": "page"
  },
  {
    "operationId": "api_chat_agent_actions_create",
    "domain": "chat",
    "method": "apiChatAgentActionsCreate",
    "http": "POST",
    "path": "/api/chat/agent-actions/",
    "paginate": "none"
  },
  {
    "operationId": "api_chat_agent_actions_retrieve",
    "domain": "chat",
    "method": "apiChatAgentActionsRetrieve",
    "http": "GET",
    "path": "/api/chat/agent-actions/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_chat_agent_actions_approve_create",
    "domain": "chat",
    "method": "apiChatAgentActionsApproveCreate",
    "http": "POST",
    "path": "/api/chat/agent-actions/{id}/approve/",
    "paginate": "none"
  },
  {
    "operationId": "api_chat_agent_actions_cascade_info_retrieve",
    "domain": "chat",
    "method": "apiChatAgentActionsCascadeInfoRetrieve",
    "http": "GET",
    "path": "/api/chat/agent-actions/{id}/cascade-info/",
    "paginate": "none"
  },
  {
    "operationId": "api_chat_agent_actions_object_retrieve",
    "domain": "chat",
    "method": "apiChatAgentActionsObjectRetrieve",
    "http": "GET",
    "path": "/api/chat/agent-actions/{id}/object/",
    "paginate": "none"
  },
  {
    "operationId": "api_chat_agent_actions_reject_create",
    "domain": "chat",
    "method": "apiChatAgentActionsRejectCreate",
    "http": "POST",
    "path": "/api/chat/agent-actions/{id}/reject/",
    "paginate": "none"
  },
  {
    "operationId": "api_chat_agent_actions_batch_action_create",
    "domain": "chat",
    "method": "apiChatAgentActionsBatchActionCreate",
    "http": "POST",
    "path": "/api/chat/agent-actions/batch-action/",
    "paginate": "none"
  },
  {
    "operationId": "api_chat_agent_runs_list",
    "domain": "chat",
    "method": "apiChatAgentRunsList",
    "http": "GET",
    "path": "/api/chat/agent-runs/",
    "paginate": "page"
  },
  {
    "operationId": "api_chat_agent_runs_create",
    "domain": "chat",
    "method": "apiChatAgentRunsCreate",
    "http": "POST",
    "path": "/api/chat/agent-runs/",
    "paginate": "none"
  },
  {
    "operationId": "api_chat_agent_runs_retrieve",
    "domain": "chat",
    "method": "apiChatAgentRunsRetrieve",
    "http": "GET",
    "path": "/api/chat/agent-runs/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_chat_agent_runs_cancel_create",
    "domain": "chat",
    "method": "apiChatAgentRunsCancelCreate",
    "http": "POST",
    "path": "/api/chat/agent-runs/{id}/cancel/",
    "paginate": "none"
  },
  {
    "operationId": "api_chat_agent_runs_cascade_info_retrieve",
    "domain": "chat",
    "method": "apiChatAgentRunsCascadeInfoRetrieve",
    "http": "GET",
    "path": "/api/chat/agent-runs/{id}/cascade-info/",
    "paginate": "none"
  },
  {
    "operationId": "api_chat_agent_runs_object_retrieve",
    "domain": "chat",
    "method": "apiChatAgentRunsObjectRetrieve",
    "http": "GET",
    "path": "/api/chat/agent-runs/{id}/object/",
    "paginate": "none"
  },
  {
    "operationId": "api_chat_agent_runs_batch_action_create",
    "domain": "chat",
    "method": "apiChatAgentRunsBatchActionCreate",
    "http": "POST",
    "path": "/api/chat/agent-runs/batch-action/",
    "paginate": "none"
  },
  {
    "operationId": "api_chat_agent_runs_start_questionnaire_prefill_create",
    "domain": "chat",
    "method": "apiChatAgentRunsStartQuestionnairePrefillCreate",
    "http": "POST",
    "path": "/api/chat/agent-runs/start-questionnaire-prefill/",
    "paginate": "none"
  },
  {
    "operationId": "api_chat_documents_list",
    "domain": "chat",
    "method": "apiChatDocumentsList",
    "http": "GET",
    "path": "/api/chat/documents/",
    "paginate": "page"
  },
  {
    "operationId": "api_chat_documents_create",
    "domain": "chat",
    "method": "apiChatDocumentsCreate",
    "http": "POST",
    "path": "/api/chat/documents/",
    "paginate": "none"
  },
  {
    "operationId": "api_chat_documents_retrieve",
    "domain": "chat",
    "method": "apiChatDocumentsRetrieve",
    "http": "GET",
    "path": "/api/chat/documents/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_chat_documents_update",
    "domain": "chat",
    "method": "apiChatDocumentsUpdate",
    "http": "PUT",
    "path": "/api/chat/documents/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_chat_documents_partial_update",
    "domain": "chat",
    "method": "apiChatDocumentsPartialUpdate",
    "http": "PATCH",
    "path": "/api/chat/documents/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_chat_documents_destroy",
    "domain": "chat",
    "method": "apiChatDocumentsDestroy",
    "http": "DELETE",
    "path": "/api/chat/documents/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_chat_documents_cascade_info_retrieve",
    "domain": "chat",
    "method": "apiChatDocumentsCascadeInfoRetrieve",
    "http": "GET",
    "path": "/api/chat/documents/{id}/cascade-info/",
    "paginate": "none"
  },
  {
    "operationId": "api_chat_documents_object_retrieve",
    "domain": "chat",
    "method": "apiChatDocumentsObjectRetrieve",
    "http": "GET",
    "path": "/api/chat/documents/{id}/object/",
    "paginate": "none"
  },
  {
    "operationId": "api_chat_documents_batch_action_create",
    "domain": "chat",
    "method": "apiChatDocumentsBatchActionCreate",
    "http": "POST",
    "path": "/api/chat/documents/batch-action/",
    "paginate": "none"
  },
  {
    "operationId": "api_chat_ollama_models_retrieve",
    "domain": "chat",
    "method": "apiChatOllamaModelsRetrieve",
    "http": "GET",
    "path": "/api/chat/ollama-models/",
    "paginate": "none"
  },
  {
    "operationId": "api_chat_questionnaire_questions_list",
    "domain": "chat",
    "method": "apiChatQuestionnaireQuestionsList",
    "http": "GET",
    "path": "/api/chat/questionnaire-questions/",
    "paginate": "page"
  },
  {
    "operationId": "api_chat_questionnaire_questions_create",
    "domain": "chat",
    "method": "apiChatQuestionnaireQuestionsCreate",
    "http": "POST",
    "path": "/api/chat/questionnaire-questions/",
    "paginate": "none"
  },
  {
    "operationId": "api_chat_questionnaire_questions_retrieve",
    "domain": "chat",
    "method": "apiChatQuestionnaireQuestionsRetrieve",
    "http": "GET",
    "path": "/api/chat/questionnaire-questions/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_chat_questionnaire_questions_update",
    "domain": "chat",
    "method": "apiChatQuestionnaireQuestionsUpdate",
    "http": "PUT",
    "path": "/api/chat/questionnaire-questions/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_chat_questionnaire_questions_partial_update",
    "domain": "chat",
    "method": "apiChatQuestionnaireQuestionsPartialUpdate",
    "http": "PATCH",
    "path": "/api/chat/questionnaire-questions/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_chat_questionnaire_questions_destroy",
    "domain": "chat",
    "method": "apiChatQuestionnaireQuestionsDestroy",
    "http": "DELETE",
    "path": "/api/chat/questionnaire-questions/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_chat_questionnaire_questions_cascade_info_retrieve",
    "domain": "chat",
    "method": "apiChatQuestionnaireQuestionsCascadeInfoRetrieve",
    "http": "GET",
    "path": "/api/chat/questionnaire-questions/{id}/cascade-info/",
    "paginate": "none"
  },
  {
    "operationId": "api_chat_questionnaire_questions_create_and_retry_create",
    "domain": "chat",
    "method": "apiChatQuestionnaireQuestionsCreateAndRetryCreate",
    "http": "POST",
    "path": "/api/chat/questionnaire-questions/{id}/create-and-retry/",
    "paginate": "none"
  },
  {
    "operationId": "api_chat_questionnaire_questions_object_retrieve",
    "domain": "chat",
    "method": "apiChatQuestionnaireQuestionsObjectRetrieve",
    "http": "GET",
    "path": "/api/chat/questionnaire-questions/{id}/object/",
    "paginate": "none"
  },
  {
    "operationId": "api_chat_questionnaire_questions_retry_with_control_create",
    "domain": "chat",
    "method": "apiChatQuestionnaireQuestionsRetryWithControlCreate",
    "http": "POST",
    "path": "/api/chat/questionnaire-questions/{id}/retry-with-control/",
    "paginate": "none"
  },
  {
    "operationId": "api_chat_questionnaire_questions_suggest_control_create",
    "domain": "chat",
    "method": "apiChatQuestionnaireQuestionsSuggestControlCreate",
    "http": "POST",
    "path": "/api/chat/questionnaire-questions/{id}/suggest-control/",
    "paginate": "none"
  },
  {
    "operationId": "api_chat_questionnaire_questions_batch_action_create",
    "domain": "chat",
    "method": "apiChatQuestionnaireQuestionsBatchActionCreate",
    "http": "POST",
    "path": "/api/chat/questionnaire-questions/batch-action/",
    "paginate": "none"
  },
  {
    "operationId": "api_chat_questionnaire_runs_list",
    "domain": "chat",
    "method": "apiChatQuestionnaireRunsList",
    "http": "GET",
    "path": "/api/chat/questionnaire-runs/",
    "paginate": "page"
  },
  {
    "operationId": "api_chat_questionnaire_runs_create",
    "domain": "chat",
    "method": "apiChatQuestionnaireRunsCreate",
    "http": "POST",
    "path": "/api/chat/questionnaire-runs/",
    "paginate": "none"
  },
  {
    "operationId": "api_chat_questionnaire_runs_retrieve",
    "domain": "chat",
    "method": "apiChatQuestionnaireRunsRetrieve",
    "http": "GET",
    "path": "/api/chat/questionnaire-runs/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_chat_questionnaire_runs_update",
    "domain": "chat",
    "method": "apiChatQuestionnaireRunsUpdate",
    "http": "PUT",
    "path": "/api/chat/questionnaire-runs/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_chat_questionnaire_runs_partial_update",
    "domain": "chat",
    "method": "apiChatQuestionnaireRunsPartialUpdate",
    "http": "PATCH",
    "path": "/api/chat/questionnaire-runs/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_chat_questionnaire_runs_destroy",
    "domain": "chat",
    "method": "apiChatQuestionnaireRunsDestroy",
    "http": "DELETE",
    "path": "/api/chat/questionnaire-runs/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_chat_questionnaire_runs_cascade_info_retrieve",
    "domain": "chat",
    "method": "apiChatQuestionnaireRunsCascadeInfoRetrieve",
    "http": "GET",
    "path": "/api/chat/questionnaire-runs/{id}/cascade-info/",
    "paginate": "none"
  },
  {
    "operationId": "api_chat_questionnaire_runs_export_retrieve",
    "domain": "chat",
    "method": "apiChatQuestionnaireRunsExportRetrieve",
    "http": "GET",
    "path": "/api/chat/questionnaire-runs/{id}/export/",
    "paginate": "none"
  },
  {
    "operationId": "api_chat_questionnaire_runs_extract_questions_create",
    "domain": "chat",
    "method": "apiChatQuestionnaireRunsExtractQuestionsCreate",
    "http": "POST",
    "path": "/api/chat/questionnaire-runs/{id}/extract-questions/",
    "paginate": "none"
  },
  {
    "operationId": "api_chat_questionnaire_runs_mapping_partial_update",
    "domain": "chat",
    "method": "apiChatQuestionnaireRunsMappingPartialUpdate",
    "http": "PATCH",
    "path": "/api/chat/questionnaire-runs/{id}/mapping/",
    "paginate": "none"
  },
  {
    "operationId": "api_chat_questionnaire_runs_object_retrieve",
    "domain": "chat",
    "method": "apiChatQuestionnaireRunsObjectRetrieve",
    "http": "GET",
    "path": "/api/chat/questionnaire-runs/{id}/object/",
    "paginate": "none"
  },
  {
    "operationId": "api_chat_questionnaire_runs_batch_action_create",
    "domain": "chat",
    "method": "apiChatQuestionnaireRunsBatchActionCreate",
    "http": "POST",
    "path": "/api/chat/questionnaire-runs/batch-action/",
    "paginate": "none"
  },
  {
    "operationId": "api_chat_questionnaire_runs_upload_create",
    "domain": "chat",
    "method": "apiChatQuestionnaireRunsUploadCreate",
    "http": "POST",
    "path": "/api/chat/questionnaire-runs/upload/",
    "paginate": "none"
  },
  {
    "operationId": "api_chat_sessions_list",
    "domain": "chat",
    "method": "apiChatSessionsList",
    "http": "GET",
    "path": "/api/chat/sessions/",
    "paginate": "page"
  },
  {
    "operationId": "api_chat_sessions_create",
    "domain": "chat",
    "method": "apiChatSessionsCreate",
    "http": "POST",
    "path": "/api/chat/sessions/",
    "paginate": "none"
  },
  {
    "operationId": "api_chat_sessions_retrieve",
    "domain": "chat",
    "method": "apiChatSessionsRetrieve",
    "http": "GET",
    "path": "/api/chat/sessions/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_chat_sessions_update",
    "domain": "chat",
    "method": "apiChatSessionsUpdate",
    "http": "PUT",
    "path": "/api/chat/sessions/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_chat_sessions_partial_update",
    "domain": "chat",
    "method": "apiChatSessionsPartialUpdate",
    "http": "PATCH",
    "path": "/api/chat/sessions/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_chat_sessions_destroy",
    "domain": "chat",
    "method": "apiChatSessionsDestroy",
    "http": "DELETE",
    "path": "/api/chat/sessions/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_chat_sessions_cascade_info_retrieve",
    "domain": "chat",
    "method": "apiChatSessionsCascadeInfoRetrieve",
    "http": "GET",
    "path": "/api/chat/sessions/{id}/cascade-info/",
    "paginate": "none"
  },
  {
    "operationId": "api_chat_sessions_message_create",
    "domain": "chat",
    "method": "apiChatSessionsMessageCreate",
    "http": "POST",
    "path": "/api/chat/sessions/{id}/message/",
    "paginate": "none"
  },
  {
    "operationId": "api_chat_sessions_object_retrieve",
    "domain": "chat",
    "method": "apiChatSessionsObjectRetrieve",
    "http": "GET",
    "path": "/api/chat/sessions/{id}/object/",
    "paginate": "none"
  },
  {
    "operationId": "api_chat_sessions_upload_create",
    "domain": "chat",
    "method": "apiChatSessionsUploadCreate",
    "http": "POST",
    "path": "/api/chat/sessions/{id}/upload/",
    "paginate": "none"
  },
  {
    "operationId": "api_chat_sessions_batch_action_create",
    "domain": "chat",
    "method": "apiChatSessionsBatchActionCreate",
    "http": "POST",
    "path": "/api/chat/sessions/batch-action/",
    "paginate": "none"
  },
  {
    "operationId": "api_chat_status_retrieve",
    "domain": "chat",
    "method": "apiChatStatusRetrieve",
    "http": "GET",
    "path": "/api/chat/status/",
    "paginate": "none"
  },
  {
    "operationId": "api_applied_controls_list",
    "domain": "compliance",
    "method": "apiAppliedControlsList",
    "http": "GET",
    "path": "/api/applied-controls/",
    "paginate": "page"
  },
  {
    "operationId": "api_applied_controls_create",
    "domain": "compliance",
    "method": "apiAppliedControlsCreate",
    "http": "POST",
    "path": "/api/applied-controls/",
    "paginate": "none"
  },
  {
    "operationId": "api_applied_controls_retrieve",
    "domain": "compliance",
    "method": "apiAppliedControlsRetrieve",
    "http": "GET",
    "path": "/api/applied-controls/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_applied_controls_update",
    "domain": "compliance",
    "method": "apiAppliedControlsUpdate",
    "http": "PUT",
    "path": "/api/applied-controls/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_applied_controls_partial_update",
    "domain": "compliance",
    "method": "apiAppliedControlsPartialUpdate",
    "http": "PATCH",
    "path": "/api/applied-controls/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_applied_controls_destroy",
    "domain": "compliance",
    "method": "apiAppliedControlsDestroy",
    "http": "DELETE",
    "path": "/api/applied-controls/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_applied_controls_cascade_info_retrieve",
    "domain": "compliance",
    "method": "apiAppliedControlsCascadeInfoRetrieve",
    "http": "GET",
    "path": "/api/applied-controls/{id}/cascade-info/",
    "paginate": "none"
  },
  {
    "operationId": "api_applied_controls_duplicate_create",
    "domain": "compliance",
    "method": "apiAppliedControlsDuplicateCreate",
    "http": "POST",
    "path": "/api/applied-controls/{id}/duplicate/",
    "paginate": "none"
  },
  {
    "operationId": "api_applied_controls_object_retrieve",
    "domain": "compliance",
    "method": "apiAppliedControlsObjectRetrieve",
    "http": "GET",
    "path": "/api/applied-controls/{id}/object/",
    "paginate": "none"
  },
  {
    "operationId": "api_applied_controls_sync_to_reference_control_create",
    "domain": "compliance",
    "method": "apiAppliedControlsSyncToReferenceControlCreate",
    "http": "POST",
    "path": "/api/applied-controls/{id}/sync-to-reference-control/",
    "paginate": "none"
  },
  {
    "operationId": "api_applied_controls_analytics_retrieve",
    "domain": "compliance",
    "method": "apiAppliedControlsAnalyticsRetrieve",
    "http": "GET",
    "path": "/api/applied-controls/analytics/",
    "paginate": "none"
  },
  {
    "operationId": "api_applied_controls_autocomplete_retrieve",
    "domain": "compliance",
    "method": "apiAppliedControlsAutocompleteRetrieve",
    "http": "GET",
    "path": "/api/applied-controls/autocomplete/",
    "paginate": "none"
  },
  {
    "operationId": "api_applied_controls_batch_action_create",
    "domain": "compliance",
    "method": "apiAppliedControlsBatchActionCreate",
    "http": "POST",
    "path": "/api/applied-controls/batch-action/",
    "paginate": "none"
  },
  {
    "operationId": "api_applied_controls_category_retrieve",
    "domain": "compliance",
    "method": "apiAppliedControlsCategoryRetrieve",
    "http": "GET",
    "path": "/api/applied-controls/category/",
    "paginate": "none"
  },
  {
    "operationId": "api_applied_controls_control_impact_retrieve",
    "domain": "compliance",
    "method": "apiAppliedControlsControlImpactRetrieve",
    "http": "GET",
    "path": "/api/applied-controls/control_impact/",
    "paginate": "none"
  },
  {
    "operationId": "api_applied_controls_csf_function_retrieve",
    "domain": "compliance",
    "method": "apiAppliedControlsCsfFunctionRetrieve",
    "http": "GET",
    "path": "/api/applied-controls/csf_function/",
    "paginate": "none"
  },
  {
    "operationId": "api_applied_controls_effort_retrieve",
    "domain": "compliance",
    "method": "apiAppliedControlsEffortRetrieve",
    "http": "GET",
    "path": "/api/applied-controls/effort/",
    "paginate": "none"
  },
  {
    "operationId": "api_applied_controls_export_csv_retrieve",
    "domain": "compliance",
    "method": "apiAppliedControlsExportCsvRetrieve",
    "http": "GET",
    "path": "/api/applied-controls/export_csv/",
    "paginate": "none"
  },
  {
    "operationId": "api_applied_controls_export_xlsx_retrieve",
    "domain": "compliance",
    "method": "apiAppliedControlsExportXlsxRetrieve",
    "http": "GET",
    "path": "/api/applied-controls/export_xlsx/",
    "paginate": "none"
  },
  {
    "operationId": "api_applied_controls_get_controls_info_retrieve",
    "domain": "compliance",
    "method": "apiAppliedControlsGetControlsInfoRetrieve",
    "http": "GET",
    "path": "/api/applied-controls/get_controls_info/",
    "paginate": "none"
  },
  {
    "operationId": "api_applied_controls_get_gantt_data_retrieve",
    "domain": "compliance",
    "method": "apiAppliedControlsGetGanttDataRetrieve",
    "http": "GET",
    "path": "/api/applied-controls/get_gantt_data/",
    "paginate": "none"
  },
  {
    "operationId": "api_applied_controls_get_timeline_info_retrieve",
    "domain": "compliance",
    "method": "apiAppliedControlsGetTimelineInfoRetrieve",
    "http": "GET",
    "path": "/api/applied-controls/get_timeline_info/",
    "paginate": "none"
  },
  {
    "operationId": "api_applied_controls_ids_retrieve",
    "domain": "compliance",
    "method": "apiAppliedControlsIdsRetrieve",
    "http": "GET",
    "path": "/api/applied-controls/ids/",
    "paginate": "none"
  },
  {
    "operationId": "api_applied_controls_impact_effort_retrieve",
    "domain": "compliance",
    "method": "apiAppliedControlsImpactEffortRetrieve",
    "http": "GET",
    "path": "/api/applied-controls/impact_effort/",
    "paginate": "none"
  },
  {
    "operationId": "api_applied_controls_impact_graph_retrieve",
    "domain": "compliance",
    "method": "apiAppliedControlsImpactGraphRetrieve",
    "http": "GET",
    "path": "/api/applied-controls/impact_graph/",
    "paginate": "none"
  },
  {
    "operationId": "api_applied_controls_linked_models_retrieve",
    "domain": "compliance",
    "method": "apiAppliedControlsLinkedModelsRetrieve",
    "http": "GET",
    "path": "/api/applied-controls/linked_models/",
    "paginate": "none"
  },
  {
    "operationId": "api_applied_controls_merge_create",
    "domain": "compliance",
    "method": "apiAppliedControlsMergeCreate",
    "http": "POST",
    "path": "/api/applied-controls/merge/",
    "paginate": "none"
  },
  {
    "operationId": "api_applied_controls_mss_xlsx_retrieve",
    "domain": "compliance",
    "method": "apiAppliedControlsMssXlsxRetrieve",
    "http": "GET",
    "path": "/api/applied-controls/mss_xlsx/",
    "paginate": "none"
  },
  {
    "operationId": "api_applied_controls_owner_retrieve",
    "domain": "compliance",
    "method": "apiAppliedControlsOwnerRetrieve",
    "http": "GET",
    "path": "/api/applied-controls/owner/",
    "paginate": "none"
  },
  {
    "operationId": "api_applied_controls_per_status_retrieve",
    "domain": "compliance",
    "method": "apiAppliedControlsPerStatusRetrieve",
    "http": "GET",
    "path": "/api/applied-controls/per_status/",
    "paginate": "none"
  },
  {
    "operationId": "api_applied_controls_priority_retrieve",
    "domain": "compliance",
    "method": "apiAppliedControlsPriorityRetrieve",
    "http": "GET",
    "path": "/api/applied-controls/priority/",
    "paginate": "none"
  },
  {
    "operationId": "api_applied_controls_priority_chart_data_retrieve",
    "domain": "compliance",
    "method": "apiAppliedControlsPriorityChartDataRetrieve",
    "http": "GET",
    "path": "/api/applied-controls/priority_chart_data/",
    "paginate": "none"
  },
  {
    "operationId": "api_applied_controls_status_retrieve",
    "domain": "compliance",
    "method": "apiAppliedControlsStatusRetrieve",
    "http": "GET",
    "path": "/api/applied-controls/status/",
    "paginate": "none"
  },
  {
    "operationId": "api_applied_controls_sunburst_data_retrieve",
    "domain": "compliance",
    "method": "apiAppliedControlsSunburstDataRetrieve",
    "http": "GET",
    "path": "/api/applied-controls/sunburst_data/",
    "paginate": "none"
  },
  {
    "operationId": "api_applied_controls_to_review_retrieve",
    "domain": "compliance",
    "method": "apiAppliedControlsToReviewRetrieve",
    "http": "GET",
    "path": "/api/applied-controls/to_review/",
    "paginate": "none"
  },
  {
    "operationId": "api_applied_controls_todo_retrieve",
    "domain": "compliance",
    "method": "apiAppliedControlsTodoRetrieve",
    "http": "GET",
    "path": "/api/applied-controls/todo/",
    "paginate": "none"
  },
  {
    "operationId": "api_applied_controls_updatables_retrieve",
    "domain": "compliance",
    "method": "apiAppliedControlsUpdatablesRetrieve",
    "http": "GET",
    "path": "/api/applied-controls/updatables/",
    "paginate": "none"
  },
  {
    "operationId": "api_compliance_assessments_list",
    "domain": "compliance",
    "method": "apiComplianceAssessmentsList",
    "http": "GET",
    "path": "/api/compliance-assessments/",
    "paginate": "page"
  },
  {
    "operationId": "api_compliance_assessments_create",
    "domain": "compliance",
    "method": "apiComplianceAssessmentsCreate",
    "http": "POST",
    "path": "/api/compliance-assessments/",
    "paginate": "none"
  },
  {
    "operationId": "api_compliance_assessments_retrieve",
    "domain": "compliance",
    "method": "apiComplianceAssessmentsRetrieve",
    "http": "GET",
    "path": "/api/compliance-assessments/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_compliance_assessments_update",
    "domain": "compliance",
    "method": "apiComplianceAssessmentsUpdate",
    "http": "PUT",
    "path": "/api/compliance-assessments/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_compliance_assessments_partial_update",
    "domain": "compliance",
    "method": "apiComplianceAssessmentsPartialUpdate",
    "http": "PATCH",
    "path": "/api/compliance-assessments/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_compliance_assessments_destroy",
    "domain": "compliance",
    "method": "apiComplianceAssessmentsDestroy",
    "http": "DELETE",
    "path": "/api/compliance-assessments/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_compliance_assessments_action_plan_list",
    "domain": "compliance",
    "method": "apiComplianceAssessmentsActionPlanList",
    "http": "GET",
    "path": "/api/compliance-assessments/{id}/action-plan/",
    "paginate": "page"
  },
  {
    "operationId": "api_compliance_assessments_action_plan_budget_overview_list",
    "domain": "compliance",
    "method": "apiComplianceAssessmentsActionPlanBudgetOverviewList",
    "http": "GET",
    "path": "/api/compliance-assessments/{id}/action-plan/budget-overview/",
    "paginate": "page"
  },
  {
    "operationId": "api_compliance_assessments_action_plan_csv_retrieve",
    "domain": "compliance",
    "method": "apiComplianceAssessmentsActionPlanCsvRetrieve",
    "http": "GET",
    "path": "/api/compliance-assessments/{id}/action_plan_csv/",
    "paginate": "none"
  },
  {
    "operationId": "api_compliance_assessments_action_plan_pdf_retrieve",
    "domain": "compliance",
    "method": "apiComplianceAssessmentsActionPlanPdfRetrieve",
    "http": "GET",
    "path": "/api/compliance-assessments/{id}/action_plan_pdf/",
    "paginate": "none"
  },
  {
    "operationId": "api_compliance_assessments_action_plan_xlsx_retrieve",
    "domain": "compliance",
    "method": "apiComplianceAssessmentsActionPlanXlsxRetrieve",
    "http": "GET",
    "path": "/api/compliance-assessments/{id}/action_plan_xlsx/",
    "paginate": "none"
  },
  {
    "operationId": "api_compliance_assessments_cascade_info_retrieve",
    "domain": "compliance",
    "method": "apiComplianceAssessmentsCascadeInfoRetrieve",
    "http": "GET",
    "path": "/api/compliance-assessments/{id}/cascade-info/",
    "paginate": "none"
  },
  {
    "operationId": "api_compliance_assessments_combined_tree_retrieve",
    "domain": "compliance",
    "method": "apiComplianceAssessmentsCombinedTreeRetrieve",
    "http": "GET",
    "path": "/api/compliance-assessments/{id}/combined_tree/",
    "paginate": "none"
  },
  {
    "operationId": "api_compliance_assessments_comparable_audits_retrieve",
    "domain": "compliance",
    "method": "apiComplianceAssessmentsComparableAuditsRetrieve",
    "http": "GET",
    "path": "/api/compliance-assessments/{id}/comparable_audits/",
    "paginate": "none"
  },
  {
    "operationId": "api_compliance_assessments_compare_retrieve",
    "domain": "compliance",
    "method": "apiComplianceAssessmentsCompareRetrieve",
    "http": "GET",
    "path": "/api/compliance-assessments/{id}/compare/",
    "paginate": "none"
  },
  {
    "operationId": "api_compliance_assessments_compliance_assessment_csv_retrieve",
    "domain": "compliance",
    "method": "apiComplianceAssessmentsComplianceAssessmentCsvRetrieve",
    "http": "GET",
    "path": "/api/compliance-assessments/{id}/compliance_assessment_csv/",
    "paginate": "none"
  },
  {
    "operationId": "api_compliance_assessments_compliance_timeline_retrieve",
    "domain": "compliance",
    "method": "apiComplianceAssessmentsComplianceTimelineRetrieve",
    "http": "GET",
    "path": "/api/compliance-assessments/{id}/compliance_timeline/",
    "paginate": "none"
  },
  {
    "operationId": "api_compliance_assessments_controls_coverage_retrieve",
    "domain": "compliance",
    "method": "apiComplianceAssessmentsControlsCoverageRetrieve",
    "http": "GET",
    "path": "/api/compliance-assessments/{id}/controls_coverage/",
    "paginate": "none"
  },
  {
    "operationId": "api_compliance_assessments_cyfun_xlsx_retrieve",
    "domain": "compliance",
    "method": "apiComplianceAssessmentsCyfunXlsxRetrieve",
    "http": "GET",
    "path": "/api/compliance-assessments/{id}/cyfun_xlsx/",
    "paginate": "none"
  },
  {
    "operationId": "api_compliance_assessments_donut_data_retrieve",
    "domain": "compliance",
    "method": "apiComplianceAssessmentsDonutDataRetrieve",
    "http": "GET",
    "path": "/api/compliance-assessments/{id}/donut_data/",
    "paginate": "none"
  },
  {
    "operationId": "api_compliance_assessments_evidence_coverage_retrieve",
    "domain": "compliance",
    "method": "apiComplianceAssessmentsEvidenceCoverageRetrieve",
    "http": "GET",
    "path": "/api/compliance-assessments/{id}/evidence_coverage/",
    "paginate": "none"
  },
  {
    "operationId": "api_compliance_assessments_evidences_list_list",
    "domain": "compliance",
    "method": "apiComplianceAssessmentsEvidencesListList",
    "http": "GET",
    "path": "/api/compliance-assessments/{id}/evidences-list/",
    "paginate": "page"
  },
  {
    "operationId": "api_compliance_assessments_exceptions_summary_retrieve",
    "domain": "compliance",
    "method": "apiComplianceAssessmentsExceptionsSummaryRetrieve",
    "http": "GET",
    "path": "/api/compliance-assessments/{id}/exceptions_summary/",
    "paginate": "none"
  },
  {
    "operationId": "api_compliance_assessments_export_retrieve",
    "domain": "compliance",
    "method": "apiComplianceAssessmentsExportRetrieve",
    "http": "GET",
    "path": "/api/compliance-assessments/{id}/export/",
    "paginate": "none"
  },
  {
    "operationId": "api_compliance_assessments_frameworks_retrieve",
    "domain": "compliance",
    "method": "apiComplianceAssessmentsFrameworksRetrieve",
    "http": "GET",
    "path": "/api/compliance-assessments/{id}/frameworks/",
    "paginate": "none"
  },
  {
    "operationId": "api_compliance_assessments_global_score_retrieve",
    "domain": "compliance",
    "method": "apiComplianceAssessmentsGlobalScoreRetrieve",
    "http": "GET",
    "path": "/api/compliance-assessments/{id}/global_score/",
    "paginate": "none"
  },
  {
    "operationId": "api_compliance_assessments_implementation_groups_breakdown_retrieve",
    "domain": "compliance",
    "method": "apiComplianceAssessmentsImplementationGroupsBreakdownRetrieve",
    "http": "GET",
    "path": "/api/compliance-assessments/{id}/implementation_groups_breakdown/",
    "paginate": "none"
  },
  {
    "operationId": "api_compliance_assessments_is_auditee_retrieve",
    "domain": "compliance",
    "method": "apiComplianceAssessmentsIsAuditeeRetrieve",
    "http": "GET",
    "path": "/api/compliance-assessments/{id}/is-auditee/",
    "paginate": "none"
  },
  {
    "operationId": "api_compliance_assessments_mailing_create",
    "domain": "compliance",
    "method": "apiComplianceAssessmentsMailingCreate",
    "http": "POST",
    "path": "/api/compliance-assessments/{id}/mailing/",
    "paginate": "none"
  },
  {
    "operationId": "api_compliance_assessments_map_from_create",
    "domain": "compliance",
    "method": "apiComplianceAssessmentsMapFromCreate",
    "http": "POST",
    "path": "/api/compliance-assessments/{id}/map_from/",
    "paginate": "none"
  },
  {
    "operationId": "api_compliance_assessments_map_from_preview_retrieve",
    "domain": "compliance",
    "method": "apiComplianceAssessmentsMapFromPreviewRetrieve",
    "http": "GET",
    "path": "/api/compliance-assessments/{id}/map_from_preview/",
    "paginate": "none"
  },
  {
    "operationId": "api_compliance_assessments_object_retrieve",
    "domain": "compliance",
    "method": "apiComplianceAssessmentsObjectRetrieve",
    "http": "GET",
    "path": "/api/compliance-assessments/{id}/object/",
    "paginate": "none"
  },
  {
    "operationId": "api_compliance_assessments_progress_ts_retrieve",
    "domain": "compliance",
    "method": "apiComplianceAssessmentsProgressTsRetrieve",
    "http": "GET",
    "path": "/api/compliance-assessments/{id}/progress_ts/",
    "paginate": "none"
  },
  {
    "operationId": "api_compliance_assessments_quality_check_retrieve_2",
    "domain": "compliance",
    "method": "apiComplianceAssessmentsQualityCheckRetrieve_2",
    "http": "GET",
    "path": "/api/compliance-assessments/{id}/quality_check/",
    "paginate": "none"
  },
  {
    "operationId": "api_compliance_assessments_requirements_list_retrieve",
    "domain": "compliance",
    "method": "apiComplianceAssessmentsRequirementsListRetrieve",
    "http": "GET",
    "path": "/api/compliance-assessments/{id}/requirements_list/",
    "paginate": "none"
  },
  {
    "operationId": "api_compliance_assessments_section_compliance_retrieve",
    "domain": "compliance",
    "method": "apiComplianceAssessmentsSectionComplianceRetrieve",
    "http": "GET",
    "path": "/api/compliance-assessments/{id}/section_compliance/",
    "paginate": "none"
  },
  {
    "operationId": "api_compliance_assessments_soa_retrieve",
    "domain": "compliance",
    "method": "apiComplianceAssessmentsSoaRetrieve",
    "http": "GET",
    "path": "/api/compliance-assessments/{id}/soa/",
    "paginate": "none"
  },
  {
    "operationId": "api_compliance_assessments_suggestions_applied_controls_retrieve",
    "domain": "compliance",
    "method": "apiComplianceAssessmentsSuggestionsAppliedControlsRetrieve",
    "http": "GET",
    "path": "/api/compliance-assessments/{id}/suggestions/applied-controls/",
    "paginate": "none"
  },
  {
    "operationId": "api_compliance_assessments_suggestions_applied_controls_create",
    "domain": "compliance",
    "method": "apiComplianceAssessmentsSuggestionsAppliedControlsCreate",
    "http": "POST",
    "path": "/api/compliance-assessments/{id}/suggestions/applied-controls/",
    "paginate": "none"
  },
  {
    "operationId": "api_compliance_assessments_syncToActions_retrieve",
    "domain": "compliance",
    "method": "apiComplianceAssessmentsSyncToActionsRetrieve",
    "http": "GET",
    "path": "/api/compliance-assessments/{id}/syncToActions/",
    "paginate": "none"
  },
  {
    "operationId": "api_compliance_assessments_syncToActions_create",
    "domain": "compliance",
    "method": "apiComplianceAssessmentsSyncToActionsCreate",
    "http": "POST",
    "path": "/api/compliance-assessments/{id}/syncToActions/",
    "paginate": "none"
  },
  {
    "operationId": "api_compliance_assessments_threats_metrics_retrieve",
    "domain": "compliance",
    "method": "apiComplianceAssessmentsThreatsMetricsRetrieve",
    "http": "GET",
    "path": "/api/compliance-assessments/{id}/threats_metrics/",
    "paginate": "none"
  },
  {
    "operationId": "api_compliance_assessments_tree_retrieve",
    "domain": "compliance",
    "method": "apiComplianceAssessmentsTreeRetrieve",
    "http": "GET",
    "path": "/api/compliance-assessments/{id}/tree/",
    "paginate": "none"
  },
  {
    "operationId": "api_compliance_assessments_update_requirement_create",
    "domain": "compliance",
    "method": "apiComplianceAssessmentsUpdateRequirementCreate",
    "http": "POST",
    "path": "/api/compliance-assessments/{id}/update_requirement/",
    "paginate": "none"
  },
  {
    "operationId": "api_compliance_assessments_word_report_retrieve",
    "domain": "compliance",
    "method": "apiComplianceAssessmentsWordReportRetrieve",
    "http": "GET",
    "path": "/api/compliance-assessments/{id}/word_report/",
    "paginate": "none"
  },
  {
    "operationId": "api_compliance_assessments_xlsx_retrieve",
    "domain": "compliance",
    "method": "apiComplianceAssessmentsXlsxRetrieve",
    "http": "GET",
    "path": "/api/compliance-assessments/{id}/xlsx/",
    "paginate": "none"
  },
  {
    "operationId": "api_compliance_assessments_analytics_retrieve",
    "domain": "compliance",
    "method": "apiComplianceAssessmentsAnalyticsRetrieve",
    "http": "GET",
    "path": "/api/compliance-assessments/analytics/",
    "paginate": "none"
  },
  {
    "operationId": "api_compliance_assessments_auditee_dashboard_retrieve",
    "domain": "compliance",
    "method": "apiComplianceAssessmentsAuditeeDashboardRetrieve",
    "http": "GET",
    "path": "/api/compliance-assessments/auditee-dashboard/",
    "paginate": "none"
  },
  {
    "operationId": "api_compliance_assessments_batch_action_create",
    "domain": "compliance",
    "method": "apiComplianceAssessmentsBatchActionCreate",
    "http": "POST",
    "path": "/api/compliance-assessments/batch-action/",
    "paginate": "none"
  },
  {
    "operationId": "api_compliance_assessments_per_status_retrieve",
    "domain": "compliance",
    "method": "apiComplianceAssessmentsPerStatusRetrieve",
    "http": "GET",
    "path": "/api/compliance-assessments/per_status/",
    "paginate": "none"
  },
  {
    "operationId": "api_compliance_assessments_quality_check_retrieve",
    "domain": "compliance",
    "method": "apiComplianceAssessmentsQualityCheckRetrieve",
    "http": "GET",
    "path": "/api/compliance-assessments/quality_check/",
    "paginate": "none"
  },
  {
    "operationId": "api_compliance_assessments_recap_retrieve",
    "domain": "compliance",
    "method": "apiComplianceAssessmentsRecapRetrieve",
    "http": "GET",
    "path": "/api/compliance-assessments/recap/",
    "paginate": "none"
  },
  {
    "operationId": "api_compliance_assessments_score_calculation_method_retrieve",
    "domain": "compliance",
    "method": "apiComplianceAssessmentsScoreCalculationMethodRetrieve",
    "http": "GET",
    "path": "/api/compliance-assessments/score_calculation_method/",
    "paginate": "none"
  },
  {
    "operationId": "api_compliance_assessments_status_retrieve",
    "domain": "compliance",
    "method": "apiComplianceAssessmentsStatusRetrieve",
    "http": "GET",
    "path": "/api/compliance-assessments/status/",
    "paginate": "none"
  },
  {
    "operationId": "api_mapping_libraries_list",
    "domain": "compliance",
    "method": "apiMappingLibrariesList",
    "http": "GET",
    "path": "/api/mapping-libraries/",
    "paginate": "page"
  },
  {
    "operationId": "api_policies_list",
    "domain": "compliance",
    "method": "apiPoliciesList",
    "http": "GET",
    "path": "/api/policies/",
    "paginate": "page"
  },
  {
    "operationId": "api_policies_create",
    "domain": "compliance",
    "method": "apiPoliciesCreate",
    "http": "POST",
    "path": "/api/policies/",
    "paginate": "none"
  },
  {
    "operationId": "api_policies_retrieve",
    "domain": "compliance",
    "method": "apiPoliciesRetrieve",
    "http": "GET",
    "path": "/api/policies/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_policies_update",
    "domain": "compliance",
    "method": "apiPoliciesUpdate",
    "http": "PUT",
    "path": "/api/policies/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_policies_partial_update",
    "domain": "compliance",
    "method": "apiPoliciesPartialUpdate",
    "http": "PATCH",
    "path": "/api/policies/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_policies_destroy",
    "domain": "compliance",
    "method": "apiPoliciesDestroy",
    "http": "DELETE",
    "path": "/api/policies/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_policies_cascade_info_retrieve",
    "domain": "compliance",
    "method": "apiPoliciesCascadeInfoRetrieve",
    "http": "GET",
    "path": "/api/policies/{id}/cascade-info/",
    "paginate": "none"
  },
  {
    "operationId": "api_policies_duplicate_create",
    "domain": "compliance",
    "method": "apiPoliciesDuplicateCreate",
    "http": "POST",
    "path": "/api/policies/{id}/duplicate/",
    "paginate": "none"
  },
  {
    "operationId": "api_policies_object_retrieve",
    "domain": "compliance",
    "method": "apiPoliciesObjectRetrieve",
    "http": "GET",
    "path": "/api/policies/{id}/object/",
    "paginate": "none"
  },
  {
    "operationId": "api_policies_sync_to_reference_control_create",
    "domain": "compliance",
    "method": "apiPoliciesSyncToReferenceControlCreate",
    "http": "POST",
    "path": "/api/policies/{id}/sync-to-reference-control/",
    "paginate": "none"
  },
  {
    "operationId": "api_policies_analytics_retrieve",
    "domain": "compliance",
    "method": "apiPoliciesAnalyticsRetrieve",
    "http": "GET",
    "path": "/api/policies/analytics/",
    "paginate": "none"
  },
  {
    "operationId": "api_policies_autocomplete_retrieve",
    "domain": "compliance",
    "method": "apiPoliciesAutocompleteRetrieve",
    "http": "GET",
    "path": "/api/policies/autocomplete/",
    "paginate": "none"
  },
  {
    "operationId": "api_policies_batch_action_create",
    "domain": "compliance",
    "method": "apiPoliciesBatchActionCreate",
    "http": "POST",
    "path": "/api/policies/batch-action/",
    "paginate": "none"
  },
  {
    "operationId": "api_policies_category_retrieve",
    "domain": "compliance",
    "method": "apiPoliciesCategoryRetrieve",
    "http": "GET",
    "path": "/api/policies/category/",
    "paginate": "none"
  },
  {
    "operationId": "api_policies_control_impact_retrieve",
    "domain": "compliance",
    "method": "apiPoliciesControlImpactRetrieve",
    "http": "GET",
    "path": "/api/policies/control_impact/",
    "paginate": "none"
  },
  {
    "operationId": "api_policies_csf_function_retrieve",
    "domain": "compliance",
    "method": "apiPoliciesCsfFunctionRetrieve",
    "http": "GET",
    "path": "/api/policies/csf_function/",
    "paginate": "none"
  },
  {
    "operationId": "api_policies_effort_retrieve",
    "domain": "compliance",
    "method": "apiPoliciesEffortRetrieve",
    "http": "GET",
    "path": "/api/policies/effort/",
    "paginate": "none"
  },
  {
    "operationId": "api_policies_export_csv_retrieve",
    "domain": "compliance",
    "method": "apiPoliciesExportCsvRetrieve",
    "http": "GET",
    "path": "/api/policies/export_csv/",
    "paginate": "none"
  },
  {
    "operationId": "api_policies_export_xlsx_retrieve",
    "domain": "compliance",
    "method": "apiPoliciesExportXlsxRetrieve",
    "http": "GET",
    "path": "/api/policies/export_xlsx/",
    "paginate": "none"
  },
  {
    "operationId": "api_policies_get_controls_info_retrieve",
    "domain": "compliance",
    "method": "apiPoliciesGetControlsInfoRetrieve",
    "http": "GET",
    "path": "/api/policies/get_controls_info/",
    "paginate": "none"
  },
  {
    "operationId": "api_policies_get_gantt_data_retrieve",
    "domain": "compliance",
    "method": "apiPoliciesGetGanttDataRetrieve",
    "http": "GET",
    "path": "/api/policies/get_gantt_data/",
    "paginate": "none"
  },
  {
    "operationId": "api_policies_get_timeline_info_retrieve",
    "domain": "compliance",
    "method": "apiPoliciesGetTimelineInfoRetrieve",
    "http": "GET",
    "path": "/api/policies/get_timeline_info/",
    "paginate": "none"
  },
  {
    "operationId": "api_policies_ids_retrieve",
    "domain": "compliance",
    "method": "apiPoliciesIdsRetrieve",
    "http": "GET",
    "path": "/api/policies/ids/",
    "paginate": "none"
  },
  {
    "operationId": "api_policies_impact_effort_retrieve",
    "domain": "compliance",
    "method": "apiPoliciesImpactEffortRetrieve",
    "http": "GET",
    "path": "/api/policies/impact_effort/",
    "paginate": "none"
  },
  {
    "operationId": "api_policies_impact_graph_retrieve",
    "domain": "compliance",
    "method": "apiPoliciesImpactGraphRetrieve",
    "http": "GET",
    "path": "/api/policies/impact_graph/",
    "paginate": "none"
  },
  {
    "operationId": "api_policies_linked_models_retrieve",
    "domain": "compliance",
    "method": "apiPoliciesLinkedModelsRetrieve",
    "http": "GET",
    "path": "/api/policies/linked_models/",
    "paginate": "none"
  },
  {
    "operationId": "api_policies_merge_create",
    "domain": "compliance",
    "method": "apiPoliciesMergeCreate",
    "http": "POST",
    "path": "/api/policies/merge/",
    "paginate": "none"
  },
  {
    "operationId": "api_policies_mss_xlsx_retrieve",
    "domain": "compliance",
    "method": "apiPoliciesMssXlsxRetrieve",
    "http": "GET",
    "path": "/api/policies/mss_xlsx/",
    "paginate": "none"
  },
  {
    "operationId": "api_policies_owner_retrieve",
    "domain": "compliance",
    "method": "apiPoliciesOwnerRetrieve",
    "http": "GET",
    "path": "/api/policies/owner/",
    "paginate": "none"
  },
  {
    "operationId": "api_policies_per_status_retrieve",
    "domain": "compliance",
    "method": "apiPoliciesPerStatusRetrieve",
    "http": "GET",
    "path": "/api/policies/per_status/",
    "paginate": "none"
  },
  {
    "operationId": "api_policies_priority_retrieve",
    "domain": "compliance",
    "method": "apiPoliciesPriorityRetrieve",
    "http": "GET",
    "path": "/api/policies/priority/",
    "paginate": "none"
  },
  {
    "operationId": "api_policies_priority_chart_data_retrieve",
    "domain": "compliance",
    "method": "apiPoliciesPriorityChartDataRetrieve",
    "http": "GET",
    "path": "/api/policies/priority_chart_data/",
    "paginate": "none"
  },
  {
    "operationId": "api_policies_status_retrieve",
    "domain": "compliance",
    "method": "apiPoliciesStatusRetrieve",
    "http": "GET",
    "path": "/api/policies/status/",
    "paginate": "none"
  },
  {
    "operationId": "api_policies_sunburst_data_retrieve",
    "domain": "compliance",
    "method": "apiPoliciesSunburstDataRetrieve",
    "http": "GET",
    "path": "/api/policies/sunburst_data/",
    "paginate": "none"
  },
  {
    "operationId": "api_policies_to_review_retrieve",
    "domain": "compliance",
    "method": "apiPoliciesToReviewRetrieve",
    "http": "GET",
    "path": "/api/policies/to_review/",
    "paginate": "none"
  },
  {
    "operationId": "api_policies_todo_retrieve",
    "domain": "compliance",
    "method": "apiPoliciesTodoRetrieve",
    "http": "GET",
    "path": "/api/policies/todo/",
    "paginate": "none"
  },
  {
    "operationId": "api_policies_updatables_retrieve",
    "domain": "compliance",
    "method": "apiPoliciesUpdatablesRetrieve",
    "http": "GET",
    "path": "/api/policies/updatables/",
    "paginate": "none"
  },
  {
    "operationId": "api_reference_controls_list",
    "domain": "compliance",
    "method": "apiReferenceControlsList",
    "http": "GET",
    "path": "/api/reference-controls/",
    "paginate": "page"
  },
  {
    "operationId": "api_reference_controls_create",
    "domain": "compliance",
    "method": "apiReferenceControlsCreate",
    "http": "POST",
    "path": "/api/reference-controls/",
    "paginate": "none"
  },
  {
    "operationId": "api_reference_controls_retrieve",
    "domain": "compliance",
    "method": "apiReferenceControlsRetrieve",
    "http": "GET",
    "path": "/api/reference-controls/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_reference_controls_update",
    "domain": "compliance",
    "method": "apiReferenceControlsUpdate",
    "http": "PUT",
    "path": "/api/reference-controls/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_reference_controls_partial_update",
    "domain": "compliance",
    "method": "apiReferenceControlsPartialUpdate",
    "http": "PATCH",
    "path": "/api/reference-controls/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_reference_controls_destroy",
    "domain": "compliance",
    "method": "apiReferenceControlsDestroy",
    "http": "DELETE",
    "path": "/api/reference-controls/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_reference_controls_cascade_info_retrieve",
    "domain": "compliance",
    "method": "apiReferenceControlsCascadeInfoRetrieve",
    "http": "GET",
    "path": "/api/reference-controls/{id}/cascade-info/",
    "paginate": "none"
  },
  {
    "operationId": "api_reference_controls_object_retrieve",
    "domain": "compliance",
    "method": "apiReferenceControlsObjectRetrieve",
    "http": "GET",
    "path": "/api/reference-controls/{id}/object/",
    "paginate": "none"
  },
  {
    "operationId": "api_reference_controls_sync_applied_controls_create",
    "domain": "compliance",
    "method": "apiReferenceControlsSyncAppliedControlsCreate",
    "http": "POST",
    "path": "/api/reference-controls/{id}/sync-applied-controls/",
    "paginate": "none"
  },
  {
    "operationId": "api_reference_controls_syncable_applied_controls_retrieve",
    "domain": "compliance",
    "method": "apiReferenceControlsSyncableAppliedControlsRetrieve",
    "http": "GET",
    "path": "/api/reference-controls/{id}/syncable-applied-controls/",
    "paginate": "none"
  },
  {
    "operationId": "api_reference_controls_batch_action_create",
    "domain": "compliance",
    "method": "apiReferenceControlsBatchActionCreate",
    "http": "POST",
    "path": "/api/reference-controls/batch-action/",
    "paginate": "none"
  },
  {
    "operationId": "api_reference_controls_category_retrieve",
    "domain": "compliance",
    "method": "apiReferenceControlsCategoryRetrieve",
    "http": "GET",
    "path": "/api/reference-controls/category/",
    "paginate": "none"
  },
  {
    "operationId": "api_reference_controls_csf_function_retrieve",
    "domain": "compliance",
    "method": "apiReferenceControlsCsfFunctionRetrieve",
    "http": "GET",
    "path": "/api/reference-controls/csf_function/",
    "paginate": "none"
  },
  {
    "operationId": "api_reference_controls_provider_retrieve",
    "domain": "compliance",
    "method": "apiReferenceControlsProviderRetrieve",
    "http": "GET",
    "path": "/api/reference-controls/provider/",
    "paginate": "none"
  },
  {
    "operationId": "api_requirement_assessments_list",
    "domain": "compliance",
    "method": "apiRequirementAssessmentsList",
    "http": "GET",
    "path": "/api/requirement-assessments/",
    "paginate": "page"
  },
  {
    "operationId": "api_requirement_assessments_create",
    "domain": "compliance",
    "method": "apiRequirementAssessmentsCreate",
    "http": "POST",
    "path": "/api/requirement-assessments/",
    "paginate": "none"
  },
  {
    "operationId": "api_requirement_assessments_retrieve",
    "domain": "compliance",
    "method": "apiRequirementAssessmentsRetrieve",
    "http": "GET",
    "path": "/api/requirement-assessments/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_requirement_assessments_update",
    "domain": "compliance",
    "method": "apiRequirementAssessmentsUpdate",
    "http": "PUT",
    "path": "/api/requirement-assessments/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_requirement_assessments_partial_update",
    "domain": "compliance",
    "method": "apiRequirementAssessmentsPartialUpdate",
    "http": "PATCH",
    "path": "/api/requirement-assessments/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_requirement_assessments_destroy",
    "domain": "compliance",
    "method": "apiRequirementAssessmentsDestroy",
    "http": "DELETE",
    "path": "/api/requirement-assessments/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_requirement_assessments_cascade_info_retrieve",
    "domain": "compliance",
    "method": "apiRequirementAssessmentsCascadeInfoRetrieve",
    "http": "GET",
    "path": "/api/requirement-assessments/{id}/cascade-info/",
    "paginate": "none"
  },
  {
    "operationId": "api_requirement_assessments_object_retrieve",
    "domain": "compliance",
    "method": "apiRequirementAssessmentsObjectRetrieve",
    "http": "GET",
    "path": "/api/requirement-assessments/{id}/object/",
    "paginate": "none"
  },
  {
    "operationId": "api_requirement_assessments_suggestions_applied_controls_retrieve",
    "domain": "compliance",
    "method": "apiRequirementAssessmentsSuggestionsAppliedControlsRetrieve",
    "http": "GET",
    "path": "/api/requirement-assessments/{id}/suggestions/applied-controls/",
    "paginate": "none"
  },
  {
    "operationId": "api_requirement_assessments_suggestions_applied_controls_create",
    "domain": "compliance",
    "method": "apiRequirementAssessmentsSuggestionsAppliedControlsCreate",
    "http": "POST",
    "path": "/api/requirement-assessments/{id}/suggestions/applied-controls/",
    "paginate": "none"
  },
  {
    "operationId": "api_requirement_assessments_batch_action_create",
    "domain": "compliance",
    "method": "apiRequirementAssessmentsBatchActionCreate",
    "http": "POST",
    "path": "/api/requirement-assessments/batch-action/",
    "paginate": "none"
  },
  {
    "operationId": "api_requirement_assessments_extended_result_retrieve",
    "domain": "compliance",
    "method": "apiRequirementAssessmentsExtendedResultRetrieve",
    "http": "GET",
    "path": "/api/requirement-assessments/extended_result/",
    "paginate": "none"
  },
  {
    "operationId": "api_requirement_assessments_per_status_retrieve",
    "domain": "compliance",
    "method": "apiRequirementAssessmentsPerStatusRetrieve",
    "http": "GET",
    "path": "/api/requirement-assessments/per_status/",
    "paginate": "none"
  },
  {
    "operationId": "api_requirement_assessments_result_retrieve",
    "domain": "compliance",
    "method": "apiRequirementAssessmentsResultRetrieve",
    "http": "GET",
    "path": "/api/requirement-assessments/result/",
    "paginate": "none"
  },
  {
    "operationId": "api_requirement_assessments_status_retrieve",
    "domain": "compliance",
    "method": "apiRequirementAssessmentsStatusRetrieve",
    "http": "GET",
    "path": "/api/requirement-assessments/status/",
    "paginate": "none"
  },
  {
    "operationId": "api_requirement_assessments_to_review_retrieve",
    "domain": "compliance",
    "method": "apiRequirementAssessmentsToReviewRetrieve",
    "http": "GET",
    "path": "/api/requirement-assessments/to_review/",
    "paginate": "none"
  },
  {
    "operationId": "api_requirement_assessments_todo_retrieve",
    "domain": "compliance",
    "method": "apiRequirementAssessmentsTodoRetrieve",
    "http": "GET",
    "path": "/api/requirement-assessments/todo/",
    "paginate": "none"
  },
  {
    "operationId": "api_requirement_assessments_updatables_retrieve",
    "domain": "compliance",
    "method": "apiRequirementAssessmentsUpdatablesRetrieve",
    "http": "GET",
    "path": "/api/requirement-assessments/updatables/",
    "paginate": "none"
  },
  {
    "operationId": "api_requirement_assignments_list",
    "domain": "compliance",
    "method": "apiRequirementAssignmentsList",
    "http": "GET",
    "path": "/api/requirement-assignments/",
    "paginate": "page"
  },
  {
    "operationId": "api_requirement_assignments_create",
    "domain": "compliance",
    "method": "apiRequirementAssignmentsCreate",
    "http": "POST",
    "path": "/api/requirement-assignments/",
    "paginate": "none"
  },
  {
    "operationId": "api_requirement_assignments_retrieve",
    "domain": "compliance",
    "method": "apiRequirementAssignmentsRetrieve",
    "http": "GET",
    "path": "/api/requirement-assignments/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_requirement_assignments_update",
    "domain": "compliance",
    "method": "apiRequirementAssignmentsUpdate",
    "http": "PUT",
    "path": "/api/requirement-assignments/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_requirement_assignments_partial_update",
    "domain": "compliance",
    "method": "apiRequirementAssignmentsPartialUpdate",
    "http": "PATCH",
    "path": "/api/requirement-assignments/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_requirement_assignments_destroy",
    "domain": "compliance",
    "method": "apiRequirementAssignmentsDestroy",
    "http": "DELETE",
    "path": "/api/requirement-assignments/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_requirement_assignments_cascade_info_retrieve",
    "domain": "compliance",
    "method": "apiRequirementAssignmentsCascadeInfoRetrieve",
    "http": "GET",
    "path": "/api/requirement-assignments/{id}/cascade-info/",
    "paginate": "none"
  },
  {
    "operationId": "api_requirement_assignments_object_retrieve",
    "domain": "compliance",
    "method": "apiRequirementAssignmentsObjectRetrieve",
    "http": "GET",
    "path": "/api/requirement-assignments/{id}/object/",
    "paginate": "none"
  },
  {
    "operationId": "api_requirement_assignments_requirements_list_retrieve",
    "domain": "compliance",
    "method": "apiRequirementAssignmentsRequirementsListRetrieve",
    "http": "GET",
    "path": "/api/requirement-assignments/{id}/requirements_list/",
    "paginate": "none"
  },
  {
    "operationId": "api_requirement_assignments_set_status_create",
    "domain": "compliance",
    "method": "apiRequirementAssignmentsSetStatusCreate",
    "http": "POST",
    "path": "/api/requirement-assignments/{id}/set_status/",
    "paginate": "none"
  },
  {
    "operationId": "api_requirement_assignments_batch_action_create",
    "domain": "compliance",
    "method": "apiRequirementAssignmentsBatchActionCreate",
    "http": "POST",
    "path": "/api/requirement-assignments/batch-action/",
    "paginate": "none"
  },
  {
    "operationId": "api_requirement_mapping_sets_list",
    "domain": "compliance",
    "method": "apiRequirementMappingSetsList",
    "http": "GET",
    "path": "/api/requirement-mapping-sets/",
    "paginate": "page"
  },
  {
    "operationId": "api_requirement_mapping_sets_create",
    "domain": "compliance",
    "method": "apiRequirementMappingSetsCreate",
    "http": "POST",
    "path": "/api/requirement-mapping-sets/",
    "paginate": "none"
  },
  {
    "operationId": "api_requirement_mapping_sets_retrieve",
    "domain": "compliance",
    "method": "apiRequirementMappingSetsRetrieve",
    "http": "GET",
    "path": "/api/requirement-mapping-sets/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_requirement_mapping_sets_update",
    "domain": "compliance",
    "method": "apiRequirementMappingSetsUpdate",
    "http": "PUT",
    "path": "/api/requirement-mapping-sets/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_requirement_mapping_sets_partial_update",
    "domain": "compliance",
    "method": "apiRequirementMappingSetsPartialUpdate",
    "http": "PATCH",
    "path": "/api/requirement-mapping-sets/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_requirement_mapping_sets_destroy",
    "domain": "compliance",
    "method": "apiRequirementMappingSetsDestroy",
    "http": "DELETE",
    "path": "/api/requirement-mapping-sets/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_requirement_mapping_sets_cascade_info_retrieve",
    "domain": "compliance",
    "method": "apiRequirementMappingSetsCascadeInfoRetrieve",
    "http": "GET",
    "path": "/api/requirement-mapping-sets/{id}/cascade-info/",
    "paginate": "none"
  },
  {
    "operationId": "api_requirement_mapping_sets_graph_data_retrieve_2",
    "domain": "compliance",
    "method": "apiRequirementMappingSetsGraphDataRetrieve_2",
    "http": "GET",
    "path": "/api/requirement-mapping-sets/{id}/graph_data/",
    "paginate": "none"
  },
  {
    "operationId": "api_requirement_mapping_sets_object_retrieve",
    "domain": "compliance",
    "method": "apiRequirementMappingSetsObjectRetrieve",
    "http": "GET",
    "path": "/api/requirement-mapping-sets/{id}/object/",
    "paginate": "none"
  },
  {
    "operationId": "api_requirement_mapping_sets_batch_action_create",
    "domain": "compliance",
    "method": "apiRequirementMappingSetsBatchActionCreate",
    "http": "POST",
    "path": "/api/requirement-mapping-sets/batch-action/",
    "paginate": "none"
  },
  {
    "operationId": "api_requirement_mapping_sets_graph_data_retrieve",
    "domain": "compliance",
    "method": "apiRequirementMappingSetsGraphDataRetrieve",
    "http": "GET",
    "path": "/api/requirement-mapping-sets/graph-data/",
    "paginate": "none"
  },
  {
    "operationId": "api_requirement_mapping_sets_provider_retrieve",
    "domain": "compliance",
    "method": "apiRequirementMappingSetsProviderRetrieve",
    "http": "GET",
    "path": "/api/requirement-mapping-sets/provider/",
    "paginate": "none"
  },
  {
    "operationId": "api_requirement_nodes_list",
    "domain": "compliance",
    "method": "apiRequirementNodesList",
    "http": "GET",
    "path": "/api/requirement-nodes/",
    "paginate": "page"
  },
  {
    "operationId": "api_requirement_nodes_create",
    "domain": "compliance",
    "method": "apiRequirementNodesCreate",
    "http": "POST",
    "path": "/api/requirement-nodes/",
    "paginate": "none"
  },
  {
    "operationId": "api_requirement_nodes_retrieve",
    "domain": "compliance",
    "method": "apiRequirementNodesRetrieve",
    "http": "GET",
    "path": "/api/requirement-nodes/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_requirement_nodes_update",
    "domain": "compliance",
    "method": "apiRequirementNodesUpdate",
    "http": "PUT",
    "path": "/api/requirement-nodes/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_requirement_nodes_partial_update",
    "domain": "compliance",
    "method": "apiRequirementNodesPartialUpdate",
    "http": "PATCH",
    "path": "/api/requirement-nodes/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_requirement_nodes_destroy",
    "domain": "compliance",
    "method": "apiRequirementNodesDestroy",
    "http": "DELETE",
    "path": "/api/requirement-nodes/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_requirement_nodes_cascade_info_retrieve",
    "domain": "compliance",
    "method": "apiRequirementNodesCascadeInfoRetrieve",
    "http": "GET",
    "path": "/api/requirement-nodes/{id}/cascade-info/",
    "paginate": "none"
  },
  {
    "operationId": "api_requirement_nodes_inspect_requirement_retrieve",
    "domain": "compliance",
    "method": "apiRequirementNodesInspectRequirementRetrieve",
    "http": "GET",
    "path": "/api/requirement-nodes/{id}/inspect_requirement/",
    "paginate": "none"
  },
  {
    "operationId": "api_requirement_nodes_object_retrieve",
    "domain": "compliance",
    "method": "apiRequirementNodesObjectRetrieve",
    "http": "GET",
    "path": "/api/requirement-nodes/{id}/object/",
    "paginate": "none"
  },
  {
    "operationId": "api_requirement_nodes_serve_image_retrieve",
    "domain": "compliance",
    "method": "apiRequirementNodesServeImageRetrieve",
    "http": "GET",
    "path": "/api/requirement-nodes/{id}/serve-image/{attachment_id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_requirement_nodes_upload_image_create",
    "domain": "compliance",
    "method": "apiRequirementNodesUploadImageCreate",
    "http": "POST",
    "path": "/api/requirement-nodes/{id}/upload-image/",
    "paginate": "none"
  },
  {
    "operationId": "api_requirement_nodes_batch_action_create",
    "domain": "compliance",
    "method": "apiRequirementNodesBatchActionCreate",
    "http": "POST",
    "path": "/api/requirement-nodes/batch-action/",
    "paginate": "none"
  },
  {
    "operationId": "api_crq_quantitative_risk_hypotheses_list",
    "domain": "crq",
    "method": "apiCrqQuantitativeRiskHypothesesList",
    "http": "GET",
    "path": "/api/crq/quantitative-risk-hypotheses/",
    "paginate": "page"
  },
  {
    "operationId": "api_crq_quantitative_risk_hypotheses_create",
    "domain": "crq",
    "method": "apiCrqQuantitativeRiskHypothesesCreate",
    "http": "POST",
    "path": "/api/crq/quantitative-risk-hypotheses/",
    "paginate": "none"
  },
  {
    "operationId": "api_crq_quantitative_risk_hypotheses_retrieve",
    "domain": "crq",
    "method": "apiCrqQuantitativeRiskHypothesesRetrieve",
    "http": "GET",
    "path": "/api/crq/quantitative-risk-hypotheses/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_crq_quantitative_risk_hypotheses_update",
    "domain": "crq",
    "method": "apiCrqQuantitativeRiskHypothesesUpdate",
    "http": "PUT",
    "path": "/api/crq/quantitative-risk-hypotheses/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_crq_quantitative_risk_hypotheses_partial_update",
    "domain": "crq",
    "method": "apiCrqQuantitativeRiskHypothesesPartialUpdate",
    "http": "PATCH",
    "path": "/api/crq/quantitative-risk-hypotheses/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_crq_quantitative_risk_hypotheses_destroy",
    "domain": "crq",
    "method": "apiCrqQuantitativeRiskHypothesesDestroy",
    "http": "DELETE",
    "path": "/api/crq/quantitative-risk-hypotheses/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_crq_quantitative_risk_hypotheses_cascade_info_retrieve",
    "domain": "crq",
    "method": "apiCrqQuantitativeRiskHypothesesCascadeInfoRetrieve",
    "http": "GET",
    "path": "/api/crq/quantitative-risk-hypotheses/{id}/cascade-info/",
    "paginate": "none"
  },
  {
    "operationId": "api_crq_quantitative_risk_hypotheses_lec_retrieve",
    "domain": "crq",
    "method": "apiCrqQuantitativeRiskHypothesesLecRetrieve",
    "http": "GET",
    "path": "/api/crq/quantitative-risk-hypotheses/{id}/lec/",
    "paginate": "none"
  },
  {
    "operationId": "api_crq_quantitative_risk_hypotheses_object_retrieve",
    "domain": "crq",
    "method": "apiCrqQuantitativeRiskHypothesesObjectRetrieve",
    "http": "GET",
    "path": "/api/crq/quantitative-risk-hypotheses/{id}/object/",
    "paginate": "none"
  },
  {
    "operationId": "api_crq_quantitative_risk_hypotheses_run_simulation_retrieve",
    "domain": "crq",
    "method": "apiCrqQuantitativeRiskHypothesesRunSimulationRetrieve",
    "http": "GET",
    "path": "/api/crq/quantitative-risk-hypotheses/{id}/run-simulation/",
    "paginate": "none"
  },
  {
    "operationId": "api_crq_quantitative_risk_hypotheses_batch_action_create",
    "domain": "crq",
    "method": "apiCrqQuantitativeRiskHypothesesBatchActionCreate",
    "http": "POST",
    "path": "/api/crq/quantitative-risk-hypotheses/batch-action/",
    "paginate": "none"
  },
  {
    "operationId": "api_crq_quantitative_risk_hypotheses_default_ref_id_retrieve",
    "domain": "crq",
    "method": "apiCrqQuantitativeRiskHypothesesDefaultRefIdRetrieve",
    "http": "GET",
    "path": "/api/crq/quantitative-risk-hypotheses/default_ref_id/",
    "paginate": "none"
  },
  {
    "operationId": "api_crq_quantitative_risk_hypotheses_risk_stage_retrieve",
    "domain": "crq",
    "method": "apiCrqQuantitativeRiskHypothesesRiskStageRetrieve",
    "http": "GET",
    "path": "/api/crq/quantitative-risk-hypotheses/risk_stage/",
    "paginate": "none"
  },
  {
    "operationId": "api_crq_quantitative_risk_scenarios_list",
    "domain": "crq",
    "method": "apiCrqQuantitativeRiskScenariosList",
    "http": "GET",
    "path": "/api/crq/quantitative-risk-scenarios/",
    "paginate": "page"
  },
  {
    "operationId": "api_crq_quantitative_risk_scenarios_create",
    "domain": "crq",
    "method": "apiCrqQuantitativeRiskScenariosCreate",
    "http": "POST",
    "path": "/api/crq/quantitative-risk-scenarios/",
    "paginate": "none"
  },
  {
    "operationId": "api_crq_quantitative_risk_scenarios_retrieve",
    "domain": "crq",
    "method": "apiCrqQuantitativeRiskScenariosRetrieve",
    "http": "GET",
    "path": "/api/crq/quantitative-risk-scenarios/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_crq_quantitative_risk_scenarios_update",
    "domain": "crq",
    "method": "apiCrqQuantitativeRiskScenariosUpdate",
    "http": "PUT",
    "path": "/api/crq/quantitative-risk-scenarios/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_crq_quantitative_risk_scenarios_partial_update",
    "domain": "crq",
    "method": "apiCrqQuantitativeRiskScenariosPartialUpdate",
    "http": "PATCH",
    "path": "/api/crq/quantitative-risk-scenarios/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_crq_quantitative_risk_scenarios_destroy",
    "domain": "crq",
    "method": "apiCrqQuantitativeRiskScenariosDestroy",
    "http": "DELETE",
    "path": "/api/crq/quantitative-risk-scenarios/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_crq_quantitative_risk_scenarios_cascade_info_retrieve",
    "domain": "crq",
    "method": "apiCrqQuantitativeRiskScenariosCascadeInfoRetrieve",
    "http": "GET",
    "path": "/api/crq/quantitative-risk-scenarios/{id}/cascade-info/",
    "paginate": "none"
  },
  {
    "operationId": "api_crq_quantitative_risk_scenarios_lec_retrieve",
    "domain": "crq",
    "method": "apiCrqQuantitativeRiskScenariosLecRetrieve",
    "http": "GET",
    "path": "/api/crq/quantitative-risk-scenarios/{id}/lec/",
    "paginate": "none"
  },
  {
    "operationId": "api_crq_quantitative_risk_scenarios_object_retrieve",
    "domain": "crq",
    "method": "apiCrqQuantitativeRiskScenariosObjectRetrieve",
    "http": "GET",
    "path": "/api/crq/quantitative-risk-scenarios/{id}/object/",
    "paginate": "none"
  },
  {
    "operationId": "api_crq_quantitative_risk_scenarios_batch_action_create",
    "domain": "crq",
    "method": "apiCrqQuantitativeRiskScenariosBatchActionCreate",
    "http": "POST",
    "path": "/api/crq/quantitative-risk-scenarios/batch-action/",
    "paginate": "none"
  },
  {
    "operationId": "api_crq_quantitative_risk_scenarios_default_ref_id_retrieve",
    "domain": "crq",
    "method": "apiCrqQuantitativeRiskScenariosDefaultRefIdRetrieve",
    "http": "GET",
    "path": "/api/crq/quantitative-risk-scenarios/default_ref_id/",
    "paginate": "none"
  },
  {
    "operationId": "api_crq_quantitative_risk_scenarios_priority_retrieve",
    "domain": "crq",
    "method": "apiCrqQuantitativeRiskScenariosPriorityRetrieve",
    "http": "GET",
    "path": "/api/crq/quantitative-risk-scenarios/priority/",
    "paginate": "none"
  },
  {
    "operationId": "api_crq_quantitative_risk_scenarios_status_retrieve",
    "domain": "crq",
    "method": "apiCrqQuantitativeRiskScenariosStatusRetrieve",
    "http": "GET",
    "path": "/api/crq/quantitative-risk-scenarios/status/",
    "paginate": "none"
  },
  {
    "operationId": "api_crq_quantitative_risk_studies_list",
    "domain": "crq",
    "method": "apiCrqQuantitativeRiskStudiesList",
    "http": "GET",
    "path": "/api/crq/quantitative-risk-studies/",
    "paginate": "page"
  },
  {
    "operationId": "api_crq_quantitative_risk_studies_create",
    "domain": "crq",
    "method": "apiCrqQuantitativeRiskStudiesCreate",
    "http": "POST",
    "path": "/api/crq/quantitative-risk-studies/",
    "paginate": "none"
  },
  {
    "operationId": "api_crq_quantitative_risk_studies_retrieve",
    "domain": "crq",
    "method": "apiCrqQuantitativeRiskStudiesRetrieve",
    "http": "GET",
    "path": "/api/crq/quantitative-risk-studies/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_crq_quantitative_risk_studies_update",
    "domain": "crq",
    "method": "apiCrqQuantitativeRiskStudiesUpdate",
    "http": "PUT",
    "path": "/api/crq/quantitative-risk-studies/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_crq_quantitative_risk_studies_partial_update",
    "domain": "crq",
    "method": "apiCrqQuantitativeRiskStudiesPartialUpdate",
    "http": "PATCH",
    "path": "/api/crq/quantitative-risk-studies/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_crq_quantitative_risk_studies_destroy",
    "domain": "crq",
    "method": "apiCrqQuantitativeRiskStudiesDestroy",
    "http": "DELETE",
    "path": "/api/crq/quantitative-risk-studies/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_crq_quantitative_risk_studies_action_plan_list",
    "domain": "crq",
    "method": "apiCrqQuantitativeRiskStudiesActionPlanList",
    "http": "GET",
    "path": "/api/crq/quantitative-risk-studies/{id}/action-plan/",
    "paginate": "page"
  },
  {
    "operationId": "api_crq_quantitative_risk_studies_action_plan_budget_overview_list",
    "domain": "crq",
    "method": "apiCrqQuantitativeRiskStudiesActionPlanBudgetOverviewList",
    "http": "GET",
    "path": "/api/crq/quantitative-risk-studies/{id}/action-plan/budget-overview/",
    "paginate": "page"
  },
  {
    "operationId": "api_crq_quantitative_risk_studies_ale_comparison_retrieve",
    "domain": "crq",
    "method": "apiCrqQuantitativeRiskStudiesAleComparisonRetrieve",
    "http": "GET",
    "path": "/api/crq/quantitative-risk-studies/{id}/ale-comparison/",
    "paginate": "none"
  },
  {
    "operationId": "api_crq_quantitative_risk_studies_cascade_info_retrieve",
    "domain": "crq",
    "method": "apiCrqQuantitativeRiskStudiesCascadeInfoRetrieve",
    "http": "GET",
    "path": "/api/crq/quantitative-risk-studies/{id}/cascade-info/",
    "paginate": "none"
  },
  {
    "operationId": "api_crq_quantitative_risk_studies_combined_ale_retrieve",
    "domain": "crq",
    "method": "apiCrqQuantitativeRiskStudiesCombinedAleRetrieve",
    "http": "GET",
    "path": "/api/crq/quantitative-risk-studies/{id}/combined-ale/",
    "paginate": "none"
  },
  {
    "operationId": "api_crq_quantitative_risk_studies_combined_lec_retrieve",
    "domain": "crq",
    "method": "apiCrqQuantitativeRiskStudiesCombinedLecRetrieve",
    "http": "GET",
    "path": "/api/crq/quantitative-risk-studies/{id}/combined-lec/",
    "paginate": "none"
  },
  {
    "operationId": "api_crq_quantitative_risk_studies_executive_summary_retrieve",
    "domain": "crq",
    "method": "apiCrqQuantitativeRiskStudiesExecutiveSummaryRetrieve",
    "http": "GET",
    "path": "/api/crq/quantitative-risk-studies/{id}/executive-summary/",
    "paginate": "none"
  },
  {
    "operationId": "api_crq_quantitative_risk_studies_key_metrics_retrieve",
    "domain": "crq",
    "method": "apiCrqQuantitativeRiskStudiesKeyMetricsRetrieve",
    "http": "GET",
    "path": "/api/crq/quantitative-risk-studies/{id}/key-metrics/",
    "paginate": "none"
  },
  {
    "operationId": "api_crq_quantitative_risk_studies_object_retrieve",
    "domain": "crq",
    "method": "apiCrqQuantitativeRiskStudiesObjectRetrieve",
    "http": "GET",
    "path": "/api/crq/quantitative-risk-studies/{id}/object/",
    "paginate": "none"
  },
  {
    "operationId": "api_crq_quantitative_risk_studies_retrigger_all_simulations_create",
    "domain": "crq",
    "method": "apiCrqQuantitativeRiskStudiesRetriggerAllSimulationsCreate",
    "http": "POST",
    "path": "/api/crq/quantitative-risk-studies/{id}/retrigger-all-simulations/",
    "paginate": "none"
  },
  {
    "operationId": "api_crq_quantitative_risk_studies_batch_action_create",
    "domain": "crq",
    "method": "apiCrqQuantitativeRiskStudiesBatchActionCreate",
    "http": "POST",
    "path": "/api/crq/quantitative-risk-studies/batch-action/",
    "paginate": "none"
  },
  {
    "operationId": "api_crq_quantitative_risk_studies_distribution_model_retrieve",
    "domain": "crq",
    "method": "apiCrqQuantitativeRiskStudiesDistributionModelRetrieve",
    "http": "GET",
    "path": "/api/crq/quantitative-risk-studies/distribution_model/",
    "paginate": "none"
  },
  {
    "operationId": "api_crq_quantitative_risk_studies_status_retrieve",
    "domain": "crq",
    "method": "apiCrqQuantitativeRiskStudiesStatusRetrieve",
    "http": "GET",
    "path": "/api/crq/quantitative-risk-studies/status/",
    "paginate": "none"
  },
  {
    "operationId": "api_ebios_rm_attack_paths_list",
    "domain": "ebiosRm",
    "method": "apiEbiosRmAttackPathsList",
    "http": "GET",
    "path": "/api/ebios-rm/attack-paths/",
    "paginate": "page"
  },
  {
    "operationId": "api_ebios_rm_attack_paths_create",
    "domain": "ebiosRm",
    "method": "apiEbiosRmAttackPathsCreate",
    "http": "POST",
    "path": "/api/ebios-rm/attack-paths/",
    "paginate": "none"
  },
  {
    "operationId": "api_ebios_rm_attack_paths_retrieve",
    "domain": "ebiosRm",
    "method": "apiEbiosRmAttackPathsRetrieve",
    "http": "GET",
    "path": "/api/ebios-rm/attack-paths/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_ebios_rm_attack_paths_update",
    "domain": "ebiosRm",
    "method": "apiEbiosRmAttackPathsUpdate",
    "http": "PUT",
    "path": "/api/ebios-rm/attack-paths/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_ebios_rm_attack_paths_partial_update",
    "domain": "ebiosRm",
    "method": "apiEbiosRmAttackPathsPartialUpdate",
    "http": "PATCH",
    "path": "/api/ebios-rm/attack-paths/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_ebios_rm_attack_paths_destroy",
    "domain": "ebiosRm",
    "method": "apiEbiosRmAttackPathsDestroy",
    "http": "DELETE",
    "path": "/api/ebios-rm/attack-paths/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_ebios_rm_attack_paths_cascade_info_retrieve",
    "domain": "ebiosRm",
    "method": "apiEbiosRmAttackPathsCascadeInfoRetrieve",
    "http": "GET",
    "path": "/api/ebios-rm/attack-paths/{id}/cascade-info/",
    "paginate": "none"
  },
  {
    "operationId": "api_ebios_rm_attack_paths_object_retrieve",
    "domain": "ebiosRm",
    "method": "apiEbiosRmAttackPathsObjectRetrieve",
    "http": "GET",
    "path": "/api/ebios-rm/attack-paths/{id}/object/",
    "paginate": "none"
  },
  {
    "operationId": "api_ebios_rm_attack_paths_batch_action_create",
    "domain": "ebiosRm",
    "method": "apiEbiosRmAttackPathsBatchActionCreate",
    "http": "POST",
    "path": "/api/ebios-rm/attack-paths/batch-action/",
    "paginate": "none"
  },
  {
    "operationId": "api_ebios_rm_elementary_actions_list",
    "domain": "ebiosRm",
    "method": "apiEbiosRmElementaryActionsList",
    "http": "GET",
    "path": "/api/ebios-rm/elementary-actions/",
    "paginate": "page"
  },
  {
    "operationId": "api_ebios_rm_elementary_actions_create",
    "domain": "ebiosRm",
    "method": "apiEbiosRmElementaryActionsCreate",
    "http": "POST",
    "path": "/api/ebios-rm/elementary-actions/",
    "paginate": "none"
  },
  {
    "operationId": "api_ebios_rm_elementary_actions_retrieve",
    "domain": "ebiosRm",
    "method": "apiEbiosRmElementaryActionsRetrieve",
    "http": "GET",
    "path": "/api/ebios-rm/elementary-actions/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_ebios_rm_elementary_actions_update",
    "domain": "ebiosRm",
    "method": "apiEbiosRmElementaryActionsUpdate",
    "http": "PUT",
    "path": "/api/ebios-rm/elementary-actions/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_ebios_rm_elementary_actions_partial_update",
    "domain": "ebiosRm",
    "method": "apiEbiosRmElementaryActionsPartialUpdate",
    "http": "PATCH",
    "path": "/api/ebios-rm/elementary-actions/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_ebios_rm_elementary_actions_destroy",
    "domain": "ebiosRm",
    "method": "apiEbiosRmElementaryActionsDestroy",
    "http": "DELETE",
    "path": "/api/ebios-rm/elementary-actions/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_ebios_rm_elementary_actions_cascade_info_retrieve",
    "domain": "ebiosRm",
    "method": "apiEbiosRmElementaryActionsCascadeInfoRetrieve",
    "http": "GET",
    "path": "/api/ebios-rm/elementary-actions/{id}/cascade-info/",
    "paginate": "none"
  },
  {
    "operationId": "api_ebios_rm_elementary_actions_object_retrieve",
    "domain": "ebiosRm",
    "method": "apiEbiosRmElementaryActionsObjectRetrieve",
    "http": "GET",
    "path": "/api/ebios-rm/elementary-actions/{id}/object/",
    "paginate": "none"
  },
  {
    "operationId": "api_ebios_rm_elementary_actions_attack_stage_retrieve",
    "domain": "ebiosRm",
    "method": "apiEbiosRmElementaryActionsAttackStageRetrieve",
    "http": "GET",
    "path": "/api/ebios-rm/elementary-actions/attack_stage/",
    "paginate": "none"
  },
  {
    "operationId": "api_ebios_rm_elementary_actions_batch_action_create",
    "domain": "ebiosRm",
    "method": "apiEbiosRmElementaryActionsBatchActionCreate",
    "http": "POST",
    "path": "/api/ebios-rm/elementary-actions/batch-action/",
    "paginate": "none"
  },
  {
    "operationId": "api_ebios_rm_elementary_actions_icon_retrieve",
    "domain": "ebiosRm",
    "method": "apiEbiosRmElementaryActionsIconRetrieve",
    "http": "GET",
    "path": "/api/ebios-rm/elementary-actions/icon/",
    "paginate": "none"
  },
  {
    "operationId": "api_ebios_rm_feared_events_list",
    "domain": "ebiosRm",
    "method": "apiEbiosRmFearedEventsList",
    "http": "GET",
    "path": "/api/ebios-rm/feared-events/",
    "paginate": "page"
  },
  {
    "operationId": "api_ebios_rm_feared_events_create",
    "domain": "ebiosRm",
    "method": "apiEbiosRmFearedEventsCreate",
    "http": "POST",
    "path": "/api/ebios-rm/feared-events/",
    "paginate": "none"
  },
  {
    "operationId": "api_ebios_rm_feared_events_retrieve",
    "domain": "ebiosRm",
    "method": "apiEbiosRmFearedEventsRetrieve",
    "http": "GET",
    "path": "/api/ebios-rm/feared-events/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_ebios_rm_feared_events_update",
    "domain": "ebiosRm",
    "method": "apiEbiosRmFearedEventsUpdate",
    "http": "PUT",
    "path": "/api/ebios-rm/feared-events/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_ebios_rm_feared_events_partial_update",
    "domain": "ebiosRm",
    "method": "apiEbiosRmFearedEventsPartialUpdate",
    "http": "PATCH",
    "path": "/api/ebios-rm/feared-events/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_ebios_rm_feared_events_destroy",
    "domain": "ebiosRm",
    "method": "apiEbiosRmFearedEventsDestroy",
    "http": "DELETE",
    "path": "/api/ebios-rm/feared-events/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_ebios_rm_feared_events_cascade_info_retrieve",
    "domain": "ebiosRm",
    "method": "apiEbiosRmFearedEventsCascadeInfoRetrieve",
    "http": "GET",
    "path": "/api/ebios-rm/feared-events/{id}/cascade-info/",
    "paginate": "none"
  },
  {
    "operationId": "api_ebios_rm_feared_events_gravity_retrieve",
    "domain": "ebiosRm",
    "method": "apiEbiosRmFearedEventsGravityRetrieve",
    "http": "GET",
    "path": "/api/ebios-rm/feared-events/{id}/gravity/",
    "paginate": "none"
  },
  {
    "operationId": "api_ebios_rm_feared_events_object_retrieve",
    "domain": "ebiosRm",
    "method": "apiEbiosRmFearedEventsObjectRetrieve",
    "http": "GET",
    "path": "/api/ebios-rm/feared-events/{id}/object/",
    "paginate": "none"
  },
  {
    "operationId": "api_ebios_rm_feared_events_risk_matrix_retrieve",
    "domain": "ebiosRm",
    "method": "apiEbiosRmFearedEventsRiskMatrixRetrieve",
    "http": "GET",
    "path": "/api/ebios-rm/feared-events/{id}/risk-matrix/",
    "paginate": "none"
  },
  {
    "operationId": "api_ebios_rm_feared_events_batch_action_create",
    "domain": "ebiosRm",
    "method": "apiEbiosRmFearedEventsBatchActionCreate",
    "http": "POST",
    "path": "/api/ebios-rm/feared-events/batch-action/",
    "paginate": "none"
  },
  {
    "operationId": "api_ebios_rm_feared_events_batch_create_create",
    "domain": "ebiosRm",
    "method": "apiEbiosRmFearedEventsBatchCreateCreate",
    "http": "POST",
    "path": "/api/ebios-rm/feared-events/batch-create/",
    "paginate": "none"
  },
  {
    "operationId": "api_ebios_rm_kill_chains_list",
    "domain": "ebiosRm",
    "method": "apiEbiosRmKillChainsList",
    "http": "GET",
    "path": "/api/ebios-rm/kill-chains/",
    "paginate": "page"
  },
  {
    "operationId": "api_ebios_rm_kill_chains_create",
    "domain": "ebiosRm",
    "method": "apiEbiosRmKillChainsCreate",
    "http": "POST",
    "path": "/api/ebios-rm/kill-chains/",
    "paginate": "none"
  },
  {
    "operationId": "api_ebios_rm_kill_chains_retrieve",
    "domain": "ebiosRm",
    "method": "apiEbiosRmKillChainsRetrieve",
    "http": "GET",
    "path": "/api/ebios-rm/kill-chains/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_ebios_rm_kill_chains_update",
    "domain": "ebiosRm",
    "method": "apiEbiosRmKillChainsUpdate",
    "http": "PUT",
    "path": "/api/ebios-rm/kill-chains/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_ebios_rm_kill_chains_partial_update",
    "domain": "ebiosRm",
    "method": "apiEbiosRmKillChainsPartialUpdate",
    "http": "PATCH",
    "path": "/api/ebios-rm/kill-chains/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_ebios_rm_kill_chains_destroy",
    "domain": "ebiosRm",
    "method": "apiEbiosRmKillChainsDestroy",
    "http": "DELETE",
    "path": "/api/ebios-rm/kill-chains/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_ebios_rm_kill_chains_cascade_info_retrieve",
    "domain": "ebiosRm",
    "method": "apiEbiosRmKillChainsCascadeInfoRetrieve",
    "http": "GET",
    "path": "/api/ebios-rm/kill-chains/{id}/cascade-info/",
    "paginate": "none"
  },
  {
    "operationId": "api_ebios_rm_kill_chains_object_retrieve",
    "domain": "ebiosRm",
    "method": "apiEbiosRmKillChainsObjectRetrieve",
    "http": "GET",
    "path": "/api/ebios-rm/kill-chains/{id}/object/",
    "paginate": "none"
  },
  {
    "operationId": "api_ebios_rm_kill_chains_batch_action_create",
    "domain": "ebiosRm",
    "method": "apiEbiosRmKillChainsBatchActionCreate",
    "http": "POST",
    "path": "/api/ebios-rm/kill-chains/batch-action/",
    "paginate": "none"
  },
  {
    "operationId": "api_ebios_rm_kill_chains_logic_operator_retrieve",
    "domain": "ebiosRm",
    "method": "apiEbiosRmKillChainsLogicOperatorRetrieve",
    "http": "GET",
    "path": "/api/ebios-rm/kill-chains/logic_operator/",
    "paginate": "none"
  },
  {
    "operationId": "api_ebios_rm_operating_modes_list",
    "domain": "ebiosRm",
    "method": "apiEbiosRmOperatingModesList",
    "http": "GET",
    "path": "/api/ebios-rm/operating-modes/",
    "paginate": "page"
  },
  {
    "operationId": "api_ebios_rm_operating_modes_create",
    "domain": "ebiosRm",
    "method": "apiEbiosRmOperatingModesCreate",
    "http": "POST",
    "path": "/api/ebios-rm/operating-modes/",
    "paginate": "none"
  },
  {
    "operationId": "api_ebios_rm_operating_modes_retrieve",
    "domain": "ebiosRm",
    "method": "apiEbiosRmOperatingModesRetrieve",
    "http": "GET",
    "path": "/api/ebios-rm/operating-modes/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_ebios_rm_operating_modes_update",
    "domain": "ebiosRm",
    "method": "apiEbiosRmOperatingModesUpdate",
    "http": "PUT",
    "path": "/api/ebios-rm/operating-modes/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_ebios_rm_operating_modes_partial_update",
    "domain": "ebiosRm",
    "method": "apiEbiosRmOperatingModesPartialUpdate",
    "http": "PATCH",
    "path": "/api/ebios-rm/operating-modes/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_ebios_rm_operating_modes_destroy",
    "domain": "ebiosRm",
    "method": "apiEbiosRmOperatingModesDestroy",
    "http": "DELETE",
    "path": "/api/ebios-rm/operating-modes/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_ebios_rm_operating_modes_build_graph_retrieve",
    "domain": "ebiosRm",
    "method": "apiEbiosRmOperatingModesBuildGraphRetrieve",
    "http": "GET",
    "path": "/api/ebios-rm/operating-modes/{id}/build_graph/",
    "paginate": "none"
  },
  {
    "operationId": "api_ebios_rm_operating_modes_cascade_info_retrieve",
    "domain": "ebiosRm",
    "method": "apiEbiosRmOperatingModesCascadeInfoRetrieve",
    "http": "GET",
    "path": "/api/ebios-rm/operating-modes/{id}/cascade-info/",
    "paginate": "none"
  },
  {
    "operationId": "api_ebios_rm_operating_modes_likelihood_retrieve",
    "domain": "ebiosRm",
    "method": "apiEbiosRmOperatingModesLikelihoodRetrieve",
    "http": "GET",
    "path": "/api/ebios-rm/operating-modes/{id}/likelihood/",
    "paginate": "none"
  },
  {
    "operationId": "api_ebios_rm_operating_modes_object_retrieve",
    "domain": "ebiosRm",
    "method": "apiEbiosRmOperatingModesObjectRetrieve",
    "http": "GET",
    "path": "/api/ebios-rm/operating-modes/{id}/object/",
    "paginate": "none"
  },
  {
    "operationId": "api_ebios_rm_operating_modes_save_graph_create",
    "domain": "ebiosRm",
    "method": "apiEbiosRmOperatingModesSaveGraphCreate",
    "http": "POST",
    "path": "/api/ebios-rm/operating-modes/{id}/save_graph/",
    "paginate": "none"
  },
  {
    "operationId": "api_ebios_rm_operating_modes_batch_action_create",
    "domain": "ebiosRm",
    "method": "apiEbiosRmOperatingModesBatchActionCreate",
    "http": "POST",
    "path": "/api/ebios-rm/operating-modes/batch-action/",
    "paginate": "none"
  },
  {
    "operationId": "api_ebios_rm_operating_modes_default_ref_id_retrieve",
    "domain": "ebiosRm",
    "method": "apiEbiosRmOperatingModesDefaultRefIdRetrieve",
    "http": "GET",
    "path": "/api/ebios-rm/operating-modes/default_ref_id/",
    "paginate": "none"
  },
  {
    "operationId": "api_ebios_rm_operational_scenarios_list",
    "domain": "ebiosRm",
    "method": "apiEbiosRmOperationalScenariosList",
    "http": "GET",
    "path": "/api/ebios-rm/operational-scenarios/",
    "paginate": "page"
  },
  {
    "operationId": "api_ebios_rm_operational_scenarios_create",
    "domain": "ebiosRm",
    "method": "apiEbiosRmOperationalScenariosCreate",
    "http": "POST",
    "path": "/api/ebios-rm/operational-scenarios/",
    "paginate": "none"
  },
  {
    "operationId": "api_ebios_rm_operational_scenarios_retrieve",
    "domain": "ebiosRm",
    "method": "apiEbiosRmOperationalScenariosRetrieve",
    "http": "GET",
    "path": "/api/ebios-rm/operational-scenarios/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_ebios_rm_operational_scenarios_update",
    "domain": "ebiosRm",
    "method": "apiEbiosRmOperationalScenariosUpdate",
    "http": "PUT",
    "path": "/api/ebios-rm/operational-scenarios/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_ebios_rm_operational_scenarios_partial_update",
    "domain": "ebiosRm",
    "method": "apiEbiosRmOperationalScenariosPartialUpdate",
    "http": "PATCH",
    "path": "/api/ebios-rm/operational-scenarios/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_ebios_rm_operational_scenarios_destroy",
    "domain": "ebiosRm",
    "method": "apiEbiosRmOperationalScenariosDestroy",
    "http": "DELETE",
    "path": "/api/ebios-rm/operational-scenarios/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_ebios_rm_operational_scenarios_cascade_info_retrieve",
    "domain": "ebiosRm",
    "method": "apiEbiosRmOperationalScenariosCascadeInfoRetrieve",
    "http": "GET",
    "path": "/api/ebios-rm/operational-scenarios/{id}/cascade-info/",
    "paginate": "none"
  },
  {
    "operationId": "api_ebios_rm_operational_scenarios_likelihood_retrieve",
    "domain": "ebiosRm",
    "method": "apiEbiosRmOperationalScenariosLikelihoodRetrieve",
    "http": "GET",
    "path": "/api/ebios-rm/operational-scenarios/{id}/likelihood/",
    "paginate": "none"
  },
  {
    "operationId": "api_ebios_rm_operational_scenarios_object_retrieve",
    "domain": "ebiosRm",
    "method": "apiEbiosRmOperationalScenariosObjectRetrieve",
    "http": "GET",
    "path": "/api/ebios-rm/operational-scenarios/{id}/object/",
    "paginate": "none"
  },
  {
    "operationId": "api_ebios_rm_operational_scenarios_risk_matrix_retrieve",
    "domain": "ebiosRm",
    "method": "apiEbiosRmOperationalScenariosRiskMatrixRetrieve",
    "http": "GET",
    "path": "/api/ebios-rm/operational-scenarios/{id}/risk-matrix/",
    "paginate": "none"
  },
  {
    "operationId": "api_ebios_rm_operational_scenarios_batch_action_create",
    "domain": "ebiosRm",
    "method": "apiEbiosRmOperationalScenariosBatchActionCreate",
    "http": "POST",
    "path": "/api/ebios-rm/operational-scenarios/batch-action/",
    "paginate": "none"
  },
  {
    "operationId": "api_ebios_rm_ro_to_list",
    "domain": "ebiosRm",
    "method": "apiEbiosRmRoToList",
    "http": "GET",
    "path": "/api/ebios-rm/ro-to/",
    "paginate": "page"
  },
  {
    "operationId": "api_ebios_rm_ro_to_create",
    "domain": "ebiosRm",
    "method": "apiEbiosRmRoToCreate",
    "http": "POST",
    "path": "/api/ebios-rm/ro-to/",
    "paginate": "none"
  },
  {
    "operationId": "api_ebios_rm_ro_to_retrieve",
    "domain": "ebiosRm",
    "method": "apiEbiosRmRoToRetrieve",
    "http": "GET",
    "path": "/api/ebios-rm/ro-to/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_ebios_rm_ro_to_update",
    "domain": "ebiosRm",
    "method": "apiEbiosRmRoToUpdate",
    "http": "PUT",
    "path": "/api/ebios-rm/ro-to/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_ebios_rm_ro_to_partial_update",
    "domain": "ebiosRm",
    "method": "apiEbiosRmRoToPartialUpdate",
    "http": "PATCH",
    "path": "/api/ebios-rm/ro-to/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_ebios_rm_ro_to_destroy",
    "domain": "ebiosRm",
    "method": "apiEbiosRmRoToDestroy",
    "http": "DELETE",
    "path": "/api/ebios-rm/ro-to/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_ebios_rm_ro_to_cascade_info_retrieve",
    "domain": "ebiosRm",
    "method": "apiEbiosRmRoToCascadeInfoRetrieve",
    "http": "GET",
    "path": "/api/ebios-rm/ro-to/{id}/cascade-info/",
    "paginate": "none"
  },
  {
    "operationId": "api_ebios_rm_ro_to_object_retrieve",
    "domain": "ebiosRm",
    "method": "apiEbiosRmRoToObjectRetrieve",
    "http": "GET",
    "path": "/api/ebios-rm/ro-to/{id}/object/",
    "paginate": "none"
  },
  {
    "operationId": "api_ebios_rm_ro_to_activity_retrieve",
    "domain": "ebiosRm",
    "method": "apiEbiosRmRoToActivityRetrieve",
    "http": "GET",
    "path": "/api/ebios-rm/ro-to/activity/",
    "paginate": "none"
  },
  {
    "operationId": "api_ebios_rm_ro_to_batch_action_create",
    "domain": "ebiosRm",
    "method": "apiEbiosRmRoToBatchActionCreate",
    "http": "POST",
    "path": "/api/ebios-rm/ro-to/batch-action/",
    "paginate": "none"
  },
  {
    "operationId": "api_ebios_rm_ro_to_motivation_retrieve",
    "domain": "ebiosRm",
    "method": "apiEbiosRmRoToMotivationRetrieve",
    "http": "GET",
    "path": "/api/ebios-rm/ro-to/motivation/",
    "paginate": "none"
  },
  {
    "operationId": "api_ebios_rm_ro_to_pertinence_retrieve",
    "domain": "ebiosRm",
    "method": "apiEbiosRmRoToPertinenceRetrieve",
    "http": "GET",
    "path": "/api/ebios-rm/ro-to/pertinence/",
    "paginate": "none"
  },
  {
    "operationId": "api_ebios_rm_ro_to_resources_retrieve",
    "domain": "ebiosRm",
    "method": "apiEbiosRmRoToResourcesRetrieve",
    "http": "GET",
    "path": "/api/ebios-rm/ro-to/resources/",
    "paginate": "none"
  },
  {
    "operationId": "api_ebios_rm_stakeholders_list",
    "domain": "ebiosRm",
    "method": "apiEbiosRmStakeholdersList",
    "http": "GET",
    "path": "/api/ebios-rm/stakeholders/",
    "paginate": "page"
  },
  {
    "operationId": "api_ebios_rm_stakeholders_create",
    "domain": "ebiosRm",
    "method": "apiEbiosRmStakeholdersCreate",
    "http": "POST",
    "path": "/api/ebios-rm/stakeholders/",
    "paginate": "none"
  },
  {
    "operationId": "api_ebios_rm_stakeholders_retrieve",
    "domain": "ebiosRm",
    "method": "apiEbiosRmStakeholdersRetrieve",
    "http": "GET",
    "path": "/api/ebios-rm/stakeholders/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_ebios_rm_stakeholders_update",
    "domain": "ebiosRm",
    "method": "apiEbiosRmStakeholdersUpdate",
    "http": "PUT",
    "path": "/api/ebios-rm/stakeholders/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_ebios_rm_stakeholders_partial_update",
    "domain": "ebiosRm",
    "method": "apiEbiosRmStakeholdersPartialUpdate",
    "http": "PATCH",
    "path": "/api/ebios-rm/stakeholders/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_ebios_rm_stakeholders_destroy",
    "domain": "ebiosRm",
    "method": "apiEbiosRmStakeholdersDestroy",
    "http": "DELETE",
    "path": "/api/ebios-rm/stakeholders/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_ebios_rm_stakeholders_cascade_info_retrieve",
    "domain": "ebiosRm",
    "method": "apiEbiosRmStakeholdersCascadeInfoRetrieve",
    "http": "GET",
    "path": "/api/ebios-rm/stakeholders/{id}/cascade-info/",
    "paginate": "none"
  },
  {
    "operationId": "api_ebios_rm_stakeholders_object_retrieve",
    "domain": "ebiosRm",
    "method": "apiEbiosRmStakeholdersObjectRetrieve",
    "http": "GET",
    "path": "/api/ebios-rm/stakeholders/{id}/object/",
    "paginate": "none"
  },
  {
    "operationId": "api_ebios_rm_stakeholders_batch_action_create",
    "domain": "ebiosRm",
    "method": "apiEbiosRmStakeholdersBatchActionCreate",
    "http": "POST",
    "path": "/api/ebios-rm/stakeholders/batch-action/",
    "paginate": "none"
  },
  {
    "operationId": "api_ebios_rm_stakeholders_category_retrieve",
    "domain": "ebiosRm",
    "method": "apiEbiosRmStakeholdersCategoryRetrieve",
    "http": "GET",
    "path": "/api/ebios-rm/stakeholders/category/",
    "paginate": "none"
  },
  {
    "operationId": "api_ebios_rm_stakeholders_chart_data_retrieve",
    "domain": "ebiosRm",
    "method": "apiEbiosRmStakeholdersChartDataRetrieve",
    "http": "GET",
    "path": "/api/ebios-rm/stakeholders/chart_data/",
    "paginate": "none"
  },
  {
    "operationId": "api_ebios_rm_strategic_scenarios_list",
    "domain": "ebiosRm",
    "method": "apiEbiosRmStrategicScenariosList",
    "http": "GET",
    "path": "/api/ebios-rm/strategic-scenarios/",
    "paginate": "page"
  },
  {
    "operationId": "api_ebios_rm_strategic_scenarios_create",
    "domain": "ebiosRm",
    "method": "apiEbiosRmStrategicScenariosCreate",
    "http": "POST",
    "path": "/api/ebios-rm/strategic-scenarios/",
    "paginate": "none"
  },
  {
    "operationId": "api_ebios_rm_strategic_scenarios_retrieve",
    "domain": "ebiosRm",
    "method": "apiEbiosRmStrategicScenariosRetrieve",
    "http": "GET",
    "path": "/api/ebios-rm/strategic-scenarios/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_ebios_rm_strategic_scenarios_update",
    "domain": "ebiosRm",
    "method": "apiEbiosRmStrategicScenariosUpdate",
    "http": "PUT",
    "path": "/api/ebios-rm/strategic-scenarios/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_ebios_rm_strategic_scenarios_partial_update",
    "domain": "ebiosRm",
    "method": "apiEbiosRmStrategicScenariosPartialUpdate",
    "http": "PATCH",
    "path": "/api/ebios-rm/strategic-scenarios/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_ebios_rm_strategic_scenarios_destroy",
    "domain": "ebiosRm",
    "method": "apiEbiosRmStrategicScenariosDestroy",
    "http": "DELETE",
    "path": "/api/ebios-rm/strategic-scenarios/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_ebios_rm_strategic_scenarios_cascade_info_retrieve",
    "domain": "ebiosRm",
    "method": "apiEbiosRmStrategicScenariosCascadeInfoRetrieve",
    "http": "GET",
    "path": "/api/ebios-rm/strategic-scenarios/{id}/cascade-info/",
    "paginate": "none"
  },
  {
    "operationId": "api_ebios_rm_strategic_scenarios_object_retrieve",
    "domain": "ebiosRm",
    "method": "apiEbiosRmStrategicScenariosObjectRetrieve",
    "http": "GET",
    "path": "/api/ebios-rm/strategic-scenarios/{id}/object/",
    "paginate": "none"
  },
  {
    "operationId": "api_ebios_rm_strategic_scenarios_batch_action_create",
    "domain": "ebiosRm",
    "method": "apiEbiosRmStrategicScenariosBatchActionCreate",
    "http": "POST",
    "path": "/api/ebios-rm/strategic-scenarios/batch-action/",
    "paginate": "none"
  },
  {
    "operationId": "api_ebios_rm_studies_list",
    "domain": "ebiosRm",
    "method": "apiEbiosRmStudiesList",
    "http": "GET",
    "path": "/api/ebios-rm/studies/",
    "paginate": "page"
  },
  {
    "operationId": "api_ebios_rm_studies_create",
    "domain": "ebiosRm",
    "method": "apiEbiosRmStudiesCreate",
    "http": "POST",
    "path": "/api/ebios-rm/studies/",
    "paginate": "none"
  },
  {
    "operationId": "api_ebios_rm_studies_retrieve",
    "domain": "ebiosRm",
    "method": "apiEbiosRmStudiesRetrieve",
    "http": "GET",
    "path": "/api/ebios-rm/studies/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_ebios_rm_studies_update",
    "domain": "ebiosRm",
    "method": "apiEbiosRmStudiesUpdate",
    "http": "PUT",
    "path": "/api/ebios-rm/studies/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_ebios_rm_studies_partial_update",
    "domain": "ebiosRm",
    "method": "apiEbiosRmStudiesPartialUpdate",
    "http": "PATCH",
    "path": "/api/ebios-rm/studies/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_ebios_rm_studies_destroy",
    "domain": "ebiosRm",
    "method": "apiEbiosRmStudiesDestroy",
    "http": "DELETE",
    "path": "/api/ebios-rm/studies/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_ebios_rm_studies_cascade_info_retrieve",
    "domain": "ebiosRm",
    "method": "apiEbiosRmStudiesCascadeInfoRetrieve",
    "http": "GET",
    "path": "/api/ebios-rm/studies/{id}/cascade-info/",
    "paginate": "none"
  },
  {
    "operationId": "api_ebios_rm_studies_ecosystem_chart_data_retrieve",
    "domain": "ebiosRm",
    "method": "apiEbiosRmStudiesEcosystemChartDataRetrieve",
    "http": "GET",
    "path": "/api/ebios-rm/studies/{id}/ecosystem_chart_data/",
    "paginate": "none"
  },
  {
    "operationId": "api_ebios_rm_studies_ecosystem_circular_chart_data_retrieve",
    "domain": "ebiosRm",
    "method": "apiEbiosRmStudiesEcosystemCircularChartDataRetrieve",
    "http": "GET",
    "path": "/api/ebios-rm/studies/{id}/ecosystem_circular_chart_data/",
    "paginate": "none"
  },
  {
    "operationId": "api_ebios_rm_studies_export_xlsx_retrieve",
    "domain": "ebiosRm",
    "method": "apiEbiosRmStudiesExportXlsxRetrieve",
    "http": "GET",
    "path": "/api/ebios-rm/studies/{id}/export-xlsx/",
    "paginate": "none"
  },
  {
    "operationId": "api_ebios_rm_studies_gravity_retrieve",
    "domain": "ebiosRm",
    "method": "apiEbiosRmStudiesGravityRetrieve",
    "http": "GET",
    "path": "/api/ebios-rm/studies/{id}/gravity/",
    "paginate": "none"
  },
  {
    "operationId": "api_ebios_rm_studies_likelihood_retrieve",
    "domain": "ebiosRm",
    "method": "apiEbiosRmStudiesLikelihoodRetrieve",
    "http": "GET",
    "path": "/api/ebios-rm/studies/{id}/likelihood/",
    "paginate": "none"
  },
  {
    "operationId": "api_ebios_rm_studies_object_retrieve",
    "domain": "ebiosRm",
    "method": "apiEbiosRmStudiesObjectRetrieve",
    "http": "GET",
    "path": "/api/ebios-rm/studies/{id}/object/",
    "paginate": "none"
  },
  {
    "operationId": "api_ebios_rm_studies_report_data_retrieve",
    "domain": "ebiosRm",
    "method": "apiEbiosRmStudiesReportDataRetrieve",
    "http": "GET",
    "path": "/api/ebios-rm/studies/{id}/report-data/",
    "paginate": "none"
  },
  {
    "operationId": "api_ebios_rm_studies_risk_matrix_retrieve",
    "domain": "ebiosRm",
    "method": "apiEbiosRmStudiesRiskMatrixRetrieve",
    "http": "GET",
    "path": "/api/ebios-rm/studies/{id}/risk-matrix/",
    "paginate": "none"
  },
  {
    "operationId": "api_ebios_rm_studies_visual_analysis_retrieve",
    "domain": "ebiosRm",
    "method": "apiEbiosRmStudiesVisualAnalysisRetrieve",
    "http": "GET",
    "path": "/api/ebios-rm/studies/{id}/visual_analysis/",
    "paginate": "none"
  },
  {
    "operationId": "api_ebios_rm_studies_workshop_step_partial_update",
    "domain": "ebiosRm",
    "method": "apiEbiosRmStudiesWorkshopStepPartialUpdate",
    "http": "PATCH",
    "path": "/api/ebios-rm/studies/{id}/workshop/{workshop}/step/{step}/",
    "paginate": "none"
  },
  {
    "operationId": "api_ebios_rm_studies_batch_action_create",
    "domain": "ebiosRm",
    "method": "apiEbiosRmStudiesBatchActionCreate",
    "http": "POST",
    "path": "/api/ebios-rm/studies/batch-action/",
    "paginate": "none"
  },
  {
    "operationId": "api_ebios_rm_studies_quotation_method_retrieve",
    "domain": "ebiosRm",
    "method": "apiEbiosRmStudiesQuotationMethodRetrieve",
    "http": "GET",
    "path": "/api/ebios-rm/studies/quotation_method/",
    "paginate": "none"
  },
  {
    "operationId": "api_ebios_rm_studies_status_retrieve",
    "domain": "ebiosRm",
    "method": "apiEbiosRmStudiesStatusRetrieve",
    "http": "GET",
    "path": "/api/ebios-rm/studies/status/",
    "paginate": "none"
  },
  {
    "operationId": "api_document_attachments_retrieve",
    "domain": "evidence",
    "method": "apiDocumentAttachmentsRetrieve",
    "http": "GET",
    "path": "/api/document-attachments/",
    "paginate": "none"
  },
  {
    "operationId": "api_document_attachments_create",
    "domain": "evidence",
    "method": "apiDocumentAttachmentsCreate",
    "http": "POST",
    "path": "/api/document-attachments/",
    "paginate": "none"
  },
  {
    "operationId": "api_document_attachments_retrieve_2",
    "domain": "evidence",
    "method": "apiDocumentAttachmentsRetrieve_2",
    "http": "GET",
    "path": "/api/document-attachments/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_document_attachments_update",
    "domain": "evidence",
    "method": "apiDocumentAttachmentsUpdate",
    "http": "PUT",
    "path": "/api/document-attachments/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_document_attachments_partial_update",
    "domain": "evidence",
    "method": "apiDocumentAttachmentsPartialUpdate",
    "http": "PATCH",
    "path": "/api/document-attachments/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_document_attachments_destroy",
    "domain": "evidence",
    "method": "apiDocumentAttachmentsDestroy",
    "http": "DELETE",
    "path": "/api/document-attachments/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_document_attachments_cascade_info_retrieve",
    "domain": "evidence",
    "method": "apiDocumentAttachmentsCascadeInfoRetrieve",
    "http": "GET",
    "path": "/api/document-attachments/{id}/cascade-info/",
    "paginate": "none"
  },
  {
    "operationId": "api_document_attachments_file_retrieve",
    "domain": "evidence",
    "method": "apiDocumentAttachmentsFileRetrieve",
    "http": "GET",
    "path": "/api/document-attachments/{id}/file/",
    "paginate": "none"
  },
  {
    "operationId": "api_document_attachments_object_retrieve",
    "domain": "evidence",
    "method": "apiDocumentAttachmentsObjectRetrieve",
    "http": "GET",
    "path": "/api/document-attachments/{id}/object/",
    "paginate": "none"
  },
  {
    "operationId": "api_document_attachments_batch_action_create",
    "domain": "evidence",
    "method": "apiDocumentAttachmentsBatchActionCreate",
    "http": "POST",
    "path": "/api/document-attachments/batch-action/",
    "paginate": "none"
  },
  {
    "operationId": "api_document_revisions_list",
    "domain": "evidence",
    "method": "apiDocumentRevisionsList",
    "http": "GET",
    "path": "/api/document-revisions/",
    "paginate": "page"
  },
  {
    "operationId": "api_document_revisions_create",
    "domain": "evidence",
    "method": "apiDocumentRevisionsCreate",
    "http": "POST",
    "path": "/api/document-revisions/",
    "paginate": "none"
  },
  {
    "operationId": "api_document_revisions_retrieve",
    "domain": "evidence",
    "method": "apiDocumentRevisionsRetrieve",
    "http": "GET",
    "path": "/api/document-revisions/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_document_revisions_update",
    "domain": "evidence",
    "method": "apiDocumentRevisionsUpdate",
    "http": "PUT",
    "path": "/api/document-revisions/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_document_revisions_partial_update",
    "domain": "evidence",
    "method": "apiDocumentRevisionsPartialUpdate",
    "http": "PATCH",
    "path": "/api/document-revisions/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_document_revisions_destroy",
    "domain": "evidence",
    "method": "apiDocumentRevisionsDestroy",
    "http": "DELETE",
    "path": "/api/document-revisions/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_document_revisions_approve_create",
    "domain": "evidence",
    "method": "apiDocumentRevisionsApproveCreate",
    "http": "POST",
    "path": "/api/document-revisions/{id}/approve/",
    "paginate": "none"
  },
  {
    "operationId": "api_document_revisions_cascade_info_retrieve",
    "domain": "evidence",
    "method": "apiDocumentRevisionsCascadeInfoRetrieve",
    "http": "GET",
    "path": "/api/document-revisions/{id}/cascade-info/",
    "paginate": "none"
  },
  {
    "operationId": "api_document_revisions_diff_retrieve",
    "domain": "evidence",
    "method": "apiDocumentRevisionsDiffRetrieve",
    "http": "GET",
    "path": "/api/document-revisions/{id}/diff/{other_id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_document_revisions_edit_diff_retrieve",
    "domain": "evidence",
    "method": "apiDocumentRevisionsEditDiffRetrieve",
    "http": "GET",
    "path": "/api/document-revisions/{id}/edit-diff/{edit_a_id}/{edit_b_id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_document_revisions_edit_history_retrieve",
    "domain": "evidence",
    "method": "apiDocumentRevisionsEditHistoryRetrieve",
    "http": "GET",
    "path": "/api/document-revisions/{id}/edit-history/",
    "paginate": "none"
  },
  {
    "operationId": "api_document_revisions_edit_snapshot_retrieve",
    "domain": "evidence",
    "method": "apiDocumentRevisionsEditSnapshotRetrieve",
    "http": "GET",
    "path": "/api/document-revisions/{id}/edit-snapshot/{edit_id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_document_revisions_editing_status_retrieve",
    "domain": "evidence",
    "method": "apiDocumentRevisionsEditingStatusRetrieve",
    "http": "GET",
    "path": "/api/document-revisions/{id}/editing-status/",
    "paginate": "none"
  },
  {
    "operationId": "api_document_revisions_export_pdf_retrieve",
    "domain": "evidence",
    "method": "apiDocumentRevisionsExportPdfRetrieve",
    "http": "GET",
    "path": "/api/document-revisions/{id}/export-pdf/",
    "paginate": "none"
  },
  {
    "operationId": "api_document_revisions_object_retrieve",
    "domain": "evidence",
    "method": "apiDocumentRevisionsObjectRetrieve",
    "http": "GET",
    "path": "/api/document-revisions/{id}/object/",
    "paginate": "none"
  },
  {
    "operationId": "api_document_revisions_publish_create",
    "domain": "evidence",
    "method": "apiDocumentRevisionsPublishCreate",
    "http": "POST",
    "path": "/api/document-revisions/{id}/publish/",
    "paginate": "none"
  },
  {
    "operationId": "api_document_revisions_request_changes_create",
    "domain": "evidence",
    "method": "apiDocumentRevisionsRequestChangesCreate",
    "http": "POST",
    "path": "/api/document-revisions/{id}/request-changes/",
    "paginate": "none"
  },
  {
    "operationId": "api_document_revisions_start_editing_create",
    "domain": "evidence",
    "method": "apiDocumentRevisionsStartEditingCreate",
    "http": "POST",
    "path": "/api/document-revisions/{id}/start-editing/",
    "paginate": "none"
  },
  {
    "operationId": "api_document_revisions_stop_editing_create",
    "domain": "evidence",
    "method": "apiDocumentRevisionsStopEditingCreate",
    "http": "POST",
    "path": "/api/document-revisions/{id}/stop-editing/",
    "paginate": "none"
  },
  {
    "operationId": "api_document_revisions_submit_for_review_create",
    "domain": "evidence",
    "method": "apiDocumentRevisionsSubmitForReviewCreate",
    "http": "POST",
    "path": "/api/document-revisions/{id}/submit-for-review/",
    "paginate": "none"
  },
  {
    "operationId": "api_document_revisions_take_over_editing_create",
    "domain": "evidence",
    "method": "apiDocumentRevisionsTakeOverEditingCreate",
    "http": "POST",
    "path": "/api/document-revisions/{id}/take-over-editing/",
    "paginate": "none"
  },
  {
    "operationId": "api_document_revisions_batch_action_create",
    "domain": "evidence",
    "method": "apiDocumentRevisionsBatchActionCreate",
    "http": "POST",
    "path": "/api/document-revisions/batch-action/",
    "paginate": "none"
  },
  {
    "operationId": "api_document_revisions_status_retrieve",
    "domain": "evidence",
    "method": "apiDocumentRevisionsStatusRetrieve",
    "http": "GET",
    "path": "/api/document-revisions/status/",
    "paginate": "none"
  },
  {
    "operationId": "api_evidence_revisions_list",
    "domain": "evidence",
    "method": "apiEvidenceRevisionsList",
    "http": "GET",
    "path": "/api/evidence-revisions/",
    "paginate": "page"
  },
  {
    "operationId": "api_evidence_revisions_create",
    "domain": "evidence",
    "method": "apiEvidenceRevisionsCreate",
    "http": "POST",
    "path": "/api/evidence-revisions/",
    "paginate": "none"
  },
  {
    "operationId": "api_evidence_revisions_retrieve",
    "domain": "evidence",
    "method": "apiEvidenceRevisionsRetrieve",
    "http": "GET",
    "path": "/api/evidence-revisions/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_evidence_revisions_update",
    "domain": "evidence",
    "method": "apiEvidenceRevisionsUpdate",
    "http": "PUT",
    "path": "/api/evidence-revisions/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_evidence_revisions_partial_update",
    "domain": "evidence",
    "method": "apiEvidenceRevisionsPartialUpdate",
    "http": "PATCH",
    "path": "/api/evidence-revisions/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_evidence_revisions_destroy",
    "domain": "evidence",
    "method": "apiEvidenceRevisionsDestroy",
    "http": "DELETE",
    "path": "/api/evidence-revisions/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_evidence_revisions_attachment_retrieve",
    "domain": "evidence",
    "method": "apiEvidenceRevisionsAttachmentRetrieve",
    "http": "GET",
    "path": "/api/evidence-revisions/{id}/attachment/",
    "paginate": "none"
  },
  {
    "operationId": "api_evidence_revisions_cascade_info_retrieve",
    "domain": "evidence",
    "method": "apiEvidenceRevisionsCascadeInfoRetrieve",
    "http": "GET",
    "path": "/api/evidence-revisions/{id}/cascade-info/",
    "paginate": "none"
  },
  {
    "operationId": "api_evidence_revisions_delete_attachment_create",
    "domain": "evidence",
    "method": "apiEvidenceRevisionsDeleteAttachmentCreate",
    "http": "POST",
    "path": "/api/evidence-revisions/{id}/delete_attachment/",
    "paginate": "none"
  },
  {
    "operationId": "api_evidence_revisions_object_retrieve",
    "domain": "evidence",
    "method": "apiEvidenceRevisionsObjectRetrieve",
    "http": "GET",
    "path": "/api/evidence-revisions/{id}/object/",
    "paginate": "none"
  },
  {
    "operationId": "api_evidence_revisions_upload_create",
    "domain": "evidence",
    "method": "apiEvidenceRevisionsUploadCreate",
    "http": "POST",
    "path": "/api/evidence-revisions/{id}/upload/",
    "paginate": "none"
  },
  {
    "operationId": "api_evidence_revisions_batch_action_create",
    "domain": "evidence",
    "method": "apiEvidenceRevisionsBatchActionCreate",
    "http": "POST",
    "path": "/api/evidence-revisions/batch-action/",
    "paginate": "none"
  },
  {
    "operationId": "api_evidences_list",
    "domain": "evidence",
    "method": "apiEvidencesList",
    "http": "GET",
    "path": "/api/evidences/",
    "paginate": "page"
  },
  {
    "operationId": "api_evidences_create",
    "domain": "evidence",
    "method": "apiEvidencesCreate",
    "http": "POST",
    "path": "/api/evidences/",
    "paginate": "none"
  },
  {
    "operationId": "api_evidences_retrieve",
    "domain": "evidence",
    "method": "apiEvidencesRetrieve",
    "http": "GET",
    "path": "/api/evidences/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_evidences_update",
    "domain": "evidence",
    "method": "apiEvidencesUpdate",
    "http": "PUT",
    "path": "/api/evidences/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_evidences_partial_update",
    "domain": "evidence",
    "method": "apiEvidencesPartialUpdate",
    "http": "PATCH",
    "path": "/api/evidences/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_evidences_destroy",
    "domain": "evidence",
    "method": "apiEvidencesDestroy",
    "http": "DELETE",
    "path": "/api/evidences/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_evidences_attachment_retrieve",
    "domain": "evidence",
    "method": "apiEvidencesAttachmentRetrieve",
    "http": "GET",
    "path": "/api/evidences/{id}/attachment/",
    "paginate": "none"
  },
  {
    "operationId": "api_evidences_cascade_info_retrieve",
    "domain": "evidence",
    "method": "apiEvidencesCascadeInfoRetrieve",
    "http": "GET",
    "path": "/api/evidences/{id}/cascade-info/",
    "paginate": "none"
  },
  {
    "operationId": "api_evidences_object_retrieve",
    "domain": "evidence",
    "method": "apiEvidencesObjectRetrieve",
    "http": "GET",
    "path": "/api/evidences/{id}/object/",
    "paginate": "none"
  },
  {
    "operationId": "api_evidences_upload_create",
    "domain": "evidence",
    "method": "apiEvidencesUploadCreate",
    "http": "POST",
    "path": "/api/evidences/{id}/upload/",
    "paginate": "none"
  },
  {
    "operationId": "api_evidences_batch_action_create",
    "domain": "evidence",
    "method": "apiEvidencesBatchActionCreate",
    "http": "POST",
    "path": "/api/evidences/batch-action/",
    "paginate": "none"
  },
  {
    "operationId": "api_evidences_batch_upload_create",
    "domain": "evidence",
    "method": "apiEvidencesBatchUploadCreate",
    "http": "POST",
    "path": "/api/evidences/batch-upload/",
    "paginate": "none"
  },
  {
    "operationId": "api_evidences_owner_retrieve",
    "domain": "evidence",
    "method": "apiEvidencesOwnerRetrieve",
    "http": "GET",
    "path": "/api/evidences/owner/",
    "paginate": "none"
  },
  {
    "operationId": "api_evidences_status_retrieve",
    "domain": "evidence",
    "method": "apiEvidencesStatusRetrieve",
    "http": "GET",
    "path": "/api/evidences/status/",
    "paginate": "none"
  },
  {
    "operationId": "api_managed_documents_list",
    "domain": "evidence",
    "method": "apiManagedDocumentsList",
    "http": "GET",
    "path": "/api/managed-documents/",
    "paginate": "page"
  },
  {
    "operationId": "api_managed_documents_create",
    "domain": "evidence",
    "method": "apiManagedDocumentsCreate",
    "http": "POST",
    "path": "/api/managed-documents/",
    "paginate": "none"
  },
  {
    "operationId": "api_managed_documents_retrieve",
    "domain": "evidence",
    "method": "apiManagedDocumentsRetrieve",
    "http": "GET",
    "path": "/api/managed-documents/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_managed_documents_update",
    "domain": "evidence",
    "method": "apiManagedDocumentsUpdate",
    "http": "PUT",
    "path": "/api/managed-documents/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_managed_documents_partial_update",
    "domain": "evidence",
    "method": "apiManagedDocumentsPartialUpdate",
    "http": "PATCH",
    "path": "/api/managed-documents/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_managed_documents_destroy",
    "domain": "evidence",
    "method": "apiManagedDocumentsDestroy",
    "http": "DELETE",
    "path": "/api/managed-documents/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_managed_documents_cascade_info_retrieve",
    "domain": "evidence",
    "method": "apiManagedDocumentsCascadeInfoRetrieve",
    "http": "GET",
    "path": "/api/managed-documents/{id}/cascade-info/",
    "paginate": "none"
  },
  {
    "operationId": "api_managed_documents_create_new_draft_create",
    "domain": "evidence",
    "method": "apiManagedDocumentsCreateNewDraftCreate",
    "http": "POST",
    "path": "/api/managed-documents/{id}/create-new-draft/",
    "paginate": "none"
  },
  {
    "operationId": "api_managed_documents_object_retrieve",
    "domain": "evidence",
    "method": "apiManagedDocumentsObjectRetrieve",
    "http": "GET",
    "path": "/api/managed-documents/{id}/object/",
    "paginate": "none"
  },
  {
    "operationId": "api_managed_documents_upload_image_create",
    "domain": "evidence",
    "method": "apiManagedDocumentsUploadImageCreate",
    "http": "POST",
    "path": "/api/managed-documents/{id}/upload-image/",
    "paginate": "none"
  },
  {
    "operationId": "api_managed_documents_batch_action_create",
    "domain": "evidence",
    "method": "apiManagedDocumentsBatchActionCreate",
    "http": "POST",
    "path": "/api/managed-documents/batch-action/",
    "paginate": "none"
  },
  {
    "operationId": "api_managed_documents_templates_retrieve",
    "domain": "evidence",
    "method": "apiManagedDocumentsTemplatesRetrieve",
    "http": "GET",
    "path": "/api/managed-documents/templates/",
    "paginate": "none"
  },
  {
    "operationId": "api_filtering_labels_list",
    "domain": "frameworksLibraries",
    "method": "apiFilteringLabelsList",
    "http": "GET",
    "path": "/api/filtering-labels/",
    "paginate": "page"
  },
  {
    "operationId": "api_filtering_labels_create",
    "domain": "frameworksLibraries",
    "method": "apiFilteringLabelsCreate",
    "http": "POST",
    "path": "/api/filtering-labels/",
    "paginate": "none"
  },
  {
    "operationId": "api_filtering_labels_retrieve",
    "domain": "frameworksLibraries",
    "method": "apiFilteringLabelsRetrieve",
    "http": "GET",
    "path": "/api/filtering-labels/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_filtering_labels_update",
    "domain": "frameworksLibraries",
    "method": "apiFilteringLabelsUpdate",
    "http": "PUT",
    "path": "/api/filtering-labels/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_filtering_labels_partial_update",
    "domain": "frameworksLibraries",
    "method": "apiFilteringLabelsPartialUpdate",
    "http": "PATCH",
    "path": "/api/filtering-labels/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_filtering_labels_destroy",
    "domain": "frameworksLibraries",
    "method": "apiFilteringLabelsDestroy",
    "http": "DELETE",
    "path": "/api/filtering-labels/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_filtering_labels_cascade_info_retrieve",
    "domain": "frameworksLibraries",
    "method": "apiFilteringLabelsCascadeInfoRetrieve",
    "http": "GET",
    "path": "/api/filtering-labels/{id}/cascade-info/",
    "paginate": "none"
  },
  {
    "operationId": "api_filtering_labels_object_retrieve",
    "domain": "frameworksLibraries",
    "method": "apiFilteringLabelsObjectRetrieve",
    "http": "GET",
    "path": "/api/filtering-labels/{id}/object/",
    "paginate": "none"
  },
  {
    "operationId": "api_filtering_labels_batch_action_create",
    "domain": "frameworksLibraries",
    "method": "apiFilteringLabelsBatchActionCreate",
    "http": "POST",
    "path": "/api/filtering-labels/batch-action/",
    "paginate": "none"
  },
  {
    "operationId": "api_frameworks_list",
    "domain": "frameworksLibraries",
    "method": "apiFrameworksList",
    "http": "GET",
    "path": "/api/frameworks/",
    "paginate": "page"
  },
  {
    "operationId": "api_frameworks_create",
    "domain": "frameworksLibraries",
    "method": "apiFrameworksCreate",
    "http": "POST",
    "path": "/api/frameworks/",
    "paginate": "none"
  },
  {
    "operationId": "api_frameworks_retrieve",
    "domain": "frameworksLibraries",
    "method": "apiFrameworksRetrieve",
    "http": "GET",
    "path": "/api/frameworks/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_frameworks_update",
    "domain": "frameworksLibraries",
    "method": "apiFrameworksUpdate",
    "http": "PUT",
    "path": "/api/frameworks/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_frameworks_partial_update",
    "domain": "frameworksLibraries",
    "method": "apiFrameworksPartialUpdate",
    "http": "PATCH",
    "path": "/api/frameworks/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_frameworks_destroy",
    "domain": "frameworksLibraries",
    "method": "apiFrameworksDestroy",
    "http": "DELETE",
    "path": "/api/frameworks/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_frameworks_cascade_info_retrieve",
    "domain": "frameworksLibraries",
    "method": "apiFrameworksCascadeInfoRetrieve",
    "http": "GET",
    "path": "/api/frameworks/{id}/cascade-info/",
    "paginate": "none"
  },
  {
    "operationId": "api_frameworks_discard_draft_create",
    "domain": "frameworksLibraries",
    "method": "apiFrameworksDiscardDraftCreate",
    "http": "POST",
    "path": "/api/frameworks/{id}/discard-draft/",
    "paginate": "none"
  },
  {
    "operationId": "api_frameworks_duplicate_create",
    "domain": "frameworksLibraries",
    "method": "apiFrameworksDuplicateCreate",
    "http": "POST",
    "path": "/api/frameworks/{id}/duplicate/",
    "paginate": "none"
  },
  {
    "operationId": "api_frameworks_excel_template_retrieve",
    "domain": "frameworksLibraries",
    "method": "apiFrameworksExcelTemplateRetrieve",
    "http": "GET",
    "path": "/api/frameworks/{id}/excel_template/",
    "paginate": "none"
  },
  {
    "operationId": "api_frameworks_export_yaml_retrieve",
    "domain": "frameworksLibraries",
    "method": "apiFrameworksExportYamlRetrieve",
    "http": "GET",
    "path": "/api/frameworks/{id}/export-yaml/",
    "paginate": "none"
  },
  {
    "operationId": "api_frameworks_mapping_stats_retrieve",
    "domain": "frameworksLibraries",
    "method": "apiFrameworksMappingStatsRetrieve",
    "http": "GET",
    "path": "/api/frameworks/{id}/mapping_stats/",
    "paginate": "none"
  },
  {
    "operationId": "api_frameworks_mappings_retrieve",
    "domain": "frameworksLibraries",
    "method": "apiFrameworksMappingsRetrieve",
    "http": "GET",
    "path": "/api/frameworks/{id}/mappings/",
    "paginate": "none"
  },
  {
    "operationId": "api_frameworks_object_retrieve",
    "domain": "frameworksLibraries",
    "method": "apiFrameworksObjectRetrieve",
    "http": "GET",
    "path": "/api/frameworks/{id}/object/",
    "paginate": "none"
  },
  {
    "operationId": "api_frameworks_publish_draft_create",
    "domain": "frameworksLibraries",
    "method": "apiFrameworksPublishDraftCreate",
    "http": "POST",
    "path": "/api/frameworks/{id}/publish-draft/",
    "paginate": "none"
  },
  {
    "operationId": "api_frameworks_publish_draft_preview_create",
    "domain": "frameworksLibraries",
    "method": "apiFrameworksPublishDraftPreviewCreate",
    "http": "POST",
    "path": "/api/frameworks/{id}/publish-draft-preview/",
    "paginate": "none"
  },
  {
    "operationId": "api_frameworks_report_retrieve",
    "domain": "frameworksLibraries",
    "method": "apiFrameworksReportRetrieve",
    "http": "GET",
    "path": "/api/frameworks/{id}/report/",
    "paginate": "none"
  },
  {
    "operationId": "api_frameworks_save_draft_partial_update",
    "domain": "frameworksLibraries",
    "method": "apiFrameworksSaveDraftPartialUpdate",
    "http": "PATCH",
    "path": "/api/frameworks/{id}/save-draft/",
    "paginate": "none"
  },
  {
    "operationId": "api_frameworks_serve_image_retrieve",
    "domain": "frameworksLibraries",
    "method": "apiFrameworksServeImageRetrieve",
    "http": "GET",
    "path": "/api/frameworks/{id}/serve-image/{attachment_id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_frameworks_start_editing_create",
    "domain": "frameworksLibraries",
    "method": "apiFrameworksStartEditingCreate",
    "http": "POST",
    "path": "/api/frameworks/{id}/start-editing/",
    "paginate": "none"
  },
  {
    "operationId": "api_frameworks_tree_retrieve",
    "domain": "frameworksLibraries",
    "method": "apiFrameworksTreeRetrieve",
    "http": "GET",
    "path": "/api/frameworks/{id}/tree/",
    "paginate": "none"
  },
  {
    "operationId": "api_frameworks_upload_image_create",
    "domain": "frameworksLibraries",
    "method": "apiFrameworksUploadImageCreate",
    "http": "POST",
    "path": "/api/frameworks/{id}/upload-image/",
    "paginate": "none"
  },
  {
    "operationId": "api_frameworks_batch_action_create",
    "domain": "frameworksLibraries",
    "method": "apiFrameworksBatchActionCreate",
    "http": "POST",
    "path": "/api/frameworks/batch-action/",
    "paginate": "none"
  },
  {
    "operationId": "api_frameworks_names_retrieve",
    "domain": "frameworksLibraries",
    "method": "apiFrameworksNamesRetrieve",
    "http": "GET",
    "path": "/api/frameworks/names/",
    "paginate": "none"
  },
  {
    "operationId": "api_frameworks_provider_retrieve",
    "domain": "frameworksLibraries",
    "method": "apiFrameworksProviderRetrieve",
    "http": "GET",
    "path": "/api/frameworks/provider/",
    "paginate": "none"
  },
  {
    "operationId": "api_frameworks_used_retrieve",
    "domain": "frameworksLibraries",
    "method": "apiFrameworksUsedRetrieve",
    "http": "GET",
    "path": "/api/frameworks/used/",
    "paginate": "none"
  },
  {
    "operationId": "api_library_filtering_labels_list",
    "domain": "frameworksLibraries",
    "method": "apiLibraryFilteringLabelsList",
    "http": "GET",
    "path": "/api/library-filtering-labels/",
    "paginate": "page"
  },
  {
    "operationId": "api_library_filtering_labels_create",
    "domain": "frameworksLibraries",
    "method": "apiLibraryFilteringLabelsCreate",
    "http": "POST",
    "path": "/api/library-filtering-labels/",
    "paginate": "none"
  },
  {
    "operationId": "api_library_filtering_labels_retrieve",
    "domain": "frameworksLibraries",
    "method": "apiLibraryFilteringLabelsRetrieve",
    "http": "GET",
    "path": "/api/library-filtering-labels/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_library_filtering_labels_update",
    "domain": "frameworksLibraries",
    "method": "apiLibraryFilteringLabelsUpdate",
    "http": "PUT",
    "path": "/api/library-filtering-labels/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_library_filtering_labels_partial_update",
    "domain": "frameworksLibraries",
    "method": "apiLibraryFilteringLabelsPartialUpdate",
    "http": "PATCH",
    "path": "/api/library-filtering-labels/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_library_filtering_labels_destroy",
    "domain": "frameworksLibraries",
    "method": "apiLibraryFilteringLabelsDestroy",
    "http": "DELETE",
    "path": "/api/library-filtering-labels/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_library_filtering_labels_cascade_info_retrieve",
    "domain": "frameworksLibraries",
    "method": "apiLibraryFilteringLabelsCascadeInfoRetrieve",
    "http": "GET",
    "path": "/api/library-filtering-labels/{id}/cascade-info/",
    "paginate": "none"
  },
  {
    "operationId": "api_library_filtering_labels_object_retrieve",
    "domain": "frameworksLibraries",
    "method": "apiLibraryFilteringLabelsObjectRetrieve",
    "http": "GET",
    "path": "/api/library-filtering-labels/{id}/object/",
    "paginate": "none"
  },
  {
    "operationId": "api_library_filtering_labels_batch_action_create",
    "domain": "frameworksLibraries",
    "method": "apiLibraryFilteringLabelsBatchActionCreate",
    "http": "POST",
    "path": "/api/library-filtering-labels/batch-action/",
    "paginate": "none"
  },
  {
    "operationId": "api_loaded_libraries_list",
    "domain": "frameworksLibraries",
    "method": "apiLoadedLibrariesList",
    "http": "GET",
    "path": "/api/loaded-libraries/",
    "paginate": "page"
  },
  {
    "operationId": "api_loaded_libraries_create",
    "domain": "frameworksLibraries",
    "method": "apiLoadedLibrariesCreate",
    "http": "POST",
    "path": "/api/loaded-libraries/",
    "paginate": "none"
  },
  {
    "operationId": "api_loaded_libraries_retrieve",
    "domain": "frameworksLibraries",
    "method": "apiLoadedLibrariesRetrieve",
    "http": "GET",
    "path": "/api/loaded-libraries/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_loaded_libraries_update",
    "domain": "frameworksLibraries",
    "method": "apiLoadedLibrariesUpdate",
    "http": "PUT",
    "path": "/api/loaded-libraries/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_loaded_libraries_partial_update",
    "domain": "frameworksLibraries",
    "method": "apiLoadedLibrariesPartialUpdate",
    "http": "PATCH",
    "path": "/api/loaded-libraries/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_loaded_libraries_destroy",
    "domain": "frameworksLibraries",
    "method": "apiLoadedLibrariesDestroy",
    "http": "DELETE",
    "path": "/api/loaded-libraries/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_loaded_libraries_cascade_info_retrieve",
    "domain": "frameworksLibraries",
    "method": "apiLoadedLibrariesCascadeInfoRetrieve",
    "http": "GET",
    "path": "/api/loaded-libraries/{id}/cascade-info/",
    "paginate": "none"
  },
  {
    "operationId": "api_loaded_libraries_content_retrieve",
    "domain": "frameworksLibraries",
    "method": "apiLoadedLibrariesContentRetrieve",
    "http": "GET",
    "path": "/api/loaded-libraries/{id}/content/",
    "paginate": "none"
  },
  {
    "operationId": "api_loaded_libraries_object_retrieve",
    "domain": "frameworksLibraries",
    "method": "apiLoadedLibrariesObjectRetrieve",
    "http": "GET",
    "path": "/api/loaded-libraries/{id}/object/",
    "paginate": "none"
  },
  {
    "operationId": "api_loaded_libraries_tree_retrieve",
    "domain": "frameworksLibraries",
    "method": "apiLoadedLibrariesTreeRetrieve",
    "http": "GET",
    "path": "/api/loaded-libraries/{id}/tree/",
    "paginate": "none"
  },
  {
    "operationId": "api_loaded_libraries_update_retrieve",
    "domain": "frameworksLibraries",
    "method": "apiLoadedLibrariesUpdateRetrieve",
    "http": "GET",
    "path": "/api/loaded-libraries/{id}/update/",
    "paginate": "none"
  },
  {
    "operationId": "api_loaded_libraries_available_updates_retrieve",
    "domain": "frameworksLibraries",
    "method": "apiLoadedLibrariesAvailableUpdatesRetrieve",
    "http": "GET",
    "path": "/api/loaded-libraries/available-updates/",
    "paginate": "none"
  },
  {
    "operationId": "api_loaded_libraries_batch_action_create",
    "domain": "frameworksLibraries",
    "method": "apiLoadedLibrariesBatchActionCreate",
    "http": "POST",
    "path": "/api/loaded-libraries/batch-action/",
    "paginate": "none"
  },
  {
    "operationId": "api_presets_list",
    "domain": "frameworksLibraries",
    "method": "apiPresetsList",
    "http": "GET",
    "path": "/api/presets/",
    "paginate": "page"
  },
  {
    "operationId": "api_presets_create",
    "domain": "frameworksLibraries",
    "method": "apiPresetsCreate",
    "http": "POST",
    "path": "/api/presets/",
    "paginate": "none"
  },
  {
    "operationId": "api_presets_retrieve",
    "domain": "frameworksLibraries",
    "method": "apiPresetsRetrieve",
    "http": "GET",
    "path": "/api/presets/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_presets_update",
    "domain": "frameworksLibraries",
    "method": "apiPresetsUpdate",
    "http": "PUT",
    "path": "/api/presets/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_presets_partial_update",
    "domain": "frameworksLibraries",
    "method": "apiPresetsPartialUpdate",
    "http": "PATCH",
    "path": "/api/presets/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_presets_destroy",
    "domain": "frameworksLibraries",
    "method": "apiPresetsDestroy",
    "http": "DELETE",
    "path": "/api/presets/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_presets_apply_create",
    "domain": "frameworksLibraries",
    "method": "apiPresetsApplyCreate",
    "http": "POST",
    "path": "/api/presets/{id}/apply/",
    "paginate": "none"
  },
  {
    "operationId": "api_presets_cascade_info_retrieve",
    "domain": "frameworksLibraries",
    "method": "apiPresetsCascadeInfoRetrieve",
    "http": "GET",
    "path": "/api/presets/{id}/cascade-info/",
    "paginate": "none"
  },
  {
    "operationId": "api_presets_discard_draft_create",
    "domain": "frameworksLibraries",
    "method": "apiPresetsDiscardDraftCreate",
    "http": "POST",
    "path": "/api/presets/{id}/discard-draft/",
    "paginate": "none"
  },
  {
    "operationId": "api_presets_duplicate_create",
    "domain": "frameworksLibraries",
    "method": "apiPresetsDuplicateCreate",
    "http": "POST",
    "path": "/api/presets/{id}/duplicate/",
    "paginate": "none"
  },
  {
    "operationId": "api_presets_object_retrieve",
    "domain": "frameworksLibraries",
    "method": "apiPresetsObjectRetrieve",
    "http": "GET",
    "path": "/api/presets/{id}/object/",
    "paginate": "none"
  },
  {
    "operationId": "api_presets_publish_draft_create",
    "domain": "frameworksLibraries",
    "method": "apiPresetsPublishDraftCreate",
    "http": "POST",
    "path": "/api/presets/{id}/publish-draft/",
    "paginate": "none"
  },
  {
    "operationId": "api_presets_publish_draft_preview_create",
    "domain": "frameworksLibraries",
    "method": "apiPresetsPublishDraftPreviewCreate",
    "http": "POST",
    "path": "/api/presets/{id}/publish-draft-preview/",
    "paginate": "none"
  },
  {
    "operationId": "api_presets_save_draft_partial_update",
    "domain": "frameworksLibraries",
    "method": "apiPresetsSaveDraftPartialUpdate",
    "http": "PATCH",
    "path": "/api/presets/{id}/save-draft/",
    "paginate": "none"
  },
  {
    "operationId": "api_presets_start_editing_create",
    "domain": "frameworksLibraries",
    "method": "apiPresetsStartEditingCreate",
    "http": "POST",
    "path": "/api/presets/{id}/start-editing/",
    "paginate": "none"
  },
  {
    "operationId": "api_presets_batch_action_create",
    "domain": "frameworksLibraries",
    "method": "apiPresetsBatchActionCreate",
    "http": "POST",
    "path": "/api/presets/batch-action/",
    "paginate": "none"
  },
  {
    "operationId": "api_presets_create_blank_create",
    "domain": "frameworksLibraries",
    "method": "apiPresetsCreateBlankCreate",
    "http": "POST",
    "path": "/api/presets/create-blank/",
    "paginate": "none"
  },
  {
    "operationId": "api_stored_libraries_list",
    "domain": "frameworksLibraries",
    "method": "apiStoredLibrariesList",
    "http": "GET",
    "path": "/api/stored-libraries/",
    "paginate": "page"
  },
  {
    "operationId": "api_stored_libraries_create",
    "domain": "frameworksLibraries",
    "method": "apiStoredLibrariesCreate",
    "http": "POST",
    "path": "/api/stored-libraries/",
    "paginate": "none"
  },
  {
    "operationId": "api_stored_libraries_retrieve",
    "domain": "frameworksLibraries",
    "method": "apiStoredLibrariesRetrieve",
    "http": "GET",
    "path": "/api/stored-libraries/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_stored_libraries_update",
    "domain": "frameworksLibraries",
    "method": "apiStoredLibrariesUpdate",
    "http": "PUT",
    "path": "/api/stored-libraries/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_stored_libraries_partial_update",
    "domain": "frameworksLibraries",
    "method": "apiStoredLibrariesPartialUpdate",
    "http": "PATCH",
    "path": "/api/stored-libraries/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_stored_libraries_destroy",
    "domain": "frameworksLibraries",
    "method": "apiStoredLibrariesDestroy",
    "http": "DELETE",
    "path": "/api/stored-libraries/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_stored_libraries_cascade_info_retrieve",
    "domain": "frameworksLibraries",
    "method": "apiStoredLibrariesCascadeInfoRetrieve",
    "http": "GET",
    "path": "/api/stored-libraries/{id}/cascade-info/",
    "paginate": "none"
  },
  {
    "operationId": "api_stored_libraries_content_retrieve",
    "domain": "frameworksLibraries",
    "method": "apiStoredLibrariesContentRetrieve",
    "http": "GET",
    "path": "/api/stored-libraries/{id}/content/",
    "paginate": "none"
  },
  {
    "operationId": "api_stored_libraries_import_create",
    "domain": "frameworksLibraries",
    "method": "apiStoredLibrariesImportCreate",
    "http": "POST",
    "path": "/api/stored-libraries/{id}/import/",
    "paginate": "none"
  },
  {
    "operationId": "api_stored_libraries_object_retrieve",
    "domain": "frameworksLibraries",
    "method": "apiStoredLibrariesObjectRetrieve",
    "http": "GET",
    "path": "/api/stored-libraries/{id}/object/",
    "paginate": "none"
  },
  {
    "operationId": "api_stored_libraries_tree_retrieve",
    "domain": "frameworksLibraries",
    "method": "apiStoredLibrariesTreeRetrieve",
    "http": "GET",
    "path": "/api/stored-libraries/{id}/tree/",
    "paginate": "none"
  },
  {
    "operationId": "api_stored_libraries_unload_create",
    "domain": "frameworksLibraries",
    "method": "apiStoredLibrariesUnloadCreate",
    "http": "POST",
    "path": "/api/stored-libraries/{id}/unload/",
    "paginate": "none"
  },
  {
    "operationId": "api_stored_libraries_batch_action_create",
    "domain": "frameworksLibraries",
    "method": "apiStoredLibrariesBatchActionCreate",
    "http": "POST",
    "path": "/api/stored-libraries/batch-action/",
    "paginate": "none"
  },
  {
    "operationId": "api_stored_libraries_locale_retrieve",
    "domain": "frameworksLibraries",
    "method": "apiStoredLibrariesLocaleRetrieve",
    "http": "GET",
    "path": "/api/stored-libraries/locale/",
    "paginate": "none"
  },
  {
    "operationId": "api_stored_libraries_object_type_retrieve",
    "domain": "frameworksLibraries",
    "method": "apiStoredLibrariesObjectTypeRetrieve",
    "http": "GET",
    "path": "/api/stored-libraries/object_type/",
    "paginate": "none"
  },
  {
    "operationId": "api_stored_libraries_provider_retrieve",
    "domain": "frameworksLibraries",
    "method": "apiStoredLibrariesProviderRetrieve",
    "http": "GET",
    "path": "/api/stored-libraries/provider/",
    "paginate": "none"
  },
  {
    "operationId": "api_stored_libraries_upload_create",
    "domain": "frameworksLibraries",
    "method": "apiStoredLibrariesUploadCreate",
    "http": "POST",
    "path": "/api/stored-libraries/upload/",
    "paginate": "none"
  },
  {
    "operationId": "api_terminologies_list",
    "domain": "frameworksLibraries",
    "method": "apiTerminologiesList",
    "http": "GET",
    "path": "/api/terminologies/",
    "paginate": "page"
  },
  {
    "operationId": "api_terminologies_create",
    "domain": "frameworksLibraries",
    "method": "apiTerminologiesCreate",
    "http": "POST",
    "path": "/api/terminologies/",
    "paginate": "none"
  },
  {
    "operationId": "api_terminologies_retrieve",
    "domain": "frameworksLibraries",
    "method": "apiTerminologiesRetrieve",
    "http": "GET",
    "path": "/api/terminologies/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_terminologies_update",
    "domain": "frameworksLibraries",
    "method": "apiTerminologiesUpdate",
    "http": "PUT",
    "path": "/api/terminologies/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_terminologies_partial_update",
    "domain": "frameworksLibraries",
    "method": "apiTerminologiesPartialUpdate",
    "http": "PATCH",
    "path": "/api/terminologies/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_terminologies_destroy",
    "domain": "frameworksLibraries",
    "method": "apiTerminologiesDestroy",
    "http": "DELETE",
    "path": "/api/terminologies/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_terminologies_cascade_info_retrieve",
    "domain": "frameworksLibraries",
    "method": "apiTerminologiesCascadeInfoRetrieve",
    "http": "GET",
    "path": "/api/terminologies/{id}/cascade-info/",
    "paginate": "none"
  },
  {
    "operationId": "api_terminologies_object_retrieve",
    "domain": "frameworksLibraries",
    "method": "apiTerminologiesObjectRetrieve",
    "http": "GET",
    "path": "/api/terminologies/{id}/object/",
    "paginate": "none"
  },
  {
    "operationId": "api_terminologies_batch_action_create",
    "domain": "frameworksLibraries",
    "method": "apiTerminologiesBatchActionCreate",
    "http": "POST",
    "path": "/api/terminologies/batch-action/",
    "paginate": "none"
  },
  {
    "operationId": "api_terminologies_field_path_retrieve",
    "domain": "frameworksLibraries",
    "method": "apiTerminologiesFieldPathRetrieve",
    "http": "GET",
    "path": "/api/terminologies/field_path/",
    "paginate": "none"
  },
  {
    "operationId": "api_comments_list",
    "domain": "governance",
    "method": "apiCommentsList",
    "http": "GET",
    "path": "/api/comments/",
    "paginate": "page"
  },
  {
    "operationId": "api_comments_create",
    "domain": "governance",
    "method": "apiCommentsCreate",
    "http": "POST",
    "path": "/api/comments/",
    "paginate": "none"
  },
  {
    "operationId": "api_comments_retrieve",
    "domain": "governance",
    "method": "apiCommentsRetrieve",
    "http": "GET",
    "path": "/api/comments/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_comments_update",
    "domain": "governance",
    "method": "apiCommentsUpdate",
    "http": "PUT",
    "path": "/api/comments/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_comments_partial_update",
    "domain": "governance",
    "method": "apiCommentsPartialUpdate",
    "http": "PATCH",
    "path": "/api/comments/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_comments_destroy",
    "domain": "governance",
    "method": "apiCommentsDestroy",
    "http": "DELETE",
    "path": "/api/comments/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_comments_cascade_info_retrieve",
    "domain": "governance",
    "method": "apiCommentsCascadeInfoRetrieve",
    "http": "GET",
    "path": "/api/comments/{id}/cascade-info/",
    "paginate": "none"
  },
  {
    "operationId": "api_comments_object_retrieve",
    "domain": "governance",
    "method": "apiCommentsObjectRetrieve",
    "http": "GET",
    "path": "/api/comments/{id}/object/",
    "paginate": "none"
  },
  {
    "operationId": "api_comments_batch_action_create",
    "domain": "governance",
    "method": "apiCommentsBatchActionCreate",
    "http": "POST",
    "path": "/api/comments/batch-action/",
    "paginate": "none"
  },
  {
    "operationId": "api_folders_list",
    "domain": "governance",
    "method": "apiFoldersList",
    "http": "GET",
    "path": "/api/folders/",
    "paginate": "page"
  },
  {
    "operationId": "api_folders_create",
    "domain": "governance",
    "method": "apiFoldersCreate",
    "http": "POST",
    "path": "/api/folders/",
    "paginate": "none"
  },
  {
    "operationId": "api_folders_retrieve",
    "domain": "governance",
    "method": "apiFoldersRetrieve",
    "http": "GET",
    "path": "/api/folders/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_folders_update",
    "domain": "governance",
    "method": "apiFoldersUpdate",
    "http": "PUT",
    "path": "/api/folders/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_folders_partial_update",
    "domain": "governance",
    "method": "apiFoldersPartialUpdate",
    "http": "PATCH",
    "path": "/api/folders/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_folders_destroy",
    "domain": "governance",
    "method": "apiFoldersDestroy",
    "http": "DELETE",
    "path": "/api/folders/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_folders_cascade_info_retrieve",
    "domain": "governance",
    "method": "apiFoldersCascadeInfoRetrieve",
    "http": "GET",
    "path": "/api/folders/{id}/cascade-info/",
    "paginate": "none"
  },
  {
    "operationId": "api_folders_export_retrieve",
    "domain": "governance",
    "method": "apiFoldersExportRetrieve",
    "http": "GET",
    "path": "/api/folders/{id}/export/",
    "paginate": "none"
  },
  {
    "operationId": "api_folders_object_retrieve",
    "domain": "governance",
    "method": "apiFoldersObjectRetrieve",
    "http": "GET",
    "path": "/api/folders/{id}/object/",
    "paginate": "none"
  },
  {
    "operationId": "api_folders_quality_check_retrieve_2",
    "domain": "governance",
    "method": "apiFoldersQualityCheckRetrieve_2",
    "http": "GET",
    "path": "/api/folders/{id}/quality_check/",
    "paginate": "none"
  },
  {
    "operationId": "api_folders_users_list",
    "domain": "governance",
    "method": "apiFoldersUsersList",
    "http": "GET",
    "path": "/api/folders/{id}/users/",
    "paginate": "page"
  },
  {
    "operationId": "api_folders_batch_action_create",
    "domain": "governance",
    "method": "apiFoldersBatchActionCreate",
    "http": "POST",
    "path": "/api/folders/batch-action/",
    "paginate": "none"
  },
  {
    "operationId": "api_folders_get_accessible_objects_retrieve",
    "domain": "governance",
    "method": "apiFoldersGetAccessibleObjectsRetrieve",
    "http": "GET",
    "path": "/api/folders/get_accessible_objects/",
    "paginate": "none"
  },
  {
    "operationId": "api_folders_ids_retrieve",
    "domain": "governance",
    "method": "apiFoldersIdsRetrieve",
    "http": "GET",
    "path": "/api/folders/ids/",
    "paginate": "none"
  },
  {
    "operationId": "api_folders_import_create",
    "domain": "governance",
    "method": "apiFoldersImportCreate",
    "http": "POST",
    "path": "/api/folders/import/",
    "paginate": "none"
  },
  {
    "operationId": "api_folders_import_dummy_create",
    "domain": "governance",
    "method": "apiFoldersImportDummyCreate",
    "http": "POST",
    "path": "/api/folders/import-dummy/",
    "paginate": "none"
  },
  {
    "operationId": "api_folders_my_assignments_retrieve",
    "domain": "governance",
    "method": "apiFoldersMyAssignmentsRetrieve",
    "http": "GET",
    "path": "/api/folders/my_assignments/",
    "paginate": "none"
  },
  {
    "operationId": "api_folders_org_tree_retrieve",
    "domain": "governance",
    "method": "apiFoldersOrgTreeRetrieve",
    "http": "GET",
    "path": "/api/folders/org_tree/",
    "paginate": "none"
  },
  {
    "operationId": "api_folders_quality_check_retrieve",
    "domain": "governance",
    "method": "apiFoldersQualityCheckRetrieve",
    "http": "GET",
    "path": "/api/folders/quality_check/",
    "paginate": "none"
  },
  {
    "operationId": "api_journey_steps_list",
    "domain": "governance",
    "method": "apiJourneyStepsList",
    "http": "GET",
    "path": "/api/journey-steps/",
    "paginate": "page"
  },
  {
    "operationId": "api_journey_steps_create",
    "domain": "governance",
    "method": "apiJourneyStepsCreate",
    "http": "POST",
    "path": "/api/journey-steps/",
    "paginate": "none"
  },
  {
    "operationId": "api_journey_steps_retrieve",
    "domain": "governance",
    "method": "apiJourneyStepsRetrieve",
    "http": "GET",
    "path": "/api/journey-steps/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_journey_steps_update",
    "domain": "governance",
    "method": "apiJourneyStepsUpdate",
    "http": "PUT",
    "path": "/api/journey-steps/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_journey_steps_partial_update",
    "domain": "governance",
    "method": "apiJourneyStepsPartialUpdate",
    "http": "PATCH",
    "path": "/api/journey-steps/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_journey_steps_destroy",
    "domain": "governance",
    "method": "apiJourneyStepsDestroy",
    "http": "DELETE",
    "path": "/api/journey-steps/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_journey_steps_cascade_info_retrieve",
    "domain": "governance",
    "method": "apiJourneyStepsCascadeInfoRetrieve",
    "http": "GET",
    "path": "/api/journey-steps/{id}/cascade-info/",
    "paginate": "none"
  },
  {
    "operationId": "api_journey_steps_object_retrieve",
    "domain": "governance",
    "method": "apiJourneyStepsObjectRetrieve",
    "http": "GET",
    "path": "/api/journey-steps/{id}/object/",
    "paginate": "none"
  },
  {
    "operationId": "api_journey_steps_batch_action_create",
    "domain": "governance",
    "method": "apiJourneyStepsBatchActionCreate",
    "http": "POST",
    "path": "/api/journey-steps/batch-action/",
    "paginate": "none"
  },
  {
    "operationId": "api_journeys_list",
    "domain": "governance",
    "method": "apiJourneysList",
    "http": "GET",
    "path": "/api/journeys/",
    "paginate": "page"
  },
  {
    "operationId": "api_journeys_create",
    "domain": "governance",
    "method": "apiJourneysCreate",
    "http": "POST",
    "path": "/api/journeys/",
    "paginate": "none"
  },
  {
    "operationId": "api_journeys_retrieve",
    "domain": "governance",
    "method": "apiJourneysRetrieve",
    "http": "GET",
    "path": "/api/journeys/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_journeys_update",
    "domain": "governance",
    "method": "apiJourneysUpdate",
    "http": "PUT",
    "path": "/api/journeys/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_journeys_partial_update",
    "domain": "governance",
    "method": "apiJourneysPartialUpdate",
    "http": "PATCH",
    "path": "/api/journeys/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_journeys_destroy",
    "domain": "governance",
    "method": "apiJourneysDestroy",
    "http": "DELETE",
    "path": "/api/journeys/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_journeys_cascade_info_retrieve",
    "domain": "governance",
    "method": "apiJourneysCascadeInfoRetrieve",
    "http": "GET",
    "path": "/api/journeys/{id}/cascade-info/",
    "paginate": "none"
  },
  {
    "operationId": "api_journeys_dashboard_retrieve",
    "domain": "governance",
    "method": "apiJourneysDashboardRetrieve",
    "http": "GET",
    "path": "/api/journeys/{id}/dashboard/",
    "paginate": "none"
  },
  {
    "operationId": "api_journeys_object_retrieve",
    "domain": "governance",
    "method": "apiJourneysObjectRetrieve",
    "http": "GET",
    "path": "/api/journeys/{id}/object/",
    "paginate": "none"
  },
  {
    "operationId": "api_journeys_rename_create",
    "domain": "governance",
    "method": "apiJourneysRenameCreate",
    "http": "POST",
    "path": "/api/journeys/{id}/rename/",
    "paginate": "none"
  },
  {
    "operationId": "api_journeys_upgrade_create",
    "domain": "governance",
    "method": "apiJourneysUpgradeCreate",
    "http": "POST",
    "path": "/api/journeys/{id}/upgrade/",
    "paginate": "none"
  },
  {
    "operationId": "api_journeys_batch_action_create",
    "domain": "governance",
    "method": "apiJourneysBatchActionCreate",
    "http": "POST",
    "path": "/api/journeys/batch-action/",
    "paginate": "none"
  },
  {
    "operationId": "api_organisation_issues_list",
    "domain": "governance",
    "method": "apiOrganisationIssuesList",
    "http": "GET",
    "path": "/api/organisation-issues/",
    "paginate": "page"
  },
  {
    "operationId": "api_organisation_issues_create",
    "domain": "governance",
    "method": "apiOrganisationIssuesCreate",
    "http": "POST",
    "path": "/api/organisation-issues/",
    "paginate": "none"
  },
  {
    "operationId": "api_organisation_issues_retrieve",
    "domain": "governance",
    "method": "apiOrganisationIssuesRetrieve",
    "http": "GET",
    "path": "/api/organisation-issues/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_organisation_issues_update",
    "domain": "governance",
    "method": "apiOrganisationIssuesUpdate",
    "http": "PUT",
    "path": "/api/organisation-issues/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_organisation_issues_partial_update",
    "domain": "governance",
    "method": "apiOrganisationIssuesPartialUpdate",
    "http": "PATCH",
    "path": "/api/organisation-issues/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_organisation_issues_destroy",
    "domain": "governance",
    "method": "apiOrganisationIssuesDestroy",
    "http": "DELETE",
    "path": "/api/organisation-issues/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_organisation_issues_cascade_info_retrieve",
    "domain": "governance",
    "method": "apiOrganisationIssuesCascadeInfoRetrieve",
    "http": "GET",
    "path": "/api/organisation-issues/{id}/cascade-info/",
    "paginate": "none"
  },
  {
    "operationId": "api_organisation_issues_object_retrieve",
    "domain": "governance",
    "method": "apiOrganisationIssuesObjectRetrieve",
    "http": "GET",
    "path": "/api/organisation-issues/{id}/object/",
    "paginate": "none"
  },
  {
    "operationId": "api_organisation_issues_batch_action_create",
    "domain": "governance",
    "method": "apiOrganisationIssuesBatchActionCreate",
    "http": "POST",
    "path": "/api/organisation-issues/batch-action/",
    "paginate": "none"
  },
  {
    "operationId": "api_organisation_issues_category_retrieve",
    "domain": "governance",
    "method": "apiOrganisationIssuesCategoryRetrieve",
    "http": "GET",
    "path": "/api/organisation-issues/category/",
    "paginate": "none"
  },
  {
    "operationId": "api_organisation_issues_origin_retrieve",
    "domain": "governance",
    "method": "apiOrganisationIssuesOriginRetrieve",
    "http": "GET",
    "path": "/api/organisation-issues/origin/",
    "paginate": "none"
  },
  {
    "operationId": "api_organisation_issues_status_retrieve",
    "domain": "governance",
    "method": "apiOrganisationIssuesStatusRetrieve",
    "http": "GET",
    "path": "/api/organisation-issues/status/",
    "paginate": "none"
  },
  {
    "operationId": "api_organisation_objectives_list",
    "domain": "governance",
    "method": "apiOrganisationObjectivesList",
    "http": "GET",
    "path": "/api/organisation-objectives/",
    "paginate": "page"
  },
  {
    "operationId": "api_organisation_objectives_create",
    "domain": "governance",
    "method": "apiOrganisationObjectivesCreate",
    "http": "POST",
    "path": "/api/organisation-objectives/",
    "paginate": "none"
  },
  {
    "operationId": "api_organisation_objectives_retrieve",
    "domain": "governance",
    "method": "apiOrganisationObjectivesRetrieve",
    "http": "GET",
    "path": "/api/organisation-objectives/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_organisation_objectives_update",
    "domain": "governance",
    "method": "apiOrganisationObjectivesUpdate",
    "http": "PUT",
    "path": "/api/organisation-objectives/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_organisation_objectives_partial_update",
    "domain": "governance",
    "method": "apiOrganisationObjectivesPartialUpdate",
    "http": "PATCH",
    "path": "/api/organisation-objectives/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_organisation_objectives_destroy",
    "domain": "governance",
    "method": "apiOrganisationObjectivesDestroy",
    "http": "DELETE",
    "path": "/api/organisation-objectives/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_organisation_objectives_cascade_info_retrieve",
    "domain": "governance",
    "method": "apiOrganisationObjectivesCascadeInfoRetrieve",
    "http": "GET",
    "path": "/api/organisation-objectives/{id}/cascade-info/",
    "paginate": "none"
  },
  {
    "operationId": "api_organisation_objectives_duplicate_create",
    "domain": "governance",
    "method": "apiOrganisationObjectivesDuplicateCreate",
    "http": "POST",
    "path": "/api/organisation-objectives/{id}/duplicate/",
    "paginate": "none"
  },
  {
    "operationId": "api_organisation_objectives_object_retrieve",
    "domain": "governance",
    "method": "apiOrganisationObjectivesObjectRetrieve",
    "http": "GET",
    "path": "/api/organisation-objectives/{id}/object/",
    "paginate": "none"
  },
  {
    "operationId": "api_organisation_objectives_batch_action_create",
    "domain": "governance",
    "method": "apiOrganisationObjectivesBatchActionCreate",
    "http": "POST",
    "path": "/api/organisation-objectives/batch-action/",
    "paginate": "none"
  },
  {
    "operationId": "api_organisation_objectives_health_retrieve",
    "domain": "governance",
    "method": "apiOrganisationObjectivesHealthRetrieve",
    "http": "GET",
    "path": "/api/organisation-objectives/health/",
    "paginate": "none"
  },
  {
    "operationId": "api_organisation_objectives_is_active_retrieve",
    "domain": "governance",
    "method": "apiOrganisationObjectivesIsActiveRetrieve",
    "http": "GET",
    "path": "/api/organisation-objectives/is_active/",
    "paginate": "none"
  },
  {
    "operationId": "api_organisation_objectives_status_retrieve",
    "domain": "governance",
    "method": "apiOrganisationObjectivesStatusRetrieve",
    "http": "GET",
    "path": "/api/organisation-objectives/status/",
    "paginate": "none"
  },
  {
    "operationId": "api_perimeters_list",
    "domain": "governance",
    "method": "apiPerimetersList",
    "http": "GET",
    "path": "/api/perimeters/",
    "paginate": "page"
  },
  {
    "operationId": "api_perimeters_create",
    "domain": "governance",
    "method": "apiPerimetersCreate",
    "http": "POST",
    "path": "/api/perimeters/",
    "paginate": "none"
  },
  {
    "operationId": "api_perimeters_retrieve",
    "domain": "governance",
    "method": "apiPerimetersRetrieve",
    "http": "GET",
    "path": "/api/perimeters/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_perimeters_update",
    "domain": "governance",
    "method": "apiPerimetersUpdate",
    "http": "PUT",
    "path": "/api/perimeters/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_perimeters_partial_update",
    "domain": "governance",
    "method": "apiPerimetersPartialUpdate",
    "http": "PATCH",
    "path": "/api/perimeters/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_perimeters_destroy",
    "domain": "governance",
    "method": "apiPerimetersDestroy",
    "http": "DELETE",
    "path": "/api/perimeters/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_perimeters_cascade_info_retrieve",
    "domain": "governance",
    "method": "apiPerimetersCascadeInfoRetrieve",
    "http": "GET",
    "path": "/api/perimeters/{id}/cascade-info/",
    "paginate": "none"
  },
  {
    "operationId": "api_perimeters_object_retrieve",
    "domain": "governance",
    "method": "apiPerimetersObjectRetrieve",
    "http": "GET",
    "path": "/api/perimeters/{id}/object/",
    "paginate": "none"
  },
  {
    "operationId": "api_perimeters_quality_check_retrieve_2",
    "domain": "governance",
    "method": "apiPerimetersQualityCheckRetrieve_2",
    "http": "GET",
    "path": "/api/perimeters/{id}/quality_check/",
    "paginate": "none"
  },
  {
    "operationId": "api_perimeters_batch_action_create",
    "domain": "governance",
    "method": "apiPerimetersBatchActionCreate",
    "http": "POST",
    "path": "/api/perimeters/batch-action/",
    "paginate": "none"
  },
  {
    "operationId": "api_perimeters_ids_retrieve",
    "domain": "governance",
    "method": "apiPerimetersIdsRetrieve",
    "http": "GET",
    "path": "/api/perimeters/ids/",
    "paginate": "none"
  },
  {
    "operationId": "api_perimeters_lc_status_retrieve",
    "domain": "governance",
    "method": "apiPerimetersLcStatusRetrieve",
    "http": "GET",
    "path": "/api/perimeters/lc_status/",
    "paginate": "none"
  },
  {
    "operationId": "api_perimeters_names_retrieve",
    "domain": "governance",
    "method": "apiPerimetersNamesRetrieve",
    "http": "GET",
    "path": "/api/perimeters/names/",
    "paginate": "none"
  },
  {
    "operationId": "api_perimeters_quality_check_retrieve",
    "domain": "governance",
    "method": "apiPerimetersQualityCheckRetrieve",
    "http": "GET",
    "path": "/api/perimeters/quality_check/",
    "paginate": "none"
  },
  {
    "operationId": "api_quick_start_create",
    "domain": "governance",
    "method": "apiQuickStartCreate",
    "http": "POST",
    "path": "/api/quick-start/",
    "paginate": "none"
  },
  {
    "operationId": "api_validation_flows_list",
    "domain": "governance",
    "method": "apiValidationFlowsList",
    "http": "GET",
    "path": "/api/validation-flows/",
    "paginate": "page"
  },
  {
    "operationId": "api_validation_flows_create",
    "domain": "governance",
    "method": "apiValidationFlowsCreate",
    "http": "POST",
    "path": "/api/validation-flows/",
    "paginate": "none"
  },
  {
    "operationId": "api_validation_flows_retrieve",
    "domain": "governance",
    "method": "apiValidationFlowsRetrieve",
    "http": "GET",
    "path": "/api/validation-flows/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_validation_flows_update",
    "domain": "governance",
    "method": "apiValidationFlowsUpdate",
    "http": "PUT",
    "path": "/api/validation-flows/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_validation_flows_partial_update",
    "domain": "governance",
    "method": "apiValidationFlowsPartialUpdate",
    "http": "PATCH",
    "path": "/api/validation-flows/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_validation_flows_destroy",
    "domain": "governance",
    "method": "apiValidationFlowsDestroy",
    "http": "DELETE",
    "path": "/api/validation-flows/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_validation_flows_cascade_info_retrieve",
    "domain": "governance",
    "method": "apiValidationFlowsCascadeInfoRetrieve",
    "http": "GET",
    "path": "/api/validation-flows/{id}/cascade-info/",
    "paginate": "none"
  },
  {
    "operationId": "api_validation_flows_object_retrieve",
    "domain": "governance",
    "method": "apiValidationFlowsObjectRetrieve",
    "http": "GET",
    "path": "/api/validation-flows/{id}/object/",
    "paginate": "none"
  },
  {
    "operationId": "api_validation_flows_batch_action_create",
    "domain": "governance",
    "method": "apiValidationFlowsBatchActionCreate",
    "http": "POST",
    "path": "/api/validation-flows/batch-action/",
    "paginate": "none"
  },
  {
    "operationId": "api_validation_flows_default_ref_id_retrieve",
    "domain": "governance",
    "method": "apiValidationFlowsDefaultRefIdRetrieve",
    "http": "GET",
    "path": "/api/validation-flows/default_ref_id/",
    "paginate": "none"
  },
  {
    "operationId": "api_validation_flows_linked_models_retrieve",
    "domain": "governance",
    "method": "apiValidationFlowsLinkedModelsRetrieve",
    "http": "GET",
    "path": "/api/validation-flows/linked_models/",
    "paginate": "none"
  },
  {
    "operationId": "api_validation_flows_status_retrieve",
    "domain": "governance",
    "method": "apiValidationFlowsStatusRetrieve",
    "http": "GET",
    "path": "/api/validation-flows/status/",
    "paginate": "none"
  },
  {
    "operationId": "api_incidents_list",
    "domain": "incidents",
    "method": "apiIncidentsList",
    "http": "GET",
    "path": "/api/incidents/",
    "paginate": "page"
  },
  {
    "operationId": "api_incidents_create",
    "domain": "incidents",
    "method": "apiIncidentsCreate",
    "http": "POST",
    "path": "/api/incidents/",
    "paginate": "none"
  },
  {
    "operationId": "api_incidents_retrieve",
    "domain": "incidents",
    "method": "apiIncidentsRetrieve",
    "http": "GET",
    "path": "/api/incidents/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_incidents_update",
    "domain": "incidents",
    "method": "apiIncidentsUpdate",
    "http": "PUT",
    "path": "/api/incidents/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_incidents_partial_update",
    "domain": "incidents",
    "method": "apiIncidentsPartialUpdate",
    "http": "PATCH",
    "path": "/api/incidents/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_incidents_destroy",
    "domain": "incidents",
    "method": "apiIncidentsDestroy",
    "http": "DELETE",
    "path": "/api/incidents/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_incidents_cascade_info_retrieve",
    "domain": "incidents",
    "method": "apiIncidentsCascadeInfoRetrieve",
    "http": "GET",
    "path": "/api/incidents/{id}/cascade-info/",
    "paginate": "none"
  },
  {
    "operationId": "api_incidents_md_retrieve",
    "domain": "incidents",
    "method": "apiIncidentsMdRetrieve",
    "http": "GET",
    "path": "/api/incidents/{id}/md/",
    "paginate": "none"
  },
  {
    "operationId": "api_incidents_object_retrieve",
    "domain": "incidents",
    "method": "apiIncidentsObjectRetrieve",
    "http": "GET",
    "path": "/api/incidents/{id}/object/",
    "paginate": "none"
  },
  {
    "operationId": "api_incidents_pdf_retrieve",
    "domain": "incidents",
    "method": "apiIncidentsPdfRetrieve",
    "http": "GET",
    "path": "/api/incidents/{id}/pdf/",
    "paginate": "none"
  },
  {
    "operationId": "api_incidents_batch_action_create",
    "domain": "incidents",
    "method": "apiIncidentsBatchActionCreate",
    "http": "POST",
    "path": "/api/incidents/batch-action/",
    "paginate": "none"
  },
  {
    "operationId": "api_incidents_detection_retrieve",
    "domain": "incidents",
    "method": "apiIncidentsDetectionRetrieve",
    "http": "GET",
    "path": "/api/incidents/detection/",
    "paginate": "none"
  },
  {
    "operationId": "api_incidents_detection_breakdown_retrieve",
    "domain": "incidents",
    "method": "apiIncidentsDetectionBreakdownRetrieve",
    "http": "GET",
    "path": "/api/incidents/detection_breakdown/",
    "paginate": "none"
  },
  {
    "operationId": "api_incidents_export_csv_retrieve",
    "domain": "incidents",
    "method": "apiIncidentsExportCsvRetrieve",
    "http": "GET",
    "path": "/api/incidents/export_csv/",
    "paginate": "none"
  },
  {
    "operationId": "api_incidents_export_xlsx_retrieve",
    "domain": "incidents",
    "method": "apiIncidentsExportXlsxRetrieve",
    "http": "GET",
    "path": "/api/incidents/export_xlsx/",
    "paginate": "none"
  },
  {
    "operationId": "api_incidents_monthly_metrics_retrieve",
    "domain": "incidents",
    "method": "apiIncidentsMonthlyMetricsRetrieve",
    "http": "GET",
    "path": "/api/incidents/monthly_metrics/",
    "paginate": "none"
  },
  {
    "operationId": "api_incidents_qualifications_breakdown_retrieve",
    "domain": "incidents",
    "method": "apiIncidentsQualificationsBreakdownRetrieve",
    "http": "GET",
    "path": "/api/incidents/qualifications_breakdown/",
    "paginate": "none"
  },
  {
    "operationId": "api_incidents_severity_retrieve",
    "domain": "incidents",
    "method": "apiIncidentsSeverityRetrieve",
    "http": "GET",
    "path": "/api/incidents/severity/",
    "paginate": "none"
  },
  {
    "operationId": "api_incidents_severity_breakdown_retrieve",
    "domain": "incidents",
    "method": "apiIncidentsSeverityBreakdownRetrieve",
    "http": "GET",
    "path": "/api/incidents/severity_breakdown/",
    "paginate": "none"
  },
  {
    "operationId": "api_incidents_status_retrieve",
    "domain": "incidents",
    "method": "apiIncidentsStatusRetrieve",
    "http": "GET",
    "path": "/api/incidents/status/",
    "paginate": "none"
  },
  {
    "operationId": "api_incidents_summary_stats_retrieve",
    "domain": "incidents",
    "method": "apiIncidentsSummaryStatsRetrieve",
    "http": "GET",
    "path": "/api/incidents/summary_stats/",
    "paginate": "none"
  },
  {
    "operationId": "api_timeline_entries_list",
    "domain": "incidents",
    "method": "apiTimelineEntriesList",
    "http": "GET",
    "path": "/api/timeline-entries/",
    "paginate": "page"
  },
  {
    "operationId": "api_timeline_entries_create",
    "domain": "incidents",
    "method": "apiTimelineEntriesCreate",
    "http": "POST",
    "path": "/api/timeline-entries/",
    "paginate": "none"
  },
  {
    "operationId": "api_timeline_entries_retrieve",
    "domain": "incidents",
    "method": "apiTimelineEntriesRetrieve",
    "http": "GET",
    "path": "/api/timeline-entries/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_timeline_entries_update",
    "domain": "incidents",
    "method": "apiTimelineEntriesUpdate",
    "http": "PUT",
    "path": "/api/timeline-entries/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_timeline_entries_partial_update",
    "domain": "incidents",
    "method": "apiTimelineEntriesPartialUpdate",
    "http": "PATCH",
    "path": "/api/timeline-entries/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_timeline_entries_destroy",
    "domain": "incidents",
    "method": "apiTimelineEntriesDestroy",
    "http": "DELETE",
    "path": "/api/timeline-entries/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_timeline_entries_cascade_info_retrieve",
    "domain": "incidents",
    "method": "apiTimelineEntriesCascadeInfoRetrieve",
    "http": "GET",
    "path": "/api/timeline-entries/{id}/cascade-info/",
    "paginate": "none"
  },
  {
    "operationId": "api_timeline_entries_object_retrieve",
    "domain": "incidents",
    "method": "apiTimelineEntriesObjectRetrieve",
    "http": "GET",
    "path": "/api/timeline-entries/{id}/object/",
    "paginate": "none"
  },
  {
    "operationId": "api_timeline_entries_batch_action_create",
    "domain": "incidents",
    "method": "apiTimelineEntriesBatchActionCreate",
    "http": "POST",
    "path": "/api/timeline-entries/batch-action/",
    "paginate": "none"
  },
  {
    "operationId": "api_timeline_entries_entry_type_retrieve",
    "domain": "incidents",
    "method": "apiTimelineEntriesEntryTypeRetrieve",
    "http": "GET",
    "path": "/api/timeline-entries/entry_type/",
    "paginate": "none"
  },
  {
    "operationId": "api_build_retrieve",
    "domain": "integrations",
    "method": "apiBuildRetrieve",
    "http": "GET",
    "path": "/api/build/",
    "paginate": "none"
  },
  {
    "operationId": "api_content_types_retrieve",
    "domain": "integrations",
    "method": "apiContentTypesRetrieve",
    "http": "GET",
    "path": "/api/content-types/",
    "paginate": "none"
  },
  {
    "operationId": "api_data_wizard_load_file_create",
    "domain": "integrations",
    "method": "apiDataWizardLoadFileCreate",
    "http": "POST",
    "path": "/api/data-wizard/load-file/",
    "paginate": "none"
  },
  {
    "operationId": "api_health_retrieve",
    "domain": "integrations",
    "method": "apiHealthRetrieve",
    "http": "GET",
    "path": "/api/health/",
    "paginate": "none"
  },
  {
    "operationId": "api_integrations_configs_list",
    "domain": "integrations",
    "method": "apiIntegrationsConfigsList",
    "http": "GET",
    "path": "/api/integrations/configs/",
    "paginate": "page"
  },
  {
    "operationId": "api_integrations_configs_create",
    "domain": "integrations",
    "method": "apiIntegrationsConfigsCreate",
    "http": "POST",
    "path": "/api/integrations/configs/",
    "paginate": "none"
  },
  {
    "operationId": "api_integrations_configs_retrieve",
    "domain": "integrations",
    "method": "apiIntegrationsConfigsRetrieve",
    "http": "GET",
    "path": "/api/integrations/configs/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_integrations_configs_update",
    "domain": "integrations",
    "method": "apiIntegrationsConfigsUpdate",
    "http": "PUT",
    "path": "/api/integrations/configs/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_integrations_configs_partial_update",
    "domain": "integrations",
    "method": "apiIntegrationsConfigsPartialUpdate",
    "http": "PATCH",
    "path": "/api/integrations/configs/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_integrations_configs_destroy",
    "domain": "integrations",
    "method": "apiIntegrationsConfigsDestroy",
    "http": "DELETE",
    "path": "/api/integrations/configs/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_integrations_configs_cascade_info_retrieve",
    "domain": "integrations",
    "method": "apiIntegrationsConfigsCascadeInfoRetrieve",
    "http": "GET",
    "path": "/api/integrations/configs/{id}/cascade-info/",
    "paginate": "none"
  },
  {
    "operationId": "api_integrations_configs_object_retrieve",
    "domain": "integrations",
    "method": "apiIntegrationsConfigsObjectRetrieve",
    "http": "GET",
    "path": "/api/integrations/configs/{id}/object/",
    "paginate": "none"
  },
  {
    "operationId": "api_integrations_configs_remote_objects_retrieve",
    "domain": "integrations",
    "method": "apiIntegrationsConfigsRemoteObjectsRetrieve",
    "http": "GET",
    "path": "/api/integrations/configs/{id}/remote-objects/",
    "paginate": "none"
  },
  {
    "operationId": "api_integrations_configs_rpc_create",
    "domain": "integrations",
    "method": "apiIntegrationsConfigsRpcCreate",
    "http": "POST",
    "path": "/api/integrations/configs/{id}/rpc/",
    "paginate": "none"
  },
  {
    "operationId": "api_integrations_configs_test_connection_create",
    "domain": "integrations",
    "method": "apiIntegrationsConfigsTestConnectionCreate",
    "http": "POST",
    "path": "/api/integrations/configs/{id}/test-connection/",
    "paginate": "none"
  },
  {
    "operationId": "api_integrations_configs_batch_action_create",
    "domain": "integrations",
    "method": "apiIntegrationsConfigsBatchActionCreate",
    "http": "POST",
    "path": "/api/integrations/configs/batch-action/",
    "paginate": "none"
  },
  {
    "operationId": "api_integrations_providers_list",
    "domain": "integrations",
    "method": "apiIntegrationsProvidersList",
    "http": "GET",
    "path": "/api/integrations/providers/",
    "paginate": "page"
  },
  {
    "operationId": "api_integrations_sync_mappings_destroy",
    "domain": "integrations",
    "method": "apiIntegrationsSyncMappingsDestroy",
    "http": "DELETE",
    "path": "/api/integrations/sync-mappings/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_integrations_test_connection_create",
    "domain": "integrations",
    "method": "apiIntegrationsTestConnectionCreate",
    "http": "POST",
    "path": "/api/integrations/test-connection/",
    "paginate": "none"
  },
  {
    "operationId": "api_search_retrieve",
    "domain": "integrations",
    "method": "apiSearchRetrieve",
    "http": "GET",
    "path": "/api/search/",
    "paginate": "none"
  },
  {
    "operationId": "api_serdes_attachment_metadata_retrieve",
    "domain": "integrations",
    "method": "apiSerdesAttachmentMetadataRetrieve",
    "http": "GET",
    "path": "/api/serdes/attachment-metadata/",
    "paginate": "none"
  },
  {
    "operationId": "api_serdes_batch_download_attachments_create",
    "domain": "integrations",
    "method": "apiSerdesBatchDownloadAttachmentsCreate",
    "http": "POST",
    "path": "/api/serdes/batch-download-attachments/",
    "paginate": "none"
  },
  {
    "operationId": "api_serdes_batch_upload_attachments_create",
    "domain": "integrations",
    "method": "apiSerdesBatchUploadAttachmentsCreate",
    "http": "POST",
    "path": "/api/serdes/batch-upload-attachments/",
    "paginate": "none"
  },
  {
    "operationId": "api_serdes_dump_db_retrieve",
    "domain": "integrations",
    "method": "apiSerdesDumpDbRetrieve",
    "http": "GET",
    "path": "/api/serdes/dump-db/",
    "paginate": "none"
  },
  {
    "operationId": "api_serdes_full_restore_create",
    "domain": "integrations",
    "method": "apiSerdesFullRestoreCreate",
    "http": "POST",
    "path": "/api/serdes/full-restore/",
    "paginate": "none"
  },
  {
    "operationId": "api_serdes_load_backup_create",
    "domain": "integrations",
    "method": "apiSerdesLoadBackupCreate",
    "http": "POST",
    "path": "/api/serdes/load-backup/",
    "paginate": "none"
  },
  {
    "operationId": "api_webhooks_audit_sinks_list",
    "domain": "integrations",
    "method": "apiWebhooksAuditSinksList",
    "http": "GET",
    "path": "/api/webhooks/audit-sinks/",
    "paginate": "page"
  },
  {
    "operationId": "api_webhooks_audit_sinks_create",
    "domain": "integrations",
    "method": "apiWebhooksAuditSinksCreate",
    "http": "POST",
    "path": "/api/webhooks/audit-sinks/",
    "paginate": "none"
  },
  {
    "operationId": "api_webhooks_audit_sinks_retrieve",
    "domain": "integrations",
    "method": "apiWebhooksAuditSinksRetrieve",
    "http": "GET",
    "path": "/api/webhooks/audit-sinks/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_webhooks_audit_sinks_update",
    "domain": "integrations",
    "method": "apiWebhooksAuditSinksUpdate",
    "http": "PUT",
    "path": "/api/webhooks/audit-sinks/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_webhooks_audit_sinks_partial_update",
    "domain": "integrations",
    "method": "apiWebhooksAuditSinksPartialUpdate",
    "http": "PATCH",
    "path": "/api/webhooks/audit-sinks/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_webhooks_audit_sinks_destroy",
    "domain": "integrations",
    "method": "apiWebhooksAuditSinksDestroy",
    "http": "DELETE",
    "path": "/api/webhooks/audit-sinks/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_webhooks_audit_sinks_cascade_info_retrieve",
    "domain": "integrations",
    "method": "apiWebhooksAuditSinksCascadeInfoRetrieve",
    "http": "GET",
    "path": "/api/webhooks/audit-sinks/{id}/cascade-info/",
    "paginate": "none"
  },
  {
    "operationId": "api_webhooks_audit_sinks_object_retrieve",
    "domain": "integrations",
    "method": "apiWebhooksAuditSinksObjectRetrieve",
    "http": "GET",
    "path": "/api/webhooks/audit-sinks/{id}/object/",
    "paginate": "none"
  },
  {
    "operationId": "api_webhooks_audit_sinks_replay_create",
    "domain": "integrations",
    "method": "apiWebhooksAuditSinksReplayCreate",
    "http": "POST",
    "path": "/api/webhooks/audit-sinks/{id}/replay/",
    "paginate": "none"
  },
  {
    "operationId": "api_webhooks_audit_sinks_batch_action_create",
    "domain": "integrations",
    "method": "apiWebhooksAuditSinksBatchActionCreate",
    "http": "POST",
    "path": "/api/webhooks/audit-sinks/batch-action/",
    "paginate": "none"
  },
  {
    "operationId": "api_webhooks_endpoints_list",
    "domain": "integrations",
    "method": "apiWebhooksEndpointsList",
    "http": "GET",
    "path": "/api/webhooks/endpoints/",
    "paginate": "page"
  },
  {
    "operationId": "api_webhooks_endpoints_create",
    "domain": "integrations",
    "method": "apiWebhooksEndpointsCreate",
    "http": "POST",
    "path": "/api/webhooks/endpoints/",
    "paginate": "none"
  },
  {
    "operationId": "api_webhooks_endpoints_retrieve",
    "domain": "integrations",
    "method": "apiWebhooksEndpointsRetrieve",
    "http": "GET",
    "path": "/api/webhooks/endpoints/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_webhooks_endpoints_update",
    "domain": "integrations",
    "method": "apiWebhooksEndpointsUpdate",
    "http": "PUT",
    "path": "/api/webhooks/endpoints/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_webhooks_endpoints_partial_update",
    "domain": "integrations",
    "method": "apiWebhooksEndpointsPartialUpdate",
    "http": "PATCH",
    "path": "/api/webhooks/endpoints/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_webhooks_endpoints_destroy",
    "domain": "integrations",
    "method": "apiWebhooksEndpointsDestroy",
    "http": "DELETE",
    "path": "/api/webhooks/endpoints/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_webhooks_endpoints_cascade_info_retrieve",
    "domain": "integrations",
    "method": "apiWebhooksEndpointsCascadeInfoRetrieve",
    "http": "GET",
    "path": "/api/webhooks/endpoints/{id}/cascade-info/",
    "paginate": "none"
  },
  {
    "operationId": "api_webhooks_endpoints_object_retrieve",
    "domain": "integrations",
    "method": "apiWebhooksEndpointsObjectRetrieve",
    "http": "GET",
    "path": "/api/webhooks/endpoints/{id}/object/",
    "paginate": "none"
  },
  {
    "operationId": "api_webhooks_endpoints_batch_action_create",
    "domain": "integrations",
    "method": "apiWebhooksEndpointsBatchActionCreate",
    "http": "POST",
    "path": "/api/webhooks/endpoints/batch-action/",
    "paginate": "none"
  },
  {
    "operationId": "api_webhooks_event_types_retrieve",
    "domain": "integrations",
    "method": "apiWebhooksEventTypesRetrieve",
    "http": "GET",
    "path": "/api/webhooks/event-types/",
    "paginate": "none"
  },
  {
    "operationId": "serdes_attachment_metadata_retrieve",
    "domain": "integrations",
    "method": "serdesAttachmentMetadataRetrieve",
    "http": "GET",
    "path": "/serdes/attachment-metadata/",
    "paginate": "none"
  },
  {
    "operationId": "serdes_batch_download_attachments_create",
    "domain": "integrations",
    "method": "serdesBatchDownloadAttachmentsCreate",
    "http": "POST",
    "path": "/serdes/batch-download-attachments/",
    "paginate": "none"
  },
  {
    "operationId": "serdes_batch_upload_attachments_create",
    "domain": "integrations",
    "method": "serdesBatchUploadAttachmentsCreate",
    "http": "POST",
    "path": "/serdes/batch-upload-attachments/",
    "paginate": "none"
  },
  {
    "operationId": "serdes_dump_db_retrieve",
    "domain": "integrations",
    "method": "serdesDumpDbRetrieve",
    "http": "GET",
    "path": "/serdes/dump-db/",
    "paginate": "none"
  },
  {
    "operationId": "serdes_full_restore_create",
    "domain": "integrations",
    "method": "serdesFullRestoreCreate",
    "http": "POST",
    "path": "/serdes/full-restore/",
    "paginate": "none"
  },
  {
    "operationId": "serdes_load_backup_create",
    "domain": "integrations",
    "method": "serdesLoadBackupCreate",
    "http": "POST",
    "path": "/serdes/load-backup/",
    "paginate": "none"
  },
  {
    "operationId": "api_privacy_data_breaches_list",
    "domain": "privacy",
    "method": "apiPrivacyDataBreachesList",
    "http": "GET",
    "path": "/api/privacy/data-breaches/",
    "paginate": "page"
  },
  {
    "operationId": "api_privacy_data_breaches_create",
    "domain": "privacy",
    "method": "apiPrivacyDataBreachesCreate",
    "http": "POST",
    "path": "/api/privacy/data-breaches/",
    "paginate": "none"
  },
  {
    "operationId": "api_privacy_data_breaches_retrieve",
    "domain": "privacy",
    "method": "apiPrivacyDataBreachesRetrieve",
    "http": "GET",
    "path": "/api/privacy/data-breaches/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_privacy_data_breaches_update",
    "domain": "privacy",
    "method": "apiPrivacyDataBreachesUpdate",
    "http": "PUT",
    "path": "/api/privacy/data-breaches/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_privacy_data_breaches_partial_update",
    "domain": "privacy",
    "method": "apiPrivacyDataBreachesPartialUpdate",
    "http": "PATCH",
    "path": "/api/privacy/data-breaches/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_privacy_data_breaches_destroy",
    "domain": "privacy",
    "method": "apiPrivacyDataBreachesDestroy",
    "http": "DELETE",
    "path": "/api/privacy/data-breaches/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_privacy_data_breaches_cascade_info_retrieve",
    "domain": "privacy",
    "method": "apiPrivacyDataBreachesCascadeInfoRetrieve",
    "http": "GET",
    "path": "/api/privacy/data-breaches/{id}/cascade-info/",
    "paginate": "none"
  },
  {
    "operationId": "api_privacy_data_breaches_object_retrieve",
    "domain": "privacy",
    "method": "apiPrivacyDataBreachesObjectRetrieve",
    "http": "GET",
    "path": "/api/privacy/data-breaches/{id}/object/",
    "paginate": "none"
  },
  {
    "operationId": "api_privacy_data_breaches_batch_action_create",
    "domain": "privacy",
    "method": "apiPrivacyDataBreachesBatchActionCreate",
    "http": "POST",
    "path": "/api/privacy/data-breaches/batch-action/",
    "paginate": "none"
  },
  {
    "operationId": "api_privacy_data_breaches_breach_type_retrieve",
    "domain": "privacy",
    "method": "apiPrivacyDataBreachesBreachTypeRetrieve",
    "http": "GET",
    "path": "/api/privacy/data-breaches/breach_type/",
    "paginate": "none"
  },
  {
    "operationId": "api_privacy_data_breaches_risk_level_retrieve",
    "domain": "privacy",
    "method": "apiPrivacyDataBreachesRiskLevelRetrieve",
    "http": "GET",
    "path": "/api/privacy/data-breaches/risk_level/",
    "paginate": "none"
  },
  {
    "operationId": "api_privacy_data_breaches_status_retrieve",
    "domain": "privacy",
    "method": "apiPrivacyDataBreachesStatusRetrieve",
    "http": "GET",
    "path": "/api/privacy/data-breaches/status/",
    "paginate": "none"
  },
  {
    "operationId": "api_privacy_data_contractors_list",
    "domain": "privacy",
    "method": "apiPrivacyDataContractorsList",
    "http": "GET",
    "path": "/api/privacy/data-contractors/",
    "paginate": "page"
  },
  {
    "operationId": "api_privacy_data_contractors_create",
    "domain": "privacy",
    "method": "apiPrivacyDataContractorsCreate",
    "http": "POST",
    "path": "/api/privacy/data-contractors/",
    "paginate": "none"
  },
  {
    "operationId": "api_privacy_data_contractors_retrieve",
    "domain": "privacy",
    "method": "apiPrivacyDataContractorsRetrieve",
    "http": "GET",
    "path": "/api/privacy/data-contractors/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_privacy_data_contractors_update",
    "domain": "privacy",
    "method": "apiPrivacyDataContractorsUpdate",
    "http": "PUT",
    "path": "/api/privacy/data-contractors/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_privacy_data_contractors_partial_update",
    "domain": "privacy",
    "method": "apiPrivacyDataContractorsPartialUpdate",
    "http": "PATCH",
    "path": "/api/privacy/data-contractors/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_privacy_data_contractors_destroy",
    "domain": "privacy",
    "method": "apiPrivacyDataContractorsDestroy",
    "http": "DELETE",
    "path": "/api/privacy/data-contractors/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_privacy_data_contractors_cascade_info_retrieve",
    "domain": "privacy",
    "method": "apiPrivacyDataContractorsCascadeInfoRetrieve",
    "http": "GET",
    "path": "/api/privacy/data-contractors/{id}/cascade-info/",
    "paginate": "none"
  },
  {
    "operationId": "api_privacy_data_contractors_object_retrieve",
    "domain": "privacy",
    "method": "apiPrivacyDataContractorsObjectRetrieve",
    "http": "GET",
    "path": "/api/privacy/data-contractors/{id}/object/",
    "paginate": "none"
  },
  {
    "operationId": "api_privacy_data_contractors_batch_action_create",
    "domain": "privacy",
    "method": "apiPrivacyDataContractorsBatchActionCreate",
    "http": "POST",
    "path": "/api/privacy/data-contractors/batch-action/",
    "paginate": "none"
  },
  {
    "operationId": "api_privacy_data_contractors_country_retrieve",
    "domain": "privacy",
    "method": "apiPrivacyDataContractorsCountryRetrieve",
    "http": "GET",
    "path": "/api/privacy/data-contractors/country/",
    "paginate": "none"
  },
  {
    "operationId": "api_privacy_data_contractors_relationship_type_retrieve",
    "domain": "privacy",
    "method": "apiPrivacyDataContractorsRelationshipTypeRetrieve",
    "http": "GET",
    "path": "/api/privacy/data-contractors/relationship_type/",
    "paginate": "none"
  },
  {
    "operationId": "api_privacy_data_recipients_list",
    "domain": "privacy",
    "method": "apiPrivacyDataRecipientsList",
    "http": "GET",
    "path": "/api/privacy/data-recipients/",
    "paginate": "page"
  },
  {
    "operationId": "api_privacy_data_recipients_create",
    "domain": "privacy",
    "method": "apiPrivacyDataRecipientsCreate",
    "http": "POST",
    "path": "/api/privacy/data-recipients/",
    "paginate": "none"
  },
  {
    "operationId": "api_privacy_data_recipients_retrieve",
    "domain": "privacy",
    "method": "apiPrivacyDataRecipientsRetrieve",
    "http": "GET",
    "path": "/api/privacy/data-recipients/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_privacy_data_recipients_update",
    "domain": "privacy",
    "method": "apiPrivacyDataRecipientsUpdate",
    "http": "PUT",
    "path": "/api/privacy/data-recipients/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_privacy_data_recipients_partial_update",
    "domain": "privacy",
    "method": "apiPrivacyDataRecipientsPartialUpdate",
    "http": "PATCH",
    "path": "/api/privacy/data-recipients/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_privacy_data_recipients_destroy",
    "domain": "privacy",
    "method": "apiPrivacyDataRecipientsDestroy",
    "http": "DELETE",
    "path": "/api/privacy/data-recipients/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_privacy_data_recipients_cascade_info_retrieve",
    "domain": "privacy",
    "method": "apiPrivacyDataRecipientsCascadeInfoRetrieve",
    "http": "GET",
    "path": "/api/privacy/data-recipients/{id}/cascade-info/",
    "paginate": "none"
  },
  {
    "operationId": "api_privacy_data_recipients_object_retrieve",
    "domain": "privacy",
    "method": "apiPrivacyDataRecipientsObjectRetrieve",
    "http": "GET",
    "path": "/api/privacy/data-recipients/{id}/object/",
    "paginate": "none"
  },
  {
    "operationId": "api_privacy_data_recipients_batch_action_create",
    "domain": "privacy",
    "method": "apiPrivacyDataRecipientsBatchActionCreate",
    "http": "POST",
    "path": "/api/privacy/data-recipients/batch-action/",
    "paginate": "none"
  },
  {
    "operationId": "api_privacy_data_recipients_category_retrieve",
    "domain": "privacy",
    "method": "apiPrivacyDataRecipientsCategoryRetrieve",
    "http": "GET",
    "path": "/api/privacy/data-recipients/category/",
    "paginate": "none"
  },
  {
    "operationId": "api_privacy_data_subjects_list",
    "domain": "privacy",
    "method": "apiPrivacyDataSubjectsList",
    "http": "GET",
    "path": "/api/privacy/data-subjects/",
    "paginate": "page"
  },
  {
    "operationId": "api_privacy_data_subjects_create",
    "domain": "privacy",
    "method": "apiPrivacyDataSubjectsCreate",
    "http": "POST",
    "path": "/api/privacy/data-subjects/",
    "paginate": "none"
  },
  {
    "operationId": "api_privacy_data_subjects_retrieve",
    "domain": "privacy",
    "method": "apiPrivacyDataSubjectsRetrieve",
    "http": "GET",
    "path": "/api/privacy/data-subjects/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_privacy_data_subjects_update",
    "domain": "privacy",
    "method": "apiPrivacyDataSubjectsUpdate",
    "http": "PUT",
    "path": "/api/privacy/data-subjects/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_privacy_data_subjects_partial_update",
    "domain": "privacy",
    "method": "apiPrivacyDataSubjectsPartialUpdate",
    "http": "PATCH",
    "path": "/api/privacy/data-subjects/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_privacy_data_subjects_destroy",
    "domain": "privacy",
    "method": "apiPrivacyDataSubjectsDestroy",
    "http": "DELETE",
    "path": "/api/privacy/data-subjects/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_privacy_data_subjects_cascade_info_retrieve",
    "domain": "privacy",
    "method": "apiPrivacyDataSubjectsCascadeInfoRetrieve",
    "http": "GET",
    "path": "/api/privacy/data-subjects/{id}/cascade-info/",
    "paginate": "none"
  },
  {
    "operationId": "api_privacy_data_subjects_object_retrieve",
    "domain": "privacy",
    "method": "apiPrivacyDataSubjectsObjectRetrieve",
    "http": "GET",
    "path": "/api/privacy/data-subjects/{id}/object/",
    "paginate": "none"
  },
  {
    "operationId": "api_privacy_data_subjects_batch_action_create",
    "domain": "privacy",
    "method": "apiPrivacyDataSubjectsBatchActionCreate",
    "http": "POST",
    "path": "/api/privacy/data-subjects/batch-action/",
    "paginate": "none"
  },
  {
    "operationId": "api_privacy_data_subjects_category_retrieve",
    "domain": "privacy",
    "method": "apiPrivacyDataSubjectsCategoryRetrieve",
    "http": "GET",
    "path": "/api/privacy/data-subjects/category/",
    "paginate": "none"
  },
  {
    "operationId": "api_privacy_data_transfers_list",
    "domain": "privacy",
    "method": "apiPrivacyDataTransfersList",
    "http": "GET",
    "path": "/api/privacy/data-transfers/",
    "paginate": "page"
  },
  {
    "operationId": "api_privacy_data_transfers_create",
    "domain": "privacy",
    "method": "apiPrivacyDataTransfersCreate",
    "http": "POST",
    "path": "/api/privacy/data-transfers/",
    "paginate": "none"
  },
  {
    "operationId": "api_privacy_data_transfers_retrieve",
    "domain": "privacy",
    "method": "apiPrivacyDataTransfersRetrieve",
    "http": "GET",
    "path": "/api/privacy/data-transfers/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_privacy_data_transfers_update",
    "domain": "privacy",
    "method": "apiPrivacyDataTransfersUpdate",
    "http": "PUT",
    "path": "/api/privacy/data-transfers/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_privacy_data_transfers_partial_update",
    "domain": "privacy",
    "method": "apiPrivacyDataTransfersPartialUpdate",
    "http": "PATCH",
    "path": "/api/privacy/data-transfers/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_privacy_data_transfers_destroy",
    "domain": "privacy",
    "method": "apiPrivacyDataTransfersDestroy",
    "http": "DELETE",
    "path": "/api/privacy/data-transfers/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_privacy_data_transfers_cascade_info_retrieve",
    "domain": "privacy",
    "method": "apiPrivacyDataTransfersCascadeInfoRetrieve",
    "http": "GET",
    "path": "/api/privacy/data-transfers/{id}/cascade-info/",
    "paginate": "none"
  },
  {
    "operationId": "api_privacy_data_transfers_object_retrieve",
    "domain": "privacy",
    "method": "apiPrivacyDataTransfersObjectRetrieve",
    "http": "GET",
    "path": "/api/privacy/data-transfers/{id}/object/",
    "paginate": "none"
  },
  {
    "operationId": "api_privacy_data_transfers_batch_action_create",
    "domain": "privacy",
    "method": "apiPrivacyDataTransfersBatchActionCreate",
    "http": "POST",
    "path": "/api/privacy/data-transfers/batch-action/",
    "paginate": "none"
  },
  {
    "operationId": "api_privacy_data_transfers_country_retrieve",
    "domain": "privacy",
    "method": "apiPrivacyDataTransfersCountryRetrieve",
    "http": "GET",
    "path": "/api/privacy/data-transfers/country/",
    "paginate": "none"
  },
  {
    "operationId": "api_privacy_data_transfers_transfer_mechanism_retrieve",
    "domain": "privacy",
    "method": "apiPrivacyDataTransfersTransferMechanismRetrieve",
    "http": "GET",
    "path": "/api/privacy/data-transfers/transfer_mechanism/",
    "paginate": "none"
  },
  {
    "operationId": "api_privacy_personal_data_list",
    "domain": "privacy",
    "method": "apiPrivacyPersonalDataList",
    "http": "GET",
    "path": "/api/privacy/personal-data/",
    "paginate": "page"
  },
  {
    "operationId": "api_privacy_personal_data_create",
    "domain": "privacy",
    "method": "apiPrivacyPersonalDataCreate",
    "http": "POST",
    "path": "/api/privacy/personal-data/",
    "paginate": "none"
  },
  {
    "operationId": "api_privacy_personal_data_retrieve",
    "domain": "privacy",
    "method": "apiPrivacyPersonalDataRetrieve",
    "http": "GET",
    "path": "/api/privacy/personal-data/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_privacy_personal_data_update",
    "domain": "privacy",
    "method": "apiPrivacyPersonalDataUpdate",
    "http": "PUT",
    "path": "/api/privacy/personal-data/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_privacy_personal_data_partial_update",
    "domain": "privacy",
    "method": "apiPrivacyPersonalDataPartialUpdate",
    "http": "PATCH",
    "path": "/api/privacy/personal-data/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_privacy_personal_data_destroy",
    "domain": "privacy",
    "method": "apiPrivacyPersonalDataDestroy",
    "http": "DELETE",
    "path": "/api/privacy/personal-data/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_privacy_personal_data_cascade_info_retrieve",
    "domain": "privacy",
    "method": "apiPrivacyPersonalDataCascadeInfoRetrieve",
    "http": "GET",
    "path": "/api/privacy/personal-data/{id}/cascade-info/",
    "paginate": "none"
  },
  {
    "operationId": "api_privacy_personal_data_object_retrieve",
    "domain": "privacy",
    "method": "apiPrivacyPersonalDataObjectRetrieve",
    "http": "GET",
    "path": "/api/privacy/personal-data/{id}/object/",
    "paginate": "none"
  },
  {
    "operationId": "api_privacy_personal_data_batch_action_create",
    "domain": "privacy",
    "method": "apiPrivacyPersonalDataBatchActionCreate",
    "http": "POST",
    "path": "/api/privacy/personal-data/batch-action/",
    "paginate": "none"
  },
  {
    "operationId": "api_privacy_personal_data_batch_create_create",
    "domain": "privacy",
    "method": "apiPrivacyPersonalDataBatchCreateCreate",
    "http": "POST",
    "path": "/api/privacy/personal-data/batch-create/",
    "paginate": "none"
  },
  {
    "operationId": "api_privacy_personal_data_category_retrieve",
    "domain": "privacy",
    "method": "apiPrivacyPersonalDataCategoryRetrieve",
    "http": "GET",
    "path": "/api/privacy/personal-data/category/",
    "paginate": "none"
  },
  {
    "operationId": "api_privacy_personal_data_deletion_policy_retrieve",
    "domain": "privacy",
    "method": "apiPrivacyPersonalDataDeletionPolicyRetrieve",
    "http": "GET",
    "path": "/api/privacy/personal-data/deletion_policy/",
    "paginate": "none"
  },
  {
    "operationId": "api_privacy_personal_data_is_sensitive_retrieve",
    "domain": "privacy",
    "method": "apiPrivacyPersonalDataIsSensitiveRetrieve",
    "http": "GET",
    "path": "/api/privacy/personal-data/is_sensitive/",
    "paginate": "none"
  },
  {
    "operationId": "api_privacy_processing_natures_list",
    "domain": "privacy",
    "method": "apiPrivacyProcessingNaturesList",
    "http": "GET",
    "path": "/api/privacy/processing-natures/",
    "paginate": "page"
  },
  {
    "operationId": "api_privacy_processing_natures_create",
    "domain": "privacy",
    "method": "apiPrivacyProcessingNaturesCreate",
    "http": "POST",
    "path": "/api/privacy/processing-natures/",
    "paginate": "none"
  },
  {
    "operationId": "api_privacy_processing_natures_retrieve",
    "domain": "privacy",
    "method": "apiPrivacyProcessingNaturesRetrieve",
    "http": "GET",
    "path": "/api/privacy/processing-natures/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_privacy_processing_natures_update",
    "domain": "privacy",
    "method": "apiPrivacyProcessingNaturesUpdate",
    "http": "PUT",
    "path": "/api/privacy/processing-natures/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_privacy_processing_natures_partial_update",
    "domain": "privacy",
    "method": "apiPrivacyProcessingNaturesPartialUpdate",
    "http": "PATCH",
    "path": "/api/privacy/processing-natures/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_privacy_processing_natures_destroy",
    "domain": "privacy",
    "method": "apiPrivacyProcessingNaturesDestroy",
    "http": "DELETE",
    "path": "/api/privacy/processing-natures/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_privacy_processing_natures_cascade_info_retrieve",
    "domain": "privacy",
    "method": "apiPrivacyProcessingNaturesCascadeInfoRetrieve",
    "http": "GET",
    "path": "/api/privacy/processing-natures/{id}/cascade-info/",
    "paginate": "none"
  },
  {
    "operationId": "api_privacy_processing_natures_object_retrieve",
    "domain": "privacy",
    "method": "apiPrivacyProcessingNaturesObjectRetrieve",
    "http": "GET",
    "path": "/api/privacy/processing-natures/{id}/object/",
    "paginate": "none"
  },
  {
    "operationId": "api_privacy_processing_natures_batch_action_create",
    "domain": "privacy",
    "method": "apiPrivacyProcessingNaturesBatchActionCreate",
    "http": "POST",
    "path": "/api/privacy/processing-natures/batch-action/",
    "paginate": "none"
  },
  {
    "operationId": "api_privacy_processings_list",
    "domain": "privacy",
    "method": "apiPrivacyProcessingsList",
    "http": "GET",
    "path": "/api/privacy/processings/",
    "paginate": "page"
  },
  {
    "operationId": "api_privacy_processings_create",
    "domain": "privacy",
    "method": "apiPrivacyProcessingsCreate",
    "http": "POST",
    "path": "/api/privacy/processings/",
    "paginate": "none"
  },
  {
    "operationId": "api_privacy_processings_retrieve",
    "domain": "privacy",
    "method": "apiPrivacyProcessingsRetrieve",
    "http": "GET",
    "path": "/api/privacy/processings/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_privacy_processings_update",
    "domain": "privacy",
    "method": "apiPrivacyProcessingsUpdate",
    "http": "PUT",
    "path": "/api/privacy/processings/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_privacy_processings_partial_update",
    "domain": "privacy",
    "method": "apiPrivacyProcessingsPartialUpdate",
    "http": "PATCH",
    "path": "/api/privacy/processings/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_privacy_processings_destroy",
    "domain": "privacy",
    "method": "apiPrivacyProcessingsDestroy",
    "http": "DELETE",
    "path": "/api/privacy/processings/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_privacy_processings_cascade_info_retrieve",
    "domain": "privacy",
    "method": "apiPrivacyProcessingsCascadeInfoRetrieve",
    "http": "GET",
    "path": "/api/privacy/processings/{id}/cascade-info/",
    "paginate": "none"
  },
  {
    "operationId": "api_privacy_processings_object_retrieve",
    "domain": "privacy",
    "method": "apiPrivacyProcessingsObjectRetrieve",
    "http": "GET",
    "path": "/api/privacy/processings/{id}/object/",
    "paginate": "none"
  },
  {
    "operationId": "api_privacy_processings_agg_metrics_retrieve",
    "domain": "privacy",
    "method": "apiPrivacyProcessingsAggMetricsRetrieve",
    "http": "GET",
    "path": "/api/privacy/processings/agg_metrics/",
    "paginate": "none"
  },
  {
    "operationId": "api_privacy_processings_assigned_to_retrieve",
    "domain": "privacy",
    "method": "apiPrivacyProcessingsAssignedToRetrieve",
    "http": "GET",
    "path": "/api/privacy/processings/assigned_to/",
    "paginate": "none"
  },
  {
    "operationId": "api_privacy_processings_batch_action_create",
    "domain": "privacy",
    "method": "apiPrivacyProcessingsBatchActionCreate",
    "http": "POST",
    "path": "/api/privacy/processings/batch-action/",
    "paginate": "none"
  },
  {
    "operationId": "api_privacy_processings_export_csv_retrieve",
    "domain": "privacy",
    "method": "apiPrivacyProcessingsExportCsvRetrieve",
    "http": "GET",
    "path": "/api/privacy/processings/export_csv/",
    "paginate": "none"
  },
  {
    "operationId": "api_privacy_processings_export_xlsx_retrieve",
    "domain": "privacy",
    "method": "apiPrivacyProcessingsExportXlsxRetrieve",
    "http": "GET",
    "path": "/api/privacy/processings/export_xlsx/",
    "paginate": "none"
  },
  {
    "operationId": "api_privacy_processings_metrics_retrieve",
    "domain": "privacy",
    "method": "apiPrivacyProcessingsMetricsRetrieve",
    "http": "GET",
    "path": "/api/privacy/processings/metrics/",
    "paginate": "none"
  },
  {
    "operationId": "api_privacy_processings_status_retrieve",
    "domain": "privacy",
    "method": "apiPrivacyProcessingsStatusRetrieve",
    "http": "GET",
    "path": "/api/privacy/processings/status/",
    "paginate": "none"
  },
  {
    "operationId": "api_privacy_purposes_list",
    "domain": "privacy",
    "method": "apiPrivacyPurposesList",
    "http": "GET",
    "path": "/api/privacy/purposes/",
    "paginate": "page"
  },
  {
    "operationId": "api_privacy_purposes_create",
    "domain": "privacy",
    "method": "apiPrivacyPurposesCreate",
    "http": "POST",
    "path": "/api/privacy/purposes/",
    "paginate": "none"
  },
  {
    "operationId": "api_privacy_purposes_retrieve",
    "domain": "privacy",
    "method": "apiPrivacyPurposesRetrieve",
    "http": "GET",
    "path": "/api/privacy/purposes/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_privacy_purposes_update",
    "domain": "privacy",
    "method": "apiPrivacyPurposesUpdate",
    "http": "PUT",
    "path": "/api/privacy/purposes/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_privacy_purposes_partial_update",
    "domain": "privacy",
    "method": "apiPrivacyPurposesPartialUpdate",
    "http": "PATCH",
    "path": "/api/privacy/purposes/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_privacy_purposes_destroy",
    "domain": "privacy",
    "method": "apiPrivacyPurposesDestroy",
    "http": "DELETE",
    "path": "/api/privacy/purposes/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_privacy_purposes_cascade_info_retrieve",
    "domain": "privacy",
    "method": "apiPrivacyPurposesCascadeInfoRetrieve",
    "http": "GET",
    "path": "/api/privacy/purposes/{id}/cascade-info/",
    "paginate": "none"
  },
  {
    "operationId": "api_privacy_purposes_object_retrieve",
    "domain": "privacy",
    "method": "apiPrivacyPurposesObjectRetrieve",
    "http": "GET",
    "path": "/api/privacy/purposes/{id}/object/",
    "paginate": "none"
  },
  {
    "operationId": "api_privacy_purposes_article_9_condition_retrieve",
    "domain": "privacy",
    "method": "apiPrivacyPurposesArticle_9ConditionRetrieve",
    "http": "GET",
    "path": "/api/privacy/purposes/article_9_condition/",
    "paginate": "none"
  },
  {
    "operationId": "api_privacy_purposes_batch_action_create",
    "domain": "privacy",
    "method": "apiPrivacyPurposesBatchActionCreate",
    "http": "POST",
    "path": "/api/privacy/purposes/batch-action/",
    "paginate": "none"
  },
  {
    "operationId": "api_privacy_purposes_legal_basis_retrieve",
    "domain": "privacy",
    "method": "apiPrivacyPurposesLegalBasisRetrieve",
    "http": "GET",
    "path": "/api/privacy/purposes/legal_basis/",
    "paginate": "none"
  },
  {
    "operationId": "api_privacy_right_requests_list",
    "domain": "privacy",
    "method": "apiPrivacyRightRequestsList",
    "http": "GET",
    "path": "/api/privacy/right-requests/",
    "paginate": "page"
  },
  {
    "operationId": "api_privacy_right_requests_create",
    "domain": "privacy",
    "method": "apiPrivacyRightRequestsCreate",
    "http": "POST",
    "path": "/api/privacy/right-requests/",
    "paginate": "none"
  },
  {
    "operationId": "api_privacy_right_requests_retrieve",
    "domain": "privacy",
    "method": "apiPrivacyRightRequestsRetrieve",
    "http": "GET",
    "path": "/api/privacy/right-requests/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_privacy_right_requests_update",
    "domain": "privacy",
    "method": "apiPrivacyRightRequestsUpdate",
    "http": "PUT",
    "path": "/api/privacy/right-requests/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_privacy_right_requests_partial_update",
    "domain": "privacy",
    "method": "apiPrivacyRightRequestsPartialUpdate",
    "http": "PATCH",
    "path": "/api/privacy/right-requests/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_privacy_right_requests_destroy",
    "domain": "privacy",
    "method": "apiPrivacyRightRequestsDestroy",
    "http": "DELETE",
    "path": "/api/privacy/right-requests/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_privacy_right_requests_cascade_info_retrieve",
    "domain": "privacy",
    "method": "apiPrivacyRightRequestsCascadeInfoRetrieve",
    "http": "GET",
    "path": "/api/privacy/right-requests/{id}/cascade-info/",
    "paginate": "none"
  },
  {
    "operationId": "api_privacy_right_requests_object_retrieve",
    "domain": "privacy",
    "method": "apiPrivacyRightRequestsObjectRetrieve",
    "http": "GET",
    "path": "/api/privacy/right-requests/{id}/object/",
    "paginate": "none"
  },
  {
    "operationId": "api_privacy_right_requests_batch_action_create",
    "domain": "privacy",
    "method": "apiPrivacyRightRequestsBatchActionCreate",
    "http": "POST",
    "path": "/api/privacy/right-requests/batch-action/",
    "paginate": "none"
  },
  {
    "operationId": "api_privacy_right_requests_owner_retrieve",
    "domain": "privacy",
    "method": "apiPrivacyRightRequestsOwnerRetrieve",
    "http": "GET",
    "path": "/api/privacy/right-requests/owner/",
    "paginate": "none"
  },
  {
    "operationId": "api_privacy_right_requests_request_type_retrieve",
    "domain": "privacy",
    "method": "apiPrivacyRightRequestsRequestTypeRetrieve",
    "http": "GET",
    "path": "/api/privacy/right-requests/request_type/",
    "paginate": "none"
  },
  {
    "operationId": "api_privacy_right_requests_status_retrieve",
    "domain": "privacy",
    "method": "apiPrivacyRightRequestsStatusRetrieve",
    "http": "GET",
    "path": "/api/privacy/right-requests/status/",
    "paginate": "none"
  },
  {
    "operationId": "api_pmbok_accreditations_list",
    "domain": "resilience",
    "method": "apiPmbokAccreditationsList",
    "http": "GET",
    "path": "/api/pmbok/accreditations/",
    "paginate": "page"
  },
  {
    "operationId": "api_pmbok_accreditations_create",
    "domain": "resilience",
    "method": "apiPmbokAccreditationsCreate",
    "http": "POST",
    "path": "/api/pmbok/accreditations/",
    "paginate": "none"
  },
  {
    "operationId": "api_pmbok_accreditations_retrieve",
    "domain": "resilience",
    "method": "apiPmbokAccreditationsRetrieve",
    "http": "GET",
    "path": "/api/pmbok/accreditations/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_pmbok_accreditations_update",
    "domain": "resilience",
    "method": "apiPmbokAccreditationsUpdate",
    "http": "PUT",
    "path": "/api/pmbok/accreditations/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_pmbok_accreditations_partial_update",
    "domain": "resilience",
    "method": "apiPmbokAccreditationsPartialUpdate",
    "http": "PATCH",
    "path": "/api/pmbok/accreditations/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_pmbok_accreditations_destroy",
    "domain": "resilience",
    "method": "apiPmbokAccreditationsDestroy",
    "http": "DELETE",
    "path": "/api/pmbok/accreditations/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_pmbok_accreditations_cascade_info_retrieve",
    "domain": "resilience",
    "method": "apiPmbokAccreditationsCascadeInfoRetrieve",
    "http": "GET",
    "path": "/api/pmbok/accreditations/{id}/cascade-info/",
    "paginate": "none"
  },
  {
    "operationId": "api_pmbok_accreditations_object_retrieve",
    "domain": "resilience",
    "method": "apiPmbokAccreditationsObjectRetrieve",
    "http": "GET",
    "path": "/api/pmbok/accreditations/{id}/object/",
    "paginate": "none"
  },
  {
    "operationId": "api_pmbok_accreditations_batch_action_create",
    "domain": "resilience",
    "method": "apiPmbokAccreditationsBatchActionCreate",
    "http": "POST",
    "path": "/api/pmbok/accreditations/batch-action/",
    "paginate": "none"
  },
  {
    "operationId": "api_pmbok_accreditations_category_retrieve",
    "domain": "resilience",
    "method": "apiPmbokAccreditationsCategoryRetrieve",
    "http": "GET",
    "path": "/api/pmbok/accreditations/category/",
    "paginate": "none"
  },
  {
    "operationId": "api_pmbok_accreditations_status_retrieve",
    "domain": "resilience",
    "method": "apiPmbokAccreditationsStatusRetrieve",
    "http": "GET",
    "path": "/api/pmbok/accreditations/status/",
    "paginate": "none"
  },
  {
    "operationId": "api_pmbok_generic_collections_list",
    "domain": "resilience",
    "method": "apiPmbokGenericCollectionsList",
    "http": "GET",
    "path": "/api/pmbok/generic-collections/",
    "paginate": "page"
  },
  {
    "operationId": "api_pmbok_generic_collections_create",
    "domain": "resilience",
    "method": "apiPmbokGenericCollectionsCreate",
    "http": "POST",
    "path": "/api/pmbok/generic-collections/",
    "paginate": "none"
  },
  {
    "operationId": "api_pmbok_generic_collections_retrieve",
    "domain": "resilience",
    "method": "apiPmbokGenericCollectionsRetrieve",
    "http": "GET",
    "path": "/api/pmbok/generic-collections/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_pmbok_generic_collections_update",
    "domain": "resilience",
    "method": "apiPmbokGenericCollectionsUpdate",
    "http": "PUT",
    "path": "/api/pmbok/generic-collections/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_pmbok_generic_collections_partial_update",
    "domain": "resilience",
    "method": "apiPmbokGenericCollectionsPartialUpdate",
    "http": "PATCH",
    "path": "/api/pmbok/generic-collections/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_pmbok_generic_collections_destroy",
    "domain": "resilience",
    "method": "apiPmbokGenericCollectionsDestroy",
    "http": "DELETE",
    "path": "/api/pmbok/generic-collections/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_pmbok_generic_collections_cascade_info_retrieve",
    "domain": "resilience",
    "method": "apiPmbokGenericCollectionsCascadeInfoRetrieve",
    "http": "GET",
    "path": "/api/pmbok/generic-collections/{id}/cascade-info/",
    "paginate": "none"
  },
  {
    "operationId": "api_pmbok_generic_collections_object_retrieve",
    "domain": "resilience",
    "method": "apiPmbokGenericCollectionsObjectRetrieve",
    "http": "GET",
    "path": "/api/pmbok/generic-collections/{id}/object/",
    "paginate": "none"
  },
  {
    "operationId": "api_pmbok_generic_collections_batch_action_create",
    "domain": "resilience",
    "method": "apiPmbokGenericCollectionsBatchActionCreate",
    "http": "POST",
    "path": "/api/pmbok/generic-collections/batch-action/",
    "paginate": "none"
  },
  {
    "operationId": "api_pmbok_generic_collections_status_retrieve",
    "domain": "resilience",
    "method": "apiPmbokGenericCollectionsStatusRetrieve",
    "http": "GET",
    "path": "/api/pmbok/generic-collections/status/",
    "paginate": "none"
  },
  {
    "operationId": "api_pmbok_projects_list",
    "domain": "resilience",
    "method": "apiPmbokProjectsList",
    "http": "GET",
    "path": "/api/pmbok/projects/",
    "paginate": "page"
  },
  {
    "operationId": "api_pmbok_projects_create",
    "domain": "resilience",
    "method": "apiPmbokProjectsCreate",
    "http": "POST",
    "path": "/api/pmbok/projects/",
    "paginate": "none"
  },
  {
    "operationId": "api_pmbok_projects_retrieve",
    "domain": "resilience",
    "method": "apiPmbokProjectsRetrieve",
    "http": "GET",
    "path": "/api/pmbok/projects/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_pmbok_projects_update",
    "domain": "resilience",
    "method": "apiPmbokProjectsUpdate",
    "http": "PUT",
    "path": "/api/pmbok/projects/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_pmbok_projects_partial_update",
    "domain": "resilience",
    "method": "apiPmbokProjectsPartialUpdate",
    "http": "PATCH",
    "path": "/api/pmbok/projects/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_pmbok_projects_destroy",
    "domain": "resilience",
    "method": "apiPmbokProjectsDestroy",
    "http": "DELETE",
    "path": "/api/pmbok/projects/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_pmbok_projects_cascade_info_retrieve",
    "domain": "resilience",
    "method": "apiPmbokProjectsCascadeInfoRetrieve",
    "http": "GET",
    "path": "/api/pmbok/projects/{id}/cascade-info/",
    "paginate": "none"
  },
  {
    "operationId": "api_pmbok_projects_object_retrieve",
    "domain": "resilience",
    "method": "apiPmbokProjectsObjectRetrieve",
    "http": "GET",
    "path": "/api/pmbok/projects/{id}/object/",
    "paginate": "none"
  },
  {
    "operationId": "api_pmbok_projects_batch_action_create",
    "domain": "resilience",
    "method": "apiPmbokProjectsBatchActionCreate",
    "http": "POST",
    "path": "/api/pmbok/projects/batch-action/",
    "paginate": "none"
  },
  {
    "operationId": "api_pmbok_projects_currencies_retrieve",
    "domain": "resilience",
    "method": "apiPmbokProjectsCurrenciesRetrieve",
    "http": "GET",
    "path": "/api/pmbok/projects/currencies/",
    "paginate": "none"
  },
  {
    "operationId": "api_pmbok_projects_kind_retrieve",
    "domain": "resilience",
    "method": "apiPmbokProjectsKindRetrieve",
    "http": "GET",
    "path": "/api/pmbok/projects/kind/",
    "paginate": "none"
  },
  {
    "operationId": "api_pmbok_projects_priority_retrieve",
    "domain": "resilience",
    "method": "apiPmbokProjectsPriorityRetrieve",
    "http": "GET",
    "path": "/api/pmbok/projects/priority/",
    "paginate": "none"
  },
  {
    "operationId": "api_pmbok_responsibility_assignments_list",
    "domain": "resilience",
    "method": "apiPmbokResponsibilityAssignmentsList",
    "http": "GET",
    "path": "/api/pmbok/responsibility-assignments/",
    "paginate": "page"
  },
  {
    "operationId": "api_pmbok_responsibility_assignments_retrieve",
    "domain": "resilience",
    "method": "apiPmbokResponsibilityAssignmentsRetrieve",
    "http": "GET",
    "path": "/api/pmbok/responsibility-assignments/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_pmbok_responsibility_assignments_cascade_info_retrieve",
    "domain": "resilience",
    "method": "apiPmbokResponsibilityAssignmentsCascadeInfoRetrieve",
    "http": "GET",
    "path": "/api/pmbok/responsibility-assignments/{id}/cascade-info/",
    "paginate": "none"
  },
  {
    "operationId": "api_pmbok_responsibility_assignments_object_retrieve",
    "domain": "resilience",
    "method": "apiPmbokResponsibilityAssignmentsObjectRetrieve",
    "http": "GET",
    "path": "/api/pmbok/responsibility-assignments/{id}/object/",
    "paginate": "none"
  },
  {
    "operationId": "api_pmbok_responsibility_matrices_list",
    "domain": "resilience",
    "method": "apiPmbokResponsibilityMatricesList",
    "http": "GET",
    "path": "/api/pmbok/responsibility-matrices/",
    "paginate": "page"
  },
  {
    "operationId": "api_pmbok_responsibility_matrices_create",
    "domain": "resilience",
    "method": "apiPmbokResponsibilityMatricesCreate",
    "http": "POST",
    "path": "/api/pmbok/responsibility-matrices/",
    "paginate": "none"
  },
  {
    "operationId": "api_pmbok_responsibility_matrices_retrieve",
    "domain": "resilience",
    "method": "apiPmbokResponsibilityMatricesRetrieve",
    "http": "GET",
    "path": "/api/pmbok/responsibility-matrices/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_pmbok_responsibility_matrices_update",
    "domain": "resilience",
    "method": "apiPmbokResponsibilityMatricesUpdate",
    "http": "PUT",
    "path": "/api/pmbok/responsibility-matrices/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_pmbok_responsibility_matrices_partial_update",
    "domain": "resilience",
    "method": "apiPmbokResponsibilityMatricesPartialUpdate",
    "http": "PATCH",
    "path": "/api/pmbok/responsibility-matrices/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_pmbok_responsibility_matrices_destroy",
    "domain": "resilience",
    "method": "apiPmbokResponsibilityMatricesDestroy",
    "http": "DELETE",
    "path": "/api/pmbok/responsibility-matrices/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_pmbok_responsibility_matrices_cascade_info_retrieve",
    "domain": "resilience",
    "method": "apiPmbokResponsibilityMatricesCascadeInfoRetrieve",
    "http": "GET",
    "path": "/api/pmbok/responsibility-matrices/{id}/cascade-info/",
    "paginate": "none"
  },
  {
    "operationId": "api_pmbok_responsibility_matrices_cycle_cell_create",
    "domain": "resilience",
    "method": "apiPmbokResponsibilityMatricesCycleCellCreate",
    "http": "POST",
    "path": "/api/pmbok/responsibility-matrices/{id}/cycle-cell/",
    "paginate": "none"
  },
  {
    "operationId": "api_pmbok_responsibility_matrices_object_retrieve",
    "domain": "resilience",
    "method": "apiPmbokResponsibilityMatricesObjectRetrieve",
    "http": "GET",
    "path": "/api/pmbok/responsibility-matrices/{id}/object/",
    "paginate": "none"
  },
  {
    "operationId": "api_pmbok_responsibility_matrices_reorder_activities_create",
    "domain": "resilience",
    "method": "apiPmbokResponsibilityMatricesReorderActivitiesCreate",
    "http": "POST",
    "path": "/api/pmbok/responsibility-matrices/{id}/reorder-activities/",
    "paginate": "none"
  },
  {
    "operationId": "api_pmbok_responsibility_matrices_reorder_actors_create",
    "domain": "resilience",
    "method": "apiPmbokResponsibilityMatricesReorderActorsCreate",
    "http": "POST",
    "path": "/api/pmbok/responsibility-matrices/{id}/reorder-actors/",
    "paginate": "none"
  },
  {
    "operationId": "api_pmbok_responsibility_matrices_batch_action_create",
    "domain": "resilience",
    "method": "apiPmbokResponsibilityMatricesBatchActionCreate",
    "http": "POST",
    "path": "/api/pmbok/responsibility-matrices/batch-action/",
    "paginate": "none"
  },
  {
    "operationId": "api_pmbok_responsibility_matrices_preset_retrieve",
    "domain": "resilience",
    "method": "apiPmbokResponsibilityMatricesPresetRetrieve",
    "http": "GET",
    "path": "/api/pmbok/responsibility-matrices/preset/",
    "paginate": "none"
  },
  {
    "operationId": "api_pmbok_responsibility_matrix_activities_list",
    "domain": "resilience",
    "method": "apiPmbokResponsibilityMatrixActivitiesList",
    "http": "GET",
    "path": "/api/pmbok/responsibility-matrix-activities/",
    "paginate": "page"
  },
  {
    "operationId": "api_pmbok_responsibility_matrix_activities_create",
    "domain": "resilience",
    "method": "apiPmbokResponsibilityMatrixActivitiesCreate",
    "http": "POST",
    "path": "/api/pmbok/responsibility-matrix-activities/",
    "paginate": "none"
  },
  {
    "operationId": "api_pmbok_responsibility_matrix_activities_retrieve",
    "domain": "resilience",
    "method": "apiPmbokResponsibilityMatrixActivitiesRetrieve",
    "http": "GET",
    "path": "/api/pmbok/responsibility-matrix-activities/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_pmbok_responsibility_matrix_activities_update",
    "domain": "resilience",
    "method": "apiPmbokResponsibilityMatrixActivitiesUpdate",
    "http": "PUT",
    "path": "/api/pmbok/responsibility-matrix-activities/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_pmbok_responsibility_matrix_activities_partial_update",
    "domain": "resilience",
    "method": "apiPmbokResponsibilityMatrixActivitiesPartialUpdate",
    "http": "PATCH",
    "path": "/api/pmbok/responsibility-matrix-activities/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_pmbok_responsibility_matrix_activities_destroy",
    "domain": "resilience",
    "method": "apiPmbokResponsibilityMatrixActivitiesDestroy",
    "http": "DELETE",
    "path": "/api/pmbok/responsibility-matrix-activities/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_pmbok_responsibility_matrix_activities_cascade_info_retrieve",
    "domain": "resilience",
    "method": "apiPmbokResponsibilityMatrixActivitiesCascadeInfoRetrieve",
    "http": "GET",
    "path": "/api/pmbok/responsibility-matrix-activities/{id}/cascade-info/",
    "paginate": "none"
  },
  {
    "operationId": "api_pmbok_responsibility_matrix_activities_object_retrieve",
    "domain": "resilience",
    "method": "apiPmbokResponsibilityMatrixActivitiesObjectRetrieve",
    "http": "GET",
    "path": "/api/pmbok/responsibility-matrix-activities/{id}/object/",
    "paginate": "none"
  },
  {
    "operationId": "api_pmbok_responsibility_matrix_activities_batch_action_create",
    "domain": "resilience",
    "method": "apiPmbokResponsibilityMatrixActivitiesBatchActionCreate",
    "http": "POST",
    "path": "/api/pmbok/responsibility-matrix-activities/batch-action/",
    "paginate": "none"
  },
  {
    "operationId": "api_pmbok_responsibility_matrix_actors_list",
    "domain": "resilience",
    "method": "apiPmbokResponsibilityMatrixActorsList",
    "http": "GET",
    "path": "/api/pmbok/responsibility-matrix-actors/",
    "paginate": "page"
  },
  {
    "operationId": "api_pmbok_responsibility_matrix_actors_create",
    "domain": "resilience",
    "method": "apiPmbokResponsibilityMatrixActorsCreate",
    "http": "POST",
    "path": "/api/pmbok/responsibility-matrix-actors/",
    "paginate": "none"
  },
  {
    "operationId": "api_pmbok_responsibility_matrix_actors_retrieve",
    "domain": "resilience",
    "method": "apiPmbokResponsibilityMatrixActorsRetrieve",
    "http": "GET",
    "path": "/api/pmbok/responsibility-matrix-actors/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_pmbok_responsibility_matrix_actors_update",
    "domain": "resilience",
    "method": "apiPmbokResponsibilityMatrixActorsUpdate",
    "http": "PUT",
    "path": "/api/pmbok/responsibility-matrix-actors/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_pmbok_responsibility_matrix_actors_partial_update",
    "domain": "resilience",
    "method": "apiPmbokResponsibilityMatrixActorsPartialUpdate",
    "http": "PATCH",
    "path": "/api/pmbok/responsibility-matrix-actors/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_pmbok_responsibility_matrix_actors_destroy",
    "domain": "resilience",
    "method": "apiPmbokResponsibilityMatrixActorsDestroy",
    "http": "DELETE",
    "path": "/api/pmbok/responsibility-matrix-actors/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_pmbok_responsibility_matrix_actors_cascade_info_retrieve",
    "domain": "resilience",
    "method": "apiPmbokResponsibilityMatrixActorsCascadeInfoRetrieve",
    "http": "GET",
    "path": "/api/pmbok/responsibility-matrix-actors/{id}/cascade-info/",
    "paginate": "none"
  },
  {
    "operationId": "api_pmbok_responsibility_matrix_actors_object_retrieve",
    "domain": "resilience",
    "method": "apiPmbokResponsibilityMatrixActorsObjectRetrieve",
    "http": "GET",
    "path": "/api/pmbok/responsibility-matrix-actors/{id}/object/",
    "paginate": "none"
  },
  {
    "operationId": "api_pmbok_responsibility_matrix_actors_batch_action_create",
    "domain": "resilience",
    "method": "apiPmbokResponsibilityMatrixActorsBatchActionCreate",
    "http": "POST",
    "path": "/api/pmbok/responsibility-matrix-actors/batch-action/",
    "paginate": "none"
  },
  {
    "operationId": "api_pmbok_responsibility_roles_list",
    "domain": "resilience",
    "method": "apiPmbokResponsibilityRolesList",
    "http": "GET",
    "path": "/api/pmbok/responsibility-roles/",
    "paginate": "page"
  },
  {
    "operationId": "api_pmbok_responsibility_roles_retrieve",
    "domain": "resilience",
    "method": "apiPmbokResponsibilityRolesRetrieve",
    "http": "GET",
    "path": "/api/pmbok/responsibility-roles/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_pmbok_responsibility_roles_cascade_info_retrieve",
    "domain": "resilience",
    "method": "apiPmbokResponsibilityRolesCascadeInfoRetrieve",
    "http": "GET",
    "path": "/api/pmbok/responsibility-roles/{id}/cascade-info/",
    "paginate": "none"
  },
  {
    "operationId": "api_pmbok_responsibility_roles_object_retrieve",
    "domain": "resilience",
    "method": "apiPmbokResponsibilityRolesObjectRetrieve",
    "http": "GET",
    "path": "/api/pmbok/responsibility-roles/{id}/object/",
    "paginate": "none"
  },
  {
    "operationId": "api_pmbok_responsibility_roles_taxonomy_retrieve",
    "domain": "resilience",
    "method": "apiPmbokResponsibilityRolesTaxonomyRetrieve",
    "http": "GET",
    "path": "/api/pmbok/responsibility-roles/taxonomy/",
    "paginate": "none"
  },
  {
    "operationId": "api_resilience_asset_assessments_list",
    "domain": "resilience",
    "method": "apiResilienceAssetAssessmentsList",
    "http": "GET",
    "path": "/api/resilience/asset-assessments/",
    "paginate": "page"
  },
  {
    "operationId": "api_resilience_asset_assessments_create",
    "domain": "resilience",
    "method": "apiResilienceAssetAssessmentsCreate",
    "http": "POST",
    "path": "/api/resilience/asset-assessments/",
    "paginate": "none"
  },
  {
    "operationId": "api_resilience_asset_assessments_retrieve",
    "domain": "resilience",
    "method": "apiResilienceAssetAssessmentsRetrieve",
    "http": "GET",
    "path": "/api/resilience/asset-assessments/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_resilience_asset_assessments_update",
    "domain": "resilience",
    "method": "apiResilienceAssetAssessmentsUpdate",
    "http": "PUT",
    "path": "/api/resilience/asset-assessments/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_resilience_asset_assessments_partial_update",
    "domain": "resilience",
    "method": "apiResilienceAssetAssessmentsPartialUpdate",
    "http": "PATCH",
    "path": "/api/resilience/asset-assessments/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_resilience_asset_assessments_destroy",
    "domain": "resilience",
    "method": "apiResilienceAssetAssessmentsDestroy",
    "http": "DELETE",
    "path": "/api/resilience/asset-assessments/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_resilience_asset_assessments_cascade_info_retrieve",
    "domain": "resilience",
    "method": "apiResilienceAssetAssessmentsCascadeInfoRetrieve",
    "http": "GET",
    "path": "/api/resilience/asset-assessments/{id}/cascade-info/",
    "paginate": "none"
  },
  {
    "operationId": "api_resilience_asset_assessments_dependency_graph_retrieve",
    "domain": "resilience",
    "method": "apiResilienceAssetAssessmentsDependencyGraphRetrieve",
    "http": "GET",
    "path": "/api/resilience/asset-assessments/{id}/dependency-graph/",
    "paginate": "none"
  },
  {
    "operationId": "api_resilience_asset_assessments_metrics_retrieve",
    "domain": "resilience",
    "method": "apiResilienceAssetAssessmentsMetricsRetrieve",
    "http": "GET",
    "path": "/api/resilience/asset-assessments/{id}/metrics/",
    "paginate": "none"
  },
  {
    "operationId": "api_resilience_asset_assessments_object_retrieve",
    "domain": "resilience",
    "method": "apiResilienceAssetAssessmentsObjectRetrieve",
    "http": "GET",
    "path": "/api/resilience/asset-assessments/{id}/object/",
    "paginate": "none"
  },
  {
    "operationId": "api_resilience_asset_assessments_quali_impact_retrieve",
    "domain": "resilience",
    "method": "apiResilienceAssetAssessmentsQualiImpactRetrieve",
    "http": "GET",
    "path": "/api/resilience/asset-assessments/{id}/quali_impact/",
    "paginate": "none"
  },
  {
    "operationId": "api_resilience_asset_assessments_risk_matrix_retrieve",
    "domain": "resilience",
    "method": "apiResilienceAssetAssessmentsRiskMatrixRetrieve",
    "http": "GET",
    "path": "/api/resilience/asset-assessments/{id}/risk-matrix/",
    "paginate": "none"
  },
  {
    "operationId": "api_resilience_asset_assessments_batch_action_create",
    "domain": "resilience",
    "method": "apiResilienceAssetAssessmentsBatchActionCreate",
    "http": "POST",
    "path": "/api/resilience/asset-assessments/batch-action/",
    "paginate": "none"
  },
  {
    "operationId": "api_resilience_business_impact_analysis_list",
    "domain": "resilience",
    "method": "apiResilienceBusinessImpactAnalysisList",
    "http": "GET",
    "path": "/api/resilience/business-impact-analysis/",
    "paginate": "page"
  },
  {
    "operationId": "api_resilience_business_impact_analysis_create",
    "domain": "resilience",
    "method": "apiResilienceBusinessImpactAnalysisCreate",
    "http": "POST",
    "path": "/api/resilience/business-impact-analysis/",
    "paginate": "none"
  },
  {
    "operationId": "api_resilience_business_impact_analysis_retrieve",
    "domain": "resilience",
    "method": "apiResilienceBusinessImpactAnalysisRetrieve",
    "http": "GET",
    "path": "/api/resilience/business-impact-analysis/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_resilience_business_impact_analysis_update",
    "domain": "resilience",
    "method": "apiResilienceBusinessImpactAnalysisUpdate",
    "http": "PUT",
    "path": "/api/resilience/business-impact-analysis/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_resilience_business_impact_analysis_partial_update",
    "domain": "resilience",
    "method": "apiResilienceBusinessImpactAnalysisPartialUpdate",
    "http": "PATCH",
    "path": "/api/resilience/business-impact-analysis/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_resilience_business_impact_analysis_destroy",
    "domain": "resilience",
    "method": "apiResilienceBusinessImpactAnalysisDestroy",
    "http": "DELETE",
    "path": "/api/resilience/business-impact-analysis/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_resilience_business_impact_analysis_build_table_retrieve",
    "domain": "resilience",
    "method": "apiResilienceBusinessImpactAnalysisBuildTableRetrieve",
    "http": "GET",
    "path": "/api/resilience/business-impact-analysis/{id}/build-table/",
    "paginate": "none"
  },
  {
    "operationId": "api_resilience_business_impact_analysis_cascade_info_retrieve",
    "domain": "resilience",
    "method": "apiResilienceBusinessImpactAnalysisCascadeInfoRetrieve",
    "http": "GET",
    "path": "/api/resilience/business-impact-analysis/{id}/cascade-info/",
    "paginate": "none"
  },
  {
    "operationId": "api_resilience_business_impact_analysis_metrics_retrieve",
    "domain": "resilience",
    "method": "apiResilienceBusinessImpactAnalysisMetricsRetrieve",
    "http": "GET",
    "path": "/api/resilience/business-impact-analysis/{id}/metrics/",
    "paginate": "none"
  },
  {
    "operationId": "api_resilience_business_impact_analysis_object_retrieve",
    "domain": "resilience",
    "method": "apiResilienceBusinessImpactAnalysisObjectRetrieve",
    "http": "GET",
    "path": "/api/resilience/business-impact-analysis/{id}/object/",
    "paginate": "none"
  },
  {
    "operationId": "api_resilience_business_impact_analysis_xlsx_retrieve",
    "domain": "resilience",
    "method": "apiResilienceBusinessImpactAnalysisXlsxRetrieve",
    "http": "GET",
    "path": "/api/resilience/business-impact-analysis/{id}/xlsx/",
    "paginate": "none"
  },
  {
    "operationId": "api_resilience_business_impact_analysis_batch_action_create",
    "domain": "resilience",
    "method": "apiResilienceBusinessImpactAnalysisBatchActionCreate",
    "http": "POST",
    "path": "/api/resilience/business-impact-analysis/batch-action/",
    "paginate": "none"
  },
  {
    "operationId": "api_resilience_business_impact_analysis_export_csv_retrieve",
    "domain": "resilience",
    "method": "apiResilienceBusinessImpactAnalysisExportCsvRetrieve",
    "http": "GET",
    "path": "/api/resilience/business-impact-analysis/export_csv/",
    "paginate": "none"
  },
  {
    "operationId": "api_resilience_business_impact_analysis_export_xlsx_retrieve",
    "domain": "resilience",
    "method": "apiResilienceBusinessImpactAnalysisExportXlsxRetrieve",
    "http": "GET",
    "path": "/api/resilience/business-impact-analysis/export_xlsx/",
    "paginate": "none"
  },
  {
    "operationId": "api_resilience_business_impact_analysis_status_retrieve",
    "domain": "resilience",
    "method": "apiResilienceBusinessImpactAnalysisStatusRetrieve",
    "http": "GET",
    "path": "/api/resilience/business-impact-analysis/status/",
    "paginate": "none"
  },
  {
    "operationId": "api_resilience_dora_incident_reports_list",
    "domain": "resilience",
    "method": "apiResilienceDoraIncidentReportsList",
    "http": "GET",
    "path": "/api/resilience/dora-incident-reports/",
    "paginate": "page"
  },
  {
    "operationId": "api_resilience_dora_incident_reports_create",
    "domain": "resilience",
    "method": "apiResilienceDoraIncidentReportsCreate",
    "http": "POST",
    "path": "/api/resilience/dora-incident-reports/",
    "paginate": "none"
  },
  {
    "operationId": "api_resilience_dora_incident_reports_retrieve",
    "domain": "resilience",
    "method": "apiResilienceDoraIncidentReportsRetrieve",
    "http": "GET",
    "path": "/api/resilience/dora-incident-reports/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_resilience_dora_incident_reports_update",
    "domain": "resilience",
    "method": "apiResilienceDoraIncidentReportsUpdate",
    "http": "PUT",
    "path": "/api/resilience/dora-incident-reports/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_resilience_dora_incident_reports_partial_update",
    "domain": "resilience",
    "method": "apiResilienceDoraIncidentReportsPartialUpdate",
    "http": "PATCH",
    "path": "/api/resilience/dora-incident-reports/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_resilience_dora_incident_reports_destroy",
    "domain": "resilience",
    "method": "apiResilienceDoraIncidentReportsDestroy",
    "http": "DELETE",
    "path": "/api/resilience/dora-incident-reports/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_resilience_dora_incident_reports_cascade_info_retrieve",
    "domain": "resilience",
    "method": "apiResilienceDoraIncidentReportsCascadeInfoRetrieve",
    "http": "GET",
    "path": "/api/resilience/dora-incident-reports/{id}/cascade-info/",
    "paginate": "none"
  },
  {
    "operationId": "api_resilience_dora_incident_reports_export_json_retrieve",
    "domain": "resilience",
    "method": "apiResilienceDoraIncidentReportsExportJsonRetrieve",
    "http": "GET",
    "path": "/api/resilience/dora-incident-reports/{id}/export_json/",
    "paginate": "none"
  },
  {
    "operationId": "api_resilience_dora_incident_reports_object_retrieve",
    "domain": "resilience",
    "method": "apiResilienceDoraIncidentReportsObjectRetrieve",
    "http": "GET",
    "path": "/api/resilience/dora-incident-reports/{id}/object/",
    "paginate": "none"
  },
  {
    "operationId": "api_resilience_dora_incident_reports_validate_report_retrieve",
    "domain": "resilience",
    "method": "apiResilienceDoraIncidentReportsValidateReportRetrieve",
    "http": "GET",
    "path": "/api/resilience/dora-incident-reports/{id}/validate_report/",
    "paginate": "none"
  },
  {
    "operationId": "api_resilience_dora_incident_reports_batch_action_create",
    "domain": "resilience",
    "method": "apiResilienceDoraIncidentReportsBatchActionCreate",
    "http": "POST",
    "path": "/api/resilience/dora-incident-reports/batch-action/",
    "paginate": "none"
  },
  {
    "operationId": "api_resilience_dora_incident_reports_classification_criterion_retrieve",
    "domain": "resilience",
    "method": "apiResilienceDoraIncidentReportsClassificationCriterionRetrieve",
    "http": "GET",
    "path": "/api/resilience/dora-incident-reports/classification_criterion/",
    "paginate": "none"
  },
  {
    "operationId": "api_resilience_dora_incident_reports_incident_classification_retrieve",
    "domain": "resilience",
    "method": "apiResilienceDoraIncidentReportsIncidentClassificationRetrieve",
    "http": "GET",
    "path": "/api/resilience/dora-incident-reports/incident_classification/",
    "paginate": "none"
  },
  {
    "operationId": "api_resilience_dora_incident_reports_incident_discovery_retrieve",
    "domain": "resilience",
    "method": "apiResilienceDoraIncidentReportsIncidentDiscoveryRetrieve",
    "http": "GET",
    "path": "/api/resilience/dora-incident-reports/incident_discovery/",
    "paginate": "none"
  },
  {
    "operationId": "api_resilience_dora_incident_reports_incident_submission_retrieve",
    "domain": "resilience",
    "method": "apiResilienceDoraIncidentReportsIncidentSubmissionRetrieve",
    "http": "GET",
    "path": "/api/resilience/dora-incident-reports/incident_submission/",
    "paginate": "none"
  },
  {
    "operationId": "api_resilience_dora_incident_reports_info_duration_service_downtime_actual_or_estimate_retrieve",
    "domain": "resilience",
    "method": "apiResilienceDoraIncidentReportsInfoDurationServiceDowntimeActualOrEstimateRetrieve",
    "http": "GET",
    "path": "/api/resilience/dora-incident-reports/info_duration_service_downtime_actual_or_estimate/",
    "paginate": "none"
  },
  {
    "operationId": "api_resilience_dora_incident_reports_main_entity_retrieve",
    "domain": "resilience",
    "method": "apiResilienceDoraIncidentReportsMainEntityRetrieve",
    "http": "GET",
    "path": "/api/resilience/dora-incident-reports/main_entity/",
    "paginate": "none"
  },
  {
    "operationId": "api_resilience_dora_incident_reports_report_currency_retrieve",
    "domain": "resilience",
    "method": "apiResilienceDoraIncidentReportsReportCurrencyRetrieve",
    "http": "GET",
    "path": "/api/resilience/dora-incident-reports/report_currency/",
    "paginate": "none"
  },
  {
    "operationId": "api_resilience_dora_incident_reports_reporting_authority_retrieve",
    "domain": "resilience",
    "method": "apiResilienceDoraIncidentReportsReportingAuthorityRetrieve",
    "http": "GET",
    "path": "/api/resilience/dora-incident-reports/reporting_authority/",
    "paginate": "none"
  },
  {
    "operationId": "api_resilience_dora_incident_reports_root_cause_additional_retrieve",
    "domain": "resilience",
    "method": "apiResilienceDoraIncidentReportsRootCauseAdditionalRetrieve",
    "http": "GET",
    "path": "/api/resilience/dora-incident-reports/root_cause_additional/",
    "paginate": "none"
  },
  {
    "operationId": "api_resilience_dora_incident_reports_root_cause_detailed_retrieve",
    "domain": "resilience",
    "method": "apiResilienceDoraIncidentReportsRootCauseDetailedRetrieve",
    "http": "GET",
    "path": "/api/resilience/dora-incident-reports/root_cause_detailed/",
    "paginate": "none"
  },
  {
    "operationId": "api_resilience_dora_incident_reports_root_cause_hl_retrieve",
    "domain": "resilience",
    "method": "apiResilienceDoraIncidentReportsRootCauseHlRetrieve",
    "http": "GET",
    "path": "/api/resilience/dora-incident-reports/root_cause_hl/",
    "paginate": "none"
  },
  {
    "operationId": "api_resilience_dora_incident_reports_threat_techniques_retrieve",
    "domain": "resilience",
    "method": "apiResilienceDoraIncidentReportsThreatTechniquesRetrieve",
    "http": "GET",
    "path": "/api/resilience/dora-incident-reports/threat_techniques/",
    "paginate": "none"
  },
  {
    "operationId": "api_resilience_escalation_thresholds_list",
    "domain": "resilience",
    "method": "apiResilienceEscalationThresholdsList",
    "http": "GET",
    "path": "/api/resilience/escalation-thresholds/",
    "paginate": "page"
  },
  {
    "operationId": "api_resilience_escalation_thresholds_create",
    "domain": "resilience",
    "method": "apiResilienceEscalationThresholdsCreate",
    "http": "POST",
    "path": "/api/resilience/escalation-thresholds/",
    "paginate": "none"
  },
  {
    "operationId": "api_resilience_escalation_thresholds_retrieve",
    "domain": "resilience",
    "method": "apiResilienceEscalationThresholdsRetrieve",
    "http": "GET",
    "path": "/api/resilience/escalation-thresholds/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_resilience_escalation_thresholds_update",
    "domain": "resilience",
    "method": "apiResilienceEscalationThresholdsUpdate",
    "http": "PUT",
    "path": "/api/resilience/escalation-thresholds/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_resilience_escalation_thresholds_partial_update",
    "domain": "resilience",
    "method": "apiResilienceEscalationThresholdsPartialUpdate",
    "http": "PATCH",
    "path": "/api/resilience/escalation-thresholds/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_resilience_escalation_thresholds_destroy",
    "domain": "resilience",
    "method": "apiResilienceEscalationThresholdsDestroy",
    "http": "DELETE",
    "path": "/api/resilience/escalation-thresholds/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_resilience_escalation_thresholds_cascade_info_retrieve",
    "domain": "resilience",
    "method": "apiResilienceEscalationThresholdsCascadeInfoRetrieve",
    "http": "GET",
    "path": "/api/resilience/escalation-thresholds/{id}/cascade-info/",
    "paginate": "none"
  },
  {
    "operationId": "api_resilience_escalation_thresholds_object_retrieve",
    "domain": "resilience",
    "method": "apiResilienceEscalationThresholdsObjectRetrieve",
    "http": "GET",
    "path": "/api/resilience/escalation-thresholds/{id}/object/",
    "paginate": "none"
  },
  {
    "operationId": "api_resilience_escalation_thresholds_quali_impact_retrieve",
    "domain": "resilience",
    "method": "apiResilienceEscalationThresholdsQualiImpactRetrieve",
    "http": "GET",
    "path": "/api/resilience/escalation-thresholds/{id}/quali_impact/",
    "paginate": "none"
  },
  {
    "operationId": "api_resilience_escalation_thresholds_risk_matrix_retrieve",
    "domain": "resilience",
    "method": "apiResilienceEscalationThresholdsRiskMatrixRetrieve",
    "http": "GET",
    "path": "/api/resilience/escalation-thresholds/{id}/risk-matrix/",
    "paginate": "none"
  },
  {
    "operationId": "api_resilience_escalation_thresholds_batch_action_create",
    "domain": "resilience",
    "method": "apiResilienceEscalationThresholdsBatchActionCreate",
    "http": "POST",
    "path": "/api/resilience/escalation-thresholds/batch-action/",
    "paginate": "none"
  },
  {
    "operationId": "api_resilience_escalation_thresholds_quant_unit_retrieve",
    "domain": "resilience",
    "method": "apiResilienceEscalationThresholdsQuantUnitRetrieve",
    "http": "GET",
    "path": "/api/resilience/escalation-thresholds/quant_unit/",
    "paginate": "none"
  },
  {
    "operationId": "api_cwes_list",
    "domain": "riskManagement",
    "method": "apiCwesList",
    "http": "GET",
    "path": "/api/cwes/",
    "paginate": "page"
  },
  {
    "operationId": "api_cwes_create",
    "domain": "riskManagement",
    "method": "apiCwesCreate",
    "http": "POST",
    "path": "/api/cwes/",
    "paginate": "none"
  },
  {
    "operationId": "api_cwes_retrieve",
    "domain": "riskManagement",
    "method": "apiCwesRetrieve",
    "http": "GET",
    "path": "/api/cwes/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_cwes_update",
    "domain": "riskManagement",
    "method": "apiCwesUpdate",
    "http": "PUT",
    "path": "/api/cwes/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_cwes_partial_update",
    "domain": "riskManagement",
    "method": "apiCwesPartialUpdate",
    "http": "PATCH",
    "path": "/api/cwes/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_cwes_destroy",
    "domain": "riskManagement",
    "method": "apiCwesDestroy",
    "http": "DELETE",
    "path": "/api/cwes/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_cwes_cascade_info_retrieve",
    "domain": "riskManagement",
    "method": "apiCwesCascadeInfoRetrieve",
    "http": "GET",
    "path": "/api/cwes/{id}/cascade-info/",
    "paginate": "none"
  },
  {
    "operationId": "api_cwes_object_retrieve",
    "domain": "riskManagement",
    "method": "apiCwesObjectRetrieve",
    "http": "GET",
    "path": "/api/cwes/{id}/object/",
    "paginate": "none"
  },
  {
    "operationId": "api_cwes_autocomplete_retrieve",
    "domain": "riskManagement",
    "method": "apiCwesAutocompleteRetrieve",
    "http": "GET",
    "path": "/api/cwes/autocomplete/",
    "paginate": "none"
  },
  {
    "operationId": "api_cwes_batch_action_create",
    "domain": "riskManagement",
    "method": "apiCwesBatchActionCreate",
    "http": "POST",
    "path": "/api/cwes/batch-action/",
    "paginate": "none"
  },
  {
    "operationId": "api_cwes_sync_catalog_create",
    "domain": "riskManagement",
    "method": "apiCwesSyncCatalogCreate",
    "http": "POST",
    "path": "/api/cwes/sync-catalog/",
    "paginate": "none"
  },
  {
    "operationId": "api_risk_acceptances_list",
    "domain": "riskManagement",
    "method": "apiRiskAcceptancesList",
    "http": "GET",
    "path": "/api/risk-acceptances/",
    "paginate": "page"
  },
  {
    "operationId": "api_risk_acceptances_create",
    "domain": "riskManagement",
    "method": "apiRiskAcceptancesCreate",
    "http": "POST",
    "path": "/api/risk-acceptances/",
    "paginate": "none"
  },
  {
    "operationId": "api_risk_acceptances_retrieve",
    "domain": "riskManagement",
    "method": "apiRiskAcceptancesRetrieve",
    "http": "GET",
    "path": "/api/risk-acceptances/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_risk_acceptances_update",
    "domain": "riskManagement",
    "method": "apiRiskAcceptancesUpdate",
    "http": "PUT",
    "path": "/api/risk-acceptances/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_risk_acceptances_partial_update",
    "domain": "riskManagement",
    "method": "apiRiskAcceptancesPartialUpdate",
    "http": "PATCH",
    "path": "/api/risk-acceptances/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_risk_acceptances_destroy",
    "domain": "riskManagement",
    "method": "apiRiskAcceptancesDestroy",
    "http": "DELETE",
    "path": "/api/risk-acceptances/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_risk_acceptances_accept_create",
    "domain": "riskManagement",
    "method": "apiRiskAcceptancesAcceptCreate",
    "http": "POST",
    "path": "/api/risk-acceptances/{id}/accept/",
    "paginate": "none"
  },
  {
    "operationId": "api_risk_acceptances_cascade_info_retrieve",
    "domain": "riskManagement",
    "method": "apiRiskAcceptancesCascadeInfoRetrieve",
    "http": "GET",
    "path": "/api/risk-acceptances/{id}/cascade-info/",
    "paginate": "none"
  },
  {
    "operationId": "api_risk_acceptances_draft_create",
    "domain": "riskManagement",
    "method": "apiRiskAcceptancesDraftCreate",
    "http": "POST",
    "path": "/api/risk-acceptances/{id}/draft/",
    "paginate": "none"
  },
  {
    "operationId": "api_risk_acceptances_object_retrieve",
    "domain": "riskManagement",
    "method": "apiRiskAcceptancesObjectRetrieve",
    "http": "GET",
    "path": "/api/risk-acceptances/{id}/object/",
    "paginate": "none"
  },
  {
    "operationId": "api_risk_acceptances_reject_create",
    "domain": "riskManagement",
    "method": "apiRiskAcceptancesRejectCreate",
    "http": "POST",
    "path": "/api/risk-acceptances/{id}/reject/",
    "paginate": "none"
  },
  {
    "operationId": "api_risk_acceptances_revoke_create",
    "domain": "riskManagement",
    "method": "apiRiskAcceptancesRevokeCreate",
    "http": "POST",
    "path": "/api/risk-acceptances/{id}/revoke/",
    "paginate": "none"
  },
  {
    "operationId": "api_risk_acceptances_submit_create",
    "domain": "riskManagement",
    "method": "apiRiskAcceptancesSubmitCreate",
    "http": "POST",
    "path": "/api/risk-acceptances/{id}/submit/",
    "paginate": "none"
  },
  {
    "operationId": "api_risk_acceptances_batch_action_create",
    "domain": "riskManagement",
    "method": "apiRiskAcceptancesBatchActionCreate",
    "http": "POST",
    "path": "/api/risk-acceptances/batch-action/",
    "paginate": "none"
  },
  {
    "operationId": "api_risk_acceptances_state_retrieve",
    "domain": "riskManagement",
    "method": "apiRiskAcceptancesStateRetrieve",
    "http": "GET",
    "path": "/api/risk-acceptances/state/",
    "paginate": "none"
  },
  {
    "operationId": "api_risk_acceptances_to_review_retrieve",
    "domain": "riskManagement",
    "method": "apiRiskAcceptancesToReviewRetrieve",
    "http": "GET",
    "path": "/api/risk-acceptances/to_review/",
    "paginate": "none"
  },
  {
    "operationId": "api_risk_acceptances_waiting_retrieve",
    "domain": "riskManagement",
    "method": "apiRiskAcceptancesWaitingRetrieve",
    "http": "GET",
    "path": "/api/risk-acceptances/waiting/",
    "paginate": "none"
  },
  {
    "operationId": "api_risk_assessments_list",
    "domain": "riskManagement",
    "method": "apiRiskAssessmentsList",
    "http": "GET",
    "path": "/api/risk-assessments/",
    "paginate": "page"
  },
  {
    "operationId": "api_risk_assessments_create",
    "domain": "riskManagement",
    "method": "apiRiskAssessmentsCreate",
    "http": "POST",
    "path": "/api/risk-assessments/",
    "paginate": "none"
  },
  {
    "operationId": "api_risk_assessments_retrieve",
    "domain": "riskManagement",
    "method": "apiRiskAssessmentsRetrieve",
    "http": "GET",
    "path": "/api/risk-assessments/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_risk_assessments_update",
    "domain": "riskManagement",
    "method": "apiRiskAssessmentsUpdate",
    "http": "PUT",
    "path": "/api/risk-assessments/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_risk_assessments_partial_update",
    "domain": "riskManagement",
    "method": "apiRiskAssessmentsPartialUpdate",
    "http": "PATCH",
    "path": "/api/risk-assessments/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_risk_assessments_destroy",
    "domain": "riskManagement",
    "method": "apiRiskAssessmentsDestroy",
    "http": "DELETE",
    "path": "/api/risk-assessments/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_risk_assessments_action_plan_list",
    "domain": "riskManagement",
    "method": "apiRiskAssessmentsActionPlanList",
    "http": "GET",
    "path": "/api/risk-assessments/{id}/action-plan/",
    "paginate": "page"
  },
  {
    "operationId": "api_risk_assessments_action_plan_budget_overview_list",
    "domain": "riskManagement",
    "method": "apiRiskAssessmentsActionPlanBudgetOverviewList",
    "http": "GET",
    "path": "/api/risk-assessments/{id}/action-plan/budget-overview/",
    "paginate": "page"
  },
  {
    "operationId": "api_risk_assessments_action_plan_excel_retrieve",
    "domain": "riskManagement",
    "method": "apiRiskAssessmentsActionPlanExcelRetrieve",
    "http": "GET",
    "path": "/api/risk-assessments/{id}/action_plan_excel/",
    "paginate": "none"
  },
  {
    "operationId": "api_risk_assessments_action_plan_pdf_retrieve",
    "domain": "riskManagement",
    "method": "apiRiskAssessmentsActionPlanPdfRetrieve",
    "http": "GET",
    "path": "/api/risk-assessments/{id}/action_plan_pdf/",
    "paginate": "none"
  },
  {
    "operationId": "api_risk_assessments_cascade_info_retrieve",
    "domain": "riskManagement",
    "method": "apiRiskAssessmentsCascadeInfoRetrieve",
    "http": "GET",
    "path": "/api/risk-assessments/{id}/cascade-info/",
    "paginate": "none"
  },
  {
    "operationId": "api_risk_assessments_convert_to_quantitative_create",
    "domain": "riskManagement",
    "method": "apiRiskAssessmentsConvertToQuantitativeCreate",
    "http": "POST",
    "path": "/api/risk-assessments/{id}/convert_to_quantitative/",
    "paginate": "none"
  },
  {
    "operationId": "api_risk_assessments_duplicate_create",
    "domain": "riskManagement",
    "method": "apiRiskAssessmentsDuplicateCreate",
    "http": "POST",
    "path": "/api/risk-assessments/{id}/duplicate/",
    "paginate": "none"
  },
  {
    "operationId": "api_risk_assessments_object_retrieve",
    "domain": "riskManagement",
    "method": "apiRiskAssessmentsObjectRetrieve",
    "http": "GET",
    "path": "/api/risk-assessments/{id}/object/",
    "paginate": "none"
  },
  {
    "operationId": "api_risk_assessments_quality_check_retrieve_2",
    "domain": "riskManagement",
    "method": "apiRiskAssessmentsQualityCheckRetrieve_2",
    "http": "GET",
    "path": "/api/risk-assessments/{id}/quality_check/",
    "paginate": "none"
  },
  {
    "operationId": "api_risk_assessments_risk_analytics_retrieve",
    "domain": "riskManagement",
    "method": "apiRiskAssessmentsRiskAnalyticsRetrieve",
    "http": "GET",
    "path": "/api/risk-assessments/{id}/risk_analytics/",
    "paginate": "none"
  },
  {
    "operationId": "api_risk_assessments_risk_assessment_csv_retrieve",
    "domain": "riskManagement",
    "method": "apiRiskAssessmentsRiskAssessmentCsvRetrieve",
    "http": "GET",
    "path": "/api/risk-assessments/{id}/risk_assessment_csv/",
    "paginate": "none"
  },
  {
    "operationId": "api_risk_assessments_risk_assessment_pdf_retrieve",
    "domain": "riskManagement",
    "method": "apiRiskAssessmentsRiskAssessmentPdfRetrieve",
    "http": "GET",
    "path": "/api/risk-assessments/{id}/risk_assessment_pdf/",
    "paginate": "none"
  },
  {
    "operationId": "api_risk_assessments_risk_assessment_xlsx_retrieve",
    "domain": "riskManagement",
    "method": "apiRiskAssessmentsRiskAssessmentXlsxRetrieve",
    "http": "GET",
    "path": "/api/risk-assessments/{id}/risk_assessment_xlsx/",
    "paginate": "none"
  },
  {
    "operationId": "api_risk_assessments_risk_timeline_retrieve",
    "domain": "riskManagement",
    "method": "apiRiskAssessmentsRiskTimelineRetrieve",
    "http": "GET",
    "path": "/api/risk-assessments/{id}/risk_timeline/",
    "paginate": "none"
  },
  {
    "operationId": "api_risk_assessments_sync_to_actions_create",
    "domain": "riskManagement",
    "method": "apiRiskAssessmentsSyncToActionsCreate",
    "http": "POST",
    "path": "/api/risk-assessments/{id}/sync-to-actions/",
    "paginate": "none"
  },
  {
    "operationId": "api_risk_assessments_sync_from_ebios_rm_create",
    "domain": "riskManagement",
    "method": "apiRiskAssessmentsSyncFromEbiosRmCreate",
    "http": "POST",
    "path": "/api/risk-assessments/{id}/sync_from_ebios_rm/",
    "paginate": "none"
  },
  {
    "operationId": "api_risk_assessments_sync_preview_retrieve",
    "domain": "riskManagement",
    "method": "apiRiskAssessmentsSyncPreviewRetrieve",
    "http": "GET",
    "path": "/api/risk-assessments/{id}/sync_preview/",
    "paginate": "none"
  },
  {
    "operationId": "api_risk_assessments_batch_action_create",
    "domain": "riskManagement",
    "method": "apiRiskAssessmentsBatchActionCreate",
    "http": "POST",
    "path": "/api/risk-assessments/batch-action/",
    "paginate": "none"
  },
  {
    "operationId": "api_risk_assessments_per_status_retrieve",
    "domain": "riskManagement",
    "method": "apiRiskAssessmentsPerStatusRetrieve",
    "http": "GET",
    "path": "/api/risk-assessments/per_status/",
    "paginate": "none"
  },
  {
    "operationId": "api_risk_assessments_quality_check_retrieve",
    "domain": "riskManagement",
    "method": "apiRiskAssessmentsQualityCheckRetrieve",
    "http": "GET",
    "path": "/api/risk-assessments/quality_check/",
    "paginate": "none"
  },
  {
    "operationId": "api_risk_assessments_status_retrieve",
    "domain": "riskManagement",
    "method": "apiRiskAssessmentsStatusRetrieve",
    "http": "GET",
    "path": "/api/risk-assessments/status/",
    "paginate": "none"
  },
  {
    "operationId": "api_risk_matrices_list",
    "domain": "riskManagement",
    "method": "apiRiskMatricesList",
    "http": "GET",
    "path": "/api/risk-matrices/",
    "paginate": "page"
  },
  {
    "operationId": "api_risk_matrices_create",
    "domain": "riskManagement",
    "method": "apiRiskMatricesCreate",
    "http": "POST",
    "path": "/api/risk-matrices/",
    "paginate": "none"
  },
  {
    "operationId": "api_risk_matrices_retrieve",
    "domain": "riskManagement",
    "method": "apiRiskMatricesRetrieve",
    "http": "GET",
    "path": "/api/risk-matrices/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_risk_matrices_update",
    "domain": "riskManagement",
    "method": "apiRiskMatricesUpdate",
    "http": "PUT",
    "path": "/api/risk-matrices/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_risk_matrices_partial_update",
    "domain": "riskManagement",
    "method": "apiRiskMatricesPartialUpdate",
    "http": "PATCH",
    "path": "/api/risk-matrices/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_risk_matrices_destroy",
    "domain": "riskManagement",
    "method": "apiRiskMatricesDestroy",
    "http": "DELETE",
    "path": "/api/risk-matrices/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_risk_matrices_cascade_info_retrieve",
    "domain": "riskManagement",
    "method": "apiRiskMatricesCascadeInfoRetrieve",
    "http": "GET",
    "path": "/api/risk-matrices/{id}/cascade-info/",
    "paginate": "none"
  },
  {
    "operationId": "api_risk_matrices_create_draft_from_create",
    "domain": "riskManagement",
    "method": "apiRiskMatricesCreateDraftFromCreate",
    "http": "POST",
    "path": "/api/risk-matrices/{id}/create-draft-from/",
    "paginate": "none"
  },
  {
    "operationId": "api_risk_matrices_discard_draft_create",
    "domain": "riskManagement",
    "method": "apiRiskMatricesDiscardDraftCreate",
    "http": "POST",
    "path": "/api/risk-matrices/{id}/discard-draft/",
    "paginate": "none"
  },
  {
    "operationId": "api_risk_matrices_export_yaml_retrieve",
    "domain": "riskManagement",
    "method": "apiRiskMatricesExportYamlRetrieve",
    "http": "GET",
    "path": "/api/risk-matrices/{id}/export-yaml/",
    "paginate": "none"
  },
  {
    "operationId": "api_risk_matrices_object_retrieve",
    "domain": "riskManagement",
    "method": "apiRiskMatricesObjectRetrieve",
    "http": "GET",
    "path": "/api/risk-matrices/{id}/object/",
    "paginate": "none"
  },
  {
    "operationId": "api_risk_matrices_publish_draft_create",
    "domain": "riskManagement",
    "method": "apiRiskMatricesPublishDraftCreate",
    "http": "POST",
    "path": "/api/risk-matrices/{id}/publish-draft/",
    "paginate": "none"
  },
  {
    "operationId": "api_risk_matrices_save_draft_partial_update",
    "domain": "riskManagement",
    "method": "apiRiskMatricesSaveDraftPartialUpdate",
    "http": "PATCH",
    "path": "/api/risk-matrices/{id}/save-draft/",
    "paginate": "none"
  },
  {
    "operationId": "api_risk_matrices_start_editing_create",
    "domain": "riskManagement",
    "method": "apiRiskMatricesStartEditingCreate",
    "http": "POST",
    "path": "/api/risk-matrices/{id}/start-editing/",
    "paginate": "none"
  },
  {
    "operationId": "api_risk_matrices_batch_action_create",
    "domain": "riskManagement",
    "method": "apiRiskMatricesBatchActionCreate",
    "http": "POST",
    "path": "/api/risk-matrices/batch-action/",
    "paginate": "none"
  },
  {
    "operationId": "api_risk_matrices_colors_retrieve",
    "domain": "riskManagement",
    "method": "apiRiskMatricesColorsRetrieve",
    "http": "GET",
    "path": "/api/risk-matrices/colors/",
    "paginate": "none"
  },
  {
    "operationId": "api_risk_matrices_create_draft_create",
    "domain": "riskManagement",
    "method": "apiRiskMatricesCreateDraftCreate",
    "http": "POST",
    "path": "/api/risk-matrices/create-draft/",
    "paginate": "none"
  },
  {
    "operationId": "api_risk_matrices_ids_retrieve",
    "domain": "riskManagement",
    "method": "apiRiskMatricesIdsRetrieve",
    "http": "GET",
    "path": "/api/risk-matrices/ids/",
    "paginate": "none"
  },
  {
    "operationId": "api_risk_matrices_impact_retrieve",
    "domain": "riskManagement",
    "method": "apiRiskMatricesImpactRetrieve",
    "http": "GET",
    "path": "/api/risk-matrices/impact/",
    "paginate": "none"
  },
  {
    "operationId": "api_risk_matrices_import_yaml_create",
    "domain": "riskManagement",
    "method": "apiRiskMatricesImportYamlCreate",
    "http": "POST",
    "path": "/api/risk-matrices/import-yaml/",
    "paginate": "none"
  },
  {
    "operationId": "api_risk_matrices_probability_retrieve",
    "domain": "riskManagement",
    "method": "apiRiskMatricesProbabilityRetrieve",
    "http": "GET",
    "path": "/api/risk-matrices/probability/",
    "paginate": "none"
  },
  {
    "operationId": "api_risk_matrices_provider_retrieve",
    "domain": "riskManagement",
    "method": "apiRiskMatricesProviderRetrieve",
    "http": "GET",
    "path": "/api/risk-matrices/provider/",
    "paginate": "none"
  },
  {
    "operationId": "api_risk_matrices_risk_retrieve",
    "domain": "riskManagement",
    "method": "apiRiskMatricesRiskRetrieve",
    "http": "GET",
    "path": "/api/risk-matrices/risk/",
    "paginate": "none"
  },
  {
    "operationId": "api_risk_matrices_used_retrieve",
    "domain": "riskManagement",
    "method": "apiRiskMatricesUsedRetrieve",
    "http": "GET",
    "path": "/api/risk-matrices/used/",
    "paginate": "none"
  },
  {
    "operationId": "api_risk_scenarios_list",
    "domain": "riskManagement",
    "method": "apiRiskScenariosList",
    "http": "GET",
    "path": "/api/risk-scenarios/",
    "paginate": "page"
  },
  {
    "operationId": "api_risk_scenarios_create",
    "domain": "riskManagement",
    "method": "apiRiskScenariosCreate",
    "http": "POST",
    "path": "/api/risk-scenarios/",
    "paginate": "none"
  },
  {
    "operationId": "api_risk_scenarios_retrieve",
    "domain": "riskManagement",
    "method": "apiRiskScenariosRetrieve",
    "http": "GET",
    "path": "/api/risk-scenarios/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_risk_scenarios_update",
    "domain": "riskManagement",
    "method": "apiRiskScenariosUpdate",
    "http": "PUT",
    "path": "/api/risk-scenarios/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_risk_scenarios_partial_update",
    "domain": "riskManagement",
    "method": "apiRiskScenariosPartialUpdate",
    "http": "PATCH",
    "path": "/api/risk-scenarios/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_risk_scenarios_destroy",
    "domain": "riskManagement",
    "method": "apiRiskScenariosDestroy",
    "http": "DELETE",
    "path": "/api/risk-scenarios/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_risk_scenarios_cascade_info_retrieve",
    "domain": "riskManagement",
    "method": "apiRiskScenariosCascadeInfoRetrieve",
    "http": "GET",
    "path": "/api/risk-scenarios/{id}/cascade-info/",
    "paginate": "none"
  },
  {
    "operationId": "api_risk_scenarios_impact_retrieve",
    "domain": "riskManagement",
    "method": "apiRiskScenariosImpactRetrieve",
    "http": "GET",
    "path": "/api/risk-scenarios/{id}/impact/",
    "paginate": "none"
  },
  {
    "operationId": "api_risk_scenarios_object_retrieve",
    "domain": "riskManagement",
    "method": "apiRiskScenariosObjectRetrieve",
    "http": "GET",
    "path": "/api/risk-scenarios/{id}/object/",
    "paginate": "none"
  },
  {
    "operationId": "api_risk_scenarios_probability_retrieve",
    "domain": "riskManagement",
    "method": "apiRiskScenariosProbabilityRetrieve",
    "http": "GET",
    "path": "/api/risk-scenarios/{id}/probability/",
    "paginate": "none"
  },
  {
    "operationId": "api_risk_scenarios_strength_of_knowledge_retrieve",
    "domain": "riskManagement",
    "method": "apiRiskScenariosStrengthOfKnowledgeRetrieve",
    "http": "GET",
    "path": "/api/risk-scenarios/{id}/strength_of_knowledge/",
    "paginate": "none"
  },
  {
    "operationId": "api_risk_scenarios_sync_to_actions_create",
    "domain": "riskManagement",
    "method": "apiRiskScenariosSyncToActionsCreate",
    "http": "POST",
    "path": "/api/risk-scenarios/{id}/sync-to-actions/",
    "paginate": "none"
  },
  {
    "operationId": "api_risk_scenarios_batch_action_create",
    "domain": "riskManagement",
    "method": "apiRiskScenariosBatchActionCreate",
    "http": "POST",
    "path": "/api/risk-scenarios/batch-action/",
    "paginate": "none"
  },
  {
    "operationId": "api_risk_scenarios_count_per_level_retrieve",
    "domain": "riskManagement",
    "method": "apiRiskScenariosCountPerLevelRetrieve",
    "http": "GET",
    "path": "/api/risk-scenarios/count_per_level/",
    "paginate": "none"
  },
  {
    "operationId": "api_risk_scenarios_default_ref_id_retrieve",
    "domain": "riskManagement",
    "method": "apiRiskScenariosDefaultRefIdRetrieve",
    "http": "GET",
    "path": "/api/risk-scenarios/default_ref_id/",
    "paginate": "none"
  },
  {
    "operationId": "api_risk_scenarios_export_csv_retrieve",
    "domain": "riskManagement",
    "method": "apiRiskScenariosExportCsvRetrieve",
    "http": "GET",
    "path": "/api/risk-scenarios/export_csv/",
    "paginate": "none"
  },
  {
    "operationId": "api_risk_scenarios_export_xlsx_retrieve",
    "domain": "riskManagement",
    "method": "apiRiskScenariosExportXlsxRetrieve",
    "http": "GET",
    "path": "/api/risk-scenarios/export_xlsx/",
    "paginate": "none"
  },
  {
    "operationId": "api_risk_scenarios_per_status_retrieve",
    "domain": "riskManagement",
    "method": "apiRiskScenariosPerStatusRetrieve",
    "http": "GET",
    "path": "/api/risk-scenarios/per_status/",
    "paginate": "none"
  },
  {
    "operationId": "api_risk_scenarios_qualifications_count_retrieve",
    "domain": "riskManagement",
    "method": "apiRiskScenariosQualificationsCountRetrieve",
    "http": "GET",
    "path": "/api/risk-scenarios/qualifications_count/",
    "paginate": "none"
  },
  {
    "operationId": "api_risk_scenarios_treatment_retrieve",
    "domain": "riskManagement",
    "method": "apiRiskScenariosTreatmentRetrieve",
    "http": "GET",
    "path": "/api/risk-scenarios/treatment/",
    "paginate": "none"
  },
  {
    "operationId": "api_threats_list",
    "domain": "riskManagement",
    "method": "apiThreatsList",
    "http": "GET",
    "path": "/api/threats/",
    "paginate": "page"
  },
  {
    "operationId": "api_threats_create",
    "domain": "riskManagement",
    "method": "apiThreatsCreate",
    "http": "POST",
    "path": "/api/threats/",
    "paginate": "none"
  },
  {
    "operationId": "api_threats_retrieve",
    "domain": "riskManagement",
    "method": "apiThreatsRetrieve",
    "http": "GET",
    "path": "/api/threats/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_threats_update",
    "domain": "riskManagement",
    "method": "apiThreatsUpdate",
    "http": "PUT",
    "path": "/api/threats/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_threats_partial_update",
    "domain": "riskManagement",
    "method": "apiThreatsPartialUpdate",
    "http": "PATCH",
    "path": "/api/threats/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_threats_destroy",
    "domain": "riskManagement",
    "method": "apiThreatsDestroy",
    "http": "DELETE",
    "path": "/api/threats/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_threats_cascade_info_retrieve",
    "domain": "riskManagement",
    "method": "apiThreatsCascadeInfoRetrieve",
    "http": "GET",
    "path": "/api/threats/{id}/cascade-info/",
    "paginate": "none"
  },
  {
    "operationId": "api_threats_object_retrieve",
    "domain": "riskManagement",
    "method": "apiThreatsObjectRetrieve",
    "http": "GET",
    "path": "/api/threats/{id}/object/",
    "paginate": "none"
  },
  {
    "operationId": "api_threats_batch_action_create",
    "domain": "riskManagement",
    "method": "apiThreatsBatchActionCreate",
    "http": "POST",
    "path": "/api/threats/batch-action/",
    "paginate": "none"
  },
  {
    "operationId": "api_threats_ids_retrieve",
    "domain": "riskManagement",
    "method": "apiThreatsIdsRetrieve",
    "http": "GET",
    "path": "/api/threats/ids/",
    "paginate": "none"
  },
  {
    "operationId": "api_threats_provider_retrieve",
    "domain": "riskManagement",
    "method": "apiThreatsProviderRetrieve",
    "http": "GET",
    "path": "/api/threats/provider/",
    "paginate": "none"
  },
  {
    "operationId": "api_threats_threats_count_retrieve",
    "domain": "riskManagement",
    "method": "apiThreatsThreatsCountRetrieve",
    "http": "GET",
    "path": "/api/threats/threats_count/",
    "paginate": "none"
  },
  {
    "operationId": "api_vulnerabilities_list",
    "domain": "riskManagement",
    "method": "apiVulnerabilitiesList",
    "http": "GET",
    "path": "/api/vulnerabilities/",
    "paginate": "page"
  },
  {
    "operationId": "api_vulnerabilities_create",
    "domain": "riskManagement",
    "method": "apiVulnerabilitiesCreate",
    "http": "POST",
    "path": "/api/vulnerabilities/",
    "paginate": "none"
  },
  {
    "operationId": "api_vulnerabilities_retrieve",
    "domain": "riskManagement",
    "method": "apiVulnerabilitiesRetrieve",
    "http": "GET",
    "path": "/api/vulnerabilities/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_vulnerabilities_update",
    "domain": "riskManagement",
    "method": "apiVulnerabilitiesUpdate",
    "http": "PUT",
    "path": "/api/vulnerabilities/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_vulnerabilities_partial_update",
    "domain": "riskManagement",
    "method": "apiVulnerabilitiesPartialUpdate",
    "http": "PATCH",
    "path": "/api/vulnerabilities/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_vulnerabilities_destroy",
    "domain": "riskManagement",
    "method": "apiVulnerabilitiesDestroy",
    "http": "DELETE",
    "path": "/api/vulnerabilities/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_vulnerabilities_cascade_info_retrieve",
    "domain": "riskManagement",
    "method": "apiVulnerabilitiesCascadeInfoRetrieve",
    "http": "GET",
    "path": "/api/vulnerabilities/{id}/cascade-info/",
    "paginate": "none"
  },
  {
    "operationId": "api_vulnerabilities_object_retrieve",
    "domain": "riskManagement",
    "method": "apiVulnerabilitiesObjectRetrieve",
    "http": "GET",
    "path": "/api/vulnerabilities/{id}/object/",
    "paginate": "none"
  },
  {
    "operationId": "api_vulnerabilities_autocomplete_retrieve",
    "domain": "riskManagement",
    "method": "apiVulnerabilitiesAutocompleteRetrieve",
    "http": "GET",
    "path": "/api/vulnerabilities/autocomplete/",
    "paginate": "none"
  },
  {
    "operationId": "api_vulnerabilities_batch_action_create",
    "domain": "riskManagement",
    "method": "apiVulnerabilitiesBatchActionCreate",
    "http": "POST",
    "path": "/api/vulnerabilities/batch-action/",
    "paginate": "none"
  },
  {
    "operationId": "api_vulnerabilities_refresh_due_dates_create",
    "domain": "riskManagement",
    "method": "apiVulnerabilitiesRefreshDueDatesCreate",
    "http": "POST",
    "path": "/api/vulnerabilities/refresh-due-dates/",
    "paginate": "none"
  },
  {
    "operationId": "api_vulnerabilities_sankey_data_retrieve",
    "domain": "riskManagement",
    "method": "apiVulnerabilitiesSankeyDataRetrieve",
    "http": "GET",
    "path": "/api/vulnerabilities/sankey_data/",
    "paginate": "none"
  },
  {
    "operationId": "api_vulnerabilities_severity_retrieve",
    "domain": "riskManagement",
    "method": "apiVulnerabilitiesSeverityRetrieve",
    "http": "GET",
    "path": "/api/vulnerabilities/severity/",
    "paginate": "none"
  },
  {
    "operationId": "api_vulnerabilities_status_retrieve",
    "domain": "riskManagement",
    "method": "apiVulnerabilitiesStatusRetrieve",
    "http": "GET",
    "path": "/api/vulnerabilities/status/",
    "paginate": "none"
  },
  {
    "operationId": "api_vulnerabilities_treemap_data_retrieve",
    "domain": "riskManagement",
    "method": "apiVulnerabilitiesTreemapDataRetrieve",
    "http": "GET",
    "path": "/api/vulnerabilities/treemap_data/",
    "paginate": "none"
  },
  {
    "operationId": "api_findings_list",
    "domain": "securityFindings",
    "method": "apiFindingsList",
    "http": "GET",
    "path": "/api/findings/",
    "paginate": "page"
  },
  {
    "operationId": "api_findings_create",
    "domain": "securityFindings",
    "method": "apiFindingsCreate",
    "http": "POST",
    "path": "/api/findings/",
    "paginate": "none"
  },
  {
    "operationId": "api_findings_assessments_list",
    "domain": "securityFindings",
    "method": "apiFindingsAssessmentsList",
    "http": "GET",
    "path": "/api/findings-assessments/",
    "paginate": "page"
  },
  {
    "operationId": "api_findings_assessments_create",
    "domain": "securityFindings",
    "method": "apiFindingsAssessmentsCreate",
    "http": "POST",
    "path": "/api/findings-assessments/",
    "paginate": "none"
  },
  {
    "operationId": "api_findings_assessments_retrieve",
    "domain": "securityFindings",
    "method": "apiFindingsAssessmentsRetrieve",
    "http": "GET",
    "path": "/api/findings-assessments/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_findings_assessments_update",
    "domain": "securityFindings",
    "method": "apiFindingsAssessmentsUpdate",
    "http": "PUT",
    "path": "/api/findings-assessments/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_findings_assessments_partial_update",
    "domain": "securityFindings",
    "method": "apiFindingsAssessmentsPartialUpdate",
    "http": "PATCH",
    "path": "/api/findings-assessments/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_findings_assessments_destroy",
    "domain": "securityFindings",
    "method": "apiFindingsAssessmentsDestroy",
    "http": "DELETE",
    "path": "/api/findings-assessments/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_findings_assessments_cascade_info_retrieve",
    "domain": "securityFindings",
    "method": "apiFindingsAssessmentsCascadeInfoRetrieve",
    "http": "GET",
    "path": "/api/findings-assessments/{id}/cascade-info/",
    "paginate": "none"
  },
  {
    "operationId": "api_findings_assessments_md_retrieve",
    "domain": "securityFindings",
    "method": "apiFindingsAssessmentsMdRetrieve",
    "http": "GET",
    "path": "/api/findings-assessments/{id}/md/",
    "paginate": "none"
  },
  {
    "operationId": "api_findings_assessments_metrics_retrieve",
    "domain": "securityFindings",
    "method": "apiFindingsAssessmentsMetricsRetrieve",
    "http": "GET",
    "path": "/api/findings-assessments/{id}/metrics/",
    "paginate": "none"
  },
  {
    "operationId": "api_findings_assessments_object_retrieve",
    "domain": "securityFindings",
    "method": "apiFindingsAssessmentsObjectRetrieve",
    "http": "GET",
    "path": "/api/findings-assessments/{id}/object/",
    "paginate": "none"
  },
  {
    "operationId": "api_findings_assessments_pdf_retrieve",
    "domain": "securityFindings",
    "method": "apiFindingsAssessmentsPdfRetrieve",
    "http": "GET",
    "path": "/api/findings-assessments/{id}/pdf/",
    "paginate": "none"
  },
  {
    "operationId": "api_findings_assessments_xlsx_retrieve",
    "domain": "securityFindings",
    "method": "apiFindingsAssessmentsXlsxRetrieve",
    "http": "GET",
    "path": "/api/findings-assessments/{id}/xlsx/",
    "paginate": "none"
  },
  {
    "operationId": "api_findings_assessments_batch_action_create",
    "domain": "securityFindings",
    "method": "apiFindingsAssessmentsBatchActionCreate",
    "http": "POST",
    "path": "/api/findings-assessments/batch-action/",
    "paginate": "none"
  },
  {
    "operationId": "api_findings_assessments_category_retrieve",
    "domain": "securityFindings",
    "method": "apiFindingsAssessmentsCategoryRetrieve",
    "http": "GET",
    "path": "/api/findings-assessments/category/",
    "paginate": "none"
  },
  {
    "operationId": "api_findings_assessments_status_retrieve",
    "domain": "securityFindings",
    "method": "apiFindingsAssessmentsStatusRetrieve",
    "http": "GET",
    "path": "/api/findings-assessments/status/",
    "paginate": "none"
  },
  {
    "operationId": "api_findings_assessments_sunburst_data_retrieve",
    "domain": "securityFindings",
    "method": "apiFindingsAssessmentsSunburstDataRetrieve",
    "http": "GET",
    "path": "/api/findings-assessments/sunburst_data/",
    "paginate": "none"
  },
  {
    "operationId": "api_findings_retrieve",
    "domain": "securityFindings",
    "method": "apiFindingsRetrieve",
    "http": "GET",
    "path": "/api/findings/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_findings_update",
    "domain": "securityFindings",
    "method": "apiFindingsUpdate",
    "http": "PUT",
    "path": "/api/findings/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_findings_partial_update",
    "domain": "securityFindings",
    "method": "apiFindingsPartialUpdate",
    "http": "PATCH",
    "path": "/api/findings/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_findings_destroy",
    "domain": "securityFindings",
    "method": "apiFindingsDestroy",
    "http": "DELETE",
    "path": "/api/findings/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_findings_cascade_info_retrieve",
    "domain": "securityFindings",
    "method": "apiFindingsCascadeInfoRetrieve",
    "http": "GET",
    "path": "/api/findings/{id}/cascade-info/",
    "paginate": "none"
  },
  {
    "operationId": "api_findings_object_retrieve",
    "domain": "securityFindings",
    "method": "apiFindingsObjectRetrieve",
    "http": "GET",
    "path": "/api/findings/{id}/object/",
    "paginate": "none"
  },
  {
    "operationId": "api_findings_batch_action_create",
    "domain": "securityFindings",
    "method": "apiFindingsBatchActionCreate",
    "http": "POST",
    "path": "/api/findings/batch-action/",
    "paginate": "none"
  },
  {
    "operationId": "api_findings_owner_retrieve",
    "domain": "securityFindings",
    "method": "apiFindingsOwnerRetrieve",
    "http": "GET",
    "path": "/api/findings/owner/",
    "paginate": "none"
  },
  {
    "operationId": "api_findings_priority_retrieve",
    "domain": "securityFindings",
    "method": "apiFindingsPriorityRetrieve",
    "http": "GET",
    "path": "/api/findings/priority/",
    "paginate": "none"
  },
  {
    "operationId": "api_findings_sankey_data_retrieve",
    "domain": "securityFindings",
    "method": "apiFindingsSankeyDataRetrieve",
    "http": "GET",
    "path": "/api/findings/sankey_data/",
    "paginate": "none"
  },
  {
    "operationId": "api_findings_severity_retrieve",
    "domain": "securityFindings",
    "method": "apiFindingsSeverityRetrieve",
    "http": "GET",
    "path": "/api/findings/severity/",
    "paginate": "none"
  },
  {
    "operationId": "api_findings_status_retrieve",
    "domain": "securityFindings",
    "method": "apiFindingsStatusRetrieve",
    "http": "GET",
    "path": "/api/findings/status/",
    "paginate": "none"
  },
  {
    "operationId": "api_security_advisories_list",
    "domain": "securityFindings",
    "method": "apiSecurityAdvisoriesList",
    "http": "GET",
    "path": "/api/security-advisories/",
    "paginate": "page"
  },
  {
    "operationId": "api_security_advisories_create",
    "domain": "securityFindings",
    "method": "apiSecurityAdvisoriesCreate",
    "http": "POST",
    "path": "/api/security-advisories/",
    "paginate": "none"
  },
  {
    "operationId": "api_security_advisories_retrieve",
    "domain": "securityFindings",
    "method": "apiSecurityAdvisoriesRetrieve",
    "http": "GET",
    "path": "/api/security-advisories/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_security_advisories_update",
    "domain": "securityFindings",
    "method": "apiSecurityAdvisoriesUpdate",
    "http": "PUT",
    "path": "/api/security-advisories/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_security_advisories_partial_update",
    "domain": "securityFindings",
    "method": "apiSecurityAdvisoriesPartialUpdate",
    "http": "PATCH",
    "path": "/api/security-advisories/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_security_advisories_destroy",
    "domain": "securityFindings",
    "method": "apiSecurityAdvisoriesDestroy",
    "http": "DELETE",
    "path": "/api/security-advisories/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_security_advisories_cascade_info_retrieve",
    "domain": "securityFindings",
    "method": "apiSecurityAdvisoriesCascadeInfoRetrieve",
    "http": "GET",
    "path": "/api/security-advisories/{id}/cascade-info/",
    "paginate": "none"
  },
  {
    "operationId": "api_security_advisories_enrich_create",
    "domain": "securityFindings",
    "method": "apiSecurityAdvisoriesEnrichCreate",
    "http": "POST",
    "path": "/api/security-advisories/{id}/enrich/",
    "paginate": "none"
  },
  {
    "operationId": "api_security_advisories_object_retrieve",
    "domain": "securityFindings",
    "method": "apiSecurityAdvisoriesObjectRetrieve",
    "http": "GET",
    "path": "/api/security-advisories/{id}/object/",
    "paginate": "none"
  },
  {
    "operationId": "api_security_advisories_autocomplete_retrieve",
    "domain": "securityFindings",
    "method": "apiSecurityAdvisoriesAutocompleteRetrieve",
    "http": "GET",
    "path": "/api/security-advisories/autocomplete/",
    "paginate": "none"
  },
  {
    "operationId": "api_security_advisories_batch_action_create",
    "domain": "securityFindings",
    "method": "apiSecurityAdvisoriesBatchActionCreate",
    "http": "POST",
    "path": "/api/security-advisories/batch-action/",
    "paginate": "none"
  },
  {
    "operationId": "api_security_advisories_source_retrieve",
    "domain": "securityFindings",
    "method": "apiSecurityAdvisoriesSourceRetrieve",
    "http": "GET",
    "path": "/api/security-advisories/source/",
    "paginate": "none"
  },
  {
    "operationId": "api_security_advisories_sync_euvd_create",
    "domain": "securityFindings",
    "method": "apiSecurityAdvisoriesSyncEuvdCreate",
    "http": "POST",
    "path": "/api/security-advisories/sync-euvd/",
    "paginate": "none"
  },
  {
    "operationId": "api_security_advisories_sync_kev_create",
    "domain": "securityFindings",
    "method": "apiSecurityAdvisoriesSyncKevCreate",
    "http": "POST",
    "path": "/api/security-advisories/sync-kev/",
    "paginate": "none"
  },
  {
    "operationId": "api_security_exceptions_list",
    "domain": "securityFindings",
    "method": "apiSecurityExceptionsList",
    "http": "GET",
    "path": "/api/security-exceptions/",
    "paginate": "page"
  },
  {
    "operationId": "api_security_exceptions_create",
    "domain": "securityFindings",
    "method": "apiSecurityExceptionsCreate",
    "http": "POST",
    "path": "/api/security-exceptions/",
    "paginate": "none"
  },
  {
    "operationId": "api_security_exceptions_retrieve",
    "domain": "securityFindings",
    "method": "apiSecurityExceptionsRetrieve",
    "http": "GET",
    "path": "/api/security-exceptions/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_security_exceptions_update",
    "domain": "securityFindings",
    "method": "apiSecurityExceptionsUpdate",
    "http": "PUT",
    "path": "/api/security-exceptions/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_security_exceptions_partial_update",
    "domain": "securityFindings",
    "method": "apiSecurityExceptionsPartialUpdate",
    "http": "PATCH",
    "path": "/api/security-exceptions/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_security_exceptions_destroy",
    "domain": "securityFindings",
    "method": "apiSecurityExceptionsDestroy",
    "http": "DELETE",
    "path": "/api/security-exceptions/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_security_exceptions_cascade_info_retrieve",
    "domain": "securityFindings",
    "method": "apiSecurityExceptionsCascadeInfoRetrieve",
    "http": "GET",
    "path": "/api/security-exceptions/{id}/cascade-info/",
    "paginate": "none"
  },
  {
    "operationId": "api_security_exceptions_object_retrieve",
    "domain": "securityFindings",
    "method": "apiSecurityExceptionsObjectRetrieve",
    "http": "GET",
    "path": "/api/security-exceptions/{id}/object/",
    "paginate": "none"
  },
  {
    "operationId": "api_security_exceptions_batch_action_create",
    "domain": "securityFindings",
    "method": "apiSecurityExceptionsBatchActionCreate",
    "http": "POST",
    "path": "/api/security-exceptions/batch-action/",
    "paginate": "none"
  },
  {
    "operationId": "api_security_exceptions_export_csv_retrieve",
    "domain": "securityFindings",
    "method": "apiSecurityExceptionsExportCsvRetrieve",
    "http": "GET",
    "path": "/api/security-exceptions/export_csv/",
    "paginate": "none"
  },
  {
    "operationId": "api_security_exceptions_export_xlsx_retrieve",
    "domain": "securityFindings",
    "method": "apiSecurityExceptionsExportXlsxRetrieve",
    "http": "GET",
    "path": "/api/security-exceptions/export_xlsx/",
    "paginate": "none"
  },
  {
    "operationId": "api_security_exceptions_sankey_data_retrieve",
    "domain": "securityFindings",
    "method": "apiSecurityExceptionsSankeyDataRetrieve",
    "http": "GET",
    "path": "/api/security-exceptions/sankey_data/",
    "paginate": "none"
  },
  {
    "operationId": "api_security_exceptions_severity_retrieve",
    "domain": "securityFindings",
    "method": "apiSecurityExceptionsSeverityRetrieve",
    "http": "GET",
    "path": "/api/security-exceptions/severity/",
    "paginate": "none"
  },
  {
    "operationId": "api_security_exceptions_status_retrieve",
    "domain": "securityFindings",
    "method": "apiSecurityExceptionsStatusRetrieve",
    "http": "GET",
    "path": "/api/security-exceptions/status/",
    "paginate": "none"
  },
  {
    "operationId": "api_settings_feature_flags_retrieve",
    "domain": "settings",
    "method": "apiSettingsFeatureFlagsRetrieve",
    "http": "GET",
    "path": "/api/settings/feature-flags/",
    "paginate": "none"
  },
  {
    "operationId": "api_settings_feature_flags_update",
    "domain": "settings",
    "method": "apiSettingsFeatureFlagsUpdate",
    "http": "PUT",
    "path": "/api/settings/feature-flags/",
    "paginate": "none"
  },
  {
    "operationId": "api_settings_feature_flags_partial_update",
    "domain": "settings",
    "method": "apiSettingsFeatureFlagsPartialUpdate",
    "http": "PATCH",
    "path": "/api/settings/feature-flags/",
    "paginate": "none"
  },
  {
    "operationId": "api_settings_general_retrieve",
    "domain": "settings",
    "method": "apiSettingsGeneralRetrieve",
    "http": "GET",
    "path": "/api/settings/general/",
    "paginate": "none"
  },
  {
    "operationId": "api_settings_general_update",
    "domain": "settings",
    "method": "apiSettingsGeneralUpdate",
    "http": "PUT",
    "path": "/api/settings/general/",
    "paginate": "none"
  },
  {
    "operationId": "api_settings_general_partial_update",
    "domain": "settings",
    "method": "apiSettingsGeneralPartialUpdate",
    "http": "PATCH",
    "path": "/api/settings/general/",
    "paginate": "none"
  },
  {
    "operationId": "api_settings_general_default_language_retrieve",
    "domain": "settings",
    "method": "apiSettingsGeneralDefaultLanguageRetrieve",
    "http": "GET",
    "path": "/api/settings/general/default-language/",
    "paginate": "none"
  },
  {
    "operationId": "api_settings_general_default_custom_analytics_dashboard_retrieve",
    "domain": "settings",
    "method": "apiSettingsGeneralDefaultCustomAnalyticsDashboardRetrieve",
    "http": "GET",
    "path": "/api/settings/general/default_custom_analytics_dashboard/",
    "paginate": "none"
  },
  {
    "operationId": "api_settings_general_default_language_retrieve_2",
    "domain": "settings",
    "method": "apiSettingsGeneralDefaultLanguageRetrieve_2",
    "http": "GET",
    "path": "/api/settings/general/default_language/",
    "paginate": "none"
  },
  {
    "operationId": "api_settings_general_ebios_radar_parameters_retrieve",
    "domain": "settings",
    "method": "apiSettingsGeneralEbiosRadarParametersRetrieve",
    "http": "GET",
    "path": "/api/settings/general/ebios_radar_parameters/",
    "paginate": "none"
  },
  {
    "operationId": "api_settings_general_force_language_create",
    "domain": "settings",
    "method": "apiSettingsGeneralForceLanguageCreate",
    "http": "POST",
    "path": "/api/settings/general/force_language/",
    "paginate": "none"
  },
  {
    "operationId": "api_settings_general_interface_settings_retrieve",
    "domain": "settings",
    "method": "apiSettingsGeneralInterfaceSettingsRetrieve",
    "http": "GET",
    "path": "/api/settings/general/interface_settings/",
    "paginate": "none"
  },
  {
    "operationId": "api_settings_general_notifications_settings_retrieve",
    "domain": "settings",
    "method": "apiSettingsGeneralNotificationsSettingsRetrieve",
    "http": "GET",
    "path": "/api/settings/general/notifications_settings/",
    "paginate": "none"
  },
  {
    "operationId": "api_settings_general_object_retrieve",
    "domain": "settings",
    "method": "apiSettingsGeneralObjectRetrieve",
    "http": "GET",
    "path": "/api/settings/general/object/",
    "paginate": "none"
  },
  {
    "operationId": "api_settings_general_security_objective_scale_retrieve",
    "domain": "settings",
    "method": "apiSettingsGeneralSecurityObjectiveScaleRetrieve",
    "http": "GET",
    "path": "/api/settings/general/security_objective_scale/",
    "paginate": "none"
  },
  {
    "operationId": "api_settings_general_set_default_dashboard_create",
    "domain": "settings",
    "method": "apiSettingsGeneralSetDefaultDashboardCreate",
    "http": "POST",
    "path": "/api/settings/general/set-default-dashboard/",
    "paginate": "none"
  },
  {
    "operationId": "api_settings_global_list",
    "domain": "settings",
    "method": "apiSettingsGlobalList",
    "http": "GET",
    "path": "/api/settings/global/",
    "paginate": "page"
  },
  {
    "operationId": "api_settings_global_create",
    "domain": "settings",
    "method": "apiSettingsGlobalCreate",
    "http": "POST",
    "path": "/api/settings/global/",
    "paginate": "none"
  },
  {
    "operationId": "api_settings_global_retrieve",
    "domain": "settings",
    "method": "apiSettingsGlobalRetrieve",
    "http": "GET",
    "path": "/api/settings/global/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_settings_global_update",
    "domain": "settings",
    "method": "apiSettingsGlobalUpdate",
    "http": "PUT",
    "path": "/api/settings/global/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_settings_global_partial_update",
    "domain": "settings",
    "method": "apiSettingsGlobalPartialUpdate",
    "http": "PATCH",
    "path": "/api/settings/global/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_settings_global_destroy",
    "domain": "settings",
    "method": "apiSettingsGlobalDestroy",
    "http": "DELETE",
    "path": "/api/settings/global/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_settings_sec_intel_feeds_retrieve",
    "domain": "settings",
    "method": "apiSettingsSecIntelFeedsRetrieve",
    "http": "GET",
    "path": "/api/settings/sec-intel-feeds/",
    "paginate": "none"
  },
  {
    "operationId": "api_settings_sec_intel_feeds_update",
    "domain": "settings",
    "method": "apiSettingsSecIntelFeedsUpdate",
    "http": "PUT",
    "path": "/api/settings/sec-intel-feeds/",
    "paginate": "none"
  },
  {
    "operationId": "api_settings_sec_intel_feeds_partial_update",
    "domain": "settings",
    "method": "apiSettingsSecIntelFeedsPartialUpdate",
    "http": "PATCH",
    "path": "/api/settings/sec-intel-feeds/",
    "paginate": "none"
  },
  {
    "operationId": "api_settings_sso_retrieve",
    "domain": "settings",
    "method": "apiSettingsSsoRetrieve",
    "http": "GET",
    "path": "/api/settings/sso/",
    "paginate": "none"
  },
  {
    "operationId": "api_settings_sso_update",
    "domain": "settings",
    "method": "apiSettingsSsoUpdate",
    "http": "PUT",
    "path": "/api/settings/sso/",
    "paginate": "none"
  },
  {
    "operationId": "api_settings_sso_partial_update",
    "domain": "settings",
    "method": "apiSettingsSsoPartialUpdate",
    "http": "PATCH",
    "path": "/api/settings/sso/",
    "paginate": "none"
  },
  {
    "operationId": "api_settings_sso_cascade_info_retrieve",
    "domain": "settings",
    "method": "apiSettingsSsoCascadeInfoRetrieve",
    "http": "GET",
    "path": "/api/settings/sso/cascade-info/",
    "paginate": "none"
  },
  {
    "operationId": "api_settings_sso_info_retrieve",
    "domain": "settings",
    "method": "apiSettingsSsoInfoRetrieve",
    "http": "GET",
    "path": "/api/settings/sso/info/",
    "paginate": "none"
  },
  {
    "operationId": "api_settings_sso_object_retrieve",
    "domain": "settings",
    "method": "apiSettingsSsoObjectRetrieve",
    "http": "GET",
    "path": "/api/settings/sso/object/",
    "paginate": "none"
  },
  {
    "operationId": "api_settings_sso_provider_retrieve",
    "domain": "settings",
    "method": "apiSettingsSsoProviderRetrieve",
    "http": "GET",
    "path": "/api/settings/sso/provider/",
    "paginate": "none"
  },
  {
    "operationId": "api_settings_vulnerability_sla_retrieve",
    "domain": "settings",
    "method": "apiSettingsVulnerabilitySlaRetrieve",
    "http": "GET",
    "path": "/api/settings/vulnerability-sla/",
    "paginate": "none"
  },
  {
    "operationId": "api_settings_vulnerability_sla_update",
    "domain": "settings",
    "method": "apiSettingsVulnerabilitySlaUpdate",
    "http": "PUT",
    "path": "/api/settings/vulnerability-sla/",
    "paginate": "none"
  },
  {
    "operationId": "api_settings_vulnerability_sla_partial_update",
    "domain": "settings",
    "method": "apiSettingsVulnerabilitySlaPartialUpdate",
    "http": "PATCH",
    "path": "/api/settings/vulnerability-sla/",
    "paginate": "none"
  },
  {
    "operationId": "api_answers_list",
    "domain": "tasksTimeline",
    "method": "apiAnswersList",
    "http": "GET",
    "path": "/api/answers/",
    "paginate": "page"
  },
  {
    "operationId": "api_answers_create",
    "domain": "tasksTimeline",
    "method": "apiAnswersCreate",
    "http": "POST",
    "path": "/api/answers/",
    "paginate": "none"
  },
  {
    "operationId": "api_answers_retrieve",
    "domain": "tasksTimeline",
    "method": "apiAnswersRetrieve",
    "http": "GET",
    "path": "/api/answers/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_answers_update",
    "domain": "tasksTimeline",
    "method": "apiAnswersUpdate",
    "http": "PUT",
    "path": "/api/answers/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_answers_partial_update",
    "domain": "tasksTimeline",
    "method": "apiAnswersPartialUpdate",
    "http": "PATCH",
    "path": "/api/answers/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_answers_destroy",
    "domain": "tasksTimeline",
    "method": "apiAnswersDestroy",
    "http": "DELETE",
    "path": "/api/answers/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_answers_cascade_info_retrieve",
    "domain": "tasksTimeline",
    "method": "apiAnswersCascadeInfoRetrieve",
    "http": "GET",
    "path": "/api/answers/{id}/cascade-info/",
    "paginate": "none"
  },
  {
    "operationId": "api_answers_object_retrieve",
    "domain": "tasksTimeline",
    "method": "apiAnswersObjectRetrieve",
    "http": "GET",
    "path": "/api/answers/{id}/object/",
    "paginate": "none"
  },
  {
    "operationId": "api_answers_batch_action_create",
    "domain": "tasksTimeline",
    "method": "apiAnswersBatchActionCreate",
    "http": "POST",
    "path": "/api/answers/batch-action/",
    "paginate": "none"
  },
  {
    "operationId": "api_campaigns_list",
    "domain": "tasksTimeline",
    "method": "apiCampaignsList",
    "http": "GET",
    "path": "/api/campaigns/",
    "paginate": "page"
  },
  {
    "operationId": "api_campaigns_create",
    "domain": "tasksTimeline",
    "method": "apiCampaignsCreate",
    "http": "POST",
    "path": "/api/campaigns/",
    "paginate": "none"
  },
  {
    "operationId": "api_campaigns_retrieve",
    "domain": "tasksTimeline",
    "method": "apiCampaignsRetrieve",
    "http": "GET",
    "path": "/api/campaigns/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_campaigns_update",
    "domain": "tasksTimeline",
    "method": "apiCampaignsUpdate",
    "http": "PUT",
    "path": "/api/campaigns/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_campaigns_partial_update",
    "domain": "tasksTimeline",
    "method": "apiCampaignsPartialUpdate",
    "http": "PATCH",
    "path": "/api/campaigns/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_campaigns_destroy",
    "domain": "tasksTimeline",
    "method": "apiCampaignsDestroy",
    "http": "DELETE",
    "path": "/api/campaigns/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_campaigns_cascade_info_retrieve",
    "domain": "tasksTimeline",
    "method": "apiCampaignsCascadeInfoRetrieve",
    "http": "GET",
    "path": "/api/campaigns/{id}/cascade-info/",
    "paginate": "none"
  },
  {
    "operationId": "api_campaigns_metrics_retrieve",
    "domain": "tasksTimeline",
    "method": "apiCampaignsMetricsRetrieve",
    "http": "GET",
    "path": "/api/campaigns/{id}/metrics/",
    "paginate": "none"
  },
  {
    "operationId": "api_campaigns_object_retrieve",
    "domain": "tasksTimeline",
    "method": "apiCampaignsObjectRetrieve",
    "http": "GET",
    "path": "/api/campaigns/{id}/object/",
    "paginate": "none"
  },
  {
    "operationId": "api_campaigns_batch_action_create",
    "domain": "tasksTimeline",
    "method": "apiCampaignsBatchActionCreate",
    "http": "POST",
    "path": "/api/campaigns/batch-action/",
    "paginate": "none"
  },
  {
    "operationId": "api_campaigns_status_retrieve",
    "domain": "tasksTimeline",
    "method": "apiCampaignsStatusRetrieve",
    "http": "GET",
    "path": "/api/campaigns/status/",
    "paginate": "none"
  },
  {
    "operationId": "api_question_choices_list",
    "domain": "tasksTimeline",
    "method": "apiQuestionChoicesList",
    "http": "GET",
    "path": "/api/question-choices/",
    "paginate": "page"
  },
  {
    "operationId": "api_question_choices_create",
    "domain": "tasksTimeline",
    "method": "apiQuestionChoicesCreate",
    "http": "POST",
    "path": "/api/question-choices/",
    "paginate": "none"
  },
  {
    "operationId": "api_question_choices_retrieve",
    "domain": "tasksTimeline",
    "method": "apiQuestionChoicesRetrieve",
    "http": "GET",
    "path": "/api/question-choices/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_question_choices_update",
    "domain": "tasksTimeline",
    "method": "apiQuestionChoicesUpdate",
    "http": "PUT",
    "path": "/api/question-choices/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_question_choices_partial_update",
    "domain": "tasksTimeline",
    "method": "apiQuestionChoicesPartialUpdate",
    "http": "PATCH",
    "path": "/api/question-choices/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_question_choices_destroy",
    "domain": "tasksTimeline",
    "method": "apiQuestionChoicesDestroy",
    "http": "DELETE",
    "path": "/api/question-choices/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_question_choices_cascade_info_retrieve",
    "domain": "tasksTimeline",
    "method": "apiQuestionChoicesCascadeInfoRetrieve",
    "http": "GET",
    "path": "/api/question-choices/{id}/cascade-info/",
    "paginate": "none"
  },
  {
    "operationId": "api_question_choices_object_retrieve",
    "domain": "tasksTimeline",
    "method": "apiQuestionChoicesObjectRetrieve",
    "http": "GET",
    "path": "/api/question-choices/{id}/object/",
    "paginate": "none"
  },
  {
    "operationId": "api_question_choices_batch_action_create",
    "domain": "tasksTimeline",
    "method": "apiQuestionChoicesBatchActionCreate",
    "http": "POST",
    "path": "/api/question-choices/batch-action/",
    "paginate": "none"
  },
  {
    "operationId": "api_questions_list",
    "domain": "tasksTimeline",
    "method": "apiQuestionsList",
    "http": "GET",
    "path": "/api/questions/",
    "paginate": "page"
  },
  {
    "operationId": "api_questions_create",
    "domain": "tasksTimeline",
    "method": "apiQuestionsCreate",
    "http": "POST",
    "path": "/api/questions/",
    "paginate": "none"
  },
  {
    "operationId": "api_questions_retrieve",
    "domain": "tasksTimeline",
    "method": "apiQuestionsRetrieve",
    "http": "GET",
    "path": "/api/questions/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_questions_update",
    "domain": "tasksTimeline",
    "method": "apiQuestionsUpdate",
    "http": "PUT",
    "path": "/api/questions/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_questions_partial_update",
    "domain": "tasksTimeline",
    "method": "apiQuestionsPartialUpdate",
    "http": "PATCH",
    "path": "/api/questions/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_questions_destroy",
    "domain": "tasksTimeline",
    "method": "apiQuestionsDestroy",
    "http": "DELETE",
    "path": "/api/questions/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_questions_cascade_info_retrieve",
    "domain": "tasksTimeline",
    "method": "apiQuestionsCascadeInfoRetrieve",
    "http": "GET",
    "path": "/api/questions/{id}/cascade-info/",
    "paginate": "none"
  },
  {
    "operationId": "api_questions_object_retrieve",
    "domain": "tasksTimeline",
    "method": "apiQuestionsObjectRetrieve",
    "http": "GET",
    "path": "/api/questions/{id}/object/",
    "paginate": "none"
  },
  {
    "operationId": "api_questions_batch_action_create",
    "domain": "tasksTimeline",
    "method": "apiQuestionsBatchActionCreate",
    "http": "POST",
    "path": "/api/questions/batch-action/",
    "paginate": "none"
  },
  {
    "operationId": "api_task_nodes_list",
    "domain": "tasksTimeline",
    "method": "apiTaskNodesList",
    "http": "GET",
    "path": "/api/task-nodes/",
    "paginate": "page"
  },
  {
    "operationId": "api_task_nodes_create",
    "domain": "tasksTimeline",
    "method": "apiTaskNodesCreate",
    "http": "POST",
    "path": "/api/task-nodes/",
    "paginate": "none"
  },
  {
    "operationId": "api_task_nodes_retrieve",
    "domain": "tasksTimeline",
    "method": "apiTaskNodesRetrieve",
    "http": "GET",
    "path": "/api/task-nodes/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_task_nodes_update",
    "domain": "tasksTimeline",
    "method": "apiTaskNodesUpdate",
    "http": "PUT",
    "path": "/api/task-nodes/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_task_nodes_partial_update",
    "domain": "tasksTimeline",
    "method": "apiTaskNodesPartialUpdate",
    "http": "PATCH",
    "path": "/api/task-nodes/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_task_nodes_destroy",
    "domain": "tasksTimeline",
    "method": "apiTaskNodesDestroy",
    "http": "DELETE",
    "path": "/api/task-nodes/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_task_nodes_cascade_info_retrieve",
    "domain": "tasksTimeline",
    "method": "apiTaskNodesCascadeInfoRetrieve",
    "http": "GET",
    "path": "/api/task-nodes/{id}/cascade-info/",
    "paginate": "none"
  },
  {
    "operationId": "api_task_nodes_evidences_list",
    "domain": "tasksTimeline",
    "method": "apiTaskNodesEvidencesList",
    "http": "GET",
    "path": "/api/task-nodes/{id}/evidences/",
    "paginate": "page"
  },
  {
    "operationId": "api_task_nodes_object_retrieve",
    "domain": "tasksTimeline",
    "method": "apiTaskNodesObjectRetrieve",
    "http": "GET",
    "path": "/api/task-nodes/{id}/object/",
    "paginate": "none"
  },
  {
    "operationId": "api_task_nodes_remove_evidence_create",
    "domain": "tasksTimeline",
    "method": "apiTaskNodesRemoveEvidenceCreate",
    "http": "POST",
    "path": "/api/task-nodes/{id}/remove_evidence/",
    "paginate": "none"
  },
  {
    "operationId": "api_task_nodes_batch_action_create",
    "domain": "tasksTimeline",
    "method": "apiTaskNodesBatchActionCreate",
    "http": "POST",
    "path": "/api/task-nodes/batch-action/",
    "paginate": "none"
  },
  {
    "operationId": "api_task_nodes_status_retrieve",
    "domain": "tasksTimeline",
    "method": "apiTaskNodesStatusRetrieve",
    "http": "GET",
    "path": "/api/task-nodes/status/",
    "paginate": "none"
  },
  {
    "operationId": "api_task_templates_list",
    "domain": "tasksTimeline",
    "method": "apiTaskTemplatesList",
    "http": "GET",
    "path": "/api/task-templates/",
    "paginate": "page"
  },
  {
    "operationId": "api_task_templates_create",
    "domain": "tasksTimeline",
    "method": "apiTaskTemplatesCreate",
    "http": "POST",
    "path": "/api/task-templates/",
    "paginate": "none"
  },
  {
    "operationId": "api_task_templates_retrieve",
    "domain": "tasksTimeline",
    "method": "apiTaskTemplatesRetrieve",
    "http": "GET",
    "path": "/api/task-templates/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_task_templates_update",
    "domain": "tasksTimeline",
    "method": "apiTaskTemplatesUpdate",
    "http": "PUT",
    "path": "/api/task-templates/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_task_templates_partial_update",
    "domain": "tasksTimeline",
    "method": "apiTaskTemplatesPartialUpdate",
    "http": "PATCH",
    "path": "/api/task-templates/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_task_templates_destroy",
    "domain": "tasksTimeline",
    "method": "apiTaskTemplatesDestroy",
    "http": "DELETE",
    "path": "/api/task-templates/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_task_templates_cascade_info_retrieve",
    "domain": "tasksTimeline",
    "method": "apiTaskTemplatesCascadeInfoRetrieve",
    "http": "GET",
    "path": "/api/task-templates/{id}/cascade-info/",
    "paginate": "none"
  },
  {
    "operationId": "api_task_templates_object_retrieve",
    "domain": "tasksTimeline",
    "method": "apiTaskTemplatesObjectRetrieve",
    "http": "GET",
    "path": "/api/task-templates/{id}/object/",
    "paginate": "none"
  },
  {
    "operationId": "api_task_templates_assigned_to_retrieve",
    "domain": "tasksTimeline",
    "method": "apiTaskTemplatesAssignedToRetrieve",
    "http": "GET",
    "path": "/api/task-templates/assigned_to/",
    "paginate": "none"
  },
  {
    "operationId": "api_task_templates_batch_action_create",
    "domain": "tasksTimeline",
    "method": "apiTaskTemplatesBatchActionCreate",
    "http": "POST",
    "path": "/api/task-templates/batch-action/",
    "paginate": "none"
  },
  {
    "operationId": "api_task_templates_calendar_retrieve",
    "domain": "tasksTimeline",
    "method": "apiTaskTemplatesCalendarRetrieve",
    "http": "GET",
    "path": "/api/task-templates/calendar/{start}/{end}/",
    "paginate": "none"
  },
  {
    "operationId": "api_task_templates_export_csv_retrieve",
    "domain": "tasksTimeline",
    "method": "apiTaskTemplatesExportCsvRetrieve",
    "http": "GET",
    "path": "/api/task-templates/export_csv/",
    "paginate": "none"
  },
  {
    "operationId": "api_task_templates_export_xlsx_retrieve",
    "domain": "tasksTimeline",
    "method": "apiTaskTemplatesExportXlsxRetrieve",
    "http": "GET",
    "path": "/api/task-templates/export_xlsx/",
    "paginate": "none"
  },
  {
    "operationId": "api_task_templates_per_status_retrieve",
    "domain": "tasksTimeline",
    "method": "apiTaskTemplatesPerStatusRetrieve",
    "http": "GET",
    "path": "/api/task-templates/per_status/",
    "paginate": "none"
  },
  {
    "operationId": "api_task_templates_status_retrieve",
    "domain": "tasksTimeline",
    "method": "apiTaskTemplatesStatusRetrieve",
    "http": "GET",
    "path": "/api/task-templates/status/",
    "paginate": "none"
  },
  {
    "operationId": "api_task_templates_yearly_review_retrieve",
    "domain": "tasksTimeline",
    "method": "apiTaskTemplatesYearlyReviewRetrieve",
    "http": "GET",
    "path": "/api/task-templates/yearly_review/",
    "paginate": "none"
  },
  {
    "operationId": "api_actors_list",
    "domain": "thirdParty",
    "method": "apiActorsList",
    "http": "GET",
    "path": "/api/actors/",
    "paginate": "page"
  },
  {
    "operationId": "api_actors_retrieve",
    "domain": "thirdParty",
    "method": "apiActorsRetrieve",
    "http": "GET",
    "path": "/api/actors/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_actors_cascade_info_retrieve",
    "domain": "thirdParty",
    "method": "apiActorsCascadeInfoRetrieve",
    "http": "GET",
    "path": "/api/actors/{id}/cascade-info/",
    "paginate": "none"
  },
  {
    "operationId": "api_actors_object_retrieve",
    "domain": "thirdParty",
    "method": "apiActorsObjectRetrieve",
    "http": "GET",
    "path": "/api/actors/{id}/object/",
    "paginate": "none"
  },
  {
    "operationId": "api_contracts_list",
    "domain": "thirdParty",
    "method": "apiContractsList",
    "http": "GET",
    "path": "/api/contracts/",
    "paginate": "page"
  },
  {
    "operationId": "api_contracts_create",
    "domain": "thirdParty",
    "method": "apiContractsCreate",
    "http": "POST",
    "path": "/api/contracts/",
    "paginate": "none"
  },
  {
    "operationId": "api_contracts_retrieve",
    "domain": "thirdParty",
    "method": "apiContractsRetrieve",
    "http": "GET",
    "path": "/api/contracts/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_contracts_update",
    "domain": "thirdParty",
    "method": "apiContractsUpdate",
    "http": "PUT",
    "path": "/api/contracts/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_contracts_partial_update",
    "domain": "thirdParty",
    "method": "apiContractsPartialUpdate",
    "http": "PATCH",
    "path": "/api/contracts/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_contracts_destroy",
    "domain": "thirdParty",
    "method": "apiContractsDestroy",
    "http": "DELETE",
    "path": "/api/contracts/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_contracts_cascade_info_retrieve",
    "domain": "thirdParty",
    "method": "apiContractsCascadeInfoRetrieve",
    "http": "GET",
    "path": "/api/contracts/{id}/cascade-info/",
    "paginate": "none"
  },
  {
    "operationId": "api_contracts_object_retrieve",
    "domain": "thirdParty",
    "method": "apiContractsObjectRetrieve",
    "http": "GET",
    "path": "/api/contracts/{id}/object/",
    "paginate": "none"
  },
  {
    "operationId": "api_contracts_batch_action_create",
    "domain": "thirdParty",
    "method": "apiContractsBatchActionCreate",
    "http": "POST",
    "path": "/api/contracts/batch-action/",
    "paginate": "none"
  },
  {
    "operationId": "api_contracts_currency_retrieve",
    "domain": "thirdParty",
    "method": "apiContractsCurrencyRetrieve",
    "http": "GET",
    "path": "/api/contracts/currency/",
    "paginate": "none"
  },
  {
    "operationId": "api_contracts_dora_contractual_arrangement_retrieve",
    "domain": "thirdParty",
    "method": "apiContractsDoraContractualArrangementRetrieve",
    "http": "GET",
    "path": "/api/contracts/dora_contractual_arrangement/",
    "paginate": "none"
  },
  {
    "operationId": "api_contracts_export_csv_retrieve",
    "domain": "thirdParty",
    "method": "apiContractsExportCsvRetrieve",
    "http": "GET",
    "path": "/api/contracts/export_csv/",
    "paginate": "none"
  },
  {
    "operationId": "api_contracts_export_xlsx_retrieve",
    "domain": "thirdParty",
    "method": "apiContractsExportXlsxRetrieve",
    "http": "GET",
    "path": "/api/contracts/export_xlsx/",
    "paginate": "none"
  },
  {
    "operationId": "api_contracts_governing_law_country_retrieve",
    "domain": "thirdParty",
    "method": "apiContractsGoverningLawCountryRetrieve",
    "http": "GET",
    "path": "/api/contracts/governing_law_country/",
    "paginate": "none"
  },
  {
    "operationId": "api_contracts_status_retrieve",
    "domain": "thirdParty",
    "method": "apiContractsStatusRetrieve",
    "http": "GET",
    "path": "/api/contracts/status/",
    "paginate": "none"
  },
  {
    "operationId": "api_contracts_termination_reason_retrieve",
    "domain": "thirdParty",
    "method": "apiContractsTerminationReasonRetrieve",
    "http": "GET",
    "path": "/api/contracts/termination_reason/",
    "paginate": "none"
  },
  {
    "operationId": "api_entities_list",
    "domain": "thirdParty",
    "method": "apiEntitiesList",
    "http": "GET",
    "path": "/api/entities/",
    "paginate": "page"
  },
  {
    "operationId": "api_entities_create",
    "domain": "thirdParty",
    "method": "apiEntitiesCreate",
    "http": "POST",
    "path": "/api/entities/",
    "paginate": "none"
  },
  {
    "operationId": "api_entities_retrieve",
    "domain": "thirdParty",
    "method": "apiEntitiesRetrieve",
    "http": "GET",
    "path": "/api/entities/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_entities_update",
    "domain": "thirdParty",
    "method": "apiEntitiesUpdate",
    "http": "PUT",
    "path": "/api/entities/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_entities_partial_update",
    "domain": "thirdParty",
    "method": "apiEntitiesPartialUpdate",
    "http": "PATCH",
    "path": "/api/entities/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_entities_destroy",
    "domain": "thirdParty",
    "method": "apiEntitiesDestroy",
    "http": "DELETE",
    "path": "/api/entities/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_entities_cascade_info_retrieve",
    "domain": "thirdParty",
    "method": "apiEntitiesCascadeInfoRetrieve",
    "http": "GET",
    "path": "/api/entities/{id}/cascade-info/",
    "paginate": "none"
  },
  {
    "operationId": "api_entities_object_retrieve",
    "domain": "thirdParty",
    "method": "apiEntitiesObjectRetrieve",
    "http": "GET",
    "path": "/api/entities/{id}/object/",
    "paginate": "none"
  },
  {
    "operationId": "api_entities_batch_action_create",
    "domain": "thirdParty",
    "method": "apiEntitiesBatchActionCreate",
    "http": "POST",
    "path": "/api/entities/batch-action/",
    "paginate": "none"
  },
  {
    "operationId": "api_entities_batch_create_create",
    "domain": "thirdParty",
    "method": "apiEntitiesBatchCreateCreate",
    "http": "POST",
    "path": "/api/entities/batch-create/",
    "paginate": "none"
  },
  {
    "operationId": "api_entities_country_retrieve",
    "domain": "thirdParty",
    "method": "apiEntitiesCountryRetrieve",
    "http": "GET",
    "path": "/api/entities/country/",
    "paginate": "none"
  },
  {
    "operationId": "api_entities_currency_retrieve",
    "domain": "thirdParty",
    "method": "apiEntitiesCurrencyRetrieve",
    "http": "GET",
    "path": "/api/entities/currency/",
    "paginate": "none"
  },
  {
    "operationId": "api_entities_dora_entity_hierarchy_retrieve",
    "domain": "thirdParty",
    "method": "apiEntitiesDoraEntityHierarchyRetrieve",
    "http": "GET",
    "path": "/api/entities/dora_entity_hierarchy/",
    "paginate": "none"
  },
  {
    "operationId": "api_entities_dora_entity_type_retrieve",
    "domain": "thirdParty",
    "method": "apiEntitiesDoraEntityTypeRetrieve",
    "http": "GET",
    "path": "/api/entities/dora_entity_type/",
    "paginate": "none"
  },
  {
    "operationId": "api_entities_dora_provider_person_type_retrieve",
    "domain": "thirdParty",
    "method": "apiEntitiesDoraProviderPersonTypeRetrieve",
    "http": "GET",
    "path": "/api/entities/dora_provider_person_type/",
    "paginate": "none"
  },
  {
    "operationId": "api_entities_dora_roi_lint_retrieve",
    "domain": "thirdParty",
    "method": "apiEntitiesDoraRoiLintRetrieve",
    "http": "GET",
    "path": "/api/entities/dora_roi_lint/",
    "paginate": "none"
  },
  {
    "operationId": "api_entities_export_csv_retrieve",
    "domain": "thirdParty",
    "method": "apiEntitiesExportCsvRetrieve",
    "http": "GET",
    "path": "/api/entities/export_csv/",
    "paginate": "none"
  },
  {
    "operationId": "api_entities_export_ecosystem_retrieve",
    "domain": "thirdParty",
    "method": "apiEntitiesExportEcosystemRetrieve",
    "http": "GET",
    "path": "/api/entities/export_ecosystem/",
    "paginate": "none"
  },
  {
    "operationId": "api_entities_export_xlsx_retrieve",
    "domain": "thirdParty",
    "method": "apiEntitiesExportXlsxRetrieve",
    "http": "GET",
    "path": "/api/entities/export_xlsx/",
    "paginate": "none"
  },
  {
    "operationId": "api_entities_generate_dora_roi_retrieve",
    "domain": "thirdParty",
    "method": "apiEntitiesGenerateDoraRoiRetrieve",
    "http": "GET",
    "path": "/api/entities/generate_dora_roi/",
    "paginate": "none"
  },
  {
    "operationId": "api_entities_graph_retrieve",
    "domain": "thirdParty",
    "method": "apiEntitiesGraphRetrieve",
    "http": "GET",
    "path": "/api/entities/graph/",
    "paginate": "none"
  },
  {
    "operationId": "api_entity_assessments_list",
    "domain": "thirdParty",
    "method": "apiEntityAssessmentsList",
    "http": "GET",
    "path": "/api/entity-assessments/",
    "paginate": "page"
  },
  {
    "operationId": "api_entity_assessments_create",
    "domain": "thirdParty",
    "method": "apiEntityAssessmentsCreate",
    "http": "POST",
    "path": "/api/entity-assessments/",
    "paginate": "none"
  },
  {
    "operationId": "api_entity_assessments_retrieve",
    "domain": "thirdParty",
    "method": "apiEntityAssessmentsRetrieve",
    "http": "GET",
    "path": "/api/entity-assessments/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_entity_assessments_update",
    "domain": "thirdParty",
    "method": "apiEntityAssessmentsUpdate",
    "http": "PUT",
    "path": "/api/entity-assessments/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_entity_assessments_partial_update",
    "domain": "thirdParty",
    "method": "apiEntityAssessmentsPartialUpdate",
    "http": "PATCH",
    "path": "/api/entity-assessments/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_entity_assessments_destroy",
    "domain": "thirdParty",
    "method": "apiEntityAssessmentsDestroy",
    "http": "DELETE",
    "path": "/api/entity-assessments/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_entity_assessments_cascade_info_retrieve",
    "domain": "thirdParty",
    "method": "apiEntityAssessmentsCascadeInfoRetrieve",
    "http": "GET",
    "path": "/api/entity-assessments/{id}/cascade-info/",
    "paginate": "none"
  },
  {
    "operationId": "api_entity_assessments_object_retrieve",
    "domain": "thirdParty",
    "method": "apiEntityAssessmentsObjectRetrieve",
    "http": "GET",
    "path": "/api/entity-assessments/{id}/object/",
    "paginate": "none"
  },
  {
    "operationId": "api_entity_assessments_batch_action_create",
    "domain": "thirdParty",
    "method": "apiEntityAssessmentsBatchActionCreate",
    "http": "POST",
    "path": "/api/entity-assessments/batch-action/",
    "paginate": "none"
  },
  {
    "operationId": "api_entity_assessments_conclusion_retrieve",
    "domain": "thirdParty",
    "method": "apiEntityAssessmentsConclusionRetrieve",
    "http": "GET",
    "path": "/api/entity-assessments/conclusion/",
    "paginate": "none"
  },
  {
    "operationId": "api_entity_assessments_metrics_retrieve",
    "domain": "thirdParty",
    "method": "apiEntityAssessmentsMetricsRetrieve",
    "http": "GET",
    "path": "/api/entity-assessments/metrics/",
    "paginate": "none"
  },
  {
    "operationId": "api_entity_assessments_status_retrieve",
    "domain": "thirdParty",
    "method": "apiEntityAssessmentsStatusRetrieve",
    "http": "GET",
    "path": "/api/entity-assessments/status/",
    "paginate": "none"
  },
  {
    "operationId": "api_representatives_list",
    "domain": "thirdParty",
    "method": "apiRepresentativesList",
    "http": "GET",
    "path": "/api/representatives/",
    "paginate": "page"
  },
  {
    "operationId": "api_representatives_create",
    "domain": "thirdParty",
    "method": "apiRepresentativesCreate",
    "http": "POST",
    "path": "/api/representatives/",
    "paginate": "none"
  },
  {
    "operationId": "api_representatives_retrieve",
    "domain": "thirdParty",
    "method": "apiRepresentativesRetrieve",
    "http": "GET",
    "path": "/api/representatives/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_representatives_update",
    "domain": "thirdParty",
    "method": "apiRepresentativesUpdate",
    "http": "PUT",
    "path": "/api/representatives/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_representatives_partial_update",
    "domain": "thirdParty",
    "method": "apiRepresentativesPartialUpdate",
    "http": "PATCH",
    "path": "/api/representatives/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_representatives_destroy",
    "domain": "thirdParty",
    "method": "apiRepresentativesDestroy",
    "http": "DELETE",
    "path": "/api/representatives/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_representatives_cascade_info_retrieve",
    "domain": "thirdParty",
    "method": "apiRepresentativesCascadeInfoRetrieve",
    "http": "GET",
    "path": "/api/representatives/{id}/cascade-info/",
    "paginate": "none"
  },
  {
    "operationId": "api_representatives_object_retrieve",
    "domain": "thirdParty",
    "method": "apiRepresentativesObjectRetrieve",
    "http": "GET",
    "path": "/api/representatives/{id}/object/",
    "paginate": "none"
  },
  {
    "operationId": "api_representatives_batch_action_create",
    "domain": "thirdParty",
    "method": "apiRepresentativesBatchActionCreate",
    "http": "POST",
    "path": "/api/representatives/batch-action/",
    "paginate": "none"
  },
  {
    "operationId": "api_solutions_list",
    "domain": "thirdParty",
    "method": "apiSolutionsList",
    "http": "GET",
    "path": "/api/solutions/",
    "paginate": "page"
  },
  {
    "operationId": "api_solutions_create",
    "domain": "thirdParty",
    "method": "apiSolutionsCreate",
    "http": "POST",
    "path": "/api/solutions/",
    "paginate": "none"
  },
  {
    "operationId": "api_solutions_retrieve",
    "domain": "thirdParty",
    "method": "apiSolutionsRetrieve",
    "http": "GET",
    "path": "/api/solutions/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_solutions_update",
    "domain": "thirdParty",
    "method": "apiSolutionsUpdate",
    "http": "PUT",
    "path": "/api/solutions/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_solutions_partial_update",
    "domain": "thirdParty",
    "method": "apiSolutionsPartialUpdate",
    "http": "PATCH",
    "path": "/api/solutions/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_solutions_destroy",
    "domain": "thirdParty",
    "method": "apiSolutionsDestroy",
    "http": "DELETE",
    "path": "/api/solutions/{id}/",
    "paginate": "none"
  },
  {
    "operationId": "api_solutions_cascade_info_retrieve",
    "domain": "thirdParty",
    "method": "apiSolutionsCascadeInfoRetrieve",
    "http": "GET",
    "path": "/api/solutions/{id}/cascade-info/",
    "paginate": "none"
  },
  {
    "operationId": "api_solutions_object_retrieve",
    "domain": "thirdParty",
    "method": "apiSolutionsObjectRetrieve",
    "http": "GET",
    "path": "/api/solutions/{id}/object/",
    "paginate": "none"
  },
  {
    "operationId": "api_solutions_batch_action_create",
    "domain": "thirdParty",
    "method": "apiSolutionsBatchActionCreate",
    "http": "POST",
    "path": "/api/solutions/batch-action/",
    "paginate": "none"
  },
  {
    "operationId": "api_solutions_data_location_processing_retrieve",
    "domain": "thirdParty",
    "method": "apiSolutionsDataLocationProcessingRetrieve",
    "http": "GET",
    "path": "/api/solutions/data_location_processing/",
    "paginate": "none"
  },
  {
    "operationId": "api_solutions_data_location_storage_retrieve",
    "domain": "thirdParty",
    "method": "apiSolutionsDataLocationStorageRetrieve",
    "http": "GET",
    "path": "/api/solutions/data_location_storage/",
    "paginate": "none"
  },
  {
    "operationId": "api_solutions_dora_alternative_providers_identified_retrieve",
    "domain": "thirdParty",
    "method": "apiSolutionsDoraAlternativeProvidersIdentifiedRetrieve",
    "http": "GET",
    "path": "/api/solutions/dora_alternative_providers_identified/",
    "paginate": "none"
  },
  {
    "operationId": "api_solutions_dora_data_sensitiveness_retrieve",
    "domain": "thirdParty",
    "method": "apiSolutionsDoraDataSensitivenessRetrieve",
    "http": "GET",
    "path": "/api/solutions/dora_data_sensitiveness/",
    "paginate": "none"
  },
  {
    "operationId": "api_solutions_dora_discontinuing_impact_retrieve",
    "domain": "thirdParty",
    "method": "apiSolutionsDoraDiscontinuingImpactRetrieve",
    "http": "GET",
    "path": "/api/solutions/dora_discontinuing_impact/",
    "paginate": "none"
  },
  {
    "operationId": "api_solutions_dora_has_exit_plan_retrieve",
    "domain": "thirdParty",
    "method": "apiSolutionsDoraHasExitPlanRetrieve",
    "http": "GET",
    "path": "/api/solutions/dora_has_exit_plan/",
    "paginate": "none"
  },
  {
    "operationId": "api_solutions_dora_ict_service_type_retrieve",
    "domain": "thirdParty",
    "method": "apiSolutionsDoraIctServiceTypeRetrieve",
    "http": "GET",
    "path": "/api/solutions/dora_ict_service_type/",
    "paginate": "none"
  },
  {
    "operationId": "api_solutions_dora_non_substitutability_reason_retrieve",
    "domain": "thirdParty",
    "method": "apiSolutionsDoraNonSubstitutabilityReasonRetrieve",
    "http": "GET",
    "path": "/api/solutions/dora_non_substitutability_reason/",
    "paginate": "none"
  },
  {
    "operationId": "api_solutions_dora_reintegration_possibility_retrieve",
    "domain": "thirdParty",
    "method": "apiSolutionsDoraReintegrationPossibilityRetrieve",
    "http": "GET",
    "path": "/api/solutions/dora_reintegration_possibility/",
    "paginate": "none"
  },
  {
    "operationId": "api_solutions_dora_reliance_level_retrieve",
    "domain": "thirdParty",
    "method": "apiSolutionsDoraRelianceLevelRetrieve",
    "http": "GET",
    "path": "/api/solutions/dora_reliance_level/",
    "paginate": "none"
  },
  {
    "operationId": "api_solutions_dora_substitutability_retrieve",
    "domain": "thirdParty",
    "method": "apiSolutionsDoraSubstitutabilityRetrieve",
    "http": "GET",
    "path": "/api/solutions/dora_substitutability/",
    "paginate": "none"
  },
  {
    "operationId": "api_solutions_export_csv_retrieve",
    "domain": "thirdParty",
    "method": "apiSolutionsExportCsvRetrieve",
    "http": "GET",
    "path": "/api/solutions/export_csv/",
    "paginate": "none"
  },
  {
    "operationId": "api_solutions_export_xlsx_retrieve",
    "domain": "thirdParty",
    "method": "apiSolutionsExportXlsxRetrieve",
    "http": "GET",
    "path": "/api/solutions/export_xlsx/",
    "paginate": "none"
  }
] as const;

export const DOMAINS = [
  "analyticsMetrology",
  "assets",
  "authUsers",
  "chat",
  "compliance",
  "crq",
  "ebiosRm",
  "evidence",
  "frameworksLibraries",
  "governance",
  "incidents",
  "integrations",
  "privacy",
  "resilience",
  "riskManagement",
  "securityFindings",
  "settings",
  "tasksTimeline",
  "thirdParty"
] as const;

export type Domain = (typeof DOMAINS)[number];

(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{116:function(n,e,t){"use strict";t.r(e),t.d(e,"frontMatter",(function(){return a})),t.d(e,"metadata",(function(){return i})),t.d(e,"rightToc",(function(){return s})),t.d(e,"default",(function(){return l}));var r=t(2),o=t(6),_=(t(0),t(122)),a={id:"x5",title:"Appendix 5: JSON Schema Grammar",sidebar_label:"Appendix 5: JSON Schema Grammar"},i={unversionedId:"x5",id:"x5",isDocsHomePage:!1,title:"Appendix 5: JSON Schema Grammar",description:"\x3c!---",source:"@site/../CQL_Guide/x5.md",slug:"/x5",permalink:"/cql-guide/x5",version:"current",lastUpdatedBy:"Rico Mariani",lastUpdatedAt:1607745495,sidebar_label:"Appendix 5: JSON Schema Grammar",sidebar:"someSidebar",previous:{title:"Chapter 4: CQL Error Codes",permalink:"/cql-guide/x4"}},s=[{value:"Rules",id:"rules",children:[]}],p={rightToc:s};function l(n){var e=n.components,t=Object(o.a)(n,["components"]);return Object(_.b)("wrapper",Object(r.a)({},p,t,{components:e,mdxType:"MDXLayout"}),Object(_.b)("p",null,"What follows is taken from the JSON validation grammar with the tree building rules removed."),Object(_.b)("p",null,"Snapshot as of Tue Sep  8 13:06:45 PDT 2020"),Object(_.b)("h3",{id:"rules"},"Rules"),Object(_.b)("pre",null,Object(_.b)("code",Object(r.a)({parentName:"pre"},{})," \n \njson_schema: '{' \n         '\"tables\"' ':' '[' opt_tables ']' ',' \n         '\"views\"' ':' '[' opt_views ']' ',' \n         '\"indices\"' ':' '[' opt_indices ']' ',' \n         '\"triggers\"' ':' '[' opt_triggers ']' ',' \n         '\"attributes\"' ':' '[' opt_attribute_list ']' ',' \n         '\"queries\"' ':' '[' opt_queries ']' ',' \n         '\"inserts\"' ':' '[' opt_inserts ']' ',' \n         '\"updates\"' ':' '[' opt_updates ']' ',' \n         '\"deletes\"' ':' '[' opt_deletes ']' ',' \n         '\"general\"' ':' '[' opt_generals ']' ',' \n         '\"regions\"' ':' '[' opt_regions ']' ',' \n         '\"adHocMigrationProcs\"' ':' '[' opt_ad_hoc_migrations ']' \n         '}' \n  ; \n \nBOOL_LITERAL: '0' | '1' \n  ; \n \nopt_tables: | tables \n  ; \n \ntables: table | table ',' tables \n  ; \n \ntable: '{' \n       '\"name\"' ':' STRING_LITERAL ',' \n       '\"isTemp\"' ':' BOOL_LITERAL ',' \n       '\"ifNotExists\"' ':' BOOL_LITERAL ',' \n       '\"withoutRowid\"' ':' BOOL_LITERAL ',' \n       '\"isAdded\"' ':' BOOL_LITERAL ',' \n       opt_added_version \n       '\"isDeleted\"' ':' BOOL_LITERAL ',' \n       opt_deleted_version \n       '\"isRecreated\"' ':' BOOL_LITERAL ',' \n       opt_recreate_group_name \n       opt_region_info \n       opt_table_indices \n       opt_attributes \n       '\"columns\"' ':' '[' columns ']' ',' \n       '\"primaryKey\"' ':' '[' opt_column_names ']' ',' \n       '\"foreignKeys\"' ':' '[' opt_foreign_keys ']' ',' \n       '\"uniqueKeys\"' ':' '[' opt_unique_keys ']' \n       '}' \n  ; \n \nopt_added_version: | '\"addedVersion\"' ':' any_integer ',' opt_added_migration_proc \n  ; \n \nopt_added_migration_proc: | '\"addedMigrationProc\"' ':' STRING_LITERAL ',' \n  ; \n \nopt_deleted_version: | '\"deletedVersion\"' ':' any_integer ',' opt_deleted_migration_proc \n  ; \n \nopt_deleted_migration_proc: | '\"deletedMigrationProc\"' ':' STRING_LITERAL ',' \n  ; \n \nopt_recreate_group_name: | '\"recreateGroupName\"' ':' STRING_LITERAL ',' \n  ; \n \nopt_index_names: | index_names \n  ; \n \nindex_names: STRING_LITERAL | STRING_LITERAL ',' index_names \n  ; \n \nopt_arg_names: | arg_names \n  ; \n \narg_names: STRING_LITERAL | STRING_LITERAL ',' arg_names \n  ; \n \nopt_column_names: | column_names \n  ; \n \ncolumn_names: STRING_LITERAL | STRING_LITERAL ',' column_names \n  ; \n \nopt_table_names: | table_names \n  ; \n \ntable_names: STRING_LITERAL | STRING_LITERAL ',' table_names \n  ; \n \nopt_procedure_names: | procedure_names \n  ; \n \nprocedure_names: STRING_LITERAL | STRING_LITERAL ',' procedure_names \n  ; \n \nsort_order_names: STRING_LITERAL | STRING_LITERAL ',' sort_order_names \n  ; \n \ncolumns: column | column ',' columns \n  ; \n \ncolumn: '{' \n        '\"name\"' ':' STRING_LITERAL ',' \n        opt_attributes \n        '\"type\"' ':' STRING_LITERAL ',' \n        opt_is_sensitive \n        '\"isNotNull\"' ':' BOOL_LITERAL ',' \n        '\"isAdded\"' ':' BOOL_LITERAL ',' \n        opt_added_version \n        '\"isDeleted\"' ':' BOOL_LITERAL ',' \n        opt_deleted_version \n        '\"isPrimaryKey\"' ':' BOOL_LITERAL ',' \n        '\"isUniqueKey\"' ':' BOOL_LITERAL ',' \n        '\"isAutoIncrement\"' ':' BOOL_LITERAL \n        opt_default_value \n        '}' \n  ; \n \nopt_default_value: | ',' '\"defaultValue\"' ':' any_literal \n  ; \n \nopt_foreign_keys : | foreign_keys \n  ; \n \nopt_is_sensitive: | '\"isSensitive\"' ':' '1' ',' \n  ; \n \nforeign_keys :  foreign_key | foreign_key ',' foreign_keys \n  ; \n \nforeign_key : '{' \n               '\"columns\"' ':' '[' column_names ']' ',' \n               '\"referenceTable\"' ':' STRING_LITERAL ',' \n               '\"referenceColumns\"' ':' '[' column_names ']' ',' \n               '\"onUpdate\"' ':' STRING_LITERAL ',' \n               '\"onDelete\"' ':' STRING_LITERAL ',' \n               '\"isDeferred\"' ':' BOOL_LITERAL \n              '}' \n  ; \n \nopt_unique_keys :  | unique_keys \n  ; \n \nunique_keys : unique_key | unique_key ',' unique_keys \n  ; \n \nunique_key:  '{' \n              opt_name \n              '\"columns\"' ':' '[' column_names ']' \n             '}' \n  ; \n \nopt_name: | '\"name\"' ':' STRING_LITERAL ',' \n  ; \n \nopt_table_indices: | table_indices \n  ; \n \ntable_indices: '\"indices\"' ':' '[' opt_index_names ']' ',' \n  ; \n \nopt_attributes:  | attributes \n  ; \n \nattributes: '\"attributes\"' ':' '[' attribute_list ']' ',' \n  ; \n \nopt_attribute_list: | attribute_list \n  ; \n \nattribute_list: attribute | attribute ',' attribute_list \n  ; \n \nattribute:  '{' \n             '\"name\"' ':' STRING_LITERAL ',' \n             '\"value\"' ':' attribute_value \n            '}' \n  ; \n \nattribute_array: '[' opt_attribute_value_list ']' \n  ; \n \nopt_attribute_value_list: | attribute_value_list \n  ; \n \nattribute_value_list: attribute_value | attribute_value ',' attribute_value_list \n  ; \n \nattribute_value: any_literal | attribute_array \n  ; \n \nany_integer: BOOL_LITERAL | INT_LITERAL \n  ; \n \nany_literal:  BOOL_LITERAL | \n              INT_LITERAL | '-' INT_LITERAL | \n              LONG_LITERAL | '-' LONG_LITERAL | \n              REAL_LITERAL | '-' REAL_LITERAL | \n              STRING_LITERAL | NULL_LITERAL \n  ; \n \nopt_views: | views \n  ; \n \nviews: view | view ',' views \n  ; \n \nview:  '{' \n       '\"name\"' ':' STRING_LITERAL ',' \n       '\"isTemp\"' ':' BOOL_LITERAL ',' \n       '\"isDeleted\"' ':' BOOL_LITERAL ',' \n       opt_deleted_version \n       opt_region_info \n       projection \n       '\"select\"' ':' STRING_LITERAL ',' \n       '\"selectArgs\"' ':' '[' ']' \n       '}' \n  ; \n \nopt_region_info: | '\"region\"' ':' STRING_LITERAL ',' |  '\"region\"' ':' STRING_LITERAL ',' '\"deployedInRegion\"' ':' STRING_LITERAL ',' \n  ; \n \nopt_projection: | projection \n  ; \n \nprojection: '\"projection\"' ':' '[' projected_columns ']' ',' \n  ; \n \nprojected_columns: projected_column | projected_column ',' projected_columns \n  ; \n \nprojected_column: '{' \n                   '\"name\"' ':' STRING_LITERAL ',' \n                   '\"type\"' ':' STRING_LITERAL ',' \n                   opt_is_sensitive \n                   '\"isNotNull\"' ':' BOOL_LITERAL \n                  '}' \n  ; \n \nopt_indices:  | indices \n  ; \n \nindices: index  | index ',' indices \n  ; \n \nindex: '{' \n        '\"name\"' ':' STRING_LITERAL ',' \n        '\"table\"' ':' STRING_LITERAL ',' \n        '\"isUnique\"' ':' BOOL_LITERAL ',' \n        '\"ifNotExists\"' ':' BOOL_LITERAL ',' \n        '\"isDeleted\"' ':' BOOL_LITERAL ',' \n        opt_deleted_version \n        opt_region_info \n        '\"columns\"' ':' '[' column_names ']' ',' \n        '\"sortOrders\"' ':' '[' sort_order_names ']' \n       '}' \n  ; \n \nopt_triggers: | triggers \n  ; \n \ntriggers: trigger | trigger ',' triggers \n  ; \n \ntrigger: '{' \n          '\"name\"' ':' STRING_LITERAL ',' \n          '\"target\"' ':' STRING_LITERAL ',' \n          '\"isTemp\"' ':' BOOL_LITERAL ',' \n          '\"ifNotExists\"' ':' BOOL_LITERAL ',' \n          '\"isDeleted\"' ':' BOOL_LITERAL ',' \n          opt_deleted_version \n          before_after_instead ',' \n          delete_insert_update ',' \n          opt_for_each_row \n          opt_when_expr \n          '\"statement\"' ':' STRING_LITERAL ',' \n          '\"statementArgs\"' ':' '[' opt_arg_names ']' ',' \n          opt_region_info \n          dependencies \n         '}' \n  ; \n \nbefore_after_instead: '\"isBeforeTrigger\"' ':' '1' | '\"isAfterTrigger\"' ':' '1'  | '\"isInsteadOfTrigger\"' ':' '1' \n  ; \n \ndelete_insert_update: '\"isDeleteTrigger\"' ':' '1' | '\"isInsertTrigger\"' ':' '1' | '\"isUpdateTrigger\"' ':' '1' \n  ; \n \nopt_for_each_row: | '\"forEachRow\"' ':' BOOL_LITERAL ',' \n  ; \n \nopt_when_expr: | '\"whenExpr\"' ':' STRING_LITERAL ',' '\"whenExprArgs\"' ':' '[' opt_arg_names ']' ',' \n  ; \n \ndependencies: opt_insert_tables \n            opt_update_tables \n            opt_delete_tables \n            opt_from_tables \n            opt_uses_procedures \n            '\"usesTables\"' ':' '[' opt_table_names ']' \n  ; \n \nopt_insert_tables: | '\"insertTables\"' ':' '[' opt_table_names ']' ',' \n  ; \n \nopt_update_tables: | '\"updateTables\"' ':' '[' opt_table_names ']' ',' \n  ; \n \nopt_delete_tables: | '\"deleteTables\"' ':' '[' opt_table_names ']' ',' \n  ; \n \nopt_from_tables: | '\"fromTables\"' ':' '[' opt_table_names ']' ',' \n  ; \n \nopt_uses_procedures : | '\"usesProcedures\"' ':' '[' opt_procedure_names ']' ',' \n  ; \n \nopt_queries: | queries ; \n \nqueries: query | query ',' queries ; \n \nquery: '{' \n       '\"name\"' ':' STRING_LITERAL ',' \n       '\"definedInFile\"' ':' STRING_LITERAL ',' \n       '\"args\"' ':' '[' opt_args ']' ',' \n       dependencies ',' \n       opt_region_info \n       opt_attributes \n       projection \n       '\"statement\"' ':' STRING_LITERAL ',' \n       '\"statementArgs\"' ':' '[' opt_arg_names ']' \n       '}' \n  ; \n \nopt_args: | args \n  ; \n \nargs: arg | arg ',' args \n  ; \n \narg: '{' \n      '\"name\"' ':' STRING_LITERAL ',' \n      '\"type\"' ':' STRING_LITERAL ',' \n      opt_is_sensitive \n      '\"isNotNull\"' ':' BOOL_LITERAL \n      '}' \n  ; \n \nopt_inserts: | inserts \n  ; \n \ninserts: insert | insert ',' inserts \n  ; \n \ninsert : '{' \n         '\"name\"' ':' STRING_LITERAL ',' \n         '\"definedInFile\"' ':' STRING_LITERAL ',' \n         '\"args\"' ':' '[' opt_args ']' ',' \n         dependencies ',' \n         opt_region_info \n         opt_attributes \n         '\"table\"' ':' STRING_LITERAL ',' \n         '\"statement\"' ':' STRING_LITERAL ',' \n         '\"statementArgs\"' ':' '[' opt_arg_names ']' ',' \n         '\"statementType\"' ':' STRING_LITERAL ',' \n         '\"columns\"' ':' '[' column_names ']' ',' \n         '\"values\"' ':' '[' opt_values ']' \n         '}' \n  ; \n \nopt_values: | values \n  ; \n \nvalues: value | value ',' values \n  ; \n \nvalue:  '{' \n         '\"value\"' ':' STRING_LITERAL ',' \n         '\"valueArgs\"' ':' '[' opt_arg_names ']' \n        '}' \n  ; \n \nopt_updates: | updates \n  ; \n \nupdates: update | update ',' updates \n  ; \n \nupdate : '{' \n         '\"name\"' ':' STRING_LITERAL ',' \n         '\"definedInFile\"' ':' STRING_LITERAL ',' \n         '\"args\"' ':' '[' opt_args ']' ',' \n         dependencies ',' \n         opt_region_info \n         opt_attributes \n         '\"table\"' ':' STRING_LITERAL ',' \n         '\"statement\"' ':' STRING_LITERAL ',' \n         '\"statementArgs\"' ':' '[' opt_arg_names ']' \n         '}' \n  ; \n \nopt_deletes: | deletes \n  ; \n \ndeletes: delete | delete ',' deletes \n  ; \n \ndelete : '{' \n         '\"name\"' ':' STRING_LITERAL ',' \n         '\"definedInFile\"' ':' STRING_LITERAL ',' \n         '\"args\"' ':' '[' opt_args ']' ',' \n         dependencies ',' \n         opt_region_info \n         opt_attributes \n         '\"table\"' ':' STRING_LITERAL ',' \n         '\"statement\"' ':' STRING_LITERAL ',' \n         '\"statementArgs\"' ':' '[' opt_arg_names ']' \n         '}' \n  ; \n \nopt_generals: | generals \n  ; \n \ngenerals: general | general ',' generals \n  ; \n \ngeneral: '{' \n          '\"name\"' ':' STRING_LITERAL ',' \n          '\"definedInFile\"' ':' STRING_LITERAL ',' \n          '\"args\"' ':' '[' opt_complex_args ']' ',' \n          dependencies ',' \n          opt_regions \n          opt_attributes \n          '\"hasStructResult\"' ':' BOOL_LITERAL ',' \n          '\"hasRowsetResult\"' ':' BOOL_LITERAL ',' \n          opt_projection \n          opt_result_contract \n          '\"usesDatabase\"' ':' BOOL_LITERAL \n         '}' \n  ; \n \nopt_result_contract: | '\"hasSelectResult\"' ':' '1' ',' | '\"hasOutResult\"' ':' '1' ',' | '\"hasOutUnionResult\"' ':''1' ',' \n  ; \n \nopt_complex_args: | complex_args \n  ; \n \ncomplex_args: complex_arg | complex_arg ',' complex_args \n  ; \n \ncomplex_arg: '{' \n              opt_binding \n              '\"name\"' ':' STRING_LITERAL ',' \n              '\"type\"' ':' STRING_LITERAL ',' \n              opt_is_sensitive \n              '\"isNotNull\"' ':' BOOL_LITERAL \n             '}' \n  ; \n \nopt_binding: | '\"binding\"' ':' STRING_LITERAL ',' \n  ; \n \nopt_regions: | regions \n  ; \n \nregions: region | region ',' regions \n  ; \n \nregion:  '{' \n          '\"name\"' ':' STRING_LITERAL ',' \n          '\"isDeployableRoot\"' ':' BOOL_LITERAL ',' \n          '\"deployedInRegion\"' ':' STRING_LITERAL ',' \n          '\"using\"' ':' '[' opt_region_names ']' ',' \n          '\"usingPrivately\"' ':' '[' opt_bool_list ']' \n         '}' \n  ; \n \nopt_region_names: | region_names \n  ; \n \nregion_names: STRING_LITERAL | STRING_LITERAL ',' region_names \n  ; \n \nopt_bool_list: | bool_list \n  ; \n \nbool_list: BOOL_LITERAL | BOOL_LITERAL ',' bool_list \n  ; \n \nopt_ad_hoc_migrations: | ad_hoc_migrations \n  ; \n \nad_hoc_migrations: ad_hoc_migration | ad_hoc_migrations ',' ad_hoc_migrations \n  ; \n \nad_hoc_migration: '{' \n                  '\"name\"' ':' STRING_LITERAL ',' \n                  '\"version\"' ':' any_integer \n                  '}' \n  ; \n \n")))}l.isMDXComponent=!0},122:function(n,e,t){"use strict";t.d(e,"a",(function(){return L})),t.d(e,"b",(function(){return c}));var r=t(0),o=t.n(r);function _(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function a(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function i(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){_(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function s(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t,r,o={},_=Object.keys(n);for(r=0;r<_.length;r++)t=_[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var _=Object.getOwnPropertySymbols(n);for(r=0;r<_.length;r++)t=_[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}var p=o.a.createContext({}),l=function(n){var e=o.a.useContext(p),t=e;return n&&(t="function"==typeof n?n(e):i(i({},e),n)),t},L=function(n){var e=l(n.components);return o.a.createElement(p.Provider,{value:e},n.children)},u={inlineCode:"code",wrapper:function(n){var e=n.children;return o.a.createElement(o.a.Fragment,{},e)}},d=o.a.forwardRef((function(n,e){var t=n.components,r=n.mdxType,_=n.originalType,a=n.parentName,p=s(n,["components","mdxType","originalType","parentName"]),L=l(t),d=r,c=L["".concat(a,".").concat(d)]||L[d]||u[d]||_;return t?o.a.createElement(c,i(i({ref:e},p),{},{components:t})):o.a.createElement(c,i({ref:e},p))}));function c(n,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var _=t.length,a=new Array(_);a[0]=d;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=n,i.mdxType="string"==typeof n?n:r,a[1]=i;for(var p=2;p<_;p++)a[p]=t[p];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);
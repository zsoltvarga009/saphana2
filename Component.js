sap.ui.define([
	"sap/ui/core/UIComponent"
], function (UIComponent) {
	"use strict";
	
	var Component = UIComponent.extend("sap.tnt.sample.SideNavigation.Component", {
            metadata: {
                rootView: 'sap.tnt.sample.SideNavigation.V',
                dependencies: {
                    libs: [
                        'sap.tnt',
                        'sap.m'
                    ]
                },
                includes: [
                    'style.css'
                ],
                config: {
                    sample: {
                        stretch: true,
                        files: [
                            'V.view.xml',
                            'V.controller.js',
                            'style.css'
                        ]
                    },
                    additionalDownloadFiles: [
                        './style.css'
                    ]
                }
            }
        });

	return UIComponent.extend("sap.ui.demo.nav.Component", {

		metadata: {
			manifest: "json"
		},

		init: function () {
			// call the init function of the parent
			UIComponent.prototype.init.apply(this, arguments);

			// create the views based on the url/hash
			this.getRouter().initialize();
		}

	});

});
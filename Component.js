sap.ui.define([
	"sap/ui/core/UIComponent"
], function (UIComponent) {
	"use strict";
	
	var Component = UIComponent.extend("sap.ui.unified.sample.MenuMenuEventing.Component", {

		metadata : {
			rootView : "sap.ui.unified.sample.MenuMenuEventing.MenuMenuEventing",
			dependencies : {
				libs : [
					"sap.ui.unified"
				]
			},

			config : {
				sample : {
					files : [
						"MenuMenuEventing.view.xml",
						"MenuMenuEventing.fragment.xml",
						"MenuMenuEventing.controller.js"
					]
				}
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
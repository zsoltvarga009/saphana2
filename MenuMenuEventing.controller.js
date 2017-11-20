sap.ui.define([
	'sap/m/MessageToast',
	'sap/ui/core/Fragment',
	'sap/ui/demo/nav/controller/BaseController'
], function(MessageToast, Fragment, BaseController) {
	"use strict";

	var MenuMenuEventingController = BaseController.extend("sap.ui.unified.sample.MenuMenuEventing.MenuMenuEventing", {

		onInit: function() {
			this.byId("openMenu").attachBrowserEvent("tab keyup", function(oEvent) {
				this._bKeyboard = oEvent.type == "keyup";
			}, this);
		},

		handlePressOpenMenu: function(oEvent) {
			var oButton = oEvent.getSource();

			// create menu only once
			if (!this._menu) {
				this._menu = sap.ui.xmlfragment(
					"sap.ui.unified.sample.MenuMenuEventing.MenuMenuEventing",
					this
				);
				this.getView().addDependent(this._menu);
			}

			var eDock = sap.ui.core.Popup.Dock;
			this._menu.open(this._bKeyboard, oButton, eDock.BeginTop, eDock.BeginBottom, oButton);
		},

		handleMenuItemPress: function(oEvent) {
			if (oEvent.getParameter("item").getSubmenu()) {
				return;
			}

			var msg = "";

			if (oEvent.getParameter("item").getText() == "Home") {
				this.getRouter().navTo("home");
			} else if (oEvent.getParameter("item").getText() == "Search") {
				this.getRouter().navTo("search");
			} else if (oEvent.getParameter("item").getText() == "Visualisation") {
				this.getRouter().navTo("visualisation");
			} else if (oEvent.getParameter("item").getText() == "Stream") {
				this.getRouter().navTo("employeeList");
			} else {
				msg = "Hiba: " + oEvent.getParameter("item").getText() + "nevű lap nem található";
				MessageToast.show(msg);
			}
		}
	});

	return MenuMenuEventingController;

});
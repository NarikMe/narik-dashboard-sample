class TemplateResolver {
  Resolve(key) {
    switch (key) {
      case "NarikListUi":
        return {
          template: "",
          templateUrl: "./src/app/templates/list-template.html"
        };
      case "NarikDetailUi":
        return {
          template: "",
          templateUrl: "./src/app/templates/detail-template.html"
        };
      case "WidgetViewUi":
        return {
          template: "",
          templateUrl: "./src/app/templates/dashboard-view.template.html"
        };
      case "WidgetDesignUi":
        return {
          template: "",
          templateUrl: "./src/app/templates/dashboard-design.template.html"
        };

      default:
        break;
    }
  }
}
module.exports = TemplateResolver;

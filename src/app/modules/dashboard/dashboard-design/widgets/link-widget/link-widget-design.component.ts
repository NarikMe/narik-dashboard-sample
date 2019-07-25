import { Component } from "@angular/core";

import { WidgetDesign } from "../../../dashboard-share/base/widget-design";
import { WidgetDesignUi } from "../../../../../templates/template.decorator";

@WidgetDesignUi()
@Component({
  templateUrl: "./link-widget-design.component.html"
})
export class LinkWidgetDesignComponent extends WidgetDesign {
  currentLink: any = {
    linkTitle: "",
    link: ""
  };

  add() {
    if (this.currentLink.link && this.currentLink.linkTitle) {
      this.model.links.push({
        link: this.currentLink.link,
        linkTitle: this.currentLink.linkTitle
      });
      this.currentLink = {
        linkTitle: "",
        link: ""
      };
    }
  }

  removeLink(link) {
    const pos = this.model.links.indexOf(link);
    if (pos >= 0) {
      this.model.links.splice(pos, 1);
    }
  }
}

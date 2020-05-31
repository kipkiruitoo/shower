import { Component } from "@angular/core";
import { Plugins, StatusBarStyle } from "@capacitor/core";

const { StatusBar } = Plugins;

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  config: any;
  fullpage_api: any;
  ifLoaded: boolean;
  showerThoughts: [];
  constructor() {
    this.ifLoaded = false;
    this.changeStatusBar();
    // for more details on config options please visit fullPage.js docs
    this.config = {
      // fullpage options
      sectionsColor: [
        "#41b883",
        "#ff5f45",
        "#0798ec",
        "#fec401",
        "#1bcee6",
        "#ee1a59",
        "#2c3e4f",
        "#ba5be9",
        "#b4b8ab",
        "#41b883",
        "#ff5f45",
        "#0798ec",
        "#fec401",
        "#1bcee6",
        "#ee1a59",
        "#2c3e4f",
        "#ba5be9",
        "#41b883",
        "#ff5f45",
        "#0798ec",
        "#fec401",
        "#1bcee6",
        "#ee1a59",
        "#2c3e4f",
        "#ba5be9",
        "#ba5be9",
        "#b4b8ab",
        "#41b883",
        "#ff5f45",
        "#0798ec",
        "#fec401",
        "#1bcee6",
        "#ee1a59",
        "#2c3e4f",
        "#ba5be9",
        "#41b883",
        "#ff5f45",
        "#0798ec",
        "#fec401",
        "#ba5be9",
        "#b4b8ab",
        "#41b883",
        "#ff5f45",
        "#0798ec",
        "#fec401",
        "#1bcee6",
        "#ee1a59",
        "#2c3e4f",
        "#ba5be9",
        "#41b883",
        "#ff5f45",
        "#0798ec",
        "#fec401",
        "#ba5be9",
        "#b4b8ab",
        "#41b883",
        "#ff5f45",
        "#0798ec",
        "#fec401",
        "#1bcee6",
        "#ee1a59",
        "#2c3e4f",
        "#ba5be9",
        "#41b883",
        "#ff5f45",
        "#0798ec",
        "#fec401",
        "#ba5be9",
        "#b4b8ab",
        "#41b883",
        "#ff5f45",
        "#0798ec",
        "#fec401",
        "#1bcee6",
        "#ee1a59",
        "#2c3e4f",
        "#ba5be9",
        "#41b883",
        "#ff5f45",
        "#0798ec",
        "#fec401",
      ],
      scrollbar: true,
      // navigation: true,

      // // fullpage callbacks
      // afterResize: () => {
      //   console.log("After resize");
      // },
      // afterLoad: (origin, destination, direction) => {
      //   console.log(origin.index);
      // },
    };
  }
  ngOnInit() {
    fetch("https://www.reddit.com/r/showerthoughts.json?limit=50")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.showerThoughts = data.data.children;
        this.showerThoughts.shift();
        this.showerThoughts.shift();
        this.ifLoaded = true;
      });
  }
  getRef(fullPageRef) {
    this.fullpage_api = fullPageRef;
  }

  changeStatusBar() {
    StatusBar.setOverlaysWebView({
      overlay: true,
    });
  }
}

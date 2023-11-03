class WidgetForm extends HTMLElement {
  constructor() {
    super();

    this.theme_color = "purple";
    //   this.video_url = "videoCard";
  }

  // <video src="{{CDN_LINK}}assets/videos/videoCard.mp4" autoplay="" loop="" muted="" playsinline="" width="360px" height="210px"></video>

  connectedCallback() {
    this.fetchData();
    this.render();
  }

  fetchData() {
    const data = ROUTE.componentData("form");
    if (data) {
      console.log(data);
    }
  }

  render() {
    this.innerHTML = `<form id="mtx-form">
    <div>
        <div class="mtx-form-group">
            <div class="title-one">We are here to support you!</div>
            <p class="title-two">Inorder to get started, we'd like to collect some information.
            </p>
        </div>
    </div>
    <div class="mtx-form-group">
        <input name="name" type="text" class="mtx-form-control " placeholder="Your name"/>
    </div>
    <div class="mtx-form-group">
        <input name="email" type="text" class="mtx-form-control " placeholder="Work email"/>
    </div>
    <div class="mtx-form-group">
        <textarea rows="2" type="text" class="mtx-form-control shadow-lg" name="message" placeholder="Tell us how we can help you?"></textarea>
    </div>
</form>
`;
  }
}

customElements.define("widget-form", WidgetForm);

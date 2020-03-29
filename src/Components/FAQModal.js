import React from "react";
import { Modal } from "antd";
import Constants from "../Constants";

class FAQEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false
    };
  }

  getBody = () => {
    return { __html: this.props.body };
  };

  render() {
    return (
      <>
        <h3
          style={{ cursor: "pointer" }}
          onClick={event => this.setState({ expanded: !this.state.expanded })}
        >
          {this.props.title}
        </h3>
        {this.state.expanded && (
          <p dangerouslySetInnerHTML={this.getBody()}></p>
        )}
      </>
    );
  }
}

function FAQModal(props) {
  function renderLink(url, text, target) {
    target = target || "_blank";
    return "<a target='" + target + "' href='" + url + "'>" + text + "</a>";
  }

  function addPlaceLink(text) {
    return renderLink(Constants.AddPlaceURL, text, "_self");
  }

  const consumerFAQs = [
    {
      title: "What is saveyourfaves.ca?",
      body:
        "SaveYourFaves is a directory of Toronto restaurants and coffee shops that offer online gift cards for purchase. It’s our hope that by providing this resource, we’ll be able to mobilize loyal customers to provide much-needed support for their favorite places in town. We also link to staff donation sites, if they are available."
    },
    {
      title: "Why isn’t my favorite business on your site?",
      body:
        "Please help us add your fave Toronto food & beverages spots " +
        addPlaceLink("here") +
        ". We're open to adding more small business categories if this catches on."
    },
    {
      title:
        "How else can I support our local businesses beyond purchasing a gift card?",
      body:
        "Delivery and pickup are great options! Some restaurants that don’t normally offer delivery have started to offer curbside pickup during the pandemic so check their websites and social media to see what’s available. <br />" +
        "Tip generously if you can (even for delivery/pickup), since employees are doing extra work and putting their health at risk. <br />" +
        "Encourage the government to get involved."
    },
    {
      title: "Who built this? And why?",
      body:
        "Our company " +
        renderLink("http://www.Phaze.io", "Phaze") +
        " along with a group of concerned citizens who love Toronto expanded upon the great initiative " +
        renderLink("https://SaveOurFaves.org", "SaveOurFaves.org") +
        " started by Kaitlyn & Mike Krieger. Gift cards are secured revenue for our favourite cafes, restaurants and places during this unpredictable time and every pruchase helps! We couldn’t have done this without the generous support from Kaitlyn & Mike Krieger, Jitin Pillai and his team at " +
        renderLink("https://easydeploy.io", "EasyDeploy") +
        ", Barry Hillier and his team at Barry Hillier Consulting. You can contact us with any questions about the the site at " +
        renderLink("mailto:info@SaveYourFaves.ca", "info@SaveYourFaves.ca")
    }
  ];
  const bizFAQs = [
    {
      title: "Why isn’t my business showing up in your search results?",
      body:
        "Please help us add your Toronto food/beverage business " +
        addPlaceLink("here") +
        ". We're open to adding more small business categories if this catches on."
    },
    {
      title:
        "My business offers gift certificates, but your site says we don’t",
      body: "Please let us know the details " + addPlaceLink("here") + "."
    },
    {
      title: "How can I start offering online gift cards?",
      body:
        "The first step is to check with your POS provider. Many offer their own gift card features (e.g. Square, Toast, ShopKeep), and others integrate with specific third-party providers. If your POS provider doesn’t offer gift cards or integrate with third-party providers, there are some reasonable standalone eGift Card apps like GiftUp or GiftFly. If you’re considering other options, make sure that your business receives the fee for the gift card as soon as the customer purchases the card (otherwise that won’t help you during the crisis). Some services may also ask customers to pay an additional fee when they buy a gift card but be sure it’s a small amount."
    },
    {
      title: "How can I encourage customers to buy gift cards?",
      body:
        "People are looking for ways they can support their favorite businesses, so don’t be afraid to let them know that gift cards will help. Reach out to your community on Facebook, Twitter, and Instagram, and use your email list to get in touch with your customers. Ask them to consider buying a gift card for one month of spending to help you weather this storm and keep paying staff, so that you can continue offering great food/coffee/etc. for years to come."
    }
  ];
  return (
    <Modal
      title="FAQs"
      visible={props.shouldShow}
      onOk={props.onClose}
      width="80%"
      onCancel={props.onClose}
      footer={<span></span>}
    >
      <h2>For Restaurant-goers</h2>
      {consumerFAQs.map(faq => (
        <FAQEntry key={faq.title} title={faq.title} body={faq.body} />
      ))}
      <h2>For Businesses</h2>
      {bizFAQs.map(faq => (
        <FAQEntry key={faq.title} title={faq.title} body={faq.body} />
      ))}
    </Modal>
  );
}

export default FAQModal;

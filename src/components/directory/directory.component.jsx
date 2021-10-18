import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import "./directory.styles.scss";

class Directory extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sections: [
        {
          title: "hats",
          imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
          id: 1,
          linkUrl: 'hats'
        },
        {
          title: "jackets",
          imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
          id: 2,
          linkUrl: ''
        },
        {
          title: "sneakers",
          imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
          id: 3,
          linkUrl: ''
        },
        {
          title: "womens",
          imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
          size: "large",
          id: 4,
          linkUrl: ''
        },
        {
          title: "mens",
          imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
          size: "large",
          id: 5,
          linkUrl: ''
        },
      ],
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {/* destructure value untuk mendapatkan value yang diingkan . title, imageUrl ,id  */}
        {/* note: .map terlebih dahulu state yang ada pada sections  */}
        {/* menggunakan props drilling untuk  */}
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          // memanggil value yang ada pada state sections
          <MenuItem
            key={id}
            {...otherSectionProps}
            // title={title}
            // imageUrl={imageUrl}
            // size={size}
            // linkUrl={linkUrl}
            // history={this.props.history}
          />
        ))}
      </div>
    );
  }
}

export default Directory;

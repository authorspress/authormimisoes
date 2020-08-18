import "../styles/about-author.scss"

export default function AboutAuthor(props) {
    return (
        <div className="about-author-container">
            <div className="about-author-title about-author-title--styles">
                About the author
            </div>
            <div className="author-img-container">
                <img className="author-img" src="/author-pic.jpg" alt="Mimi Soes picture" />
            </div>
            <div className="author-synops-container">
                <p className="author-synops--styles">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque aliquet ultricies ligula sit amet pharetra. Nam vestibulum facilisis neque, sit amet semper justo convallis non. Quisque risus elit, pulvinar a aliquam id, venenatis quis nisl. Phasellus posuere ac sapien in rhoncus. Mauris pharetra fermentum tortor, nec efficitur nulla vestibulum ac. Ut nec turpis tincidunt leo finibus aliquam a ut sapien. Fusce vitae neque ac velit dapibus cursus sed vitae arcu. Sed accumsan, nibh at iaculis eleifend, justo nulla elementum purus, non sollicitudin turpis justo eget est. Nulla iaculis odio sed lacus scelerisque pharetra. Curabitur euismod risus quis nunc elementum consectetur tristique at mi. Etiam bibendum turpis sed aliquet placerat. Phasellus id tortor nec metus lacinia fringilla convallis blandit eros. Pellentesque ornare ante in lacus laoreet faucibus. Sed bibendum ornare luctus. Pellentesque nec gravida sapien.
                </p>
            </div>
        </div>
    )
}


class Modal extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
        };
    }

    render() {
        <div>
            {this.props.children}
        </div>
    }
}

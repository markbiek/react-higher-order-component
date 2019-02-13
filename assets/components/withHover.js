import React, { Component } from 'react';

const withHover = (Wrapped) => {
    return class extends Component {
        constructor(props) {
            super(props);

            this.state = {
                hovering: false
            }
        }

        setHovering = hovering => {
            this.setState({ hovering });
        }

        hoverStart = e => {
            this.setHovering(true);
        }

        hoverEnd = e => {
            this.setHovering(false);
        }

        render() {
            const { hovering } = this.state;
        
            let props = {...this.props};
            props.fill = hovering ? '#00f' : props.fill;

            return (
                <Wrapped {...props} hovering={this.state.hovering}
                    enter={this.hoverStart}
                    leave={this.hoverEnd}
                />
            );
        }
    };
}

export default withHover;

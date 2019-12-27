import React, { Component } from "react";

class Shopping extends Component {
  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => {
            this.props.onIncrement(this.props.item);
          }}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>

        <button
          onClick={() => {
            this.props.onDelete(this.props.item.id);
          }}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.item.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.props.item;

    return count === 0 ? "Zero" : count;
  }
}

export default Shopping;

import React from 'react';

import { IconButton, Menu, MenuItem } from '@material-ui/core';

const options = [
  ['1', '2'],
  ['3', '4'],
  ['5', '6']
];

const ITEM_HEIGHT = 48;

class LongMenu extends React.Component {
  state = {
    anchorEl: null
  };

  handleClick = (i) => (event) => {
    this.setState({ index: i, anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;

    return (
      <div>
        {options.map((option, i) => (
          <React.Fragment key={i}>
            <IconButton
              aria-label="More"
              aria-owns={anchorEl ? 'long-menu' : null}
              aria-haspopup="true"
              onClick={this.handleClick(i)}
            >
              a
            </IconButton>
            <Menu
              id="long-menu"
              anchorEl={this.state.anchorEl}
              open={Boolean(anchorEl) && this.state.index === i}
              onClose={this.handleClose}
              PaperProps={{
                style: {
                  maxHeight: ITEM_HEIGHT * 4.5,
                  width: 200
                }
              }}
            >
              {option.map((single) => (
                <MenuItem
                  key={single}
                  selected={single === 'Pyxis'}
                  onClick={this.handleClose}
                >
                  {single}
                </MenuItem>
              ))}
            </Menu>
          </React.Fragment>
        ))}
      </div>
    );
  }
}

export default LongMenu;

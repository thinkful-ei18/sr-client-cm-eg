import React from 'react';
import './styles/styles-logout/LogoutModal.css';
import { clearAuth, toggleLogoutModal } from './actions/auth';
import { connect } from 'react-redux';

export class LogoutModal extends React.Component {

  onLogOut() {
    this.props.dispatch(clearAuth());
    this.props.dispatch(toggleLogoutModal())
  }

  onCancel() {
    this.props.dispatch(toggleLogoutModal())
  }

  render() {

    return (
      <div className='logout-modal-container'>
        <div className='logout-modal-header'>
          Log Out
        </div>
        <div className='logout-modal-prompt'>
          Are you Sure you Want to Log Out?
        </div>
        <div className='logout-modal-buttons'>
          <button onClick={() => this.onLogOut()} className='logout-modal-logout'>
            Log Out
          </button>
          <button onClick={() => this.onCancel()} className='logout-modal-cancel'>
            Cancel
          </button>
        </div>
      </div>
    )
  }
}

export default connect()(LogoutModal);
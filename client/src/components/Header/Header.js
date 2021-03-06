import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import { logout } from '../../actions'
import styles from './Header.css'

class Header extends Component {
  render () {
    let headerButtons

    if (this.props.loggedIn) {
      headerButtons = <Link to='/' onClick={this.props.logout} className={styles.button}>LOG OUT</Link>
    } else {
      headerButtons = [
        <Link key='signup' to='/signup' className={styles.button}>SIGN UP</Link>,
        <Link key='login' to='/login' className={styles.button}>LOGIN</Link>
      ]
    }

    return (
      <header className={styles.header}>
        {headerButtons}
      </header>
    )
  }
}

Header.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired
}

function mapStateToProps (state) {
  return { loggedIn: state.login.loggedIn }
}

export default connect(mapStateToProps, { logout })(Header)

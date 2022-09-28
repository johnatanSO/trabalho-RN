import { Text } from 'react-native'
import {styles} from './HeaderStyles'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import {faUser, faBars} from '@fortawesome/free-solid-svg-icons'


export default function Header({ }){
  return (
    <>
      <header style={styles.headerContainer}>
        <FontAwesomeIcon style={{marginLeft: '20px'}} icon={faBars} color="white" size='1.5rem' />
        <Text style={{color: 'white', fontSize: '1.5rem'}}>Financeiro</Text>
        <FontAwesomeIcon style={{marginRight: '20px'}} icon={faUser} color="white" size='1.5rem' />
      </header>
    </>
  )
}
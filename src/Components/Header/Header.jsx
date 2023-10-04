import moment from 'moment/moment';
import logo from '../../assets/logo.png'

const Header = () => {
    return (
        <div className='text-center space-y-3 py-10'>
            <img className='mx-auto' src={logo} alt="" />
            <h3 className='font-semibold text-[#706F6F] text-xl'>Journalism Without Fear or Favour</h3>
            <p className='text-xl text-[#706F6F]'>{moment().format("dddd, MMMM D,  YYYY")}</p>
        </div>
    );
};

export default Header;
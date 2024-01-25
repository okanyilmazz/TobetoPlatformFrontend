import { Link, useNavigate } from 'react-router-dom';
import './Navi.css';
import SignedOut from '../SignedOut/SingedOut';
import { Image, Dropdown, DropdownItem, DropdownMenu, Menu, MenuItem, Button } from 'semantic-ui-react';

export default function Navi() {
    const navigate = useNavigate();
    return (
        <div className='header'>
            {/* Header */}
            <div className='header-banner' >

                <div className='home container'>
                    <div className='img'   >
                        <Image className='my-custom-image' src="https://tobeto.com/_next/static/media/ik-logo-light.ace655db.svg"></Image>
                    </div>
                    <div >
                        <p>Aradığın <span >"</span>İş<span >"</span> Burada!</p>
                    </div>

                    <div >
                        <Button className='btn' onClick={() => { navigate("") }}> Başvur</Button>
                    </div>
                </div>
            </div>


            {/* Navbar */}

            <div id="backgroundStyle">
                <div id="navbarStyle">
                    <Menu secondary size='large' id="containerStyle">
                        <div id="leftContentStyle">
                            <Image className='tobeto-icon' as={Link} to="/" src='https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FTebeto-logo-yatay-beyaz.8c2d6927.png&w=256&q=75' size='small' />
                        </div>

                        <div id="homeMessagesStyle">
                            <MenuItem as={Link} to="/hakkimizda" name='Biz Kimiz?' />
                            <Dropdown simple item text='Neler Sunuyoruz?'>
                                <DropdownMenu>
                                    <DropdownItem as={Link} to="/bireyler-icin">Bireyler İçin</DropdownItem>
                                    <DropdownItem as={Link} to="/kurumlar-icin">Kurumlar İçin</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                            <MenuItem name='Catalog' />
                            <MenuItem name='Codeacademy' />
                            <Dropdown simple item text="Tobeto'da Bu Ay">
                                <DropdownMenu>
                                    <DropdownItem>Blog</DropdownItem>
                                    <DropdownItem>Basında Biz</DropdownItem>
                                    <DropdownItem as={Link} to="/takvim-anasayfa">Takvim</DropdownItem>
                                    <DropdownItem>İstanbul Kodluyor</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </div>
                        <SignedOut />
                    </Menu>
                </div>
            </div >

        </div>
    )
}

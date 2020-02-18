const WRAPPER = document.getElementById('wrapper')

export const createFooterDOM = () => {
    const sectionFooter = document.createElement('section');
    sectionFooter.className = 'section-footer';
    const footerTop = document.createElement('div');
    footerTop.className = 'section-footer-top';
    footerTop.innerHTML = `
        <div class="section-inner">
            <div class="section-footer-top-wrapper">
                <div class="section-footer-top-column">
                    <div class="section-footer-top-column-title">
                        FEATURED SALE
                        <nav>
                            <ul class="section-footer-top-column-nav">
                                <li><a href="#">Alexis Hudson</a></li>
                                <li><a href="#">American Apparel</a></li>
                                <li><a href="#">Ben Sherman</a></li>
                                <li><a href="#">Big Buddha</a></li>
                                <li><a href="#">Chanel</a></li>
                                <li><a href="#">Christian Audigier</a></li>
                                <li><a href="#">Coach</a></li>
                                <li><a href="#">Cole Haan</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>

                <div class="section-footer-top-column">
                    <div class="section-footer-top-column-title">
                        MENS STORE
                        <nav>
                            <ul class="section-footer-top-column-nav">
                                <li><a href="#">Alexis Hudson</a></li>
                                <li><a href="#">American Apparel</a></li>
                                <li><a href="#">Ben Sherman</a></li>
                                <li><a href="#">Big Buddha</a></li>
                                <li><a href="#">Chanel</a></li>
                                <li><a href="#">Christian Audigier</a></li>
                                <li><a href="#">Coach</a></li>
                                <li><a href="#">Cole Haan</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>

                <div class="section-footer-top-column">
                    <div class="section-footer-top-column-title">
                        WOMEN STORE
                        <nav>
                            <ul class="section-footer-top-column-nav">
                                <li><a href="#">Alexis Hudson</a></li>
                                <li><a href="#">American Apparel</a></li>
                                <li><a href="#">Ben Sherman</a></li>
                                <li><a href="#">Big Buddha</a></li>
                                <li><a href="#">Chanel</a></li>
                                <li><a href="#">Christian Audigier</a></li>
                                <li><a href="#">Coach</a></li>
                                <li><a href="#">Cole Haan</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>

                <div class="section-footer-top-column">
                    <div class="section-footer-top-column-title">
                        QUICK LINKS
                        <nav>
                            <ul class="section-footer-top-column-nav">
                                <li><a href="#">Alexis Hudson</a></li>
                                <li><a href="#">American Apparel</a></li>
                                <li><a href="#">Ben Sherman</a></li>
                                <li><a href="#">Big Buddha</a></li>
                                <li><a href="#">Chanel</a></li>
                                <li><a href="#">Christian Audigier</a></li>
                                <li><a href="#">Coach</a></li>
                                <li><a href="#">Cole Haan</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    `

    const footerBottom = document.createElement('div');
    footerBottom.className = 'section-footer-bottom';
    footerBottom.innerHTML = `
        <div class="section-inner">
            <div class="section-footer-bottom-wrapper">
                Copyright © 
            </div>
        </div>
    `

    sectionFooter.appendChild(footerTop);
    sectionFooter.appendChild(footerBottom);
    WRAPPER.appendChild(sectionFooter);
}
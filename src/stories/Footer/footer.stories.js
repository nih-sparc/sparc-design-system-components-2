import FooterDemo from './Footer.vue'
import Footer from './footer-1.png'
import Footer2 from './footer-2.png'
import Footer3 from './footer-3.png'

export default {
  title: 'Components/DropdownMultiselect',
  component:FooterDemo,
  tags:['autodocs']
}

const createDemo = (footer) => {
    return {
      components: { DropdownMultiselect },
      data() {
        return {
            footer:footer,
            text:text
        }
      },
      template: `
      <div>
      <img src={footer} alt={text} />
    </div>
      `
    }
  }

  export const FooterOne = () => createDemo(
    {
      label: 'Footer1',
      id: '0',
      data: [
      {
        footer: Footer,
        text:"Screenshot of the SPARC footer, with labels for different parts"
      }]
    }
  )

  export const FooterTwo= () => createDemo(
    {
      label: 'Footer2',
      id: '1',
      data: [
      {
        footer: Footer2,
        text:"Screenshot of the SPARC footer, with grid markers"
      }]
    }
  )
  export const FooterThree= () => createDemo(
    {
      label: 'Footer3',
      id: '2',
      data: [
      {
        footer: Footer3,
        text:"Screenshot of the SPARC footer on tablet/mobile"
      }]
    }
  )
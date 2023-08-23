import Link from 'next/link'
import Image from 'next/image'

const Logo = () => {
  const genie = `/images/IB.png`
  return (
    <Link href="/">
        <a>
          <Image src={genie} alt="genie" width="50" height="50" />
        </a>
    </Link>
  )
}
export default Logo
//awww yeah ish ya boi...in component form

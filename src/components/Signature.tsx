import Image from 'next/image'

import { NEWSLETTER_SIGNATURE_SRC } from '@/lib/newsletter/config'

export default function Signature() {
  return (
    <div style={{ textAlign: 'left', width: '100%' }}>
      <Image
        src={NEWSLETTER_SIGNATURE_SRC}
        alt="Signature"
        width={200}
        height={100}
        style={{ width: '33%', height: 'auto', display: 'inline-block' }}
      />
    </div>
  )
}

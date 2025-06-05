import Image from 'next/image';

export default function Signature() {
  return (
    <div style={{ textAlign: 'left', width: '100%' }}>
      <Image
        src="https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,format=auto,onerror=redirect,quality=80/uploads/asset/file/5abd08ee-bc4d-49f0-9303-3d5d75ef4359/email_signatures.png?t=1742411231"
        alt="Signature"
        width={200}
        height={100}
        style={{ width: '33%', height: 'auto', display: 'inline-block' }}
      />
    </div>
  );
} 
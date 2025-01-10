import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-[#0C2340] text-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-[#F0AB00] font-bold mb-4">Tech Club</h3>
            <p className="text-sm">King&apos;s College</p>
          </div>
          <div>
            <h3 className="text-[#F0AB00] font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/events" className="hover:text-[#F0AB00] transition-colors">Events</Link></li>
              <li><Link href="/community" className="hover:text-[#F0AB00] transition-colors">Community</Link></li>
              <li><Link href="/partners" className="hover:text-[#F0AB00] transition-colors">Partners</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-[#F0AB00] font-bold mb-4">Contact</h3>
            <p className="text-sm">Get in touch with us</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
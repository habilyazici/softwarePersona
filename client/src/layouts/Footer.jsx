/**
 * Footer Component
 */
export default function Footer() {
  const socialLinks = [
    { href: 'https://github.com/', label: 'GitHub', icon: '🐙', hoverColor: 'hover:text-white' },
    { href: 'https://twitter.com/', label: 'Twitter', icon: '🐦', hoverColor: 'hover:text-blue-400' },
    { href: 'https://instagram.com/', label: 'Instagram', icon: '📸', hoverColor: 'hover:text-pink-400' },
  ];

  return (
    <footer className="py-6 flex flex-col items-center gap-3">
      <div className="flex gap-4">
        {socialLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-gray-400 ${link.hoverColor} transition-all text-2xl hover:scale-110 transform`}
            aria-label={link.label}
          >
            <span role="img">{link.icon}</span>
          </a>
        ))}
      </div>
      <p className="text-gray-500 text-sm">
        Tasarım ve kod: <span className="text-purple-400 font-semibold">Habil Yazıcı</span>
      </p>
    </footer>
  );
}

# Changelog - Movewell Recovery Website

## Version 2.0 - November 6, 2024

### 🎨 Branding Updates
- ✅ **New Logo:** Updated to Movewell Recovery logo with blue MW icon
- ✅ **Brand Name:** Changed from "MoveWell" to "Movewell Recovery"
- ✅ **Tagline:** "Recovery. Stretch. Massage"

### 📱 WhatsApp Integration
- ✅ **Booking Form:** Now redirects to WhatsApp with pre-filled message
- ✅ **Contact Form:** Sends message via WhatsApp with form data
- ✅ **WhatsApp Number:** +62 811 1728 128

### 🔧 Technical Changes
- Updated Header.tsx with new logo image
- Updated Hero.tsx with new brand name and tagline
- Updated AboutPage.tsx branding
- Updated TestimonialsPage.tsx references
- Updated FAQPage.tsx branding
- Updated Admin Panel branding
- Updated PromoPage.tsx header title

### 📝 Form Improvements
- Booking form now opens WhatsApp with formatted message
- Contact form now opens WhatsApp with formatted message
- Added form validation (required fields)
- Better user experience with direct WhatsApp connection

---

## Version 1.0 - November 2024

### 🚀 Initial Release
- Multi-page website (Home, Services, About, Contact, etc.)
- Admin panel with login system
- TypeScript-based content management
- GitHub integration for content updates
- Responsive design
- Booking modal
- Complete documentation

---

## WhatsApp Message Format

### Booking Form
```
Hi, Move.. aku sudah isi dari web dengan data berikut:

*Booking Request*
Nama: [Name]
Email: [Email]
Phone: [Phone]
Service: [Service]
Tanggal: [Date]
Waktu: [Time]
Catatan: [Message]
```

### Contact Form
```
Hi, Move.. aku sudah isi dari web dengan data berikut:

*Contact Message*
Nama: [Name]
Email: [Email]
Pesan: [Message]
```

---

## Files Updated in v2.0

1. `/components/Header.tsx` - Logo and branding
2. `/components/Hero.tsx` - Tagline and branding
3. `/components/AboutPage.tsx` - Brand name
4. `/components/BookingModal.tsx` - WhatsApp integration
5. `/components/ContactPage.tsx` - WhatsApp integration
6. `/components/TestimonialsPage.tsx` - Brand references
7. `/components/FAQPage.tsx` - Brand references
8. `/components/admin/AdminLogin.tsx` - Admin branding
9. `/components/admin/AdminDashboard.tsx` - Admin branding
10. `/data/promos.ts` - Promo header title

---

## Next Steps

- [ ] Upload new logo to `/data/images` if needed for backup
- [ ] Test WhatsApp integration on mobile
- [ ] Update meta tags with new brand name
- [ ] Update social media links if changed
- [ ] Test all forms thoroughly

---

**Last Updated:** November 6, 2024  
**Version:** 2.0

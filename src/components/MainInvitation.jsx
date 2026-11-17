import React, { useEffect } from 'react';
import { Calendar, Clock, MapPin, Navigation, Phone, MessageSquare } from 'lucide-react';
import { weddingData } from '../config/weddingData';
import { CornerGoldOrnament, FloralDivider, DiamondDivider } from './Ornaments';
import { SaveTheDateCard } from './SaveTheDateCard';
import { CountdownTimer } from './CountdownTimer';
import { WishesGuestbook } from './WishesGuestbook';

// WhatsApp SVG Icon
function WhatsAppIcon({ className = "h-3.5 w-3.5" }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.888 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.711 1.457h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
    </svg>
  );
}

// Section Header with Title & Diamond Divider (Ue)
function SectionHeader({ children }) {
  return (
    <div className="mb-8 text-center">
      <p className="font-cinzel text-xs sm:text-sm tracking-[0.45em] text-[#dfba73] uppercase font-semibold">
        {children}
      </p>
      <DiamondDivider className="mx-auto mt-3 h-3 w-40 text-[#dfba73]/70" />
    </div>
  );
}

// Reveal Section Container (We)
function RevealSection({ children, className = '' }) {
  return (
    <section className={`reveal relative px-4 sm:px-6 py-16 text-center ${className}`}>
      {children}
    </section>
  );
}

// Date Badge Component (Ve)
function DateBadge() {
  return (
    <div className="mx-auto max-w-xs text-center py-2">
      <p className="font-cinzel text-xs sm:text-sm tracking-[0.45em] text-[#dfba73] uppercase font-medium">
        D E C E M B E R
      </p>
      <div className="my-2.5 flex items-center justify-center gap-2">
        <span className="h-px flex-1 bg-[#dfba73]/50" />
        <span className="h-1.5 w-1.5 rotate-45 border border-[#dfba73] bg-[#dfba73]" />
        <span className="h-px flex-1 bg-[#dfba73]/50" />
      </div>
      <div className="flex items-center justify-between px-2 py-1">
        <span className="font-cinzel text-xs sm:text-[13px] tracking-[0.2em] text-[#dfba73] uppercase font-medium">
          SAT &amp; SUN
        </span>
        <span className="font-cinzel text-2xl sm:text-3xl text-[#dfba73] font-bold px-2">
          26 &amp; 27
        </span>
        <span className="font-cinzel text-xs sm:text-[13px] tracking-[0.2em] text-[#dfba73] uppercase font-medium">
          2026
        </span>
      </div>
      <div className="my-2.5 flex items-center justify-center gap-2">
        <span className="h-px flex-1 bg-[#dfba73]/50" />
        <span className="h-1.5 w-1.5 rotate-45 border border-[#dfba73] bg-[#dfba73]" />
        <span className="h-px flex-1 bg-[#dfba73]/50" />
      </div>
      <p className="font-cinzel text-[11px] sm:text-xs tracking-[0.3em] text-[#dfba73]/90 uppercase font-medium">
        NIKKAH &amp; RECEPTION
      </p>
    </div>
  );
}

export function MainInvitation() {
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
          }
        });
      },
      { threshold: 0.12 }
    );

    reveals.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="mx-auto max-w-[560px] animate-fade-in emerald-texture border-x border-[#dfba73]/25 lg:max-w-none lg:border-x-0 shadow-2xl relative overflow-hidden">
      {/* Top Corner Ornaments */}
      <CornerGoldOrnament className="absolute left-0 top-0 h-40 w-40 text-[#dfba73] pointer-events-none opacity-85" />
      <CornerGoldOrnament className="absolute right-0 top-0 h-40 w-40 -scale-x-100 text-[#dfba73] pointer-events-none opacity-85" />

      {/* 1. Hero Section */}
      <RevealSection className="pt-20 pb-12 relative">
        <p className="font-amiri text-3xl sm:text-4xl leading-loose text-[#dfba73] drop-shadow" dir="rtl" lang="ar">
          بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
        </p>
        <div className="my-2 flex items-center justify-center">
          <span className="h-1.5 w-1.5 rotate-45 border border-[#dfba73] bg-[#dfba73]" />
        </div>
        <p className="mt-6 text-base sm:text-lg text-[#fdfbf7]/90 max-w-sm mx-auto font-serif leading-relaxed">
          With hearts full of joy,
          <br />
          we warmly invite you to celebrate
          <br />
          the wedding of
        </p>
        <div className="mt-8 space-y-1">
          <h2 className="font-alex text-6xl sm:text-8xl leading-tight text-[#dfba73] drop-shadow-lg">
            {weddingData.groom.shortName}
          </h2>
          <p className="font-serif text-2xl sm:text-3xl text-[#f5d58f] italic py-1">&amp;</p>
          <h2 className="font-alex text-6xl sm:text-8xl leading-tight text-[#dfba73] drop-shadow-lg">
            {weddingData.bride.shortName}
          </h2>
        </div>
        <div className="mt-8">
          <DateBadge />
        </div>
        <div className="mt-4 font-cinzel tracking-wider text-[#dfba73]">
          <p className="text-sm sm:text-base font-bold uppercase">{weddingData.venueSummary.name}</p>
          <p className="text-xs sm:text-sm text-[#fdfbf7]/80 uppercase">{weddingData.venueSummary.cityLine}</p>
        </div>
        <FloralDivider className="mt-12 text-[#dfba73]" />
      </RevealSection>

      {/* 2. Save the Date 3D Flip Card */}
      <RevealSection className="py-12">
        <SaveTheDateCard />
      </RevealSection>

      {/* 3. Countdown Section */}
      <RevealSection className="py-12">
        <SectionHeader>COUNTING THE MOMENTS</SectionHeader>
        <CountdownTimer />
      </RevealSection>

      {/* 4. Events & Ceremonies Section */}
      <RevealSection className="py-12">
        <SectionHeader>THE CELEBRATIONS</SectionHeader>
        <div className="space-y-6 max-w-md mx-auto">
          {weddingData.events.map((evt) => (
            <div
              key={evt.id}
              className="emerald-card rounded-sm p-6 sm:p-7 text-[#fdfbf7] shadow-2xl bg-[#041c16]/75 border border-[#dfba73]/40 text-center"
            >
              <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-[#dfba73]/15 text-[#dfba73]">
                <MapPin className="h-5 w-5 text-[#dfba73]" />
              </div>
              <p className="mt-2.5 font-cinzel text-lg sm:text-xl tracking-wider text-[#dfba73] font-bold uppercase">
                {evt.title}
              </p>
              <p className="mt-0.5 text-base sm:text-lg font-serif text-[#fdfbf7]/95">
                {evt.venue}
              </p>
              <p className="text-xs sm:text-sm font-serif italic text-[#fdfbf7]/75">
                {evt.address}
              </p>

              <DiamondDivider className="mx-auto my-3.5 h-3 w-28 text-[#dfba73]/70" />

              <div className="space-y-1 font-serif text-base sm:text-lg">
                <p className="flex items-center justify-center gap-2 text-[#dfba73] font-medium">
                  <Calendar className="h-4 w-4" /> {evt.date}
                </p>
                <p className="flex items-center justify-center gap-2 text-[#fdfbf7]/80">
                  <Clock className="h-4 w-4" /> {evt.time}
                </p>
              </div>

              <div className="mt-5 flex flex-wrap items-center justify-center gap-2.5">
                <a
                  href={evt.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 rounded-full border border-[#dfba73] bg-[#072920] px-5 py-2.5 font-cinzel text-[10px] sm:text-[11px] tracking-[0.2em] text-[#f5d58f] transition hover:bg-[#0b3a2d] shadow-md cursor-pointer"
                >
                  <Navigation className="h-3.5 w-3.5" />
                  VENUE LOCATION
                </a>
                <a
                  href={evt.calendarUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 rounded-full border border-[#dfba73]/50 bg-[#041c16] px-4 py-2.5 font-cinzel text-[10px] sm:text-[11px] tracking-[0.15em] text-[#dfba73] transition hover:bg-[#072920] shadow cursor-pointer"
                >
                  <Calendar className="h-3.5 w-3.5" />
                  ADD TO CALENDAR
                </a>
              </div>
            </div>
          ))}
        </div>
      </RevealSection>

      {/* 5. With the Blessings of Our Families */}
      <RevealSection className="py-12">
        <SectionHeader>WITH THE BLESSINGS OF OUR FAMILIES</SectionHeader>
        <div className="space-y-8 max-w-md mx-auto">
          <div>
            <p className="font-alex text-5xl sm:text-6xl text-[#dfba73]">
              {weddingData.groom.fullName}
            </p>
            <p className="mt-1 text-base sm:text-lg text-[#fdfbf7]/85 font-serif">
              {weddingData.groom.parents}
            </p>
            <p className="text-sm text-[#dfba73] font-serif italic mt-0.5">
              {weddingData.groom.address}
            </p>
          </div>
          <FloralDivider className="text-[#dfba73]/70" />
          <div>
            <p className="font-alex text-5xl sm:text-6xl text-[#dfba73]">
              {weddingData.bride.fullName}
            </p>
            <p className="mt-1 text-base sm:text-lg text-[#fdfbf7]/85 font-serif">
              {weddingData.bride.parents}
            </p>
            <p className="text-sm text-[#dfba73] font-serif italic mt-0.5">
              {weddingData.bride.address}
            </p>
          </div>
        </div>
      </RevealSection>

      {/* 6. Residences & Contact Details */}
      <RevealSection className="py-12">
        <SectionHeader>ADDRESSES &amp; CONTACT</SectionHeader>
        <div className="space-y-5 max-w-md mx-auto">
          {/* Groom Residence Card */}
          <div className="rounded-sm border border-[#dfba73]/40 bg-[#041c16]/75 p-5 text-center shadow-lg">
            <p className="font-cinzel text-xs tracking-[0.25em] text-[#dfba73] uppercase font-semibold">
              {weddingData.addresses.groom.title}
            </p>
            <p className="mt-1.5 font-['Cinzel'] text-lg text-[#fdfbf7] font-bold">
              {weddingData.addresses.groom.name}
            </p>
            <p className="mt-0.5 font-serif text-sm text-[#fdfbf7]/80">
              {weddingData.addresses.groom.details}
            </p>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                weddingData.addresses.groom.mapQuery
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-1.5 text-xs font-cinzel tracking-wider text-[#dfba73] hover:underline"
            >
              <Navigation className="h-3 w-3" /> View on Google Maps
            </a>
          </div>

          {/* Bride Residence Card */}
          <div className="rounded-sm border border-[#dfba73]/40 bg-[#041c16]/75 p-5 text-center shadow-lg">
            <p className="font-cinzel text-xs tracking-[0.25em] text-[#dfba73] uppercase font-semibold">
              {weddingData.addresses.bride.title}
            </p>
            <p className="mt-1.5 font-['Cinzel'] text-lg text-[#fdfbf7] font-bold">
              {weddingData.addresses.bride.name}
            </p>
            <p className="mt-0.5 font-serif text-sm text-[#fdfbf7]/80">
              {weddingData.addresses.bride.details}
            </p>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                weddingData.addresses.bride.mapQuery
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-1.5 text-xs font-cinzel tracking-wider text-[#dfba73] hover:underline"
            >
              <Navigation className="h-3 w-3" /> View on Google Maps
            </a>
          </div>

          {/* Direct Phone & WhatsApp Contacts */}
          <div className="pt-2">
            <p className="font-cinzel text-xs tracking-widest text-[#dfba73] uppercase mb-3 font-semibold">
              For Inquiries &amp; Information
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {weddingData.contacts.map((c) => (
                <div
                  key={c.number}
                  className="rounded-sm border border-[#dfba73]/40 bg-[#05261e]/90 p-4 shadow-lg text-center"
                >
                  <span className="font-cinzel text-base sm:text-lg font-bold text-[#fdfbf7] tracking-wider block">
                    {c.display}
                  </span>
                  <div className="mt-3 flex items-center justify-center gap-2.5">
                    <a
                      href={`tel:${c.number}`}
                      className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-full border border-[#dfba73] bg-[#072920] px-3 py-2 text-xs font-cinzel tracking-wider text-[#f5d58f] hover:bg-[#0b3a2d] transition shadow"
                    >
                      <Phone className="h-3.5 w-3.5 text-[#dfba73]" />
                      Call
                    </a>
                    <a
                      href={`https://wa.me/91${c.number}?text=Assalamu%20Alaikum`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-full border border-[#25D366]/70 bg-[#063327] px-3 py-2 text-xs font-cinzel tracking-wider text-[#25D366] hover:bg-[#0a4737] transition shadow"
                    >
                      <WhatsAppIcon className="h-3.5 w-3.5 fill-[#25D366]" />
                      WhatsApp
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </RevealSection>

      {/* 7. Sacred Covenant */}
      <RevealSection className="py-12">
        <SectionHeader>A SACRED COVENANT</SectionHeader>
        <div className="space-y-6 max-w-lg mx-auto">
          <div className="rounded-sm border border-[#dfba73]/40 bg-[#041c16]/75 p-6 shadow-2xl">
            <p className="font-amiri text-xl sm:text-2xl leading-loose text-[#dfba73]" dir="rtl" lang="ar">
              {weddingData.sacredCovenant.arabic}
            </p>
            <p className="mx-auto mt-3 max-w-md text-sm sm:text-base italic text-[#fdfbf7]/90 font-serif">
              {weddingData.sacredCovenant.english}
            </p>
            <p className="mt-2 text-xs uppercase tracking-widest text-[#dfba73] font-cinzel">
              {weddingData.sacredCovenant.source}
            </p>
          </div>
        </div>
      </RevealSection>

      {/* 8. Wishes Guestbook */}
      <RevealSection className="py-12">
        <SectionHeader>WISHES &amp; BLESSINGS</SectionHeader>
        <WishesGuestbook />
      </RevealSection>

      {/* 9. Closing Dua & Signature */}
      <RevealSection className="pt-12 pb-28">
        <FloralDivider className="text-[#dfba73]" />
        <div className="mt-8 space-y-4 max-w-md mx-auto">
          <p className="font-amiri text-2xl sm:text-3xl leading-loose text-[#dfba73]" dir="rtl" lang="ar">
            {weddingData.closingDua.arabic}
          </p>
          <p className="mx-auto mt-2 max-w-sm text-sm sm:text-base italic text-[#fdfbf7]/85 font-serif">
            {weddingData.closingDua.english}
          </p>
          <p className="font-serif text-lg text-[#dfba73] pt-2">
            {weddingData.closingDua.subtext}
          </p>
          <div className="pt-6">
            <p className="font-alex text-6xl sm:text-7xl text-[#dfba73]">
              {weddingData.groom.shortName} &amp; {weddingData.bride.shortName}
            </p>
          </div>
        </div>
      </RevealSection>
    </main>
  );
}

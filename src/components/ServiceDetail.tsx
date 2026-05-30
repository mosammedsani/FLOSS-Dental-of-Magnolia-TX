import React from 'react';
import { 
  CheckCircle, ArrowLeft, ShieldCheck, Heart, Sparkles, Activity, Clock, 
  HelpCircle, DollarSign, Calendar, FlameKindling, Info, Star 
} from 'lucide-react';
import { motion } from 'motion/react';

interface ServiceDetailProps {
  serviceId: string;
  onBack: () => void;
  onBookClick: () => void;
}

export default function ServiceDetail({ serviceId, onBack, onBookClick }: ServiceDetailProps) {
  // Let's scroll to the top when mounting this view
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [serviceId]);

  // Service details mapping matching exactly the user requested dropdown items
  const getServiceData = () => {
    switch (serviceId) {
      case 'service-emergency':
        return {
          title: 'Emergency Dentistry',
          category: 'Urgent Care',
          subtitle: 'Same-Day Dental Pain Relief & Repair in Magnolia',
          intro: 'When sudden dental distress or severe toothaches strike, waiting is not an option. FLOSS Dental Magnolia provides guaranteed same-day emergency priority triage to relieve physical agony, combat aggressive infection, and fully restore tooth structures in complete calm.',
          benefits: [
            'Immediate expert diagnostic scan and focused evaluation by our lead clinicians.',
            'Compassionate anxiety control featuring safe Nitrous Oxide laughing gas and deep IV Sedation.',
            'Rapid treatment of broken crowns, severe swelling, wisdom tooth pain, and knocked-out teeth.',
            'Comfort-centric emergency extractions and infection draining.'
          ],
          roadmap: [
            { step: '01', title: 'Prioritized Check-In', desc: 'Arrive and get immediately ushered into our soothing guest suite.' },
            { step: '02', title: 'Microscopic Scan', desc: 'Low-radiation scans clarify the bone and root conditions in minutes.' },
            { step: '03', title: 'Soothing Triage', desc: 'Custom medication or sedation is applied to completely block discomfort.' },
            { step: '04', title: 'Immediate Resolution', desc: 'Our clinical team repairs the broken or decayed enamel and sets pain relief.' }
          ],
          costEstimate: '$99 - Emergency Focused Exam & Digital Diagnosis (Fully Credited If Same-Day Repair Performed). We accept key PPO insurances.',
          faq: [
            { q: 'What is considered a real dental emergency?', a: 'Any severe throbbing dental toothache, facial swelling, bleeding that won\'t stop, a loose tooth from impact, or a knocked-out tooth. Call us immediately at (936) 703-6173.' },
            { q: 'Will I be seen on the same day?', a: 'Yes! We reserve specific slots daily to accommodate sudden emergency calls immediately.' }
          ]
        };

      case 'service-iv-sedation':
        return {
          title: 'IV Sedation Dentistry',
          category: 'Sedation Calming',
          subtitle: 'Experience Absolute Serenity with Intravenous Sleep-State Dentistry',
          intro: 'Settle into our state-of-the-art spa suites and completely drift away. Under carefully designed and closely monitored intravenous sedation, dental anxieties diminish. You will awaken with your customized clinical procedures completed, feeling completely refreshed with zero memory of clinical sounds or sensory worries.',
          benefits: [
            'Perfect for patients with deep dentist phobias or highly sensitive gag reflexes.',
            'Enables multiple intensive restorations (e.g. full mouth implants, crowns) to be performed in just one session.',
            'Continuous monitoring of oxygen, blood pressure, and pulse by an expert licensed sedationist.',
            'Awaken with zero muscle soreness or traumatic memories of the treatment.'
          ],
          roadmap: [
            { step: '01', title: 'Health Review', desc: 'Thorough review of and cooperation with your overall physical history.' },
            { step: '02', title: 'Safe Administration', desc: 'A tiny, gentle IV line delivers direct calming medication in a comfortable suite.' },
            { step: '03', title: 'Peaceful Procedure', desc: 'Fall into a deeply relaxed, responsive twilight sleep state.' },
            { step: '04', title: 'Gentle Awakening', desc: 'Wake up feeling peaceful as if you just rested at a luxury retreat.' }
          ],
          costEstimate: 'Sedation coverage varies by insurance. We offer customized interest-free financing options starting at $49/month.',
          faq: [
            { q: 'Is IV Sedation safe?', a: 'Absolutely. It is administered by highly trained, certified clinical sedationists with real-time digital monitoring equipment.' },
            { q: 'Can I drive home after the session?', a: 'No, you must have a trusted companion escort you home and remain with you for a short rest.' }
          ]
        };

      case 'service-nitrous-sedation':
        return {
          title: 'Nitrous Sedation (Laughing Gas)',
          category: 'Sedation Calming',
          subtitle: 'Gentle, Fast-Acting Calming Vapor for a Playful, Safe Visit',
          intro: 'Nitrous Oxide, or laughing gas, is a sweet, completely safe inhaled gas that quickly induces a warm feeling of lightheartedness and peaceful physical relaxation. It is ideal for both adults and young children who experience general nervousness, and it completely washes out of your system within minutes of finishing.',
          benefits: [
            'Instant onset that melts physical tension and eases procedural worries.',
            '100% reversible within two minutes of breathing pure clinical oxygen.',
            'Extremely safe with zero lasting side effects or physical hangover.',
            'Perfectly suited for quick dental fillings, cleanings, and deep scaling.'
          ],
          roadmap: [
            { step: '01', title: 'Fit Mask', desc: 'A comfortable, soft personal breathing-hood is positioned over your nose.' },
            { step: '02', title: 'Vapor Calmer', desc: 'Inhale the custom-blended sweet oxygen mixture to start relaxing.' },
            { step: '03', title: 'Therapeutic Flow', desc: 'Drift through your procedure in light, happy comfort.' },
            { step: '04', title: 'Clean Flush', desc: 'Breathe pure clean oxygen and instantly feel 100% alert and active.' }
          ],
          costEstimate: 'Very affordable add-on option, often partially covered or easily set under $85/session.',
          faq: [
            { q: 'Can I drive myself home after laughing gas?', a: 'Yes! Laughing gas has zero residual effects, so you are fully approved to operate your vehicle and resume your daily routine immediately.' },
            { q: 'Is this safe for pediatric children?', a: 'Yes. It is one of the safest, most widely trusted calming solutions used in pediatric dental health globally.' }
          ]
        };

      case 'service-implant-full':
        return {
          title: 'Full Mouth Dental Implants',
          category: 'Dental Implants',
          subtitle: 'Reclaim Drastic Bite Force and Bespoke Facial Contour Permanently',
          intro: 'For individuals suffering from widespread tooth loss, aggressive decay, or loose unstable prosthetics, a Full Arch Dental Implant system (utilizing All-On-4 or customized multi-implants) represents a miraculous permanent restoration. It replaces your entire upper or lower teeth row with an incredibly sturdy, artistically colored porcelain arch anchored directly to strong titanium roots.',
          benefits: [
            'Restores a strong natural chewing force, letting you enjoy steaks, apples, and nuts with ease.',
            'Preserves precious facial muscle dimensions and prevents jaw bone degradation.',
            'Permanently screwed into place—does not slip, click, or irritate sensitive gum lining.',
            'Bespoke shading, alignment, and translucency that elevates your aesthetic appearance.'
          ],
          roadmap: [
            { step: '01', title: '3D CBCT Analysis', desc: 'We take high-definition digital bones scans to map the nerve channels.' },
            { step: '02', title: 'Digital Surgery Prep', desc: 'Our computer software maps exact surgical angles for maximum comfort.' },
            { step: '03', title: 'Surgical Placement', desc: 'Implants are situated safely under customized twilight IV Sedation.' },
            { step: '04', title: 'Final Smile Delivery', desc: 'A gorgeous, master-layered vitrified crown arch is permanently fixed.' }
          ],
          costEstimate: 'Fully customized based on configuration. Flexible multi-year payment terms available starting around $250/month via premium facilitators.',
          faq: [
            { q: 'What is the lifetime of a full mouth implant system?', a: 'With correct hygiene care and professional check-ups, the titanium foundation is designed to survive beautifully for a lifetime.' },
            { q: 'Is the procedure painfully traumatic?', a: 'Not at all. With IV Sedation and high-precision digital guides, our patients report minimal discomfort during and after placement.' }
          ]
        };

      case 'service-implant-single':
        return {
          title: 'Single Tooth Implants & Bridges',
          category: 'Dental Implants',
          subtitle: 'The Gold Standard Replacement for Individual Missing Teeth',
          intro: 'Replacing a single missing tooth is crucial to prevent nearby healthy teeth from shifting out of alignment and causing bite dysfunction. A single implant merges directly with your jaw structure, acting as a standalone root that supports an elegant, hand-layered ceramic crown. For multiple missing teeth, an implant bridge provides unmatched stability without needing to grind down healthy surrounding enamel.',
          benefits: [
            'Does not require structural alterations or grinding of adjacent healthy teeth.',
            'Helps keep nearby teeth perfectly still and preserves uniform bite mechanics.',
            'Easy to floss and brush exactly like a authentic tooth—no complex floss threaders.',
            'Features custom-matched medical porcelain designed to reflect natural dental translucency.'
          ],
          roadmap: [
            { step: '01', title: 'Precision Exam', desc: 'A focused digital and visual scan confirms local bone thickness.' },
            { step: '02', title: 'Root Placement', desc: 'The bio-compatible grade-4 titanium root post is comfortably situated.' },
            { step: '03', title: 'Healing & Bonding', desc: 'A few weeks of healing allows the root to integrate tightly with local tissue.' },
            { step: '04', title: 'Crown Attachment', desc: 'A stunning, high-density porcelain crown is permanently bonded.' }
          ],
          costEstimate: 'Insurances routinely contribute substantial benefits to dental implants. Out-of-pocket payment options available from $115/month.',
          faq: [
            { q: 'How long does a single implant process take?', a: 'The initial surgical placement takes under an hour, followed by a bonding window of 3-4 months to ensure mechanical strength before bonding the final crown.' },
            { q: 'Is an implant better than an old dental bridge?', a: 'Yes. An old bridge requires grinding down surrounding healthy teeth, whereas implants are self-supported and preserve natural bone structure.' }
          ]
        };

      case 'service-implant-dentures':
        return {
          title: 'Bespoke Dentures & Partials',
          category: 'Dental Implants',
          subtitle: 'Handcrafted Bio-Aesthetic Dentures for Perfect Speech and Comfort',
          intro: 'Widespread tooth loss does not mean you have to surrender your active lifestyle. Our custom-handcrafted dentures and partials pair state-of-the-art polymer sciences with highly personalized teeth placements. The result is a gorgeous, feather-light prosthetic that fits snugly, allows you to converse naturally, and looks remarkably authentic.',
          benefits: [
            'Premium surgical-grade medical polymers avoid the opaque "fake-teeth" appearance.',
            'Artistic border sculpting conforms closely to your unique suction contours.',
            'Reinforces cheek and lip volume, immediately softening facial lines.',
            'Highly durable and completely custom-contoured for maximum chewing capacity.'
          ],
          roadmap: [
            { step: '01', title: 'Aesthetic Scans', desc: 'Digital optical scans capture detailed dimensions of your ridge shape.' },
            { step: '02', title: 'Artistic Design', desc: 'We select custom tooth styles to align with your face shape.' },
            { step: '03', title: 'Bespoke Mold Trial', desc: 'A physical trial model lets you review the smile aesthetic before finalizing.' },
            { step: '04', title: 'Final Placement', desc: 'We deliver your custom, high-density polished dentures.' }
          ],
          costEstimate: 'We accommodate standard insurances for custom denture processes. High-durability options starting at $999.',
          faq: [
            { q: 'Will my dentures slip out when eating?', a: 'We employ precision border molding for excellent physical suction. For the absolute highest security, we recommend looking into Snap-In Implant Dentures.' },
            { q: 'Is it hard to get used to wearing dentures?', a: 'There is a minor adjustment period of 2-3 weeks. Our clinical team provides extensive guidance to ensure a comfortable transition.' }
          ]
        };

      case 'service-implant-snap-in':
        return {
          title: 'Snap-In Implant Dentures',
          category: 'Dental Implants',
          subtitle: 'Combine Denture Economics with Absolute Implant Stability',
          intro: 'If you are tired of modern denture adhesives, painful gum friction, or worrying about your dentures popping loose during conversations, Snap-In Implant Dentures are the perfect solution. By anchoring 2 to 4 custom locator buttons on dental implants, your handcrafted denture snaps securely to your jaw, providing maximum stability with none of the concerns of traditional dentures.',
          benefits: [
            'Eliminates messy adhesive gels, standard pastes, and daily slip worries.',
            'Increases chewing force drastically, allowing you to enjoy a variety of foods.',
            'Eliminates painful gum chafing and annoying plastic flavor barriers.',
            'Easy to un-snap at night for quick hygienic brushing and rinsing.'
          ],
          roadmap: [
            { step: '01', title: 'Suction Evaluation', desc: 'We analyze your bone density to map the best pilot points.' },
            { step: '02', title: 'Button Anchorage', desc: 'A few titanium locator posts are situated comfortably in the bone.' },
            { step: '03', title: 'Denture Adaptation', desc: 'Your existing or custom denture is fitted with heavy-duty snap housings.' },
            { step: '04', title: 'The Snap Test', desc: 'Experience the immediate security of a stable, snap-fitting smile.' }
          ],
          costEstimate: 'An exceptionally cost-effective alternative to full-arch restorations. Financing structures make this accessible starting from $150/month.',
          faq: [
            { q: 'How many implants are required for a snap-in denture?', a: 'Typically, only 2 implants are needed for the lower jaw, and 4 are recommended for the upper jaw to provide optimal stability.' },
            { q: 'Can I sleep with my snap-in dentures on?', a: 'It is highly recommended to un-snap them overnight to allow your gum tissues to rest and to maintain excellent hygiene.' }
          ]
        };

      case 'service-implant-cost':
        return {
          title: 'Cost of Dental Implants & Budget Guide',
          category: 'Dental Implants',
          subtitle: 'Transparent Investment, Financial Options, and Lifetime Lifeline ROI',
          intro: 'At FLOSS Dental Magnolia, we believe billing transparency is a cornerstone of clinical trust. We provide clear, itemized quotes with no hidden fees. A dental implant is not just a restoration; it is a permanent investment in your health that prevents progressive bone loss and protects nearby healthy teeth from shifting.',
          benefits: [
            '100% transparent pricing outlining matching surgical, abutment, and crown charges.',
            'Comprehensive coordination with PPO insurance plans to maximize coverage.',
            '0% Interest CareCredit® and healthcare financing partnerships.',
            'Significant lifetime savings by avoiding recurring adjustments or replacements associated with temporary tooth bridges.'
          ],
          roadmap: [
            { step: '01', title: 'Itemized Audit', desc: 'Receive a full treatment plan detailing all associated pricing.' },
            { step: '02', title: 'Insurance Matching', desc: 'Our administrative concierge submits paperwork to optimize your insurance benefits.' },
            { step: '03', title: 'Installment Selection', desc: 'Choose a monthly payment structure (with options starting from 0% interest).' },
            { step: '04', title: 'Smiles Confirmed', desc: 'Enjoy your dental procedure with total financial peace of mind.' }
          ],
          costEstimate: 'Single implants start at competitive local rates. Ask about our custom implants promotions and upfront payment incentives.',
          faq: [
            { q: 'Does dental insurance contribute to the cost of implants?', a: 'Yes! Modern dental plans frequently cover up to 50% of the surgical or crown costs of implants. We will verify your coverage for you free of charge.' },
            { q: 'Do you offer in-house payment options?', a: 'Yes. We provide flexible financing solutions through elite partners like CareCredit® with 0% interest and low monthly payments.' }
          ]
        };

      case 'service-same-day-crowns':
        return {
          title: 'Same-Day CEREC Crowns',
          category: 'Advanced Tech',
          subtitle: 'Durable, Flawless Solid Ceramic Crowns Crafted and Set in One Single Visit',
          intro: 'No more gooey impression paste, temporary plastic teeth, or waiting weeks for lab deliveries. Utilizing advanced CEREC CAD/CAM computerized software and our in-house porcelain mill, our expert doctors capture high-definition digital 3D scans of your prepared enamel, custom design your dental crown live, and shape it from a premium vitrified ceramic block in just minutes.',
          benefits: [
            'Entire procedure is completed from start to finish in under two comfortable hours.',
            'No painful physical paste impression trays that trigger gag reflexes.',
            'Avoids wearing fragile temporary crowns that can break or fall loose.',
            'High-density bioceramic blocks offer life-like translucency and decades of durable strength.'
          ],
          roadmap: [
            { step: '01', title: 'Tooth Prep', desc: 'Damaged enamel is cleaned and prepped under gentle comfort block.' },
            { step: '02', title: 'Optical 3D Print', desc: 'Our handheld pen scanner records a microscopic 3D model of your tooth.' },
            { step: '03', title: 'CAD/CAM Milling', desc: 'Watch your custom crown being precisely milled in our lobby glass station.' },
            { step: '04', title: 'Luminous Bonding', desc: 'The solid crown is polished, glazed, and permanently bonded.' }
          ],
          costEstimate: 'Priced similarly to traditional dental crowns, but saves you multiple visits. PPO insurance offers extensive coverage.',
          faq: [
            { q: 'Are same-day crowns as strong as traditional, lab-made crowns?', a: 'Yes. Same-day crowns are milled from solid zirconia or lithium disilicate blocks, which are incredibly strong and designed to last for decades.' },
            { q: 'How long does the entire process take?', a: 'Typically, the entire appointment is completed in about 90 to 120 minutes.' }
          ]
        };

      case 'service-invisalign':
        return {
          title: 'Invisalign Clear Aligners',
          category: 'Cosmetic Art',
          subtitle: 'Align Your Teeth Discreetly with Removable Transparent Trays',
          intro: 'Straighten your teeth comfortably without the worry of metal braces. Invisalign clear aligners use custom-made, medical-grade, BPA-free transparent plastic trays that apply gentle pressure to align your teeth. The trays are virtually invisible, easy to remove for meals and flossing, and designed around your active lifestyle.',
          benefits: [
            'Completely removable, allowing you to enjoy your favorite foods and maintain excellent flossing hygiene.',
            'Smooth medical polymer avoids the lip scratches and mouth sores of metal braces.',
            'Iterative 3D progress software lets you preview your final smile before starting.',
            'Virtually invisible in photos, professional meetings, and everyday interactions.'
          ],
          roadmap: [
            { step: '01', title: 'Digital Scan', desc: 'An iTero optical pen creates a 3D simulation of your current bite alignment.' },
            { step: '02', title: 'Path Mapping', desc: 'Doctors plot your custom tooth movements for optimal aesthetics.' },
            { step: '03', title: 'Aligner Trays', desc: 'Receive your customized aligner sets to wear for 20-22 hours daily.' },
            { step: '04', title: 'Progress Check', desc: 'Brief check-ups every 6 weeks ensure your teeth are aligning perfectly.' }
          ],
          costEstimate: 'Invisalign treatment is often covered by orthodontic PPO plans. Flexible payment plans start at $129/month.',
          faq: [
            { q: 'How long does Invisalign treatment usually take?', a: 'Most transformations are completed in 9 to 15 months, though minor concerns can be addressed in as few as 6 months.' },
            { q: 'Is the treatment very painful?', a: 'You may feel a slight, temporary pressure when starting a new aligner set, which indicates your teeth are safely shifting into place.' }
          ]
        };

      case 'service-veneers':
        return {
          title: 'Bespoke Porcelain Veneers',
          category: 'Cosmetic Art',
          subtitle: 'The Ultimate Celebrity-Tier Smile Transformation',
          intro: 'Veneers are the premier choice for cosmetic smile transformations. These ultra-thin, custom-sculpted shells of vitreous porcelain are permanently bonded to the front of your teeth. They can instantly correct uneven spacing, chips, worn edges, and severe discoloration, creating a beautiful, natural-looking smile.',
          benefits: [
            'Highly resistant to coffee, tea, and tobacco stains for a bright smile.',
            'Custom-layered to match the natural translucency and texture of real enamel.',
            'Minimal preparation preserves maximum natural tooth structure.',
            'Provides an immediate, stunning cosmetic enhancement.'
          ],
          roadmap: [
            { step: '01', title: 'Style Consultation', desc: 'Discuss your ideal smile shape, shading, and overall look.' },
            { step: '02', title: 'Edge Preparation', desc: 'A micro-layer of enamel is prepped to ensure the veneers sit flush.' },
            { step: '03', title: 'Artisanal Crafting', desc: 'Master dental ceramists Layer the custom porcelain structures.' },
            { step: '04', title: 'Adhesive Bonding', desc: 'The veneers are carefully bonded to your teeth, instantly transforming your smile.' }
          ],
          costEstimate: 'Bespoke luxury cosmetic treatments can be easily structured into convenient monthly plans starting at $199/month.',
          faq: [
            { q: 'How long do porcelain veneers last?', a: 'With routine brushing, flossing, and check-ups, veneers are designed to last beautifully for 15 to 20 years.' },
            { q: 'Is the procedure reversible?', a: 'Because a tiny amount of natural enamel is prepped to ensure a flush fit, the teeth will always require a protective veneer or crown.' }
          ]
        };

      case 'service-whitening':
        return {
          title: 'Luminous Teeth Whitening',
          category: 'Cosmetic Art',
          subtitle: 'Turn Back Decades of Discoloration in One Comfortable Hour',
          intro: 'Professional teeth whitening under clinical supervision is the safest and most effective way to brighten your smile. We use powerful, medical-grade formulas paired with advanced lasers to break apart deep stains from coffee, wine, and tea, achieving a brighter smile safely and evenly.',
          benefits: [
            'Achieves up to 8 shades of uniform brightness in a single, 60-minute session.',
            'Uses professional desensitizing agents to prevent post-treatment sensitivity.',
            'Safeguards your soft gum tissues with special protective barriers.',
            'Includes custom take-home trays to help you maintain your bright smile.'
          ],
          roadmap: [
            { step: '01', title: 'Gum Shielding', desc: 'A protective gel barrier is applied to secure and shield your soft gums.' },
            { step: '02', title: 'Gel Application', desc: 'The medical-grade whitening gel is applied directly to your teeth.' },
            { step: '03', title: 'Laser Activation', desc: 'Our cold-output laser light safely accelerates the whitening process.' },
            { step: '04', title: 'Fluoride Polish', desc: 'A soothing fluoride polish is applied to protect enamel and prevent sensitivity.' }
          ],
          costEstimate: 'In-office packages start at affordable cosmetic rates. Save with our new patient specials!',
          faq: [
            { q: 'Will professional whitening make my teeth sensitive?', a: 'Our medical-grade formulas include specialized desensitizing agents that minimize sensitivity during and after treatment.' },
            { q: 'How long do the whitening results last?', a: 'Results routinely last for 1 to 2 years, depending on your lifestyle and diet (coffee, tea, red wine, tobacco use).' }
          ]
        };

      case 'service-periodontal':
        return {
          title: 'Periodontal Care & Gum Therapy',
          category: 'General Care',
          subtitle: 'Protect Your Gum Foundations and Overall Wellness',
          intro: 'Healthy gums are the foundation of a healthy smile. Periodontal disease, if left untreated, can lead to chronic bleeding, gum recession, systemic inflammation, and tooth loss. Our periodontal therapies combine gentle deep scaling with advanced ultrasonic technology to remove calcified plaque and bacteria beneath the gumline, restoring health to your gums.',
          benefits: [
            'Prevents progressive gum recession, deep pocketing, and tooth loss.',
            'Improves chronic bleeding while neutralizing bad breath (halitosis).',
            'Lowers systemic health risks associated with cardiovascular issues and diabetes.',
            'Protects the bone tissue that supports your natural teeth.'
          ],
          roadmap: [
            { step: '01', title: 'Pocket Mapping', desc: 'We measure the depth of your gum pockets to determine tissue health.' },
            { step: '02', title: 'Ultrasonic Scaling', desc: 'Advanced vibration tools remove calcified deposits from your teeth.' },
            { step: '03', title: 'Root Planing', desc: 'Rough root surfaces are smoothed to prevent bacteria from adhering.' },
            { step: '04', title: 'Therapeutic Rinse', desc: 'A soothing antimicrobial rinse is applied to promote fast healing.' }
          ],
          costEstimate: 'Periodontal therapy is routinely covered by major dental insurances as a medical necessity.',
          faq: [
            { q: 'What is the difference between a cleaning and deep scaling?', a: 'A standard cleaning polishes teeth above the gumline, while deep scaling (root planing) removes hard deposits and bacteria from below the gumline to treat active gum disease.' },
            { q: 'Do swollen, bleeding gums recover fully?', a: 'Yes! Early-stage gum disease (gingivitis) is completely reversible with professional care and improved home hygiene.' }
          ]
        };

      case 'service-root-canal':
        return {
          title: 'Micro-Endodontic Root Canal Therapy',
          category: 'General Care',
          subtitle: 'Relieve Nerve Pain and Save Your Natural Tooth',
          intro: 'Root canals have historically had an undeserved reputation, but modern techniques make them highly comfortable, state-of-the-art procedures. When dental decay reaches the inner nerve chamber of a tooth, it can cause severe, lingering pain and infection. Our highly precise root canal therapy clears the infection, alleviates pain, and saves your natural tooth.',
          benefits: [
            'Provides immediate relief from severe, throbbing dental pain and sensitivity.',
            'Saves your natural tooth from needing to be extracted.',
            'Clears internal infection to prevent it from spreading to your jawbone.',
            'Completed quickly and comfortably under gentle, local anesthesia or sedation.'
          ],
          roadmap: [
            { step: '01', title: 'Comfort Block', desc: 'We administer local numbing to ensure you feel nothing during the treatment.' },
            { step: '02', title: 'Infection Access', desc: 'A micro-opening is created to access the infected nerve canal.' },
            { step: '03', title: 'Microscopic Cleanse', desc: 'We clean and sanitize the root canals, removing all bacteria.' },
            { step: '04', title: 'Hermetic Filling', desc: 'The canals are sealed with bio-compatible materials to prevent re-infection.' }
          ],
          costEstimate: 'Highly covered by major dental PPO insurance plans. We provide fast, upfront cost breakdowns.',
          faq: [
            { q: 'Does a root canal hurt?', a: 'Not at all. With modern local anesthesia and sedation, a root canal is as comfortable as receiving a standard dental filling.' },
            { q: 'Will the tooth need a crown after a root canal?', a: 'Yes. Since the tooth\'s blood supply is removed, a crown is highly recommended to protect and strengthen the tooth.' }
          ]
        };

      case 'service-extractions':
        return {
          title: 'Gentle Tooth Extractions',
          category: 'General Care',
          subtitle: 'Minimally Invasive Care with Immediate Restorative Pre-Planning',
          intro: 'While we prioritize saving your natural teeth, there are times when severe decay, fracture, or wisdom tooth impaction makes extraction necessary. We use gentle, minimally invasive techniques to extract teeth comfortably, preserving the surrounding bone structure to accommodate future dental implants.',
          benefits: [
            'Relieves chronic pain and irritation from severely decayed or damaged teeth.',
            'Safe, expert management of wisdom teeth to prevent crowding or decay.',
            'Preserves surrounding jawbone structure to support successful future implants.',
            'Performed comfortably under gentle sedation options.'
          ],
          roadmap: [
            { step: '01', title: 'Focused Scans', desc: 'We take digital scans of the roots to map the extraction path.' },
            { step: '02', title: 'Anesthesia & Warmth', desc: 'Local numbing or sedation is applied to keep you relaxed and comfortable.' },
            { step: '03', title: 'Atraumatic Lift', desc: 'The tooth is lifted gently while preserving the surrounding bone socket.' },
            { step: '04', title: 'Bone Graft Option', desc: 'A protective bone graft is applied to prepare the site for a future implant.' }
          ],
          costEstimate: 'Extremely affordable general treatments. Routinely covered up to 80% by standard PPO plans.',
          faq: [
            { q: 'What is the recovery time after a tooth extraction?', a: 'Most patients recover fully within 3 to 5 days by following our simple, post-care instructions.' },
            { q: 'What is a bone graft and is it necessary?', a: 'A bone graft fills the empty tooth socket with bio-compatible bone material, preserving jaw density and establishing a strong foundation for a future implant.' }
          ]
        };

      case 'service-gbt':
        return {
          title: 'Guided Biofilm Therapy (GBT)',
          category: 'Advanced Tech',
          subtitle: 'The State-of-the-Art, Clean Cleaning Experience Using Airflow® Technology',
          intro: 'Experience the ultimate advancement in dental hygiene. Guided Biofilm Therapy (GBT) is a modern, systematic, and premium dental cleaning method that utilizes Swiss Airflow® technology. It delivers a lukewarm water spray, air, and fine erythritol powder to remove harmful biofilm, plaque, and early calculus painlessly from teeth, implants, and orthodontic brackets without metal scraping.',
          benefits: [
            'Virtually painless, eliminating the scraping sounds of metal hygiene scaling tools.',
            'Lukewarm water spray prevents discomfort for patients with sensitive teeth.',
            'Piles of soft biofilm are highlighted beforehand, guiding precision removal.',
            'Safe for implants, dental veneers, crowns, and orthodontic brackets.'
          ],
          roadmap: [
            { step: '01', title: 'Biofilm Disclosure', desc: 'An organic disclosing liquid temporary stains dental plaque to make it visible.' },
            { step: '02', title: 'Airflow® Cleanse', desc: 'Our Swiss-made wand delivers a warm, gentle spray of water and fine powder.' },
            { step: '03', title: 'Piezon® Scaling', desc: 'An intelligent ultra-soft tip removes remaining hard calculus with ease.' },
            { step: '04', title: 'Enamel Protection', desc: 'A protective fluoride finish is applied to strengthen clean enamel.' }
          ],
          costEstimate: 'Often fully covered as a preventive diagnostic cleaning by elite dental PPO insurances.',
          faq: [
            { q: 'Why is GBT better than traditional scraping cleanings?', a: 'Traditional cleanings use cold water and metal scrapers, which can cause sensitivity. GBT uses warm water, air, and a fine powder to clean comfortably and effectively.' },
            { q: 'How often should I receive GBT sessions?', a: 'We recommend GBT sessions every 6 months to maintain healthy gums and keep your smile bright.' }
          ]
        };

      default:
        return {
          title: 'Premium Dental Treatment',
          category: 'General Care',
          subtitle: 'High-End Clinical Dentistry at FLOSS Dental Magnolia',
          intro: 'Experience the evolution of wellness-centric dentistry here in Magnolia. TX. We marry clinical mastery and same-day dental computer sciences to elevate your smile aesthetic in total serenity.',
          benefits: [
            'Highly personalized treatment plan matching your unique features.',
            'Certified clinical operators with years of post-doctorate surgical experience.',
            'Complimentary access to guest amenities, memory seating, and calming beverages.'
          ],
          roadmap: [
            { step: '01', title: 'Bespoke Scan', desc: 'High-definition digital diagnosis logs your unique teeth structure.' },
            { step: '02', title: 'Design Review', desc: 'We explain the ideal treatment options for your care.' },
            { step: '03', title: 'Care & Comfort', desc: 'The procedure is performed comfortably under customized anesthesia.' },
            { step: '04', title: 'Smile Complete', desc: 'Walk out with restored physical health and outstanding confidence.' }
          ],
          costEstimate: 'Priced competitively with transparent itemization. We coordinate with major PPO insurance providers.',
          faq: [
            { q: 'How can I schedule my consultation?', a: 'Click the booking buttons on this page or call our dedicated concierge desk directly at (936) 703-6173.' }
          ]
        };
    }
  };

  const data = getServiceData();

  return (
    <div className="bg-luxury-neutral min-h-screen pt-28 pb-20 relative overflow-hidden">
      {/* Background Decorative Blurs */}
      <div className="absolute top-10 left-5 w-80 h-80 bg-luxury-teal/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-20 right-5 w-80 h-80 bg-luxury-gold/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* Back Button */}
        <button
          onClick={onBack}
          className="inline-flex items-center gap-1.5 text-xs text-luxury-navy/60 hover:text-luxury-teal font-sans font-bold uppercase tracking-wider mb-8 transition-colors group"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          <span>Back to Home</span>
        </button>

        {/* Hero Header Area */}
        <div className="space-y-4 border-b border-gray-150 pb-8">
          <span className="font-sans text-xs font-bold tracking-[0.25em] text-luxury-teal uppercase">
            {data.category}
          </span>
          <h1 className="font-display text-3xl md:text-5xl font-extrabold text-luxury-navy tracking-tight">
            {data.title}
          </h1>
          <p className="font-serif italic text-lg text-luxury-gold-dark font-normal">
            {data.subtitle}
          </p>
        </div>

        {/* Intro Column */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 py-10 border-b border-gray-150">
          <div className="md:col-span-7 space-y-4">
            <h3 className="font-display text-xs uppercase tracking-widest text-luxury-navy font-bold">Treatment Overview</h3>
            <p className="font-sans text-xs text-gray-600 font-medium leading-relaxed">
              {data.intro}
            </p>
          </div>
          <div className="md:col-span-5 bg-white border border-gray-100 rounded-2xl p-6 shadow-sm flex flex-col justify-between">
            <div className="space-y-3">
              <span className="text-[10px] uppercase font-bold tracking-widest text-luxury-gold-dark block">Estimated Investment</span>
              <p className="font-sans text-xs text-luxury-navy font-extrabold leading-normal">
                {data.costEstimate}
              </p>
              <p className="text-[10px] text-gray-400 font-sans leading-relaxed">
                *We coordinate PPO insurance claims to help maximize your benefits. Contact our office to verify your dental plan today.
              </p>
            </div>
            <button
              onClick={onBookClick}
              className="mt-6 w-full py-2.5 bg-luxury-teal hover:bg-luxury-navy text-white text-xs font-display font-semibold uppercase tracking-wider rounded-xl transition-all shadow-md"
            >
              Verify My Insurance & Book
            </button>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="py-10 border-b border-gray-150 space-y-6">
          <h3 className="font-display text-xs uppercase tracking-widest text-luxury-navy font-bold flex items-center gap-2">
            <Sparkles size={14} className="text-luxury-gold" />
            Key Clinical Benefits & Advantages
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {data.benefits.map((benefit, idx) => (
              <div key={idx} className="flex gap-3 p-4 bg-white/70 border border-gray-100 rounded-2xl">
                <CheckCircle size={16} className="text-luxury-teal shrink-0 mt-0.5" />
                <p className="font-sans text-xs text-gray-600 font-medium leading-relaxed">
                  {benefit}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Roadmap Steps */}
        <div className="py-10 border-b border-gray-150 space-y-6">
          <h3 className="font-display text-xs uppercase tracking-widest text-luxury-navy font-bold">
            The Treatment Roadmap: What to Expect
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {data.roadmap.map((step, idx) => (
              <div key={idx} className="p-5 bg-white border border-gray-100 rounded-2xl space-y-2 relative overflow-hidden">
                <span className="font-display text-2xl font-black text-luxury-gold/20 absolute right-4 top-2 select-none">
                  {step.step}
                </span>
                <p className="font-display font-bold text-xs text-luxury-navy pr-6">{step.title}</p>
                <p className="font-sans text-[10px] text-gray-500 font-medium leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Treatment FAQs */}
        <div className="py-10 space-y-6">
          <h3 className="font-display text-xs uppercase tracking-widest text-luxury-navy font-bold flex items-center gap-1.5">
            <HelpCircle size={14} className="text-luxury-teal" />
            Frequently Asked Questions
          </h3>
          <div className="space-y-4">
            {data.faq.map((item, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-white border border-gray-100 space-y-2">
                <p className="font-sans font-bold text-xs text-luxury-navy flex items-start gap-1.5">
                  <span className="text-luxury-gold font-bold">Q:</span>
                  <span>{item.q}</span>
                </p>
                <p className="font-sans text-xs text-gray-500 font-medium leading-relaxed pl-5">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Footer CTA Card */}
        <div className="p-8 rounded-3xl bg-luxury-navy text-white text-center space-y-4 mt-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(13,148,136,0.15),transparent_70%)] pointer-events-none" />
          <p className="font-sans text-[10px] font-bold uppercase tracking-widest text-luxury-gold">Exceptional, Stress-Free Journeys</p>
          <h2 className="font-display text-xl md:text-2xl font-bold tracking-tight">Ready for Your Clinical Transformation?</h2>
          <p className="font-sans text-xs text-gray-300 max-w-md mx-auto">
            Schedule a prioritized session with our Magnolia experts today. Our clinical coordinators are on standby.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={onBookClick}
              className="px-6 py-2.5 bg-luxury-teal hover:bg-white text-white hover:text-luxury-navy text-xs font-display font-semibold uppercase tracking-wider rounded-full transition-colors"
            >
              Book Consultation Online
            </button>
            <a
              href="tel:9367036173"
              className="px-6 py-2.5 border border-white/20 hover:border-white text-white text-xs font-sans font-bold uppercase tracking-wider rounded-full transition-colors flex items-center justify-center gap-1.5"
            >
              <span>Call (936) 703-6173</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}

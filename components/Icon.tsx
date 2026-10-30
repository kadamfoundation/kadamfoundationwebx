import type { CSSProperties } from 'react';
import {
  ArrowLeft, ArrowLeftRight, ArrowRight, ArrowUpRight, Award, BadgeCheck, Banknote,
  BookOpen, BookOpenText, Brain, Building, Building2, CalendarCheck, CalendarDays,
  Camera, Check, ChevronDown, ChevronLeft, ChevronRight, CircleCheck, CircleHelp,
  CirclePlay, CircleX, ClipboardList, ClipboardPen, Clock, Copy, ExternalLink,
  Facebook, FileText, Flower2, Footprints, Gavel, Globe2, GraduationCap, Hand, HandHeart,
  Handshake, Headset, Heart, Hourglass, Image, Info, Landmark, Leaf, ListChecks,
  Linkedin, ListFilter, Lock, Mail, MapPin, Megaphone, Menu, MessageCircle, MessagesSquare,
  Mic, Network, PawPrint, Phone, PhoneForwarded, Plus, Puzzle, Quote, ReceiptText,
  Scale, Search, Send, Settings, Shapes, Shield, ShieldCheck, Share2, Smartphone,
  Sparkles, Sunrise, Terminal, Timer, TrainFront, Trash2, Trees, UserRoundPlus,
  Users, UsersRound, Video, X, Youtube, Zap, type LucideIcon,
} from 'lucide-react';
import { cn } from '@/lib/utils';

const ICONS = {
  account_balance: Landmark, account_tree: Network, add: Plus, app_registration: ClipboardPen,
  arrow_back: ArrowLeft, arrow_forward: ArrowRight, arrow_outward: ArrowUpRight,
  assignment: ClipboardList, auto_stories: BookOpenText, badge: BadgeCheck, balance: Scale,
  bolt: Zap, calendar_month: CalendarDays, calendar_today: CalendarDays, call: Phone,
  campaign: Megaphone, cancel: CircleX, chat: MessageCircle, check: Check,
  check_circle: CircleCheck, chevron_left: ChevronLeft, chevron_right: ChevronRight,
  close: X, co_present: UsersRound, content_copy: Copy, corporate_fare: Building2,
  delete: Trash2, description: FileText, directions_subway: TrainFront, diversity_1: UsersRound,
  diversity_3: UsersRound, domain: Building, east: ArrowRight, eco: Leaf,
  event_note: CalendarCheck, expand_more: ChevronDown, extension: Puzzle, facebook: Facebook, favorite: Heart,
  favorite_border: Heart, filter_alt: ListFilter, footprint: Footprints, format_quote: Quote,
  forum: MessagesSquare, front_hand: Hand, gavel: Gavel, group_add: UserRoundPlus,
  groups: Users, handshake: Handshake, help_outline: CircleHelp, hourglass_top: Hourglass,
  hub: Network, image: Image, info: Info, interests: Shapes, linkedin: Linkedin, location_on: MapPin, lock: Lock,
  mail: Mail, menu: Menu, menu_book: BookOpen, mic: Mic, military_tech: Award,
  nature_people: Trees, nest_eco_leaf: Leaf, north_east: ArrowUpRight, open_in_new: ExternalLink,
  payments: Banknote, person_raised_hand: Hand, pets: PawPrint, phone_forwarded: PhoneForwarded,
  photo_camera: Camera, pin_drop: MapPin, play_circle: CirclePlay, policy: ShieldCheck,
  psychology: Brain, public: Globe2, receipt_long: ReceiptText, schedule: Clock,
  school: GraduationCap, search: Search, security: ShieldCheck, self_improvement: Flower2,
  send: Send, settings: Settings, share: Share2, shield: Shield, smartphone: Smartphone,
  spa: Flower2, stars: Sparkles, summarize: ListChecks, support_agent: Headset,
  swap_horiz: ArrowLeftRight, terminal: Terminal, timer: Timer, verified: BadgeCheck,
  verified_user: ShieldCheck, videocam: Video, volunteer_activism: HandHeart,
  wb_twilight: Sunrise, whatsapp: MessageCircle, workspace_premium: Award, x: X, youtube: Youtube,
} satisfies Record<string, LucideIcon>;

export type IconName = keyof typeof ICONS;

export default function Icon({
  name,
  className,
  filled = false,
  style,
}: {
  name: IconName;
  className?: string;
  filled?: boolean;
  style?: CSSProperties;
}) {
  const IconComponent = ICONS[name];
  return (
    <IconComponent
      aria-hidden="true"
      className={cn('inline-block h-[1em] w-[1em] shrink-0 align-[-0.125em]', className)}
      fill={filled || name === 'favorite' ? 'currentColor' : 'none'}
      strokeWidth={1.8}
      style={style}
    />
  );
}

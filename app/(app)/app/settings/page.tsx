"use client";

import { useState } from "react";
import {
  Bell,
  Building2,
  Check,
  ChevronRight,
  CreditCard,
  FileText,
  Globe2,
  Lock,
  LogOut,
  Receipt,
  Save,
  ShieldCheck,
  UserRound,
} from "lucide-react";

type Section =
  | "Business"
  | "Profile"
  | "Billing"
  | "Invoicing"
  | "Notifications"
  | "Security";

const sections: {
  label: Section;
  description: string;
  icon: typeof Building2;
}[] = [
  {
    label: "Business",
    description: "Business details and tax information",
    icon: Building2,
  },
  {
    label: "Profile",
    description: "Your account information",
    icon: UserRound,
  },
  {
    label: "Billing",
    description: "Plan and subscription",
    icon: CreditCard,
  },
  {
    label: "Invoicing",
    description: "Invoice and payment defaults",
    icon: Receipt,
  },
  {
    label: "Notifications",
    description: "Choose what QuantPay sends you",
    icon: Bell,
  },
  {
    label: "Security",
    description: "Password and account security",
    icon: ShieldCheck,
  },
];

export default function SettingsPage() {
  const [activeSection, setActiveSection] =
    useState<Section>("Business");

  const [saved, setSaved] = useState(false);

  function handleSave() {
    setSaved(true);

    setTimeout(() => {
      setSaved(false);
    }, 2200);
  }

  return (
    <div className="mx-auto max-w-6xl px-5 py-8 sm:px-7 lg:py-10">
      {/* =====================================================
          HEADER
      ===================================================== */}

      <div>
        <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#16C784]">
          Settings
        </p>

        <h1 className="mt-2 text-3xl font-semibold tracking-[-0.045em] text-slate-950 sm:text-4xl">
          Configure your workspace.
        </h1>

        <p className="mt-2 text-sm text-slate-500">
          Manage your business, account and QuantPay preferences.
        </p>
      </div>

      {/* =====================================================
          SETTINGS LAYOUT
      ===================================================== */}

      <div className="mt-8 grid gap-6 lg:grid-cols-[240px_1fr]">
        {/* ===================================================
            SIDEBAR
        =================================================== */}

        <aside className="h-fit rounded-2xl border border-slate-200 bg-white p-2">
          <div className="px-3 py-3">
            <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-slate-400">
              Workspace settings
            </p>
          </div>

          <nav className="space-y-0.5">
            {sections.map((section) => {
              const Icon = section.icon;
              const active = activeSection === section.label;

              return (
                <button
                  key={section.label}
                  onClick={() =>
                    setActiveSection(section.label)
                  }
                  className={`group flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left transition ${
                    active
                      ? "bg-slate-950 text-white"
                      : "text-slate-500 hover:bg-slate-50 hover:text-slate-950"
                  }`}
                >
                  <Icon
                    className={`h-4 w-4 shrink-0 ${
                      active
                        ? "text-[#16C784]"
                        : "text-slate-400 group-hover:text-slate-600"
                    }`}
                  />

                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-semibold">
                      {section.label}
                    </p>

                    <p
                      className={`mt-0.5 truncate text-[9px] ${
                        active
                          ? "text-white/40"
                          : "text-slate-400"
                      }`}
                    >
                      {section.description}
                    </p>
                  </div>

                  <ChevronRight
                    className={`h-3.5 w-3.5 ${
                      active
                        ? "text-white/40"
                        : "text-slate-300"
                    }`}
                  />
                </button>
              );
            })}
          </nav>

          <div className="my-2 border-t border-slate-100" />

          <button className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-slate-500 transition hover:bg-red-50 hover:text-red-600">
            <LogOut className="h-4 w-4" />

            <div>
              <p className="text-xs font-semibold">
                Sign out
              </p>

              <p className="mt-0.5 text-[9px] text-slate-400">
                Leave this account
              </p>
            </div>
          </button>
        </aside>

        {/* ===================================================
            CONTENT
        =================================================== */}

        <main className="min-w-0">
          {activeSection === "Business" && (
            <BusinessSettings
              onSave={handleSave}
              saved={saved}
            />
          )}

          {activeSection === "Profile" && (
            <ProfileSettings
              onSave={handleSave}
              saved={saved}
            />
          )}

          {activeSection === "Billing" && (
            <BillingSettings />
          )}

          {activeSection === "Invoicing" && (
            <InvoicingSettings
              onSave={handleSave}
              saved={saved}
            />
          )}

          {activeSection === "Notifications" && (
            <NotificationSettings />
          )}

          {activeSection === "Security" && (
            <SecuritySettings />
          )}
        </main>
      </div>
    </div>
  );
}

/* ============================================================
   BUSINESS
============================================================ */

function BusinessSettings({
  onSave,
  saved,
}: {
  onSave: () => void;
  saved: boolean;
}) {
  return (
    <SettingsPanel
      icon={Building2}
      eyebrow="Business"
      title="Business information"
      description="These details appear across your QuantPay workspace and documents."
      action={
        <SaveButton
          onClick={onSave}
          saved={saved}
        />
      }
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <InputField
          label="Business name"
          value="Avyay Enterprises"
        />

        <InputField
          label="Business type"
          value="Wholesale & Distribution"
        />

        <InputField
          label="Phone"
          value="+91 98765 43210"
        />

        <InputField
          label="Email"
          value="accounts@avyayenterprises.in"
        />

        <InputField
          label="GSTIN"
          value="29ABCDE1234F1Z5"
        />

        <InputField
          label="State"
          value="Karnataka"
        />

        <div className="sm:col-span-2">
          <InputField
            label="Business address"
            value="Bengaluru, Karnataka, India"
          />
        </div>
      </div>
    </SettingsPanel>
  );
}

/* ============================================================
   PROFILE
============================================================ */

function ProfileSettings({
  onSave,
  saved,
}: {
  onSave: () => void;
  saved: boolean;
}) {
  return (
    <SettingsPanel
      icon={UserRound}
      eyebrow="Profile"
      title="Your profile"
      description="Manage the personal information associated with your QuantPay account."
      action={
        <SaveButton
          onClick={onSave}
          saved={saved}
        />
      }
    >
      <div className="flex items-center gap-4 border-b border-slate-100 pb-6">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-950 text-lg font-semibold text-white">
          V
        </div>

        <div>
          <p className="text-sm font-semibold text-slate-950">
            Vishal
          </p>

          <p className="mt-1 text-xs text-slate-400">
            Administrator
          </p>
        </div>
      </div>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <InputField
          label="Full name"
          value="Vishal"
        />

        <InputField
          label="Role"
          value="Administrator"
        />

        <InputField
          label="Email"
          value="vishal@example.com"
        />

        <InputField
          label="Phone"
          value="+91 98765 43210"
        />
      </div>
    </SettingsPanel>
  );
}

/* ============================================================
   BILLING
============================================================ */

function BillingSettings() {
  return (
    <SettingsPanel
      icon={CreditCard}
      eyebrow="Billing"
      title="Plan & subscription"
      description="Manage your QuantPay plan and subscription details."
    >
      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#16C784]">
              Current plan
            </p>

            <h3 className="mt-2 text-xl font-semibold text-slate-950">
              QuantPay Business
            </h3>

            <p className="mt-1 text-xs text-slate-400">
              Built for growing businesses.
            </p>
          </div>

          <span className="inline-flex w-fit rounded-full bg-[#16C784]/10 px-3 py-1.5 text-[10px] font-semibold text-[#16C784]">
            Active
          </span>
        </div>
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-3">
        <MiniStat
          label="Users"
          value="1 / 5"
        />

        <MiniStat
          label="Invoices"
          value="248"
        />

        <MiniStat
          label="Storage"
          value="2.4 GB"
        />
      </div>

      <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
        <div>
          <p className="text-xs font-semibold text-slate-900">
            Need a different plan?
          </p>

          <p className="mt-1 text-[10px] text-slate-400">
            Upgrade as your business grows.
          </p>
        </div>

        <button className="rounded-lg border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-700 transition hover:border-slate-300 hover:text-slate-950">
          View plans
        </button>
      </div>
    </SettingsPanel>
  );
}

/* ============================================================
   INVOICING
============================================================ */

function InvoicingSettings({
  onSave,
  saved,
}: {
  onSave: () => void;
  saved: boolean;
}) {
  return (
    <SettingsPanel
      icon={Receipt}
      eyebrow="Invoicing"
      title="Invoice preferences"
      description="Control how QuantPay creates and presents your invoices."
      action={
        <SaveButton
          onClick={onSave}
          saved={saved}
        />
      }
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <InputField
          label="Invoice prefix"
          value="INV"
        />

        <InputField
          label="Next invoice number"
          value="00483"
        />

        <SelectField
          label="Currency"
          value="Indian Rupee (INR)"
        />

        <SelectField
          label="Tax configuration"
          value="GST"
        />
      </div>

      <div className="mt-6 border-t border-slate-100 pt-6">
        <p className="text-xs font-semibold text-slate-900">
          Defaults
        </p>

        <div className="mt-4 space-y-3">
          <ToggleRow
            label="Show GST details on invoices"
            description="Display applicable tax information."
            enabled
          />

          <ToggleRow
            label="Show business address"
            description="Include your registered address."
            enabled
          />

          <ToggleRow
            label="Show payment instructions"
            description="Display payment information on invoices."
            enabled
          />
        </div>
      </div>
    </SettingsPanel>
  );
}

/* ============================================================
   NOTIFICATIONS
============================================================ */

function NotificationSettings() {
  return (
    <SettingsPanel
      icon={Bell}
      eyebrow="Notifications"
      title="Notification preferences"
      description="Choose which business events should reach you."
    >
      <div className="space-y-3">
        <ToggleRow
          label="Payment received"
          description="Get notified when a customer payment is recorded."
          enabled
        />

        <ToggleRow
          label="Invoice overdue"
          description="Get notified when an invoice remains unpaid."
          enabled
        />

        <ToggleRow
          label="Low inventory"
          description="Get notified when stock reaches its reorder level."
          enabled
        />

        <ToggleRow
          label="Daily business summary"
          description="Receive a summary of your business activity."
          enabled={false}
        />
      </div>
    </SettingsPanel>
  );
}

/* ============================================================
   SECURITY
============================================================ */

function SecuritySettings() {
  return (
    <SettingsPanel
      icon={ShieldCheck}
      eyebrow="Security"
      title="Account security"
      description="Protect access to your QuantPay workspace."
    >
      <div className="space-y-3">
        <SecurityRow
          icon={Lock}
          title="Password"
          description="Last changed recently"
          action="Change"
        />

        <SecurityRow
          icon={ShieldCheck}
          title="Two-factor authentication"
          description="Add another layer of protection"
          action="Enable"
        />

        <SecurityRow
          icon={Globe2}
          title="Active sessions"
          description="Manage devices signed into your account"
          action="View"
        />
      </div>

      <div className="mt-6 rounded-2xl border border-amber-100 bg-amber-50 p-4">
        <p className="text-xs font-semibold text-amber-800">
          Security reminder
        </p>

        <p className="mt-1 text-[10px] leading-5 text-amber-700/70">
          Never share your password or authentication codes with
          anyone.
        </p>
      </div>
    </SettingsPanel>
  );
}

/* ============================================================
   SHARED COMPONENTS
============================================================ */

function SettingsPanel({
  icon: Icon,
  eyebrow,
  title,
  description,
  action,
  children,
}: {
  icon: typeof Building2;
  eyebrow: string;
  title: string;
  description: string;
  action?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
      <div className="flex flex-col gap-4 border-b border-slate-100 px-5 py-5 sm:px-6 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-50">
            <Icon className="h-4 w-4 text-slate-500" />
          </div>

          <div>
            <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#16C784]">
              {eyebrow}
            </p>

            <h2 className="mt-1 text-lg font-semibold tracking-tight text-slate-950">
              {title}
            </h2>

            <p className="mt-1 max-w-xl text-xs leading-5 text-slate-400">
              {description}
            </p>
          </div>
        </div>

        {action}
      </div>

      <div className="p-5 sm:p-6">
        {children}
      </div>
    </section>
  );
}

function InputField({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <label className="block">
      <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-400">
        {label}
      </span>

      <input
        defaultValue={value}
        className="mt-2 h-10 w-full rounded-lg border border-slate-200 bg-white px-3 text-xs font-medium text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#16C784] focus:ring-2 focus:ring-[#16C784]/10"
      />
    </label>
  );
}

function SelectField({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <label className="block">
      <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-400">
        {label}
      </span>

      <select
        defaultValue={value}
        className="mt-2 h-10 w-full rounded-lg border border-slate-200 bg-white px-3 text-xs font-medium text-slate-900 outline-none focus:border-[#16C784]"
      >
        <option>{value}</option>
        <option>Other</option>
      </select>
    </label>
  );
}

function ToggleRow({
  label,
  description,
  enabled,
}: {
  label: string;
  description: string;
  enabled: boolean;
}) {
  const [active, setActive] = useState(enabled);

  return (
    <div className="flex items-center justify-between gap-4 rounded-xl border border-slate-100 p-4">
      <div className="min-w-0">
        <p className="text-xs font-semibold text-slate-900">
          {label}
        </p>

        <p className="mt-1 text-[10px] leading-5 text-slate-400">
          {description}
        </p>
      </div>

      <button
        type="button"
        onClick={() => setActive(!active)}
        aria-pressed={active}
        className={`relative h-5 w-9 shrink-0 rounded-full transition ${
          active ? "bg-[#16C784]" : "bg-slate-200"
        }`}
      >
        <span
          className={`absolute top-0.5 h-4 w-4 rounded-full bg-white shadow-sm transition ${
            active ? "left-[18px]" : "left-0.5"
          }`}
        />
      </button>
    </div>
  );
}

function SaveButton({
  onClick,
  saved,
}: {
  onClick: () => void;
  saved: boolean;
}) {
  return (
    <button
      onClick={onClick}
      className="inline-flex h-9 items-center justify-center gap-2 rounded-lg bg-slate-950 px-4 text-xs font-semibold text-white transition hover:bg-black"
    >
      {saved ? (
        <>
          <Check className="h-3.5 w-3.5 text-[#16C784]" />
          Saved
        </>
      ) : (
        <>
          <Save className="h-3.5 w-3.5" />
          Save changes
        </>
      )}
    </button>
  );
}

function MiniStat({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-xl border border-slate-100 bg-slate-50 p-4">
      <p className="text-[9px] uppercase tracking-[0.15em] text-slate-400">
        {label}
      </p>

      <p className="mt-2 text-sm font-semibold text-slate-900">
        {value}
      </p>
    </div>
  );
}

function SecurityRow({
  icon: Icon,
  title,
  description,
  action,
}: {
  icon: typeof Lock;
  title: string;
  description: string;
  action: string;
}) {
  return (
    <div className="flex items-center gap-4 rounded-xl border border-slate-100 p-4">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-50">
        <Icon className="h-4 w-4 text-slate-500" />
      </div>

      <div className="min-w-0 flex-1">
        <p className="text-xs font-semibold text-slate-900">
          {title}
        </p>

        <p className="mt-1 text-[10px] text-slate-400">
          {description}
        </p>
      </div>

      <button className="text-[10px] font-semibold text-slate-500 transition hover:text-[#16C784]">
        {action}
      </button>
    </div>
  );
}
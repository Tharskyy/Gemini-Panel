/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

declare namespace App {
  interface Locals {
    user?: {
      email: string;
      isAdmin: boolean;
    };
  }
}

interface ImportMetaEnv {
  readonly ADMIN_EMAIL: string;
  readonly ADMIN_PASSWORD: string;
  readonly JWT_SECRET: string;
  readonly SESSION_SECRET: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
} 
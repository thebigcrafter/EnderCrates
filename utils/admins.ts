export default function getAdmins(): string[] {
    return process.env.NEXT_PUBLIC_ADMINS!.split(";");
}
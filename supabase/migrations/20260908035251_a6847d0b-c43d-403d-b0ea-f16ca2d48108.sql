REVOKE ALL ON FUNCTION public.has_role(uuid, public.app_role) FROM PUBLIC, anon;
REVOKE ALL ON FUNCTION public.guru_saya() FROM PUBLIC, anon;
REVOKE ALL ON FUNCTION public.mapel_saya() FROM PUBLIC, anon;
REVOKE ALL ON FUNCTION public.siswa_saya() FROM PUBLIC, anon;
REVOKE ALL ON FUNCTION public.kelas_wali_saya() FROM PUBLIC, anon;
REVOKE ALL ON FUNCTION public.kelas_dari_siswa(uuid) FROM PUBLIC, anon;
REVOKE ALL ON FUNCTION public.info_saya() FROM PUBLIC, anon;
REVOKE ALL ON FUNCTION public.handle_new_user() FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.set_updated_at() FROM PUBLIC, anon, authenticated;

GRANT EXECUTE ON FUNCTION public.has_role(uuid, public.app_role) TO authenticated;
GRANT EXECUTE ON FUNCTION public.guru_saya() TO authenticated;
GRANT EXECUTE ON FUNCTION public.mapel_saya() TO authenticated;
GRANT EXECUTE ON FUNCTION public.siswa_saya() TO authenticated;
GRANT EXECUTE ON FUNCTION public.kelas_wali_saya() TO authenticated;
GRANT EXECUTE ON FUNCTION public.kelas_dari_siswa(uuid) TO authenticated;
GRANT EXECUTE ON FUNCTION public.info_saya() TO authenticated;
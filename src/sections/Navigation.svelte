<script>
	import DesktopNav from "../components/navigation/DesktopNav.svelte";
	import MobileNav from "../components/navigation/MobileNav.svelte";
	import IsMobile from "../store/isMobile";

	let isMobile = IsMobile(771);
</script>

{ #if $isMobile }
	<MobileNav />
{ :else }
	<DesktopNav />
{ /if}

<template>
    <div class="app_wrapper">
        <div class="header_wrapper">
            {{ header }}
        </div>
        <div class="text_wrapper">
            {{ text }}
        </div>
    </div>
</template>

<script>
export default {
    name: 'ColourConverter',
    props: {
        header: any,
        text: any
    }
}
</script>

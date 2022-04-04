<template>
    <div>
        <a class="dropdown-item" href="#">
            {{comment.user.name}} comentou {{ notification.comment.title }}
        </a>
    </div>
</template>

<script>
    export default {
        props: ['notification'],

        computed: {
            comment() {
                return this.notification.comment
            }
        }
    }
</script>
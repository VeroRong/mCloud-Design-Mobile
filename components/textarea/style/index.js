import { StyleSheet } from 'react-native'

export default (theme) => StyleSheet.create({
    container: {
        borderBottomWidth: theme.border_width_sm,
        borderBottomColor: theme.border_color_base,
        backgroundColor: theme.fill_base,
    },
    label: {
        fontSize: 14,
        color: theme.color_text_base,
        marginHorizontal: theme.h_spacing_lg,
        marginTop: theme.h_spacing_lg,
        marginBottom: theme.v_spacing_sm,
    },
    inputWrapper: {
        flex: 1,
        flexDirection: 'row',
    },
    input: {
        fontSize: theme.font_size_base,
        lineHeight: Math.round(1.3 * theme.font_size_base),
        textAlignVertical: 'top',
        color: theme.color_text_base,
        paddingRight: 0,
    },
    inputDisabled: {
        color: theme.color_text_disabled,
    },
    count: {
        position: 'absolute',
        right: theme.h_spacing_lg,
        bottom: theme.h_spacing_md,
        color: theme.color_text_info,
    },
    clear: {
        paddingTop: 13,
        paddingRight: 9,
    },
})
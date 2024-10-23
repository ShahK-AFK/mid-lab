import { StyleSheet } from "react-native";
export const s = StyleSheet.create({
    container: { flex: 1, padding: 16, backgroundColor: '#f7f6fc', flexGrow: 1  },
    surahItem: { marginBottom: 16, padding: 16, backgroundColor: '#e0c3fc', borderRadius: 8, elevation: 10 },
    surahTitle: { fontSize: 20, fontWeight: 'bold' },
    surahInfo: { fontSize: 14, color: '#555', marginVertical: 4 },
    ayahContainer: {   marginTop: 8, paddingLeft: 8, borderLeftWidth: 2, borderColor: '#6200EE' },
    ayah: { fontSize: 16, marginVertical: 4, lineHeight: 24 },
    headerCard: {
        backgroundColor: '#6200EE',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        borderBottomLeftRadius: 16,
        borderBottomRightRadius: 16,
      },
      quranImage: {
        marginTop: 30,
        width: 150,
        height: 80,
        resizeMode: 'contain',
        marginRight: 16,
      },
      headerText: {
        paddingTop:30,
        paddingLeft: 20,
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
      },
      backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
      },
});
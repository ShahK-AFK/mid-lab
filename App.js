import React, { useState } from 'react';
import { 
  View, 
  Text, 
  FlatList, 
  TouchableOpacity, 
  Image,
  ActivityIndicator,
  ImageBackground, 
  ScrollView
} from 'react-native';
import useFetch from './useFetch';  
import { s } from './app.style';

export default function App() {
  const { data: surahs, loading, error } = useFetch('https://api.alquran.cloud/v1/quran/en.asad', 'quranData');
  const [expandedSurah, setExpandedSurah] = useState(null); 

  if (loading) return <ActivityIndicator size="large" color="#6200EE" />;
  if (error) return <Text>Error: {error}</Text>;

  const toggleSurah = (surahNumber) => {
    setExpandedSurah(expandedSurah === surahNumber ? null : surahNumber); 
  };

  const renderAyahs = (ayahs) => (
    <View style={s.ayahContainer}>
      {ayahs.map((ayah) => (
        <Text key={ayah.numberInSurah} style={s.ayah}>
          {ayah.numberInSurah}. {ayah.text}
        </Text>
      ))}
    </View>
  );

  const renderSurah = ({ item }) => (
    <View style={s.surahItem}>
      <TouchableOpacity onPress={() => toggleSurah(item.number)}>
        <Text style={s.surahTitle}>
          {item.englishName} ({item.name})
        </Text>
        <Text style={s.surahInfo}>
          {item.englishNameTranslation} - {item.revelationType} - {item.ayahs.length} Verses
        </Text>
      </TouchableOpacity>
      {expandedSurah === item.number && renderAyahs(item.ayahs)}
    </View>
  );

  return (
    <ImageBackground
    source={{ uri: 'https://static.vecteezy.com/system/resources/previews/000/668/806/original/purple-gradient-background.jpg' }}
    style={s.backgroundImage}
  >

    <View style={{ flex: 1, backgroundColor: '#f3e8ff' }}>
   
    <View style={s.headerCard}>
      <Image 
        source={{ uri: 'https://static.vecteezy.com/system/resources/previews/000/364/614/original/flat-modern-holy-al-quran-vector-illustration.jpg' }} 
        style={s.quranImage} 
      />
      <Text style={s.headerText}>Quran App</Text>
    </View>
    

    
    <FlatList
      data={surahs}
      keyExtractor={(item) => item.number.toString()}
      renderItem={renderSurah}
      nestedScrollEnabled={true}
      contentContainerStyle={s.container} 
    />
    </View>
   </ImageBackground>
    
  );
}
